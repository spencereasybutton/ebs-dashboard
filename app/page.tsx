import { auth, currentUser } from "@clerk/nextjs/server";
import { SignOutButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await currentUser();
  const email = user?.emailAddresses?.[0]?.emailAddress || "affiliate@example.com";
  const name = user?.firstName || "Affiliate";

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#080b12",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h2 style={{ margin: 0 }}>EBS Dashboard 🚀</h2>
          <p style={{ margin: 0, color: "#9ca3af" }}>{email}</p>
        </div>

        {/* ✅ LOGOUT BUTTON */}
        <SignOutButton redirectUrl="/sign-in">
          <button
            style={{
              background: "#ef4444",
              color: "#fff",
              padding: "10px 16px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              fontWeight: 700,
            }}
          >
            Logout
          </button>
        </SignOutButton>
      </header>

      {/* BODY */}
      <section style={{ padding: 40 }}>
        <h1>Welcome, {name}</h1>

        <div
          style={{
            marginTop: 20,
            padding: 20,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
          }}
        >
          <h3>Affiliate Overview</h3>

          <p>Total Revenue: $12,430</p>
          <p>Total Commission: $3,729</p>
          <p>Pending Payouts: $1,100</p>
        </div>

        <div
          style={{
            marginTop: 20,
            padding: 20,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
          }}
        >
          <h3>Your Referral Link</h3>

          <p>
            https://easybuttonsoftware.com/?ref=EBS-{userId?.slice(-6)}
          </p>
        </div>
      </section>
    </main>
  );
}
