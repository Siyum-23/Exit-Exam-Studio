import type { NextConfig } from "next";

const isCapacitorBuild = process.env.CAPACITOR_BUILD === "true";

const nextConfig: NextConfig = {
  reactCompiler: false,
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: isCapacitorBuild,
  },
  ...(isCapacitorBuild ? { output: "export" as const } : {}),
};

export default nextConfig;
