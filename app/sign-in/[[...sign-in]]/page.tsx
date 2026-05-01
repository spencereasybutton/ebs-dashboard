import { SignIn } from "@clerk/nextjs";
          }}
        >
          <SignIn
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
                socialButtonsBlockButton: {
                  backgroundColor: "#111113",
                  border: "1px solid rgba(255,255,255,0.10)",
                  color: "#ffffff",
                },
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
      </section>
    </main>
  );
}

const miniCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 18,
  padding: 16,
  display: "flex",
  flexDirection: "column" as const,
  gap: 6,
  color: "#e5e7eb",
};
