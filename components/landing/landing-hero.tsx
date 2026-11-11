"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { SiteLogo } from "@/components/branding/site-logo";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n/context";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
};

function formatNumber(value: number) {
  if (value >= 1000) return `${(value / 1000).toFixed(1)}k+`;
  return new Intl.NumberFormat("en-US").format(value);
}

export function LandingHero({
  stats,
}: {
  stats: {
    departmentCount: number;
    examCount: number;
    playableQuestionCount: number;
  };
}) {
  const { t } = useTranslation();
  const h = t.hero;

  return (
    <section className="hero-bg relative min-h-[100svh] overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-16 right-6 h-56 w-56 rounded-full bg-brand-accent/30 blur-3xl sm:-top-24 sm:right-10 sm:h-72 sm:w-72"
          animate={{ y: [0, 30, 0], x: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 left-4 h-56 w-56 rounded-full bg-brand-primary/20 blur-3xl sm:-bottom-32 sm:left-6 sm:h-72 sm:w-72"
          animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-primary/20 sm:block sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px]" />
        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-primary/30 sm:block sm:h-[300px] sm:w-[300px] lg:h-[360px] lg:w-[360px]" />
      </div>

      <motion.a
        href="https://github.com/abuki43/Exit-Exam-Studio"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-primaryDark shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-brand-primary/40 hover:bg-white/90 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/15"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Star className="h-3 w-3 fill-brand-accent text-brand-accent" aria-hidden="true" />
        <span className="hidden sm:inline">Rate us on GitHub</span>
        <span className="sm:hidden">Star</span>
      </motion.a>

      <div className="mx-auto grid min-h-[100svh] max-w-6xl grid-cols-1 items-center gap-8 px-5 pb-24 pt-20 sm:gap-10 sm:px-6 sm:py-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Text column */}
        <div className="relative z-10 space-y-6">
          <motion.div
            className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.35em] text-brand-primary/70 sm:justify-start"
            initial="initial" animate="animate" variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <SiteLogo size="md" showWordmark={false} />
            {h.eyebrow}
          </motion.div>

          <motion.h1
            className="font-display text-balance text-center text-3xl leading-tight text-brand-primaryDark sm:text-left sm:text-5xl md:text-6xl"
            initial="initial" animate="animate" variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {h.heading}
          </motion.h1>

          <motion.p
            className="text-center text-base text-black/65 dark:text-white/60 sm:max-w-xl sm:text-left md:text-lg"
            initial="initial" animate="animate" variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {h.subtitle}
          </motion.p>

          {stats.examCount > 0 && (
            <motion.div
              className="flex flex-wrap justify-center gap-2 sm:justify-start"
              initial="initial" animate="animate" variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              {[
                { value: stats.departmentCount, label: h.stats.departments },
                { value: stats.examCount,        label: h.stats.exams },
                { value: stats.playableQuestionCount, label: h.stats.questions },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-0.5 rounded-2xl border border-brand-primary/15 bg-white/60 px-4 py-2.5 backdrop-blur-sm dark:border-white/10 dark:bg-white/6"
                >
                  <span className="font-display text-lg leading-none text-brand-primaryDark">
                    {formatNumber(value)}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-black/45 dark:text-white/40">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          )}

          <motion.div
            initial="initial" animate="animate" variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Button asChild variant="primary" className="h-12 w-full px-6 text-base sm:h-auto sm:w-auto sm:py-3">
              <Link href="/departments">{h.cta}</Link>
            </Button>
          </motion.div>

          <motion.p
            className="text-center text-xs uppercase tracking-[0.25em] text-brand-primary/55 sm:text-left"
            initial="initial" animate="animate" variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {h.trust}
          </motion.p>

          {/* How it works */}
          <motion.div
            className="relative z-10 lg:col-span-2"
            initial="initial" animate="animate" variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            <div className="mt-4 rounded-3xl border border-brand-primary/12 bg-white/50 p-6 backdrop-blur-sm dark:border-white/8 dark:bg-white/5 sm:p-8">
              <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-primary/50 sm:text-left">
                {h.howItWorks}
              </p>
              <div className="grid gap-6 sm:grid-cols-3">
                {h.steps.map(({ step, title, body }) => (
                  <div key={step} className="flex gap-3 sm:flex-col sm:gap-3">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand-primary/25 bg-brand-primary/8 sm:h-8 sm:w-8">
                      <span className="text-[10px] font-bold tracking-wide text-brand-primary">{step}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-brand-primaryDark">{title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-black/50 dark:text-white/45">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative right column — hidden on mobile */}
        <motion.div
          className="relative z-10 hidden h-[300px] w-full items-center justify-center sm:flex lg:h-[420px]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute h-[250px] w-[250px] rounded-full border border-brand-primary/30 lg:h-[340px] lg:w-[340px]" />
          <div className="absolute h-[190px] w-[190px] rotate-45 rounded-[40px] border border-brand-primary/20 lg:h-[250px] lg:w-[250px]" />
          <div className="absolute h-20 w-20 rounded-full border border-brand-accent/70 bg-brand-accent/40 lg:h-24 lg:w-24" />
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-brand-primary/60">Ethiopian</p>
            <p className="font-display text-5xl text-brand-primaryDark lg:text-6xl">Exit Exam</p>
            <p className="mt-2 text-xs text-black/60 dark:text-white/50">Practice · Test · Review</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
