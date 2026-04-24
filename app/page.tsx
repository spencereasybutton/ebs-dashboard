import { supabase } from "../lib/supabase";

export default async function Home() {
  const { data, error } = await supabase
    .from("revenue_events")
    .select("*")
    .limit(5);

  return (
    <div style={{ padding: 40 }}>
      <h1>EBS Dashboard 🚀</h1>

      <h3>Supabase Test:</h3>

      {error ? (
        <pre>Error: {error.message}</pre>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}
