/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['live.staticflickr.com'],
  },
};

module.exports = nextConfig;
