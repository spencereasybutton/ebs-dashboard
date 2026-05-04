import { SignIn } from "@clerk/nextjs";
import { clerkAuthAppearance } from "../../../lib/clerk-auth-appearance";

export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #050505, #120606)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SignIn
        routing="path"
        path="/sign-in"
        signUpUrl="/sign-up"
        forceRedirectUrl="/"
        appearance={clerkAuthAppearance}
      />
    </main>
  );
}
