import { auth, currentUser } from "@clerk/nextjs/server";
import type { CSSProperties } from "react";
import { redirect } from "next/navigation";
import { getCompanyPromoterByEmail } from "../lib/firstpromoter-client";
import { DashboardMainContent } from "./components/DashboardMainContent";
import { DashboardSidebar } from "./components/DashboardSidebar";

const dashboardMainStyle: CSSProperties = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top right, rgba(220,38,38,0.26), transparent 30%), #050505",
  color: "#fff",
  display: "flex",
  fontFamily:
    "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
};

export default async function Page() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await currentUser();
  const email =
    user?.primaryEmailAddress?.emailAddress ??
    user?.emailAddresses?.[0]?.emailAddress ??
    "affiliate@example.com";
  const firstName = user?.firstName || "Affiliate";

  const initialAffiliateData = await getCompanyPromoterByEmail("smithsp1996@gmail.com");

  return (
    <main style={dashboardMainStyle}>
      <DashboardSidebar email={email} />
      <DashboardMainContent
        firstName={firstName}
        initialAffiliateData={initialAffiliateData}
      />
    </main>
  );
}
