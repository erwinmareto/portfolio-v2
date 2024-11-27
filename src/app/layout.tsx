import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Erwin's Portfolio",
  description: "Portfolio for Erwin Mareto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={urbanist.className}>{children}</body>
      </html>
    </ViewTransitions>
  );
}
