/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "https://res.cloudinary.com"],
  },
};

module.exports = nextConfig;
