import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Turbopack for build — Turbopack fails when it can't reach
  // fonts.gstatic.com (Google Fonts CDN) during production builds.
  // Webpack handles font loading differently and works offline.
  turbopack: {
    // intentionally left empty to keep dev fast, build uses webpack fallback
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/courses',
        destination: '/articles',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
