import { GitBranch, Layers, ShieldCheck, Workflow } from "lucide-react";
import { SITE } from "@/app/lib/content";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const PILLARS = [
  {
    icon: Workflow,
    title: "Análisis de negocio",
    detail: "Levantamiento de requerimientos y reglas de negocio como base del diseño.",
  },
  {
    icon: Layers,
    title: "Arquitectura relacional",
    detail: "Modelado de datos y arquitectura de capas pensada para escalar.",
  },
  {
    icon: ShieldCheck,
    title: "Robustez en producción",
    detail: "Validaciones consistentes en front y back, y diagnóstico de fallas reales.",
  },
  {
    icon: GitBranch,
    title: "Entrega iterativa",
    detail: "Git/GitHub y metodologías ágiles para iterar con control.",
  },
];

export function About() {
  return (
    <section id="perfil" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <SectionHeading index="01" title="Perfil" subtitle="Sobre mí" />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <p className="text-lg leading-relaxed text-slate-300">{SITE.about}</p>
          <p className="mt-6 font-mono text-sm leading-relaxed text-muted">
            <span className="text-accent">const</span> enfoque ={" "}
            <span className="text-accent-2">
              &quot;entender el problema antes de escribir la solución&quot;
            </span>
            ;
          </p>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="h-full rounded-xl border border-white/10 bg-surface/60 p-4 transition-colors hover:border-accent/30">
                <p.icon className="h-5 w-5 text-accent" />
                <h3 className="mt-3 text-sm font-semibold text-white">{p.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                  {p.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
