import { money } from "../../lib/money";
import { Kpi } from "./Kpi";

/** Placeholder rows — replace with an API fetch inside this component later. */
const dummyAffiliateRows = [
  {
    clicks: 1248,
    leads: 286,
    customers: 74,
    revenue: 8420.25,
    commission: 2526.08,
  },
  {
    clicks: 732,
    leads: 184,
    customers: 31,
    revenue: 4010.3,
    commission: 1203.09,
  },
  {
    clicks: 419,
    leads: 92,
    customers: 18,
    revenue: 2250,
    commission: 675,
  },
] as const;

function sum(
  key: "clicks" | "leads" | "customers" | "revenue" | "commission",
) {
  return dummyAffiliateRows.reduce((total, row) => total + Number(row[key]), 0);
}

export function KPIs() {
  const totalClicks = sum("clicks");
  const totalLeads = sum("leads");
  const totalCustomers = sum("customers");
  const totalRevenue = sum("revenue");
  const totalCommission = sum("commission");
  const overallConversion =
    totalLeads > 0
      ? ((totalCustomers / totalLeads) * 100).toFixed(1)
      : "0.0";

  return (
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
  );
}
