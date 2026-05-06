"use client";

import { useAffiliateFirstPromoter } from "./AffiliateFirstPromoterContext";

export type ReferralActivityItem = {
  event: string;
  source: string;
  value: string;
  commission: string;
  status: string;
};

/** Replace with API-driven activity inside this component later. */
const DUMMY_RECENT_ACTIVITY: ReferralActivityItem[] = [
  {
    event: "New Skip Tracing customer",
    source: "FP-SKIP-MAIN",
    value: "$100.00",
    commission: "$30.00",
    status: "Pending",
  },
  {
    event: "CRM prelaunch signup",
    source: "FP-CRM-LAUNCH",
    value: "$199.00",
    commission: "$59.70",
    status: "Approved",
  },
  {
    event: "Investor campaign conversion",
    source: "FP-INVESTORS",
    value: "$250.00",
    commission: "$75.00",
    status: "Paid",
  },
];

export function RecentReferralActivitySection() {
  const { data, isRefetching } = useAffiliateFirstPromoter();

  return (
    <section
      data-dashboard-section="recent-referral-activity"
      data-fp-found={data.found ? "true" : "false"}
      data-fp-refetching={isRefetching ? "true" : "false"}
      style={{
        marginTop: 18,
        background: "rgba(10,10,12,0.88)",
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: 24,
        padding: 22,
      }}
    >
      <h2 style={{ marginTop: 0 }}>Recent Referral Activity</h2>
      {DUMMY_RECENT_ACTIVITY.map((item) => (
        <div
          key={`${item.event}-${item.source}`}
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 0.7fr 0.7fr 0.7fr",
            gap: 12,
            padding: "14px 0",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            color: "#e5e7eb",
          }}
        >
          <span>{item.event}</span>
          <span style={{ color: "#9ca3af" }}>{item.source}</span>
          <span>{item.value}</span>
          <span>{item.commission}</span>
          <span style={{ color: "#fca5a5", fontWeight: 900 }}>{item.status}</span>
        </div>
      ))}
    </section>
  );
}
