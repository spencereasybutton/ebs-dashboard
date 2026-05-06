import {
  emptyFirstPromoterAffiliateDto,
  type FirstPromoterAffiliateDto,
  type FirstPromoterCampaignRowDto,
  type FirstPromoterPromoterDto,
} from "./firstpromoter-dto";

const FP_ORIGIN = "https://api.firstpromoter.com/api/v2";
const DEFAULT_TIMEOUT_MS = 12_000;

function num(v: unknown): number | undefined {
  if (typeof v === "number" && !Number.isNaN(v)) return v;
  if (typeof v === "string" && v.trim() !== "" && !Number.isNaN(Number(v)))
    return Number(v);
  return undefined;
}

function mapCampaignRow(raw: unknown): FirstPromoterCampaignRowDto | null {
  if (!raw || typeof raw !== "object") return null;
  const row = raw as Record<string, unknown>;
  const campaign =
    row.campaign && typeof row.campaign === "object"
      ? (row.campaign as Record<string, unknown>)
      : {};
  const stats =
    row.stats && typeof row.stats === "object"
      ? (row.stats as Record<string, unknown>)
      : {};

  return {
    campaign: {
      id: (campaign.id ?? "") as string | number,
      name: String(campaign.name ?? ""),
      color: campaign.color != null ? String(campaign.color) : null,
    },
    state: row.state != null ? String(row.state) : null,
    ref_token: row.ref_token != null ? String(row.ref_token) : null,
    ref_link: row.ref_link != null ? String(row.ref_link) : null,
    stats: {
      clicks_count: num(stats.clicks_count),
      referrals_count: num(stats.referrals_count),
      sales_count: num(stats.sales_count),
      customers_count: num(stats.customers_count),
      revenue_amount: num(stats.revenue_amount),
    },
    rewards_for_promoters: row.rewards_for_promoters ?? null,
    rewards_for_referrals: row.rewards_for_referrals ?? null,
  };
}

function mapPromoter(
  raw: Record<string, unknown>,
  fallbackEmail: string,
): FirstPromoterPromoterDto {
  const first = raw.first_name != null ? String(raw.first_name) : "";
  const last = raw.last_name != null ? String(raw.last_name) : "";
  const combined = [first, last].filter(Boolean).join(" ").trim();
  const name =
    combined ||
    (raw.name != null ? String(raw.name) : null) ||
    (raw.display_name != null ? String(raw.display_name) : null);

  const topStats =
    raw.stats && typeof raw.stats === "object"
      ? (raw.stats as Record<string, unknown>)
      : null;

  return {
    id: (raw.id ?? "") as string | number,
    email: String(raw.email ?? fallbackEmail),
    name,
    cust_id: raw.cust_id != null ? String(raw.cust_id) : null,
    joined_at:
      raw.joined_at != null
        ? String(raw.joined_at)
        : raw.joinedAt != null
          ? String(raw.joinedAt)
          : raw.created_at != null
            ? String(raw.created_at)
            : raw.createdAt != null
              ? String(raw.createdAt)
              : null,
    stats: topStats,
  };
}

function unwrapRecord(raw: unknown): Record<string, unknown> {
  if (!raw || typeof raw !== "object") return {};
  const o = raw as Record<string, unknown>;
  const inner = o.data;
  if (inner && typeof inner === "object" && !Array.isArray(inner)) {
    return inner as Record<string, unknown>;
  }
  return o;
}

function mapResponseToDto(
  raw: unknown,
  requestEmail: string,
): FirstPromoterAffiliateDto {
  if (!raw || typeof raw !== "object") return emptyFirstPromoterAffiliateDto();

  const r = unwrapRecord(raw);
  const campaignsRaw = r.promoter_campaigns;
  const campaigns: FirstPromoterCampaignRowDto[] = Array.isArray(campaignsRaw)
    ? campaignsRaw
        .map(mapCampaignRow)
        .filter((x): x is FirstPromoterCampaignRowDto => x != null)
    : [];

  const promoter = mapPromoter(r, requestEmail);

  const hasId = promoter.id !== "" && promoter.id != null;
  if (!hasId && campaigns.length === 0) {
    return emptyFirstPromoterAffiliateDto();
  }

  return {
    found: true,
    promoter: hasId ? promoter : null,
    campaigns,
  };
}

/**
 * GET /company/promoters/{encoded_email}?find_by=email
 * Uses server env only. 404 → empty DTO (no throw).
 */
export async function getCompanyPromoterByEmail(
  email: string,
  options?: { timeoutMs?: number },
): Promise<FirstPromoterAffiliateDto> {
  const apiKey = process.env.FIRSTPROMOTER_API_KEY;
  const accountId = process.env.FIRSTPROMOTER_ACCOUNT_ID;
  if (!apiKey?.trim() || !accountId?.trim()) {
    return emptyFirstPromoterAffiliateDto();
  }

  const safeKey = apiKey.trim();
  const safeAccount = accountId.trim();

  const path = `company/promoters/${encodeURIComponent(email)}?find_by=email`;
  const url = `${FP_ORIGIN}/${path}`;

  const timeoutMs = options?.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, {
      method: "GET",
      signal: controller.signal,
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${safeKey}`,
        // FirstPromoter v2 expects this exact header name (matches working curl).
        "Account-ID": safeAccount,
        Accept: "application/json",
      },
    });

    if (res.status === 404) {
      return emptyFirstPromoterAffiliateDto();
    }

    if (!res.ok) {
      return emptyFirstPromoterAffiliateDto();
    }

    const json: unknown = await res.json().catch(() => null);
    return mapResponseToDto(json, email);
  } catch {
    return emptyFirstPromoterAffiliateDto();
  } finally {
    clearTimeout(t);
  }
}
