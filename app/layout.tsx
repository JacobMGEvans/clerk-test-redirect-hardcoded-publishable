import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey="pk_test_...">
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
