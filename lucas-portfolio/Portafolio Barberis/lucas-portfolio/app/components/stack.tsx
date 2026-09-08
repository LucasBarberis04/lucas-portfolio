import { Code2, Database, Server, Workflow, type LucideIcon } from "lucide-react";
import { STACK } from "@/app/lib/content";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const ICONS: Record<string, LucideIcon> = {
  Server,
  Database,
  Code2,
  Workflow,
};

export function Stack() {
  return (
    <section
      id="stack"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <SectionHeading
        index="02"
        title="Stack tecnológico"
        subtitle="Herramientas y metodologías que uso a lo largo del ciclo de desarrollo."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {STACK.map((cat, i) => {
          const Icon = ICONS[cat.icon] ?? Code2;
          return (
            <Reveal key={cat.id} delay={i * 0.07} as="article">
              <div className="group h-full rounded-2xl border border-white/10 bg-surface/60 p-6 transition-colors hover:border-accent/30 hover:bg-surface">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-semibold text-white">
                    {cat.title}
                  </h3>
                </div>

                <p className="mt-3 text-[13px] leading-relaxed text-muted">
                  {cat.blurb}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-slate-300 transition-colors group-hover:border-white/15"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
