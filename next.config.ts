import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. DO NOT put turbopack inside 'experimental' anymore
  experimental: {
    // Other experimental options can stay here, but remove "turbopack"
  },

  // 2. Put an empty turbopack configuration at the top level to bypass the error
  turbopack: {}, 
};

export default nextConfig;