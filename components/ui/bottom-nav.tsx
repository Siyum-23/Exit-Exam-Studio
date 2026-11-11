"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Clock, Settings } from "lucide-react";

import { useTranslation } from "@/lib/i18n/context";
import { cn } from "@/lib/utils/cn";

export function BottomNav() {
  const pathname = usePathname();
  const { t } = useTranslation();

  const NAV_ITEMS = [
    { label: t.nav.home, href: "/", icon: Home },
    { label: t.nav.exams, href: "/departments", icon: BookOpen },
    { label: t.nav.history, href: "/history", icon: Clock },
    { label: t.nav.settings, href: "/settings", icon: Settings },
  ] as const;

  return (
    <nav
      className="fixed left-4 right-4 z-50 md:hidden"
      style={{ bottom: "max(1rem, calc(env(safe-area-inset-bottom) + 0.5rem))" }}
    >
      <div className="flex items-center rounded-full bg-brand-primaryDark px-2 py-2 dark:bg-[#1e1108]">
        {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);

          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex flex-1 items-center justify-center transition-all duration-200",
                isActive ? "gap-2 rounded-full bg-white px-4 py-2" : "py-2.5",
              )}
            >
              <Icon
                size={20}
                strokeWidth={isActive ? 2.5 : 2}
                /* active icon sits on white — always use the original dark brand color */
                className={isActive ? "shrink-0 text-[#4e2f20]" : "text-white/60"}
                aria-hidden
              />
              {isActive && (
                <span className="whitespace-nowrap text-xs font-semibold text-[#4e2f20]">
                  {label}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
