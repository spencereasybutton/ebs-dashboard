"use client";

import { money } from "../../lib/money";
import { useAffiliateFirstPromoter } from "./AffiliateFirstPromoterContext";

/** Replace with API-driven data inside this component later. */
const DUMMY_TOP_LINK = {
  name: "Skip Tracing - Main Offer",
  link: "https://easybuttonsoftware.com/?ref=FP-SKIP-MAIN",
} as const;

const DUMMY_COMMISSION_ROWS = [
  { commission: 2526.08 },
  { commission: 1203.09 },
  { commission: 675 },
] as const;

function totalCommissionFromDummy() {
  return DUMMY_COMMISSION_ROWS.reduce((t, r) => t + r.commission, 0);
}

export function TopPerformingPayoutSection() {
  const { data, isRefetching } = useAffiliateFirstPromoter();
  const totalCommission = totalCommissionFromDummy();

  return (
    <section
      data-dashboard-section="top-performing-payout"
      data-fp-found={data.found ? "true" : "false"}
      data-fp-refetching={isRefetching ? "true" : "false"}
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1.4fr) minmax(280px, 0.8fr)",
        gap: 18,
        marginBottom: 18,
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(220,38,38,0.28), rgba(15,23,42,0.92))",
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: 24,
          padding: 24,
        }}
      >
        <p
          style={{
            color: "#fecaca",
            margin: 0,
            textTransform: "uppercase",
            letterSpacing: 1,
            fontSize: 12,
            fontWeight: 900,
          }}
        >
          Top Performing Link
        </p>
        <h2 style={{ fontSize: 32, margin: "8px 0 8px" }}>{DUMMY_TOP_LINK.name}</h2>
        <p style={{ color: "#cbd5e1", lineHeight: 1.6, marginTop: 0 }}>
          This card will later pull directly from FirstPromoter campaign and
          referral link performance.
        </p>

        <div
          style={{
            background: "#050505",
            border: "1px solid rgba(248,113,113,0.25)",
            color: "#fecaca",
            borderRadius: 14,
            padding: 14,
            fontWeight: 900,
            wordBreak: "break-all",
          }}
        >
          {DUMMY_TOP_LINK.link}
        </div>
      </div>

      <div
        style={{
          background: "rgba(10,10,12,0.88)",
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: 24,
          padding: 22,
        }}
      >
        <p style={{ color: "#9ca3af", marginTop: 0 }}>Payout Snapshot</p>
        <h2 style={{ fontSize: 34, margin: "0 0 10px" }}>
          {money(totalCommission)}
        </h2>
        <p style={{ color: "#cbd5e1", lineHeight: 1.6 }}>
          Estimated commission across all tracked links.
        </p>
        <div
          style={{
            height: 10,
            background: "#1f1f22",
            borderRadius: 999,
            overflow: "hidden",
            marginTop: 18,
          }}
        >
          <div
            style={{
              width: "72%",
              height: "100%",
              background: "linear-gradient(90deg, #ef4444, #991b1b)",
            }}
          />
        </div>
        <p style={{ color: "#9ca3af", fontSize: 13 }}>
          72% payout-ready placeholder
        </p>
      </div>
    </section>
  );
}
