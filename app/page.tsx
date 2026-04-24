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
    .limit(10);

  return (
    <div style={{ padding: 40 }}>
      <h1>EBS Dashboard 🚀</h1>
      <p>Logged in as: {userId}</p>

      <h2>Supabase Data</h2>

      {error ? (
        <pre>{error.message}</pre>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}
