import { afterEach, describe, expect, it } from "vitest";

import { exportStorageBackup, importStorageBackup } from "@/lib/storage/store";
import { STORAGE_KEY } from "@/lib/storage/types";

const emptyStorage = {
  version: 2,
  sessions: {},
  history: [],
  preferences: {
    defaultMode: "practice",
    timerPresets: [15, 30, 60, 90],
  },
};

afterEach(() => {
  localStorage.clear();
});

describe("local progress backups", () => {
  it("exports and restores saved browser data", () => {
    const savedStorage = {
      ...emptyStorage,
      sessions: { "biology-2016::practice": { currentIndex: 4 } },
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedStorage));

    const backup = exportStorageBackup();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(emptyStorage));

    expect(importStorageBackup(backup)).toBe(true);
    expect(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}")).toMatchObject(savedStorage);
  });

  it("rejects invalid files without replacing current browser data", () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(emptyStorage));

    expect(importStorageBackup('{"format":"not-an-exam-backup"}')).toBe(false);
    expect(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}")).toEqual(emptyStorage);
  });
});