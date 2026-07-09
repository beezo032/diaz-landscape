import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";
import MobileActionBar from "@/components/MobileActionBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diaz Landscape Lawn Care LLC | Local Landscaping Ladson SC",
  description: "Expert local landscaping in Ladson SC and premium lawn care services in Charleston. Diaz Landscape Lawn Care LLC is open 24 hours. Call (843) 765-0284 for a free quote!",
  openGraph: {
    title: "Diaz Landscape Lawn Care LLC | Premium Landscaping",
    description: "Expert local landscaping in Ladson SC and premium lawn care services in Charleston.",
    url: "https://diazlandscape.com",
    siteName: "Diaz Landscape",
    images: [
      {
        url: "https://diazlandscape.com/images/hero-bg.png", // Assume we have a real absolute URL here for production
        width: 1200,
        height: 630,
        alt: "Diaz Landscape Lawn Care LLC",
      }
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${greatVibes.variable} antialiased min-h-[100dvh] flex flex-col`}>
        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Diaz Landscape Lawn Care LLC",
              telephone: "(843) 765-0284",
              url: "https://diazlandscape.com",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "00:00",
                  closes: "23:59",
                },
              ],
              areaServed: [
                {
                  "@type": "City",
                  name: "Ladson",
                  sameAs: "https://en.wikipedia.org/wiki/Ladson,_South_Carolina",
                },
                {
                  "@type": "City",
                  name: "Charleston",
                  sameAs: "https://en.wikipedia.org/wiki/Charleston,_South_Carolina",
                },
              ],
            }),
          }}
        />
        <SmoothScroll>
          <PageTransition>{children}</PageTransition>
          <MobileActionBar />
        </SmoothScroll>
      </body>
    </html>
  );
}
