import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div>
      <h1>EBS Dashboard 🚀</h1>
      <p>Logged in as: {userId}</p>
    </div>
  );
}
