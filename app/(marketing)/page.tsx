import { Metadata } from "next";

import { LandingHero } from "@/components/landing/landing-hero";
import { getLandingFaqSchema } from "@/components/landing/landing-seo-sections";
import { StructuredData } from "@/components/seo/structured-data";
import { LandingFooter } from "@/components/landing/landing-footer";
import { readManifest } from "@/lib/data/generated";
import { absoluteUrl, buildPageMetadata, siteConfig } from "@/lib/seo/site";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Ethiopian Exit Exam Practice Platform",
    description:
      "Practice Ethiopian exit exams for free with past questions, department filters, realistic test mode, and instant review for university students.",
    path: "/",
    keywords: [
      "ethiopian exit exam practice app",
      "free ethiopian exit exam practice",
      "ethiopian university exit exam questions",
    ],
  }),
};

export default async function LandingPage() {
  const manifest = await readManifest();

  if (!manifest) {
    return (
      <>
        <main className="min-h-screen">
          <LandingHero
            stats={{
              departmentCount: 0,
              examCount: 0,
              playableQuestionCount: 0,
            }}
          />
        </main>
        <LandingFooter />
      </>
    );
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Ethiopian Exit Exam Practice Platform",
    url: absoluteUrl("/"),
    description:
      "Free Ethiopian exit exam practice with department pages, year-based exam sets, and realistic study tools.",
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: absoluteUrl("/"),
    },
  };

  return (
    <>
      <main className="min-h-screen">
        <StructuredData id="landing-page-jsonld" data={websiteSchema} />
        <StructuredData id="landing-faq-jsonld" data={getLandingFaqSchema()} />
        <LandingHero
          stats={{
            departmentCount: manifest.departments.length,
            examCount: manifest.stats.examCount,
            playableQuestionCount: manifest.stats.playableQuestionCount,
          }}
        />
      </main>
      <LandingFooter />
    </>
  );
}
