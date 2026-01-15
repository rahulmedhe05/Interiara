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
      memoryLimit: 6000,
    },
  },
  swcMinify: true,
  productionBrowserSourceMaps: false,
  staticPageGenerationTimeout: 600,
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
}

export default nextConfig
