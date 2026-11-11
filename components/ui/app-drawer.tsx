"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu, X, ArrowLeft, HeartHandshake, Shield, FileText,
  MessageCircle, Github, ExternalLink,
} from "lucide-react";

import { SiteLogo } from "@/components/branding/site-logo";
import { useTranslation } from "@/lib/i18n/context";

const BOTTOM_NAV_ROUTES = ["/", "/departments", "/history", "/settings"];

export function AppDrawer() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useTranslation();
  const isBottomNavScreen = BOTTOM_NAV_ROUTES.includes(pathname);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const INFO_LINKS = [
    { href: "/support",   label: t.drawer.support,  icon: MessageCircle, external: false },
    { href: "/privacy",   label: t.drawer.privacy,  icon: Shield,        external: false },
    { href: "/terms",     label: t.drawer.terms,    icon: FileText,      external: false },
    { href: "https://jami.bio/abuki/tip",                label: t.drawer.supportUs, icon: HeartHandshake, external: true },
    { href: "https://github.com/abuki43/Exit-Exam-Studio", label: t.drawer.github,    icon: Github,         external: true },
  ] as const;

  return (
    <>
      {isBottomNavScreen ? (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="fixed left-4 top-4 z-40 flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/80 shadow-sm backdrop-blur transition hover:border-brand-primary/30 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/15"
        >
          <Menu size={18} strokeWidth={2} className="text-brand-primaryDark" />
        </button>
      ) : (
        <button
          onClick={() => router.back()}
          aria-label="Go back"
          className="fixed left-4 top-4 z-40 flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/80 shadow-sm backdrop-blur transition hover:border-brand-primary/30 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/15 md:hidden"
        >
          <ArrowLeft size={18} strokeWidth={2} className="text-brand-primaryDark" />
        </button>
      )}

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
            />

            <motion.aside
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed left-0 top-0 z-50 flex h-full w-72 max-w-[85vw] flex-col bg-[var(--color-bg)] shadow-2xl"
              style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
            >
              <div className="flex items-center justify-between border-b border-black/10 px-5 py-4 dark:border-white/10">
                <SiteLogo linked size="sm" />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white/70 text-black/50 transition hover:text-brand-primaryDark dark:border-white/10 dark:bg-white/8 dark:text-white/50 dark:hover:text-brand-primaryDark"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-4 py-5">
                <nav>
                  <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/35 dark:text-white/30">
                    {t.drawer.infoLegal}
                  </p>
                  <ul className="space-y-0.5">
                    {INFO_LINKS.map(({ href, label, icon: Icon, external }) => (
                      <li key={href}>
                        <Link
                          href={href}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noopener noreferrer" : undefined}
                          className="flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium text-black/70 transition-colors hover:bg-black/5 hover:text-brand-primaryDark dark:text-white/60 dark:hover:bg-white/8 dark:hover:text-brand-primaryDark"
                        >
                          <Icon size={17} strokeWidth={1.75} className="shrink-0" />
                          <span className="flex-1">{label}</span>
                          {external && (
                            <ExternalLink size={13} className="shrink-0 text-black/30 dark:text-white/25" />
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="border-t border-black/8 px-5 py-4 dark:border-white/8">
                <p className="text-[11px] text-black/35 dark:text-white/30">{t.drawer.footer}</p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
