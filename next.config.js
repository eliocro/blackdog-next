/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'live.staticflickr.com',
      },
      {
        hostname: 'images.ctfassets.net',
      },
    ],
  },
};

module.exports = nextConfig;
