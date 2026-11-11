"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import type { DepartmentMeta } from "@/lib/exam/types";
import { Input } from "@/components/ui/input";
import { Pill } from "@/components/ui/pill";
import { PageHeader } from "@/components/ui/page-header";
import { LandingFooter } from "@/components/landing/landing-footer";

export function DepartmentList({ departments }: { departments: DepartmentMeta[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return departments;
    return departments.filter((dept) => dept.name.toLowerCase().includes(normalized));
  }, [departments, query]);

  return (
    <div className="page-bg min-h-screen flex flex-col">
      <main className="flex-1">
        <PageHeader
          title="Departments"
          eyebrow="Ethiopian Exit Exam Studio"
          subtitle="Choose your department and explore past exam sets. Clean, fast, and 100% free."
          backHref="/"
          backLabel="Home"
          hideBackOnMobile
        />
        <section className="page-section mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-md text-sm text-black/60 dark:text-white/50">
              {filtered.length} departments · {departments.length} total
            </div>
            <div className="w-full md:max-w-sm">
              <Input
                placeholder="Search department"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                aria-label="Search departments"
              />
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((dept) => (
              <Link
                key={dept.slug}
                href={`/departments/${dept.slug}`}
                className="group rounded-3xl border border-black/10 bg-white/70 p-6 transition hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-[0_30px_80px_-50px_rgba(78,47,32,0.5)] dark:border-white/10 dark:bg-white/5 dark:hover:border-brand-primary/40 dark:hover:shadow-[0_30px_80px_-50px_rgba(0,0,0,0.6)]"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-brand-primaryDark">{dept.name}</h2>
                  <span className="text-xs font-semibold text-brand-primary/70">{dept.examCount} exams</span>
                </div>
                <p className="mt-2 text-sm text-black/60 dark:text-white/50">
                  {dept.totalPlayableQuestions} playable questions
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {dept.years.slice(0, 4).map((year) => (
                    <Pill key={year} className="border-brand-primary/30 bg-white/70 text-brand-primary dark:bg-white/5">
                      {year}
                    </Pill>
                  ))}
                  {dept.years.length > 4 && (
                    <Pill className="border-black/10 bg-white/60 text-black/70 dark:border-white/10 dark:bg-white/5 dark:text-white/50">
                      +{dept.years.length - 4} more
                    </Pill>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-8 text-sm text-black/60 dark:text-white/50">No departments match that search.</p>
          )}
        </section>
      </main>
      <LandingFooter />
    </div>
  );
}
