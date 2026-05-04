import { LogoutButton } from "./LogoutButton";
import { SidebarNav } from "./SidebarNav";

export type DashboardSidebarProps = {
  email: string;
};

export function DashboardSidebar({ email }: DashboardSidebarProps) {
  return (
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

        <SidebarNav />
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
  );
}
