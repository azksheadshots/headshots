
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'your-bucket-name.s3.amazonaws.com', // <-- REPLACE THIS WITH YOUR S3 BUCKET HOSTNAME
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Expose the environment variable to the Next.js runtime configuration.
  // This makes it available on both the server-side and client-side.
  publicRuntimeConfig: {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
  },
};

module.exports = nextConfig;
