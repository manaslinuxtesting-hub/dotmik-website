import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 👈 Add this line to skip ESLint during build
  },
  /* other config options here */
};

export default nextConfig;
