"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import type { PersistedAttempt } from "@/lib/exam/types";
import { LandingFooter } from "@/components/landing/landing-footer";
import { PageHeader } from "@/components/ui/page-header";
import { readHistory } from "@/lib/storage/store";
import { formatDateTime, formatDuration } from "@/lib/utils/time";

export function HistoryPageClient() {
  const [history, setHistory] = useState<PersistedAttempt[]>([]);

  useEffect(() => {
    setHistory(readHistory());
  }, []);

  return (
    <div className="page-bg min-h-screen flex flex-col">
      <main className="flex-1">
        <PageHeader
          title="History"
          eyebrow="Ethiopian Exit Exam Studio"
          subtitle="Review your previous attempts and keep improving."
          backHref="/departments"
          backLabel="Departments"
          hideBackOnMobile
        />

        <section className="page-section mx-auto max-w-6xl">
          <div className="grid gap-6">
            {history.map((attempt) => (
              <div
                key={attempt.attemptId}
                className="rounded-3xl border border-black/10 bg-white/70 p-6 md:flex md:items-center md:justify-between dark:border-white/10 dark:bg-white/5"
              >
                <div>
                  <h2 className="text-lg font-semibold text-brand-primaryDark">
                    {attempt.departmentName} · {attempt.displayYear}{" "}
                    {attempt.variant === "model" ? "Model" : ""}
                  </h2>
                  <p className="mt-1 text-sm text-black/60 dark:text-white/50">
                    {attempt.mode.toUpperCase()} · {formatDateTime(attempt.completedAt)} ·{" "}
                    {formatDuration(attempt.durationSec)}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-4 text-sm md:mt-0">
                  <span className="font-semibold text-brand-primaryDark">
                    {attempt.score}/{attempt.totalQuestions} ({attempt.percent}%)
                  </span>
                  <Link
                    href={`/exam/${attempt.examId}?review=${attempt.attemptId}`}
                    className="rounded-full border border-brand-primary px-4 py-2 text-xs font-semibold text-brand-primary"
                  >
                    Review
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {history.length === 0 && (
            <p className="mt-8 text-sm text-black/60 dark:text-white/50">No attempts yet. Start practicing!</p>
          )}
        </section>
      </main>
      <LandingFooter />
    </div>
  );
}
