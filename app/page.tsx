import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { supabase } from "../lib/supabase";

export default async function Home() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const { data, error } = await supabase
    .from("ebs_data")
    .select("*")
    .eq("user_id", userId);

  const { data: payouts, error: payoutError } = await supabase
    .from("affiliate_payouts")
    .select("*")
    .eq("user_id", userId);

  return (
    <div style={{ padding: 40 }}>
      <h1>EBS Dashboard 🚀</h1>
      <p>Logged in as: {userId}</p>

      <h2>Supabase Data</h2>
      {error && <p style={{ color: "red" }}>{error.message}</p>}

      {data && data.length > 0 ? (
        <div>
          {data.map((row: any) => (
            <div key={row.id}>
              <p>{row.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No data yet</p>
      )}

      <h2>Affiliate Payouts</h2>
      {payoutError && <p style={{ color: "red" }}>{payoutError.message}</p>}

      {payouts && payouts.length > 0 ? (
        <div>
          {payouts.map((payout: any) => (
            <div key={payout.id}>
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
    </div>
  );
}
