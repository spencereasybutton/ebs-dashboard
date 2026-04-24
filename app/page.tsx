import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div>
      <h1>EBS Dashboard 🚀</h1>
      <p>You are logged in</p>
    </div>
  );
}
