import type { MetadataRoute } from "next";

import { readManifest } from "@/lib/data/generated";
import { absoluteUrl } from "@/lib/seo/site";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const manifest = await readManifest();
  const lastModified = manifest ? new Date(manifest.generatedAt) : new Date();

  const examEntries = (manifest?.exams ?? []).map((exam) => ({
    url: absoluteUrl(`/exam/${exam.examId}`),
    lastModified,
  }));

  const departmentEntries = (manifest?.departments ?? []).map((dept) => ({
    url: absoluteUrl(`/departments/${dept.slug}`),
    lastModified,
  }));

  return [
    { url: absoluteUrl("/"), lastModified },
    { url: absoluteUrl("/departments"), lastModified },
    ...departmentEntries,
    ...examEntries,
  ];
}
