import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "@/lib/seo/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: `${siteConfig.basePath}/`,
        disallow: [`${siteConfig.basePath}/history`, `${siteConfig.basePath}/api/`],
      },
    ],
    host: siteConfig.url,
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
