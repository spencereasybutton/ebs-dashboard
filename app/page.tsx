import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { LogoutButton } from "./components/LogoutButton";

const affiliateLinks = [
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
    status: "Active",
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
    status: "Active",
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
    status: "Testing",
  },
];

const recentActivity = [
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

function money(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function sum(key: "clicks" | "leads" | "customers" | "revenue" | "commission") {
  return affiliateLinks.reduce((total, item) => total + Number(item[key]), 0);
}

export default async function Page() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await currentUser();
  const email =
    user?.emailAddresses?.[0]?.emailAddress || "affiliate@example.com";
  const firstName = user?.firstName || "Affiliate";

  const totalClicks = sum("clicks");
  const totalLeads = sum("leads");
  const totalCustomers = sum("customers");
  const totalRevenue = sum("revenue");
  const totalCommission = sum("commission");
  const overallConversion =
    totalLeads > 0 ? ((totalCustomers / totalLeads) * 100).toFixed(1) : "0.0";

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top right, rgba(220,38,38,0.26), transparent 30%), #050505",
        color: "#fff",
        display: "flex",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
      }}
    >
      <aside
        style={{
          width: 290,
          background: "linear-gradient(180deg, #080808, #170707)",
          borderRight: "1px solid rgba(255,255,255,0.08)",
          padding: 24,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: 16,
              background: "linear-gradient(135deg, #ef4444, #7f1d1d)",
              display: "grid",
              placeItems: "center",
              fontWeight: 900,
              fontSize: 18,
              boxShadow: "0 18px 45px rgba(239,68,68,0.32)",
            }}
          >
            EBS
          </div>

          <h2 style={{ margin: "18px 0 4px", fontSize: 22 }}>
            Easy Button Software
          </h2>
          <p style={{ color: "#9ca3af", margin: 0 }}>Affiliate Portal</p>

          <nav
            style={{
              marginTop: 34,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {["Overview", "FirstPromoter Links", "Campaigns", "Payouts"].map(
              (item, index) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    color: index === 0 ? "#fecaca" : "#d1d5db",
                    textDecoration: "none",
                    padding: "13px 14px",
                    borderRadius: 14,
                    fontWeight: 800,
                    background:
                      index === 0
                        ? "rgba(220,38,38,0.22)"
                        : "rgba(255,255,255,0.035)",
                    border:
                      index === 0
                        ? "1px solid rgba(248,113,113,0.25)"
                        : "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {item}
                </a>
              )
            )}
          </nav>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.045)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 18,
            padding: 16,
          }}
        >
          <p style={{ margin: 0, color: "#9ca3af", fontSize: 13 }}>
            Logged in as
          </p>
          <p style={{ margin: "6px 0 14px", fontWeight: 800, fontSize: 14 }}>
            {email}
          </p>

          <LogoutButton />
        </div>
      </aside>

      <section style={{ flex: 1, padding: 34 }}>
        <header
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

          <div
            style={{
              background: "rgba(34,197,94,0.12)",
              border: "1px solid rgba(134,239,172,0.22)",
              color: "#86efac",
              borderRadius: 999,
              padding: "9px 13px",
              fontSize: 12,
              fontWeight: 900,
              whiteSpace: "nowrap",
            }}
          >
            Clerk Protected
          </div>
        </header>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
            gap: 14,
            marginBottom: 18,
          }}
        >
          <Kpi label="Total Clicks" value={totalClicks.toLocaleString()} />
          <Kpi label="Leads Captured" value={totalLeads.toLocaleString()} />
          <Kpi label="Customers" value={totalCustomers.toLocaleString()} />
          <Kpi label="Lead → Customer" value={`${overallConversion}%`} />
          <Kpi label="Revenue" value={money(totalRevenue)} />
          <Kpi label="Commission" value={money(totalCommission)} red />
        </section>

        <section
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
            <h2 style={{ fontSize: 32, margin: "8px 0 8px" }}>
              {affiliateLinks[0].name}
            </h2>
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
              {affiliateLinks[0].link}
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

        <section
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
                  {[
                    "Link / Campaign",
                    "Clicks",
                    "Leads",
                    "Customers",
                    "Conversion",
                    "Revenue",
                    "Commission",
                    "Status",
                  ].map((head) => (
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
                {affiliateLinks.map((link) => (
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

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 18,
          }}
        >
          {affiliateLinks.map((link) => (
            <div
              key={link.code}
              style={{
                background: "rgba(10,10,12,0.88)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: 22,
                padding: 20,
              }}
            >
              <p style={{ color: "#f87171", fontWeight: 900, margin: 0 }}>
                {link.code}
              </p>
              <h3 style={{ margin: "8px 0" }}>{link.name}</h3>
              <p
                style={{
                  color: "#9ca3af",
                  wordBreak: "break-all",
                  fontSize: 13,
                }}
              >
                {link.link}
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 10,
                  marginTop: 14,
                }}
              >
                <Mini label="Revenue" value={money(link.revenue)} />
                <Mini label="Commission" value={money(link.commission)} />
                <Mini label="Clicks" value={link.clicks.toLocaleString()} />
                <Mini label="Customers" value={link.customers.toString()} />
              </div>
            </div>
          ))}
        </section>

        <section
          style={{
            marginTop: 18,
            background: "rgba(10,10,12,0.88)",
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: 24,
            padding: 22,
          }}
        >
          <h2 style={{ marginTop: 0 }}>Recent Referral Activity</h2>
          {recentActivity.map((item) => (
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
              <span style={{ color: "#fca5a5", fontWeight: 900 }}>
                {item.status}
              </span>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}

function Kpi({
  label,
  value,
  red,
}: {
  label: string;
  value: string;
  red?: boolean;
}) {
  return (
    <div
      style={{
        background: "rgba(10,10,12,0.88)",
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: 20,
        padding: 18,
      }}
    >
      <p style={{ margin: 0, color: "#9ca3af", fontSize: 13, fontWeight: 800 }}>
        {label}
      </p>
      <h3
        style={{
          margin: "8px 0 0",
          fontSize: 28,
          color: red ? "#fca5a5" : "#fff",
        }}
      >
        {value}
      </h3>
    </div>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.045)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 14,
        padding: 12,
      }}
    >
      <p style={{ margin: 0, color: "#9ca3af", fontSize: 12 }}>{label}</p>
      <strong>{value}</strong>
    </div>
  );
}

const td = {
  padding: "14px 10px",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
  color: "#e5e7eb",
};
