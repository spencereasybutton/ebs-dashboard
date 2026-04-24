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

  return (
    <div style={{ padding: 40 }}>
      <h1>EBS Dashboard 🚀</h1>
      <p>Logged in as: {userId}</p>

      <h2>Supabase Data</h2>
{error && <p style={{ color: "red" }}>{error.message}</p>}
      {/* 👇 THIS is the <pre> */}
      {data && data.length > 0 ? (
  <div>
    {data.map((row: any) => (
      <div
  key={row.id}
  style={{
    border: "1px solid #ddd",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    background: "#f9f9f9",
  }}
>
  <p><strong>Name:</strong> {row.name}</p>
  <p><strong>ID:</strong> {row.id}</p>
</div>
    ))}
  </div>
) : (
  <p>No data yet</p>
)}
    </div>
  );
}
