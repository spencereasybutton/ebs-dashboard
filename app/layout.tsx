import { ClerkProvider } from "@clerk/nextjs";

<ClerkProvider>
  {children}
</ClerkProvider>

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
