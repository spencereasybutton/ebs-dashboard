const NAV_ITEMS = [
  "Overview",
  "FirstPromoter Links",
  "Campaigns",
  "Payouts",
] as const;

export function SidebarNav() {
  return (
    <nav
      style={{
        marginTop: 34,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      {NAV_ITEMS.map((item, index) => (
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
      ))}
    </nav>
  );
}
