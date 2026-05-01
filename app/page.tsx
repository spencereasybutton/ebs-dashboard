import { SignOutButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const productBreakdown = [
  {
    product: "Skip Tracing",
    revenue: 8420.25,
    commission: 2526.08,
    conversions: 84,
  },
  {
    product: "CRM",
    revenue: 4010.3,
    commission: 1203.09,
    conversions: 31,
  },
];

const referrals = [
  {
    id: 1,
    email: "investor@example.com",
    product: "Skip Tracing",
    revenue: 100,
    commission: 30,
    status: "Pending",
  },
  {
    id: 2,
    email: "agent@example.com",
    product: "CRM",
    revenue: 199,
    commission: 59.7,
    status: "Approved",
  },
  {
    id: 3,
    email: "buyer@example.com",
    product: "Skip Tracing",
    revenue: 250,
    commission: 75,
    status: "Paid",
  },
];

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function getAffiliateSummary() {
  const totalRevenue = productBreakdown.reduce(
    (sum, item) => sum + item.revenue,
    0
  );

  const totalCommission = productBreakdown.reduce(
    (sum, item) => sum + item.commission,
    0
  );

  const pendingPayouts = referrals
    .filter((row) => row.status === "Pending" || row.status === "Approved")
    .reduce((sum, row) => sum + row.commission, 0);

  const paidOut = referrals
    .filter((row) => row.status === "Paid")
    .reduce((sum, row) => sum + row.commission, 0);

  return {
    totalRevenue,
    totalCommission,
    pendingPayouts,
    paidOut,
  };
}

function makeAffiliateCode(userId: string) {
  return `EBS-${userId.slice(-8).toUpperCase()}`;
}

export default async function Home() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await currentUser();
  const email = user?.emailAddresses?.[0]?.emailAddress || "affiliate@example.com";
  const name = user?.firstName || "Affiliate";
  const affiliateCode = makeAffiliateCode(userId);
  const referralLink = `https://www.easybuttonsoftware.com/?ref=${affiliateCode}`;
  const summary = getAffiliateSummary();

  const summaryCards = [
    {
      label: "Total Revenue",
      value: formatCurrency(summary.totalRevenue),
      detail: "Across all referred products",
    },
    {
      label: "Total Commission",
      value: formatCurrency(summary.totalCommission),
      detail: "Estimated earned commission",
    },
    {
      label: "Pending Payouts",
      value: formatCurrency(summary.pendingPayouts),
      detail: "Awaiting approval or payout",
    },
    {
      label: "Paid Out",
      value: formatCurrency(summary.paidOut),
      detail: "Completed affiliate payouts",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#080b12",
        color: "#ffffff",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
      }}
    >
      <header
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "22px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <div>
          <div style={{ fontSize: 22, fontWeight: 800 }}>
            Easy Button Software
          </div>
          <div style={{ color: "#9ca3af", fontSize: 14 }}>
            Affiliate & product routing hub
          </div>
        </div>

        <nav style={{ display: "flex", gap: 20, fontSize: 14 }}>
          <a href="#overview" style={navLink}>Overview</a>
          <a href="#products" style={navLink}>Products</a>
          <a href="#referrals" style={navLink}>Referrals</a>
        </nav>
      </header>

      <section
        style={{
          padding: "52px 40px 28px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 24,
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(37,99,235,0.28), rgba(15,23,42,0.95))",
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: 24,
            padding: 32,
          }}
        >
          <div
            style={{
              color: "#93c5fd",
              fontWeight: 700,
              textTransform: "uppercase",
              fontSize: 12,
              letterSpacing: 1.2,
              marginBottom: 14,
            }}
          >
            Affiliate Command Center
          </div>

          <h1
            style={{
              fontSize: 44,
              lineHeight: 1.05,
              margin: "0 0 16px",
              maxWidth: 760,
            }}
          >
            Welcome back, {name}. Track commissions across Skip Tracing and CRM.
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: 17,
              lineHeight: 1.65,
              maxWidth: 760,
              margin: 0,
            }}
          >
            EBS is your central hub for affiliates to view referrals, revenue,
            commissions, payout status, and product-level performance across the
            Easy Button ecosystem.
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
            <a href="https://www.easybuttonskiptrace.com/" style={primaryButton}>
              Open Skip Tracing
            </a>
            <a href="https://easybuttonrealestate.com/" style={secondaryButton}>
              Open CRM
            </a>
          </div>
        </div>

        <div style={panelCard}>
          <h2 style={{ marginTop: 0 }}>Your Affiliate Link</h2>
          <p style={{ color: "#94a3b8", fontSize: 14 }}>
            Logged in as {email}
          </p>

          <div style={codeBox}>{affiliateCode}</div>
          <div style={linkBox}>{referralLink}</div>

          <button type="button" style={copyButton}>Copy Referral Link</button>

          <p style={{ color: "#64748b", fontSize: 13, marginTop: 18 }}>
            This page is protected by Clerk. Backend payout data can later be
            connected to Supabase and FirstPromoter.
          </p>
        </div>
      </section>

      <section id="overview" style={{ padding: "0 40px 28px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: 16,
          }}
        >
          {summaryCards.map((card) => (
            <div key={card.label} style={statCard}>
              <div style={{ color: "#94a3b8", fontSize: 14 }}>{card.label}</div>
              <div style={{ fontSize: 30, fontWeight: 800, marginTop: 8 }}>
                {card.value}
              </div>
              <div style={{ color: "#64748b", fontSize: 13, marginTop: 6 }}>
                {card.detail}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="products"
        style={{
          padding: "0 40px 28px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
        }}
      >
        {productBreakdown.map((item) => (
          <div key={item.product} style={panelCard}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 14,
              }}
            >
              <h2 style={{ margin: 0 }}>{item.product}</h2>
              <span style={pill}>{item.conversions} conversions</span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: 16,
                marginTop: 22,
              }}
            >
              <div>
                <div style={{ color: "#94a3b8", fontSize: 14 }}>Revenue</div>
                <div style={{ fontSize: 26, fontWeight: 800 }}>
                  {formatCurrency(item.revenue)}
                </div>
              </div>
              <div>
                <div style={{ color: "#94a3b8", fontSize: 14 }}>Commission</div>
                <div style={{ fontSize: 26, fontWeight: 800 }}>
                  {formatCurrency(item.commission)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section id="referrals" style={{ padding: "0 40px 60px" }}>
        <div style={panelCard}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 18,
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            <div>
              <h2 style={{ margin: 0 }}>Recent Referrals</h2>
              <p style={{ color: "#94a3b8", margin: "6px 0 0" }}>
                Front-end placeholder table. We will connect this to Supabase,
                FirstPromoter, and product purchase events later.
              </p>
            </div>
            <span style={pill}>Clerk protected</span>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: 14,
                minWidth: 720,
              }}
            >
              <thead>
                <tr style={{ color: "#94a3b8", textAlign: "left" }}>
                  <th style={th}>Referred User</th>
                  <th style={th}>Product</th>
                  <th style={th}>Revenue</th>
                  <th style={th}>Commission</th>
                  <th style={th}>Status</th>
                </tr>
              </thead>
              <tbody>
                {referrals.map((referral) => (
                  <tr key={referral.id}>
                    <td style={td}>{referral.email}</td>
                    <td style={td}>{referral.product}</td>
                    <td style={td}>{formatCurrency(referral.revenue)}</td>
                    <td style={td}>{formatCurrency(referral.commission)}</td>
                    <td style={td}>
                      <span style={getStatusStyle(referral.status)}>
                        {referral.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}

function getStatusStyle(status: string) {
  return {
    ...pill,
    background:
      status === "Paid"
        ? "rgba(34,197,94,0.14)"
        : status === "Approved"
        ? "rgba(59,130,246,0.14)"
        : "rgba(245,158,11,0.14)",
    color:
      status === "Paid"
        ? "#86efac"
        : status === "Approved"
        ? "#93c5fd"
        : "#fcd34d",
  };
}

const navLink = {
  color: "#cbd5e1",
  textDecoration: "none",
};

const panelCard = {
  background: "rgba(15,23,42,0.92)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: 22,
  padding: 24,
  boxShadow: "0 24px 80px rgba(0,0,0,0.22)",
};

const statCard = {
  background: "rgba(15,23,42,0.92)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: 18,
  padding: 22,
};

const primaryButton = {
  background: "#2563eb",
  color: "#fff",
  padding: "12px 18px",
  borderRadius: 12,
  textDecoration: "none",
  fontWeight: 700,
};

const secondaryButton = {
  background: "rgba(255,255,255,0.08)",
  color: "#fff",
  padding: "12px 18px",
  borderRadius: 12,
  textDecoration: "none",
  fontWeight: 700,
  border: "1px solid rgba(255,255,255,0.12)",
};

const codeBox = {
  background: "#020617",
  border: "1px solid rgba(255,255,255,0.10)",
  color: "#bfdbfe",
  borderRadius: 12,
  padding: 14,
  fontWeight: 800,
  letterSpacing: 0.8,
  marginTop: 18,
};

const linkBox = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.10)",
  color: "#cbd5e1",
  borderRadius: 12,
  padding: 14,
  fontSize: 13,
  marginTop: 12,
  wordBreak: "break-all" as const,
};

const copyButton = {
  width: "100%",
  marginTop: 14,
  background: "#ffffff",
  color: "#020617",
  border: "none",
  borderRadius: 12,
  padding: "12px 16px",
  fontWeight: 800,
  cursor: "pointer",
};

const pill = {
  display: "inline-block",
  background: "rgba(37,99,235,0.16)",
  color: "#93c5fd",
  border: "1px solid rgba(147,197,253,0.18)",
  borderRadius: 999,
  padding: "6px 10px",
  fontSize: 12,
  fontWeight: 700,
};

const th = {
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  padding: "12px 10px",
};

const td = {
  borderBottom: "1px solid rgba(255,255,255,0.06)",
  padding: "14px 10px",
  color: "#e5e7eb",
};
