/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  noImplicitAny: true
}

module.exports = {
  nextConfig,
  basePath: '/personal-website', //need this and assetPrefix for prod
  assetPrefix: '/personal-website/'
}