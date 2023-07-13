/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      // 'event-zero-dev.s3.ap-south-1.amazonaws.com',
      // 'eventzero-qa-bucket.s3.us-east-1.amazonaws.com',
      // 'eventzero-qa-bucket.s3.amazonaws.com',
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
