import type { Metadata, Viewport } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-dala.vercel.app"),
  title: "Graphic Design Portfolio — Visual Case Studies",
  description:
    "Professional graphic design portfolio featuring art-directed case studies across brand identity, editorial design, campaign creatives, and digital systems.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&family=Yantramanav:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-void text-bone-white min-h-screen selection:bg-electric-iris selection:text-bone-white antialiased">
        <div id="top" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
