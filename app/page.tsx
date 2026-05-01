import { auth, currentUser } from "@clerk/nextjs/server";
const cardLabel = {
  margin: 0,
  color: "#9ca3af",
  fontSize: 13,
  fontWeight: 800,
};

const cardValue = {
  margin: "8px 0 6px",
  fontSize: 30,
  letterSpacing: -0.5,
};

const cardDetail = {
  margin: 0,
  color: "#6b7280",
  fontSize: 13,
};

const productGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: 18,
  marginBottom: 18,
};

const panelCard = {
  background: "rgba(10,10,12,0.86)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: 24,
  padding: 22,
  boxShadow: "0 28px 80px rgba(0,0,0,0.26)",
};

const panelHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 14,
  flexWrap: "wrap" as const,
};

const metricRow = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
  gap: 16,
  marginTop: 20,
};

const sectionMetric = {
  margin: "6px 0 0",
  fontSize: 24,
};

const pill = {
  display: "inline-block",
  background: "rgba(220,38,38,0.16)",
  color: "#fca5a5",
  border: "1px solid rgba(248,113,113,0.20)",
  borderRadius: 999,
  padding: "6px 10px",
  fontSize: 12,
  fontWeight: 900,
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse" as const,
  fontSize: 14,
  minWidth: 720,
};

const th = {
  color: "#9ca3af",
  textAlign: "left" as const,
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  padding: "12px 10px",
};

const td = {
  borderBottom: "1px solid rgba(255,255,255,0.06)",
  padding: "14px 10px",
  color: "#e5e7eb",
};
