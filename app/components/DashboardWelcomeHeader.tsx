"use client";

import { useAffiliateFirstPromoter } from "./AffiliateFirstPromoterContext";

export type DashboardWelcomeHeaderProps = {
  firstName: string;
};

export function DashboardWelcomeHeader({
  firstName,
}: DashboardWelcomeHeaderProps) {
  const { data, isRefetching } = useAffiliateFirstPromoter();

  return (
    <header
      data-dashboard-section="welcome-header"
      data-fp-found={data.found ? "true" : "false"}
      data-fp-refetching={isRefetching ? "true" : "false"}
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 20,
        alignItems: "flex-start",
        marginBottom: 26,
      }}
    >
      <div>
        <p
          style={{
            color: "#f87171",
            textTransform: "uppercase",
            fontSize: 12,
            letterSpacing: 1.2,
            fontWeight: 900,
            margin: 0,
          }}
        >
          FirstPromoter Affiliate Intelligence
        </p>
        <h1
          style={{
            fontSize: 44,
            lineHeight: 1.05,
            margin: "8px 0",
            letterSpacing: -1.2,
          }}
        >
          Welcome back, {firstName}
        </h1>
        <p style={{ color: "#cbd5e1", margin: 0, maxWidth: 760 }}>
          Track performance by affiliate link, product, funnel, campaign,
          commission status, and payout readiness.
        </p>
      </div>
    </header>
  );
}
