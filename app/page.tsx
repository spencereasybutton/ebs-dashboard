import { auth, currentUser } from "@clerk/nextjs/server";
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
