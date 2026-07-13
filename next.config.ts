import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === "development", 
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // This tells Next's compiler to stay quiet about custom Webpack plugins
  experimental: {
    turbopack: {},
  } as any, // "as any" bypasses temporary TS type strictness if needed
};

export default withPWA(nextConfig);