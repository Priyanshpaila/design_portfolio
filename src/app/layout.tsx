import type { Metadata, Viewport } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.designer.dev"),
  title: "Designing ideas into visual experiences. — Graphic Design Portfolio",
  description:
    "A collection of graphic design work exploring brand identities, visual communication, digital graphics and print design. Each project reflects a different idea, purpose and creative direction.",
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
        <SmoothScroll>
          <div id="top" />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
