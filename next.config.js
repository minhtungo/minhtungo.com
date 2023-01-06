/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    esmExternals: false,
  },
  images: {
    domains: ['cdn.pixabay.com'],
  },
};

module.exports = nextConfig;
