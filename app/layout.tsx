import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Maneesh Seepana — B2B Demand Generation Strategist",
  description:
    "Demand generation strategy for SaaS and AI companies. Build pipeline, grow revenue, and become the category leader in your market.",
  metadataBase: new URL("https://maneeshseepana.com"),
  openGraph: {
    title: "Maneesh Seepana — B2B Demand Generation Strategist",
    description:
      "Demand generation strategy for SaaS and AI companies. Build pipeline, grow revenue, and become the category leader in your market.",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maneesh Seepana — B2B Demand Generation Strategist",
    description: "Demand generation strategy for SaaS and AI companies. Build pipeline, grow revenue, and become the category leader in your market.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ebGaramond.variable} bg-[#0D0D0D] text-[#F2F2F2] antialiased font-garamond font-normal`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
