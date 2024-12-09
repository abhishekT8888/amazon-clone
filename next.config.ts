import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com"],  // Corrected domain to lowercase
  },
};

export default nextConfig;
