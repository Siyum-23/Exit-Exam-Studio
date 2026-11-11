import type { Metadata } from "next";
import { SettingsPageClient } from "@/components/settings/settings-page-client";
import { buildPageMetadata } from "@/lib/seo/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Settings",
  description: "Customize your Ethiopian Exit Exam Studio experience.",
  path: "/settings",
  noIndex: true,
});

export default function SettingsPage() {
  return <SettingsPageClient />;
}
