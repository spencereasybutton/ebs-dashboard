export type StatMiniProps = {
  label: string;
  value: string;
};

export function StatMini({ label, value }: StatMiniProps) {
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
