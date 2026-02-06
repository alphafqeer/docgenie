import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "*.replit.dev",
    "*.sisko.replit.dev",
  ],
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
