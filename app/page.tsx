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
    .select("*");

  return (
    <div style={{ padding: 40 }}>
      <h1>EBS Dashboard 🚀</h1>
      <p>Logged in as: {userId}</p>

      <h2>Supabase Data</h2>

      {/* 👇 THIS is the <pre> */}
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
    </div>
  );
}
