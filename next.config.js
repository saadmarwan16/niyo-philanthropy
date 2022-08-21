/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "https://niyo-philanthropy-admin.herokuapp.com"],
  },
};

module.exports = nextConfig;
