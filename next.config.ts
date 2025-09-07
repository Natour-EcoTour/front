import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.discordapp.com"
      },
      {
        protocol: "http",
        hostname: "res.cloudinary.com"
      },
    ],
  },
};

export default nextConfig;
