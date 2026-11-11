"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Theme = "light" | "dark" | "system";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "system",
  setTheme: () => {},
  resolvedTheme: "light",
});

function getResolved(theme: Theme): "light" | "dark" {
  if (theme !== "system") return theme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  function applyTheme(t: Theme) {
    const resolved = getResolved(t);
    document.documentElement.classList.toggle("dark", resolved === "dark");
    setResolvedTheme(resolved);
  }

  // read persisted preference on mount
  useEffect(() => {
    const stored = localStorage.getItem("exit-theme") as Theme | null;
    const initial: Theme = stored === "light" || stored === "dark" || stored === "system"
      ? stored
      : "system";
    setThemeState(initial);
    applyTheme(initial);

    // listen for OS-level changes when in system mode
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    function onSystemChange() {
      setThemeState((current) => {
        if (current === "system") applyTheme("system");
        return current;
      });
    }
    mq.addEventListener("change", onSystemChange);
    return () => mq.removeEventListener("change", onSystemChange);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function setTheme(next: Theme) {
    setThemeState(next);
    localStorage.setItem("exit-theme", next);
    applyTheme(next);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
