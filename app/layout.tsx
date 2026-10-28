import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

// Typography system — the same trio AgentGuard runs: Space Grotesk for
// display/headings, Inter for body/UI, Geist Mono for code. Self-hosted via
// next/font so every device renders identically with zero FOUT.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aetherix-app.vercel.app"),
  title: {
    default: "Aetherix — AI products that put oversight at the frontier",
    template: "%s — Aetherix",
  },
  description:
    "Aetherix is the parent company behind AgentGuard, building a family of AI products with one conviction: artificial intelligence should amplify people, never replace their judgment.",
  openGraph: {
    title: "Aetherix",
    description:
      "The parent company behind AgentGuard. AI products that keep people in command.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aetherix",
    description:
      "The parent company behind AgentGuard. AI products that keep people in command.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/icon-192.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a12",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} flex min-h-screen flex-col bg-[#0a0a12]`}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
