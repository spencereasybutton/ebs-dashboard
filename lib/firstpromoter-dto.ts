/** Safe JSON shape for the affiliate dashboard (no raw FirstPromoter passthrough). */

export type FirstPromoterCampaignStatDto = {
  clicks_count?: number;
  referrals_count?: number;
  sales_count?: number;
  customers_count?: number;
  revenue_amount?: number;
};

export type FirstPromoterCampaignRowDto = {
  campaign: {
    id: string | number;
    name: string;
    color: string | null;
  };
  state: string | null;
  ref_token: string | null;
  ref_link: string | null;
  stats: FirstPromoterCampaignStatDto;
  rewards_for_promoters: unknown;
  rewards_for_referrals: unknown;
};

export type FirstPromoterPromoterDto = {
  id: string | number;
  email: string;
  name: string | null;
  cust_id: string | null;
  joined_at: string | null;
  /** Top-level stats object when API provides it */
  stats: Record<string, unknown> | null;
};

export type FirstPromoterAffiliateDto = {
  found: boolean;
  promoter: FirstPromoterPromoterDto | null;
  campaigns: FirstPromoterCampaignRowDto[];
};

export function emptyFirstPromoterAffiliateDto(): FirstPromoterAffiliateDto {
  return { found: false, promoter: null, campaigns: [] };
}
