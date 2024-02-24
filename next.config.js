/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
  staticPageGenerationTimeout: 1000,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'capi.pkl63.stis.ac.id',
        port: '',
        pathname: '/photo/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
