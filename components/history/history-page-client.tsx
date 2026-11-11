"use client";

import { useEffect, useRef, useState, type ChangeEvent } from "react";
import Link from "next/link";
import { Download, Upload } from "lucide-react";

import type { PersistedAttempt } from "@/lib/exam/types";
import { LandingFooter } from "@/components/landing/landing-footer";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { exportStorageBackup, importStorageBackup, readHistory } from "@/lib/storage/store";
import { formatDateTime, formatDuration } from "@/lib/utils/time";

export function HistoryPageClient() {
  const [history, setHistory] = useState<PersistedAttempt[]>([]);
  const [backupMessage, setBackupMessage] = useState("");
  const backupInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setHistory(readHistory());
  }, []);

  function exportBackup() {
    const blob = new Blob([exportStorageBackup()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `exit-exam-studio-backup-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
    setBackupMessage("Backup downloaded to this device.");
  }

  async function importBackup(event: ChangeEvent<HTMLInputElement>) {
    const file = event.currentTarget.files?.[0];
    const input = event.currentTarget;
    if (!file) return;

    if (!window.confirm("Restoring a backup replaces saved sessions, history, and preferences in this browser. Continue?")) {
      input.value = "";
      return;
    }

    try {
      const imported = importStorageBackup(await file.text());
      if (!imported) {
        setBackupMessage("This file is not a valid Exit Exam Studio backup.");
        return;
      }

      setHistory(readHistory());
      setBackupMessage("Backup restored on this device.");
    } catch {
      setBackupMessage("Could not read the selected backup file.");
    } finally {
      input.value = "";
    }
  }

  return (
    <div className="page-bg min-h-screen flex flex-col">
      <main className="flex-1">
        <PageHeader
          title="History"
          eyebrow="Ethiopian Exit Exam Studio"
          subtitle="Review your previous attempts and keep improving."
          backHref="/departments"
          backLabel="Departments"
        />

        <section className="page-section mx-auto max-w-6xl">
          <div className="mb-6 flex flex-col gap-4 border-b border-black/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm text-black/60">
              Progress is saved in this browser. Export a backup to keep a copy or move it to another device.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button type="button" variant="secondary" onClick={exportBackup}>
                <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                Export backup
              </Button>
              <Button type="button" variant="ghost" onClick={() => backupInputRef.current?.click()}>
                <Upload className="mr-2 h-4 w-4" aria-hidden="true" />
                Import backup
              </Button>
              <input
                ref={backupInputRef}
                type="file"
                accept="application/json,.json"
                className="hidden"
                onChange={importBackup}
                aria-label="Choose a saved backup file"
              />
            </div>
          </div>
          <p className="mb-5 text-sm text-brand-primary" role="status" aria-live="polite">
            {backupMessage}
          </p>
          <div className="grid gap-6">
            {history.map((attempt) => (
              <div
                key={attempt.attemptId}
                className="rounded-3xl border border-black/10 bg-white/70 p-6 md:flex md:items-center md:justify-between"
              >
                <div>
                  <h2 className="text-lg font-semibold text-brand-primaryDark">
                    {attempt.departmentName} · {attempt.displayYear}{" "}
                    {attempt.variant === "model" ? "Model" : ""}
                  </h2>
                  <p className="mt-1 text-sm text-black/60">
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
            <p className="mt-8 text-sm text-black/60">No attempts yet. Start practicing!</p>
          )}
        </section>
      </main>
      <LandingFooter />
    </div>
  );
}
