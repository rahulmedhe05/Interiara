/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    turbo: {
      memoryLimit: 3000,
    },
  },
  swcMinify: true,
  productionBrowserSourceMaps: false,
  staticPageGenerationTimeout: 120,
}

export default nextConfig
