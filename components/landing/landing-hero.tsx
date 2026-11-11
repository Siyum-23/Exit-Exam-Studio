"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { SiteLogo } from "@/components/branding/site-logo";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
};

function formatNumber(value: number) {
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
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-primary/20 sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px]" />
        <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-primary/30 sm:h-[300px] sm:w-[300px] lg:h-[360px] lg:w-[360px]" />
      </div>

      <motion.a
        href="https://github.com/Siyum-23/Exit-Exam-Studio"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-5 top-5 z-20 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-primaryDark shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-brand-primary/40 hover:bg-white/90"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Star className="h-3 w-3 fill-brand-accent text-brand-accent" aria-hidden="true" />
        Rate us on GitHub
      </motion.a>

      <div className="mx-auto grid min-h-[100svh] max-w-6xl grid-cols-1 items-start gap-8 px-5 pb-14 pt-16 sm:items-center sm:gap-10 sm:px-6 sm:py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative z-10 space-y-5 sm:space-y-6">
          <motion.div
            className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.35em] text-brand-primary/70"
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            {/* <span className="h-px w-10 bg-brand-primary/40" /> */}
            <SiteLogo size="md" showWordmark={false} />
            Practice Exit Exam.
          </motion.div>

          <motion.h1
            className="font-display text-balance text-4xl leading-tight text-brand-primaryDark sm:text-5xl md:text-6xl"
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Ethiopian Exit Exam Studio
          </motion.h1>

          <motion.p
            className="max-w-[26rem] text-base text-black/70 sm:max-w-xl md:text-lg"
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            A free space built for Ethiopian university students. Focus on past
            questions, master the material, and walk into your exam with confidence.
          </motion.p>

          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Button asChild variant="primary" className="w-full px-6 py-3 text-base sm:w-auto">
              <Link href="/departments">Get Started</Link>
            </Button>
          </motion.div>

          {stats.examCount > 0 && (
            <div
              aria-label="Available exam content"
              className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand-primaryDark"
            >
              <span>{formatNumber(stats.departmentCount)} departments</span>
              <span>{formatNumber(stats.examCount)} exams</span>
              <span>{formatNumber(stats.playableQuestionCount)} questions</span>
            </div>
          )}

          <motion.p
            className="text-xs uppercase tracking-[0.25em] text-brand-primary/60"
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            100% free · No login · Resume anytime
          </motion.p>
        </div>

        <motion.div
          className="relative z-10 flex h-[260px] w-full items-center justify-center sm:h-[300px] lg:h-[420px]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute h-[210px] w-[210px] rounded-full border border-brand-primary/30 sm:h-[250px] sm:w-[250px] lg:h-[340px] lg:w-[340px]" />
          <div className="absolute h-[150px] w-[150px] rotate-45 rounded-[40px] border border-brand-primary/20 sm:h-[190px] sm:w-[190px] lg:h-[250px] lg:w-[250px]" />
          <div className="absolute h-16 w-16 rounded-full border border-brand-accent/70 bg-brand-accent/40 sm:h-20 sm:w-20 lg:h-24 lg:w-24" />
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-brand-primary/60">Ethiopian</p>
            <p className="font-display text-4xl text-brand-primaryDark sm:text-5xl lg:text-6xl">Exit Exam</p>
            <p className="mt-2 text-xs text-black/60">Practice · Test · Review</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
