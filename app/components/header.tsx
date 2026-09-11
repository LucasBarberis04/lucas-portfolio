"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, Terminal, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/app/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>(NAV_LINKS[0].id);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-accent/10 bg-background/85 backdrop-blur-md shadow-[0_1px_24px_rgba(110,231,247,0.06)]"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="group flex items-center gap-2 font-mono text-sm font-medium text-white"
        >
          <Terminal className="h-4 w-4 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:drop-shadow-[0_0_6px_rgba(110,231,247,0.7)]" />
          <span>lucas</span>
          <span className="text-accent">.barberis</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`relative rounded-md px-3 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
                  active === link.id
                    ? "text-accent" :"text-muted hover:text-foreground"
                }`}
              >
                {link.label}
                {active === link.id ? (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-0.5 h-px bg-gradient-to-r from-accent to-accent-2"
                    style={{ boxShadow: "0 0 6px rgba(110,231,247,0.6)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : null}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={SITE.cvPath}
            download
            className="hidden items-center gap-2 rounded-md border border-accent/35 bg-accent/[0.08] px-3 py-2 font-mono text-xs font-medium text-accent transition-all hover:bg-accent/[0.15] hover:shadow-[0_0_12px_rgba(110,231,247,0.15)] sm:inline-flex"
          >
            <Download className="h-3.5 w-3.5" />
            CV
          </a>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-muted hover:border-accent/30 hover:text-accent md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-b border-accent/10 bg-background/95 backdrop-blur-md md:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-3 py-2.5 font-mono text-sm ${
                      active === link.id
                        ? "bg-accent/10 text-accent shadow-[inset_0_0_0_1px_rgba(110,231,247,0.2)]"
                        : "text-muted hover:bg-white/5 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={SITE.cvPath}
                  download
                  onClick={() => setOpen(false)}
                  className="mt-1 flex items-center gap-2 rounded-md border border-accent/35 bg-accent/10 px-3 py-2.5 font-mono text-sm font-medium text-accent"
                >
                  <Download className="h-4 w-4" />
                  Descargar CV
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
