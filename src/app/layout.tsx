import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://soham.dev"),
  title: {
    default: "Soham | Full‑Stack Developer",
    template: "%s | Soham",
  },
  description:
    "Full‑Stack Developer building elegant, performant web experiences with Next.js, TypeScript, and cloud-native architectures.",
  keywords: [
    "Soham",
    "Full‑Stack Developer",
    "Next.js",
    "TypeScript",
    "React",
    "Portfolio",
  ],
  openGraph: {
    title: "Soham | Full‑Stack Developer",
    description:
      "Building elegant, performant web apps with Next.js, TypeScript, and cloud-native architectures.",
    url: "https://soham.dev",
    siteName: "Soham Portfolio",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soham | Full‑Stack Developer",
    description:
      "Building elegant, performant web apps with Next.js, TypeScript, and cloud-native architectures.",
    images: ["/og.png"],
    creator: "@soham",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning className="scroll-smooth" lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
