"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { SITE } from "@/app/lib/content";
import { StatusTerminal } from "./status-terminal";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };
  const item = reduceMotion
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
      };

  return (
    <section
      id="inicio"
      className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6 lg:px-8"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent/[0.08] px-3.5 py-1.5 font-mono text-xs text-accent shadow-[0_0_16px_rgba(110,231,247,0.12)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/80" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {SITE.status} · {SITE.location}
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl"
          >
            <span className="text-gradient">{SITE.name}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm text-muted sm:text-base"
          >
            <span className="text-gradient-subtle font-semibold">{SITE.role}</span>
            <span className="text-white/25">/</span>
            <span className="text-foreground/70">{SITE.altRole}</span>
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/75"
          >
            {SITE.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a
              href="/CV_Lucas_Barberis.pdf"
              download="CV_Lucas_Barberis.pdf"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(110,231,247,0.25)] transition-all hover:bg-accent-strong hover:shadow-[0_0_28px_rgba(110,231,247,0.35)]"
            >
              <Download className="h-4 w-4" />
              Descargar CV
            </a>
            <a
              href="#proyectos"
              className="group inline-flex items-center gap-2 rounded-lg border border-accent/25 bg-accent/[0.06] px-5 py-3 text-sm font-semibold text-accent transition-all hover:border-accent/50 hover:bg-accent/[0.12] hover:text-white"
            >
              Ver proyectos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 flex items-center gap-2 font-mono text-xs text-muted"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent-2" />
            Del levantamiento de requerimientos al deploy y el debugging en
            producción.
          </motion.p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <StatusTerminal />
        </motion.div>
      </div>
    </section>
  );
}
