import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../styles/globals.css";

// Load the Open Sans font
const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MachtBewusst-Hamburg",
  description: "Welcome to MachtBewusst-Hamburg Blog! Highlighting engagement and projects in Hamburg's decolonization process.",
  keywords: [
    "machtbewusst",
    "decolonization",
    "Hamburg",
    "civil society",
    "engagement",
    "projects",
    "power-critical perspectives",
    "decolonial perspectives"
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
