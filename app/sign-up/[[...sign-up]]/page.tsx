import { SignUp } from "@clerk/nextjs";
          background: "rgba(10,10,12,0.82)",
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: 28,
          padding: 24,
          boxShadow: "0 40px 120px rgba(0,0,0,0.5)",
        }}
      >
        <SignUp
          forceRedirectUrl="/"
          appearance={{
            variables: {
              colorPrimary: "#dc2626",
              colorBackground: "#09090b",
              colorText: "#ffffff",
              colorTextSecondary: "#a1a1aa",
              colorInputBackground: "#111113",
              colorInputText: "#ffffff",
              borderRadius: "14px",
            },
            elements: {
              card: {
                backgroundColor: "#09090b",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "none",
              },
              headerTitle: { color: "#ffffff", fontWeight: "800" },
              headerSubtitle: { color: "#a1a1aa" },
              formButtonPrimary: {
                backgroundColor: "#dc2626",
                boxShadow: "0 12px 32px rgba(220,38,38,0.30)",
                fontWeight: "800",
              },
              footerActionLink: { color: "#f87171" },
            },
          }}
        />
      </div>
    </main>
  );
}
