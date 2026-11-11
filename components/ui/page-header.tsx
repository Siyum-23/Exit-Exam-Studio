import Link from "next/link";

import { SiteLogo } from "@/components/branding/site-logo";
import { cn } from "@/lib/utils/cn";

type PageHeaderProps = {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  backHref?: string;
  backLabel?: string;
  className?: string;
  hideBackOnMobile?: boolean;
};

export function PageHeader({
  title,
  eyebrow,
  subtitle,
  backHref,
  backLabel = "Back",
  className,
  hideBackOnMobile = false,
}: PageHeaderProps) {
  return (
    <header className={cn("mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 pt-10", className)}>
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-black/60 dark:text-white/50">
        {backHref ? (
          <Link
            href={backHref}
            className={cn(
              "items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 font-semibold text-brand-primary transition hover:-translate-y-0.5 hover:border-brand-primary/40 dark:border-white/10 dark:bg-white/8",
              hideBackOnMobile ? "hidden md:inline-flex" : "inline-flex"
            )}
          >
            <span className="text-base">←</span>
            {backLabel}
          </Link>
        ) : (
          <span />
        )}
        {eyebrow && (
          <div className="inline-flex items-center gap-3">
            <SiteLogo linked size="sm" showWordmark={false} />
            <span className="uppercase tracking-[0.28em] text-brand-primary/70">{eyebrow}</span>
          </div>
        )}
      </div>
      <div className="border-b border-black/10 pb-6 dark:border-white/10">
        <h1 className="font-display text-3xl text-brand-primaryDark md:text-4xl">{title}</h1>
        {subtitle && <p className="mt-2 max-w-2xl text-sm text-black/60 dark:text-white/50">{subtitle}</p>}
      </div>
    </header>
  );
}
