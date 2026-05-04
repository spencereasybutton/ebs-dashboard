export type KpiProps = {
  label: string;
  value: string;
  red?: boolean;
};

export function Kpi({ label, value, red }: KpiProps) {
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
