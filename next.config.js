/** @type {import('next').NextConfig} */

const nextConfig = {
  // experimental: {
  //   serverActions: true,
  // },
  output: "standalone",
  productionBrowserSourceMaps: false,
  images: {
    formats: [ 'image/webp'],
    domains: ["res.cloudinary.com", "lh3.googleusercontent.com"],
  },
}

module.exports = nextConfig
