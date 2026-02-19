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
  title: "Elliot Electrical | Your Go2 in Electrical | Johannesburg & Garden Route",
  description:
    "Elliot Electrical — certified electrical contractors serving Johannesburg and the Garden Route since 2001. Solar installations, electrical construction, compliance certificates, maintenance & repairs.",
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
    title: "Elliot Electrical | Your Go2 in Electrical",
    description:
      "Certified electrical contractors serving Johannesburg and the Garden Route since 2001. Solar, construction, compliance & maintenance.",
    type: "website",
    locale: "en_ZA",
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
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
