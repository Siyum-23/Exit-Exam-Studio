import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  reactCompiler: false,
  ...(isGitHubPages
    ? {
        output: "export",
        basePath: "/Exit-Exam-Studio",
        trailingSlash: true,
      }
    : {}),
  images: {
    formats: ["image/avif", "image/webp"],
    ...(isGitHubPages ? { unoptimized: true } : {}),
  },
};

export default nextConfig;
