import { auth, currentUser } from "@clerk/nextjs/server";
import { SignOutButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Page() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await currentUser();
  const email =
    user?.emailAddresses?.[0]?.emailAddress || "affiliate@example.com";

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "#fff",
        display: "flex",
        fontFamily: "sans-serif",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: 260,
          background: "#0b0b0f",
          borderRight: "1px solid rgba(255,255,255,0.1)",
          padding: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h2 style={{ margin: 0 }}>EBS</h2>
          <p style={{ color: "#aaa" }}>Affiliate Portal</p>
        </div>

        <div>
          <p style={{ fontSize: 12, color: "#aaa" }}>Logged in as</p>
          <p style={{ fontWeight: "bold" }}>{email}</p>

          <SignOutButton redirectUrl="/sign-in">
            <button
              style={{
                marginTop: 10,
                width: "100%",
                padding: 10,
                background: "#dc2626",
                border: "none",
                color: "#fff",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </SignOutButton>
        </div>
      </div>

      {/* Main */}
      <div style={{ flex: 1, padding: 30 }}>
        <h1>EBS Dashboard 🚀</h1>

        <div
          style={{
            marginTop: 20,
            padding: 20,
            borderRadius: 12,
            background: "#111113",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h3>Your Affiliate Link</h3>
          <p>https://easybuttonsoftware.com/?ref={userId}</p>
        </div>

        <div
          style={{
            marginTop: 20,
            padding: 20,
            borderRadius: 12,
            background: "#111113",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h3>Stats (Placeholder)</h3>
          <p>Revenue: $0</p>
          <p>Commission: $0</p>
        </div>
      </div>
    </main>
  );
}
