import { auth } from "@clerk/nextjs";

export default function Home() {
  const { userId } = auth();

  if (!userId) {
    return (
      <div style={{ padding: 40 }}>
        <h1>Access Restricted</h1>
        <p>Please log in to access EBS.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>EBS Dashboard 🚀</h1>
      <p>You are logged in.</p>
    </div>
  );
}
