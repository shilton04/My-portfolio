import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ShiltonPortfolio | Creative Developer & Designer",
  description:
    "Portfolio of Shilton Rodrigues, a creative frontend developer and designer specializing in building engaging digital experiences with modern web technologies.",
  keywords: [
    "developer",
    "designer",
    "portfolio",
    "web development",
    "frontend",
    "UI/UX",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Shilton Rodrigues" }],
  creator: "Shilton Rodrigues",
  generator: "v0.dev",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.example.com/",
    title: "ShiltonPortfolio | Creative Developer & Designer",
    description:
      "Portfolio of Shilton Rodrigues, a frontend developer and designer specializing in building engaging digital experiences with modern web technologies.",
    siteName: "ShiltonPortfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ShiltonPortfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShiltonPortfolio | Creative Developer & Designer",
    description:
      "Portfolio of Shilton Rodrigues, a creative frontend developer and designer.",
    creator: "@username",
    images: ["/og-image.jpg"],
  },

  // 🟩 PWA-specific additions
  manifest: "/manifest.json",
  themeColor: "#ffffff",
  icons: {
    icon: "/icon.png",
    apple: "/icons/icon-192x192.png",
  },
  appleWebApp: {
    capable: true,
    title: "ShiltonPortfolio",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
