import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
    output: "standalone",
    reactStrictMode: process.env.NODE_ENV === "development",

    basePath: basePath,

    images: {
        remotePatterns: [],
    },
};

export default nextConfig;
