import { AffiliateLinkCardsSection } from "./AffiliateLinkCardsSection";
import { AffiliatePerformanceTable } from "./AffiliatePerformanceTable";
import { DashboardWelcomeHeader } from "./DashboardWelcomeHeader";
import { KPIs } from "./KPIs";
import { RecentReferralActivitySection } from "./RecentReferralActivitySection";
import { TopPerformingPayoutSection } from "./TopPerformingPayoutSection";

export type DashboardMainContentProps = {
  firstName: string;
};

export function DashboardMainContent({ firstName }: DashboardMainContentProps) {
  return (
    <section style={{ flex: 1, padding: 34 }}>
      <DashboardWelcomeHeader firstName={firstName} />

      <KPIs />

      <TopPerformingPayoutSection />

      <AffiliatePerformanceTable />

      <AffiliateLinkCardsSection />

      <RecentReferralActivitySection />
    </section>
  );
}
