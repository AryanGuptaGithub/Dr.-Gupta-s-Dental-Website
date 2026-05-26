import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.ftcdn.net",
      },
      {
        protocol: "https",
        hostname: "thumbs.dreamstime.com",
      },
      {
        protocol: "https",
        hostname: "skydecengineers.com",
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
      },
      {
        protocol: "https",
        hostname: "www.fsroson.com",
      },
      {
        protocol: "https",
        hostname: "www.welcomeware.live",
      },
      {
        protocol: "https",
        hostname: "cdn.dentzzdental.com",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;