"use client";

import {
  Sun, Moon, Monitor, Globe, Trash2, Bell,
  ChevronRight, RotateCcw, Info, Hash, Layers,
} from "lucide-react";

import { LandingFooter } from "@/components/landing/landing-footer";
import { useTheme, type Theme } from "@/components/providers/theme-provider";
import { useTranslation } from "@/lib/i18n/context";
import { type Locale } from "@/lib/i18n/translations";
import { cn } from "@/lib/utils/cn";

const LANGUAGE_OPTIONS: { value: Locale; native: string; label: string }[] = [
  { value: "en", native: "English", label: "English" },
  { value: "am", native: "አማርኛ", label: "Amharic" },
  { value: "om", native: "Afaan Oromoo", label: "Afan Oromo" },
];

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-1.5 px-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-black/40 dark:text-white/35">
      {children}
    </p>
  );
}

function RowIcon({
  icon: Icon,
  color = "primary",
}: {
  icon: React.ElementType;
  color?: "primary" | "error" | "muted";
}) {
  const bg = {
    primary: "bg-brand-primary/12 text-brand-primary",
    error: "bg-brand-error/12 text-brand-error",
    muted: "bg-black/8 text-black/45 dark:bg-white/8 dark:text-white/45",
  }[color];
  return (
    <div className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-xl", bg)}>
      <Icon size={15} strokeWidth={2} />
    </div>
  );
}

export function SettingsPageClient() {
  const { theme, setTheme } = useTheme();
  const { locale, setLocale, t } = useTranslation();
  const s = t.settings;

  const THEME_OPTIONS: { value: Theme; label: string; icon: React.ElementType }[] = [
    { value: "light", label: s.themeLight, icon: Sun },
    { value: "dark", label: s.themeDark, icon: Moon },
    { value: "system", label: s.themeSystem, icon: Monitor },
  ];

  return (
    <div className="page-bg min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="px-5 pb-1 pt-20">
          <h1 className="font-display text-[28px] leading-tight text-brand-primaryDark">
            {s.title}
          </h1>
          <p className="mt-0.5 text-sm text-black/45 dark:text-white/40">{s.subtitle}</p>
        </div>

        <div className="mx-auto max-w-lg space-y-6 px-4 pb-10 pt-5">

          {/* ── Appearance ── */}
          <div>
            <GroupLabel>{s.appearance}</GroupLabel>
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white/70 divide-y divide-black/8 dark:border-white/10 dark:bg-white/5 dark:divide-white/8">

              {/* Theme */}
              <div className="px-4 py-3.5">
                <div className="mb-3 flex items-center gap-3">
                  <RowIcon icon={Sun} />
                  <span className="text-sm font-medium text-brand-primaryDark">{s.theme}</span>
                </div>
                <div className="flex gap-1 rounded-xl bg-black/5 p-1 dark:bg-white/8">
                  {THEME_OPTIONS.map(({ value, label, icon: Icon }) => (
                    <button
                      key={value}
                      onClick={() => setTheme(value)}
                      className={cn(
                        "flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold transition-all",
                        theme === value
                          ? "bg-white text-brand-primaryDark shadow-sm dark:bg-white/15 dark:text-brand-primaryDark"
                          : "text-black/35 hover:text-black/55 dark:text-white/35 dark:hover:text-white/55",
                      )}
                    >
                      <Icon size={13} strokeWidth={2} aria-hidden />
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Language */}
              <div className="px-4 py-3.5">
                <div className="mb-3 flex items-center gap-3">
                  <RowIcon icon={Globe} />
                  <span className="text-sm font-medium text-brand-primaryDark">{s.language}</span>
                </div>
                <div className="flex gap-1 rounded-xl bg-black/5 p-1 dark:bg-white/8">
                  {LANGUAGE_OPTIONS.map(({ value, native }) => (
                    <button
                      key={value}
                      onClick={() => setLocale(value)}
                      className={cn(
                        "flex flex-1 items-center justify-center rounded-lg py-2 text-xs font-semibold transition-all",
                        locale === value
                          ? "bg-white text-brand-primaryDark shadow-sm dark:bg-white/15 dark:text-brand-primaryDark"
                          : "text-black/35 hover:text-black/55 dark:text-white/35 dark:hover:text-white/55",
                      )}
                    >
                      {native}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Notifications ── */}
          <div>
            <GroupLabel>{s.notifications}</GroupLabel>
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white/70 dark:border-white/10 dark:bg-white/5">
              <div className="flex items-center justify-between gap-4 px-4 py-3.5">
                <div className="flex items-center gap-3 min-w-0">
                  <RowIcon icon={Bell} />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-brand-primaryDark">{s.practiceReminders}</p>
                    <p className="text-xs text-black/45 dark:text-white/40">{s.remindersSubtitle}</p>
                  </div>
                </div>
                {/* placeholder toggle — not wired, notifications not yet implemented */}
                <div className="relative h-7 w-12 shrink-0 rounded-full bg-black/20 dark:bg-white/15">
                  <span className="absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow" />
                </div>
              </div>
            </div>
          </div>

          {/* ── Data & Privacy ── */}
          <div>
            <GroupLabel>{s.data}</GroupLabel>
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white/70 divide-y divide-black/8 dark:border-white/10 dark:bg-white/5 dark:divide-white/8">
              <button
                className="flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors active:bg-black/5 dark:active:bg-white/5"
                onClick={() => {
                  if (confirm(s.clearHistory + "?")) {
                    localStorage.removeItem("exit-exam-history");
                  }
                }}
              >
                <RowIcon icon={Trash2} color="error" />
                <span className="flex-1 text-sm font-medium text-brand-error">{s.clearHistory}</span>
                <ChevronRight size={15} className="shrink-0 text-black/25 dark:text-white/25" />
              </button>
              <button
                className="flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors active:bg-black/5 dark:active:bg-white/5"
                onClick={() => {
                  if (confirm(s.resetSettings + "?")) {
                    setTheme("system");
                    setLocale("en");
                  }
                }}
              >
                <RowIcon icon={RotateCcw} color="muted" />
                <span className="flex-1 text-sm font-medium text-black/65 dark:text-white/60">{s.resetSettings}</span>
                <ChevronRight size={15} className="shrink-0 text-black/25 dark:text-white/25" />
              </button>
            </div>
          </div>

          {/* ── About ── */}
          <div>
            <GroupLabel>{s.about}</GroupLabel>
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white/70 divide-y divide-black/8 dark:border-white/10 dark:bg-white/5 dark:divide-white/8">
              {[
                { icon: Layers, label: s.app, value: "Exit Exam Studio" },
                { icon: Hash, label: s.version, value: "1.0.0" },
                { icon: Info, label: s.purpose, value: s.purposeValue },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 px-4 py-3.5">
                  <RowIcon icon={Icon} color="muted" />
                  <span className="flex-1 text-sm font-medium text-brand-primaryDark">{label}</span>
                  <span className="text-sm text-black/40 dark:text-white/35">{value}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-center text-[11px] text-black/30 dark:text-white/25">{s.free}</p>
          </div>

        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
