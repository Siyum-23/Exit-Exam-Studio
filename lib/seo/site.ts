import type { Metadata } from "next";

export const siteConfig = {
  name: "Ethiopian Exit Exam Studio",
  shortName: "Exit Exam Studio",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://exitexamstudio.app",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/+$/, "") ?? "",
  description:
    "Free Ethiopian exit exam practice with past papers, instant feedback, department-based browsing, and realistic test mode for university students.",
  locale: "en_ET",
  keywords: [
    "ethiopian exit exam",
    "ethiopian exit exam practice",
    "exit exam practice ethiopia",
    "ethiopian university exit exam",
    "exit exam past papers ethiopia",
    "ethiopian exit exam questions",
    "ethiopian exit exam study app",
    "department exit exams ethiopia",
    "ethiopian university students",
    "exit exam",
    "ethiopian education",
    "ethiopian students"
  ],
} as const;

export const defaultOgImage = "/opengraph-image";

type BuildPageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  noIndex?: boolean;
};

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(`${siteConfig.basePath}${normalizedPath}`, siteConfig.url).toString();
}

export function getFullTitle(title: string) {
  return title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  type = "website",
  noIndex = false,
}: BuildPageMetadataOptions): Metadata {
  const fullTitle = getFullTitle(title);
  const canonical = path || "/";
  const image = absoluteUrl(defaultOgImage);

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical: absoluteUrl(canonical),
    },
    category: "education",
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl(canonical),
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          nocache: true,
          googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
          },
        }
      : undefined,
  };
}
