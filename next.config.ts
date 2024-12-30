import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    // Disable ESLint checks during the build (for all files)
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true, // Example of another Next.js config option
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com', // Domain from which images will be loaded
        pathname: '/path/to/images/**', // Optional: match specific path patterns
      },
    ],
  },
};

export default nextConfig;
