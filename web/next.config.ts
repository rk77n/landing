import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Povoliť prístup k dev serveru z lokálnej siete (HMR + optimalizácia obrázkov)
  allowedDevOrigins: ['192.168.30.210', '192.168.30.*', '192.168.*.*'],
  async headers() {
    return [
      {
        source: '/((?!_next/static|_next/image|favicon.ico).*)',
        headers: [
          { key: 'Cache-Control', value: 'no-store, must-revalidate' },
        ],
      },
    ]
  },
};

export default nextConfig;
