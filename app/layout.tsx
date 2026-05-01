<SignOutButton>
  <button
    style={{
      background: "#ef4444",
      color: "#fff",
      padding: "8px 14px",
      borderRadius: 8,
      border: "none",
      cursor: "pointer",
      fontWeight: 600,
    }}
  >
    Logout
  </button>
</SignOutButton>

import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Easy Button Software",
  description: "EBS affiliate and product routing hub",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body style={{ margin: 0 }}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
