import { ScrollToTop } from "@/components/shared/scroll-to-top";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/shared/floating-whatsapp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://radiancewebstudio.com"),

  title: {
    default: "Radiance Web Studio | Premium Web Design Agency",
    template: "%s | Radiance Web Studio",
  },

  description:
    "Radiance Web Studio creates premium, fast, responsive, and SEO-optimized websites that help businesses grow online.",

  keywords: [
    "Web Design",
    "Website Development",
    "Next.js",
    "React",
    "SEO",
    "Responsive Website",
    "Business Website",
    "E-commerce Website",
    "Landing Page",
    "Radiance Web Studio",
  ],

  authors: [
    {
      name: "Radiance Web Studio",
    },
  ],

  creator: "Radiance Web Studio",

  applicationName: "Radiance Web Studio",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Radiance Web Studio",
    description:
      "Premium websites designed to help businesses grow online.",
    url: "https://radiancewebstudio.com",
    siteName: "Radiance Web Studio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Radiance Web Studio",
    description:
      "Premium websites designed to help businesses grow online.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <ScrollToTop />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}