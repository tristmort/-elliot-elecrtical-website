import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Elliot Electrical | Trusted Electricians in Gauteng & Garden Route",
  description:
    "Certified electrical contractors serving Gauteng and the Garden Route since 2001. Solar, construction, compliance & maintenance.",
  keywords: [
    "electrician Johannesburg",
    "solar installation Gauteng",
    "electrical contractor South Africa",
    "certificate of compliance",
    "solar panels Garden Route",
    "load shedding solutions",
    "Elliot Electrical",
  ],
  openGraph: {
    title: "Elliot Electrical | Trusted Electricians in Gauteng & Garden Route",
    description:
      "Certified electrical contractors serving Gauteng and the Garden Route since 2001. Solar, construction, compliance & maintenance.",
    url: "https://elliotelectrical.co.za/",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "https://elliotelectrical.co.za/elliot-logo.png",
        width: 1024,
        height: 1024,
        alt: "Elliot Electrical Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elliot Electrical | Trusted Electricians in Gauteng & Garden Route",
    description:
      "Certified electrical contractors serving Gauteng and the Garden Route since 2001. Solar, construction, compliance & maintenance.",
    images: ["https://elliotelectrical.co.za/elliot-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${inter.variable} font-body antialiased`}
      >
        <Navbar />
        <main className="pt-28 sm:pt-40">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
