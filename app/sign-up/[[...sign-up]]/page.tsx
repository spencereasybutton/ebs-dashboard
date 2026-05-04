import { SignUp } from "@clerk/nextjs";
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
      <SignUp
        routing="path"
        path="/sign-up"
        signInUrl="/sign-in"
        forceRedirectUrl="/"
        appearance={clerkAuthAppearance}
      />
    </main>
  );
}
