
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
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

export default nextConfig;
