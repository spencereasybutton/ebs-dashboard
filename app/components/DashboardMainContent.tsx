import type { FirstPromoterAffiliateDto } from "../../lib/firstpromoter-dto";
import { AffiliateFirstPromoterProvider } from "./AffiliateFirstPromoterContext";
import { AffiliateLinkCardsSection } from "./AffiliateLinkCardsSection";
import { AffiliatePerformanceTable } from "./AffiliatePerformanceTable";
import { DashboardWelcomeHeader } from "./DashboardWelcomeHeader";
import { KPIs } from "./KPIs";
import { RecentReferralActivitySection } from "./RecentReferralActivitySection";
import { TopPerformingPayoutSection } from "./TopPerformingPayoutSection";

export type DashboardMainContentProps = {
  firstName: string;
  initialAffiliateData: FirstPromoterAffiliateDto;
};

export function DashboardMainContent({
  firstName,
  initialAffiliateData,
}: DashboardMainContentProps) {
  console.log("-=-=--=-", initialAffiliateData);
  return (
    <AffiliateFirstPromoterProvider initialData={initialAffiliateData}>
      <section style={{ flex: 1, padding: 34 }}>
        <DashboardWelcomeHeader firstName={firstName} />

        <KPIs />

        <TopPerformingPayoutSection />

        <AffiliatePerformanceTable />

        <AffiliateLinkCardsSection />

        <RecentReferralActivitySection />
      </section>
    </AffiliateFirstPromoterProvider>
  );
}
