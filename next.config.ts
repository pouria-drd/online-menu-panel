import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
    output: "standalone",
    reactStrictMode: process.env.NODE_ENV === "development",

    basePath: basePath,

    images: {
        remotePatterns: [],
    },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
