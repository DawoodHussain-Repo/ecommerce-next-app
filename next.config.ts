import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com", // Fixed the unnecessary 'https://' part
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com", // Fixed the unnecessary 'https://' part
      },
    ],
  },
};

export default nextConfig;
