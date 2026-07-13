import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "My Next App",
  description: "My PWA Landing Page",
  manifest: "/manifest.json", // Tells mobile devices where to read app settings
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};