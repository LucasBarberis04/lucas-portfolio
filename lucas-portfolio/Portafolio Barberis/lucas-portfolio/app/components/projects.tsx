"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, ExternalLink, FolderGit2 } from "lucide-react";
import { PROJECTS, type Project } from "@/app/lib/content";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Projects() {
  return (
    <section
      id="proyectos"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <SectionHeading
        index="03"
        title="Proyectos"
        subtitle="Trabajo destacado con foco en reglas de negocio, datos y producción."
      />

      <div className="space-y-5">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.08}>
            <ProjectCard project={project} defaultOpen={i === 0} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  defaultOpen,
}: {
  project: Project;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(Boolean(defaultOpen));
  const reduceMotion = useReducedMotion();
  const panelId = `project-panel-${project.id}`;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface/60 transition-colors hover:border-accent/25">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-start gap-4 p-6 text-left"
      >
        <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
          <FolderGit2 className="h-5 w-5" />
        </span>

        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-lg font-semibold text-white">
              {project.title}
            </span>
            {project.period ? (
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-muted">
                {project.period}
              </span>
            ) : null}
          </span>
          <span className="mt-1 block font-mono text-sm text-accent-2">
            {project.subtitle}
          </span>
          <span className="mt-2 block text-sm leading-relaxed text-muted">
            {project.summary}
          </span>
        </span>

        <ChevronDown
          className={`mt-1 h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${
            open ? "rotate-180 text-accent" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            key="content"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/5 px-6 pb-6 pt-5 sm:px-6">
              <p className="text-sm leading-relaxed text-slate-300">
                {project.context}
              </p>

              <div className="mt-5">
                <h4 className="font-mono text-xs uppercase tracking-widest text-muted">
                  Stack
                </h4>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-accent/20 bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="font-mono text-xs uppercase tracking-widest text-muted">
                  Logros técnicos
                </h4>
                <ul className="mt-3 space-y-3">
                  {project.achievements.map((a) => (
                    <li key={a.title} className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>
                        <span className="block text-sm font-medium text-white">
                          {a.title}
                        </span>
                        <span className="mt-0.5 block text-[13px] leading-relaxed text-muted">
                          {a.detail}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="font-mono text-xs uppercase tracking-widest text-muted">
                  Skills demostradas
                </h4>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {project.skills.map((s) => (
                    <li
                      key={s}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {project.links && project.links.length > 0 ? (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-white/15 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-accent/40 hover:text-white"
                    >
                      {l.label}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
