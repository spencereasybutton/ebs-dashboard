"use client";

import { useAffiliateFirstPromoter } from "./AffiliateFirstPromoterContext";
import { AffiliateLinkCard } from "./AffiliateLinkCard";
import type { AffiliateLinkCardData } from "./AffiliateLinkCard";

/** Replace with API-driven links inside this component later. */
const DUMMY_AFFILIATE_LINKS: AffiliateLinkCardData[] = [
  {
    name: "Skip Tracing - Main Offer",
    code: "FP-SKIP-MAIN",
    link: "https://easybuttonsoftware.com/?ref=FP-SKIP-MAIN",
    clicks: 1248,
    customers: 74,
    revenue: 8420.25,
    commission: 2526.08,
  },
  {
    name: "CRM - Prelaunch",
    code: "FP-CRM-LAUNCH",
    link: "https://easybuttonsoftware.com/crm?ref=FP-CRM-LAUNCH",
    clicks: 732,
    customers: 31,
    revenue: 4010.3,
    commission: 1203.09,
  },
  {
    name: "Investor Campaign",
    code: "FP-INVESTORS",
    link: "https://easybuttonsoftware.com/investors?ref=FP-INVESTORS",
    clicks: 419,
    customers: 18,
    revenue: 2250,
    commission: 675,
  },
];

export function AffiliateLinkCardsSection() {
  const { data, isRefetching } = useAffiliateFirstPromoter();

  return (
    <section
      data-dashboard-section="affiliate-link-cards"
      data-fp-found={data.found ? "true" : "false"}
      data-fp-campaigns={String(data.campaigns.length)}
      data-fp-refetching={isRefetching ? "true" : "false"}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 18,
      }}
    >
      {DUMMY_AFFILIATE_LINKS.map((link) => (
        <AffiliateLinkCard key={link.code} link={link} />
      ))}
    </section>
  );
}
