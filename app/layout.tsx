import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://aetherix-site.vercel.app"),
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
  themeColor: "#09090b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-zinc-950">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
