import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { supabase } from "../lib/supabase";

export default async function Home() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const { data: payouts, error: payoutError } = await supabase
  .from("affiliate_payouts")
  .select("*")
  .eq("user_id", userId);

  return (
    <div style={{ padding: 40 }}>
      <h1>EBS Dashboard 🚀</h1>
      <p>Logged in as: {userId}</p>

      <h2>Affiliate Payouts</h2>

{payoutError && <p style={{ color: "red" }}>{payoutError.message}</p>}

{payouts && payouts.length > 0 ? (
  <div>
    {payouts.map((payout: any) => (
      <div
        key={payout.id}
        style={{
          border: "1px solid #ddd",
          borderRadius: 8,
          padding: 16,
          marginBottom: 12,
          background: "#f9f9f9",
        }}
      >
        <p><strong>Product:</strong> {payout.product}</p>
        <p><strong>Revenue:</strong> ${payout.revenue}</p>
        <p><strong>Commission:</strong> ${payout.commission_amount}</p>
        <p><strong>Status:</strong> {payout.status}</p>
      </div>
    ))}
  </div>
) : (
  <p>No affiliate payouts yet</p>
)}
