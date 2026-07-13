import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google"; // 👈 Make sure this import is present!
// import "./globals.css";

// 👈 Make sure this line is here to define "inter"!
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebBridge CRM",
  description: "WebBridge Customer Relationship Management System",
  manifest: "/manifest.json", 
  // Add this block below to force iOS standalone mode:
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "WebBridge CRM",
  },
};

export const viewport: Viewport = {
  themeColor: "#4f46e5",
  width: "device-width",
  initialScale: 1,
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}