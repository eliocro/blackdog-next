/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'live.staticflickr.com' },
      { hostname: 'images.ctfassets.net' },
    ],
    qualities: [75, 85],
  },
};

module.exports = nextConfig;
