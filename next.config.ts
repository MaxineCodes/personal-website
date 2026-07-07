import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: 'export',
    images: {
        unoptimized: true,
        remotePatterns: [
            { protocol: "https", hostname: "cdnb.artstation.com" },
            { protocol: "https", hostname: "cdn.artstation.com" },
            { protocol: "https", hostname: "github.com" },
            { protocol: "https", hostname: "raw.githubusercontent.com",},
        ]
    },
};

export default nextConfig;
