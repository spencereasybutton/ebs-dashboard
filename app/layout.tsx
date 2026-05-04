import { ClerkProvider } from "@clerk/nextjs";
import { PT_Sans } from "next/font/google";

const ptSans = PT_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Easy Button Software",
  description: "EBS affiliate dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      afterSignOutUrl="/sign-in"
    >
      <html lang="en">
        <body
          className={ptSans.className}
          style={{ margin: 0, background: "#050505" }}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}