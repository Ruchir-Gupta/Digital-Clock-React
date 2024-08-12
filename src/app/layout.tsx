import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Clock",
  description: "Created on React.js/Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={false} className={inter.className}>{children}</body>
    </html>
  );
}
