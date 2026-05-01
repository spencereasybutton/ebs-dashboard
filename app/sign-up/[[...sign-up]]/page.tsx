import { SignUp } from "@clerk/nextjs";

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
        forceRedirectUrl="/"
        appearance={{
          variables: {
            colorPrimary: "#dc2626",
            colorBackground: "#09090b",
            colorText: "#ffffff",
            colorInputBackground: "#111113",
            colorInputText: "#ffffff",
          },
          elements: {
            card: {
              backgroundColor: "#09090b",
              border: "1px solid rgba(255,255,255,0.1)",
            },
            formButtonPrimary: {
              backgroundColor: "#dc2626",
            },
          },
        }}
      />
    </main>
  );
}
