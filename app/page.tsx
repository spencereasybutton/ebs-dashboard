import { auth } from "@clerk/nextjs";

export default function Home() {
  const { userId } = auth();

  if (!userId) {
    return (
      <div style={{ padding: 40 }}>
        <h1>Easy Button Software (EBS)</h1>
        <p>Please log in to access your dashboard.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>EBS Hub 🚀</h1>

      <p>Welcome to your software routing center.</p>

      <div style={{ marginTop: 20 }}>
        <h3>Products</h3>

        <ul>
          <li>🔎 Skip Tracing Platform</li>
          <li>📊 CRM System (Supabase)</li>
          <li>💰 Affiliate Dashboard (coming next)</li>
        </ul>
      </div>
    </div>
  );
}
