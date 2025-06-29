import type { NextConfig } from "next";
import { createMDX } from 'fumadocs-mdx/next';
const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wallpapers.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'freepngimg.com',
        pathname: '/**',
      },
    ],
  },
};

export default withMDX(nextConfig);
