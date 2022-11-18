/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com'
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org'
      },
      {
        protocol: 'https',
        hostname: 'mainfacts.com'
      }
    ]
  }
};

module.exports = nextConfig;
