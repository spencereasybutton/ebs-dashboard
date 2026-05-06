"use client";

import { money } from "../../lib/money";
import { useAffiliateFirstPromoter } from "./AffiliateFirstPromoterContext";

const td = {
  padding: "14px 10px",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
  color: "#e5e7eb",
} as const;

/** Replace with API-driven rows inside this component later. */
const DUMMY_AFFILIATE_LINKS = [
  {
    name: "Skip Tracing - Main Offer",
    code: "FP-SKIP-MAIN",
    link: "https://easybuttonsoftware.com/?ref=FP-SKIP-MAIN",
    clicks: 1248,
    leads: 286,
    customers: 74,
    revenue: 8420.25,
    commission: 2526.08,
    conversionRate: "25.9%",
    status: "Active" as const,
  },
  {
    name: "CRM - Prelaunch",
    code: "FP-CRM-LAUNCH",
    link: "https://easybuttonsoftware.com/crm?ref=FP-CRM-LAUNCH",
    clicks: 732,
    leads: 184,
    customers: 31,
    revenue: 4010.3,
    commission: 1203.09,
    conversionRate: "16.8%",
    status: "Active" as const,
  },
  {
    name: "Investor Campaign",
    code: "FP-INVESTORS",
    link: "https://easybuttonsoftware.com/investors?ref=FP-INVESTORS",
    clicks: 419,
    leads: 92,
    customers: 18,
    revenue: 2250,
    commission: 675,
    conversionRate: "19.6%",
    status: "Testing" as const,
  },
];

const TABLE_COLUMN_HEADERS = [
  "Link / Campaign",
  "Clicks",
  "Leads",
  "Customers",
  "Conversion",
  "Revenue",
  "Commission",
  "Status",
] as const;

export function AffiliatePerformanceTable() {
  const { data, isRefetching } = useAffiliateFirstPromoter();
  console.log("-=-=--=-", data);
  return (
    <section
      data-dashboard-section="affiliate-performance-table"
      data-fp-found={data.found ? "true" : "false"}
      data-fp-campaigns={String(data.campaigns.length)}
      data-fp-refetching={isRefetching ? "true" : "false"}
      style={{
        background: "rgba(10,10,12,0.88)",
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: 24,
        padding: 22,
        marginBottom: 18,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 16,
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <div>
          <h2 style={{ margin: 0 }}>Performance by FirstPromoter Link</h2>
          <p style={{ color: "#9ca3af", margin: "6px 0 0" }}>
            Separate KPI tracking for each affiliate link/campaign.
          </p>
        </div>
        <span
          style={{
            background: "rgba(220,38,38,0.16)",
            color: "#fca5a5",
            border: "1px solid rgba(248,113,113,0.20)",
            borderRadius: 999,
            padding: "7px 10px",
            fontSize: 12,
            fontWeight: 900,
          }}
        >
          Placeholder data
        </span>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            minWidth: 950,
            fontSize: 14,
          }}
        >
          <thead>
            <tr>
              {TABLE_COLUMN_HEADERS.map((head) => (
                <th
                  key={head}
                  style={{
                    color: "#9ca3af",
                    textAlign: "left",
                    padding: "12px 10px",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {DUMMY_AFFILIATE_LINKS.map((link) => (
              <tr key={link.code}>
                <td style={td}>
                  <strong>{link.name}</strong>
                  <br />
                  <span style={{ color: "#9ca3af", fontSize: 12 }}>
                    {link.code}
                  </span>
                </td>
                <td style={td}>{link.clicks.toLocaleString()}</td>
                <td style={td}>{link.leads.toLocaleString()}</td>
                <td style={td}>{link.customers.toLocaleString()}</td>
                <td style={td}>{link.conversionRate}</td>
                <td style={td}>{money(link.revenue)}</td>
                <td style={td}>{money(link.commission)}</td>
                <td style={td}>
                  <span
                    style={{
                      background:
                        link.status === "Active"
                          ? "rgba(34,197,94,0.12)"
                          : "rgba(245,158,11,0.12)",
                      color:
                        link.status === "Active" ? "#86efac" : "#fcd34d",
                      borderRadius: 999,
                      padding: "6px 9px",
                      fontSize: 12,
                      fontWeight: 900,
                    }}
                  >
                    {link.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
