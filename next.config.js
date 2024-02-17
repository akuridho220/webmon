/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
  staticPageGenerationTimeout: 1000,
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
