import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../styles/globals.css";

const open = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MachtBewusst",
  description: "Build by Kazifiti",
  keywords: ["machtbewusst", "dekolonisierung", "hamburg"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={open.className}>{children}</body>
    </html>
  );
}
