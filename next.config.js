
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
};

module.exports = nextConfig;
