import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import AnnouncementBanner from "../components/AnnouncementBanner";
import Footer from "../components/Footer"; // 1. Ensure this import exists!

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#10b981",
};

export const metadata: Metadata = {
  title: "Dietitian Pro Consult",
  description: "Expert nutritional consulting and tracking.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Dietitian Pro",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 min-h-screen flex flex-col`}>
        <AnnouncementBanner />
        <Navbar />
        
        {/* We wrap children in a div with grow so the footer stays at the bottom */}
        <div className="flex-grow">
          {children}
        </div>

        <Footer /> 
      </body>
    </html>
  );
}