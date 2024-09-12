/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['assets.aceternity.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'enghour-blog-bucket.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
      },
    ],
  },
  // experimental: {
  //   ppr: 'incremental',
  // },
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
};

export default nextConfig;
