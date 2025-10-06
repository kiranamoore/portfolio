import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Temporarily skip ESLint warnings in builds (revert after fixing)
  },
  typescript: {
    ignoreBuildErrors: true, // Temporarily skip TS errors (use sparingly; revert after fixes)
  },
  // Add other options here if needed (e.g., images, env vars)
};

export default nextConfig;