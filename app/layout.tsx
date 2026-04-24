import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Easy Button Software",
  description: "EBS Affiliate + CRM Platform"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
