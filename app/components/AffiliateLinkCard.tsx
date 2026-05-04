import { money } from "../../lib/money";
import { StatMini } from "./StatMini";

export type AffiliateLinkCardData = {
  code: string;
  name: string;
  link: string;
  clicks: number;
  customers: number;
  revenue: number;
  commission: number;
};

export type AffiliateLinkCardProps = {
  link: AffiliateLinkCardData;
};

export function AffiliateLinkCard({ link }: AffiliateLinkCardProps) {
  return (
    <div
      style={{
        background: "rgba(10,10,12,0.88)",
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: 22,
        padding: 20,
      }}
    >
      <p style={{ color: "#f87171", fontWeight: 900, margin: 0 }}>{link.code}</p>
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
        <StatMini label="Revenue" value={money(link.revenue)} />
        <StatMini label="Commission" value={money(link.commission)} />
        <StatMini label="Clicks" value={link.clicks.toLocaleString()} />
        <StatMini label="Customers" value={link.customers.toString()} />
      </div>
    </div>
  );
}
