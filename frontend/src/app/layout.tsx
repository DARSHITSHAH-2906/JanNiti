import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SessionProvider } from "@/components/session-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JanNiti AI – Constituency Development Intelligence Platform",
  description:
    "AI-powered decision support system for Members of Parliament. Transform multilingual citizen feedback into evidence-based development priorities using Gemini, Bhashini, and advanced analytics.",
  keywords: [
    "AI governance",
    "constituency development",
    "MPLADS",
    "citizen feedback",
    "Gemini AI",
    "Bhashini",
    "India",
    "MP dashboard",
    "GIS analytics",
    "SDG alignment",
  ],
  authors: [{ name: "JanNiti AI Team" }],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✨</text></svg>",
  },
  openGraph: {
    title: "JanNiti AI – AI-Powered Constituency Intelligence",
    description: "Transform citizen voices into evidence-based development priorities",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <SessionProvider>{children}</SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
