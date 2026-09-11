import { Download, Mail } from "lucide-react";
import { SITE } from "@/app/lib/content";
import { LinkedInIcon } from "./brand-icons";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Contact() {
  return (
    <section
      id="contacto"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <SectionHeading
        index="04"
        title="Contacto"
        subtitle="Abierto a propuestas donde el análisis y el desarrollo trabajen juntos."
      />

      <Reveal>
        <div className="rounded-2xl border border-white/10 bg-surface/60 p-8 sm:p-10">
          <p className="font-mono text-sm text-accent">$ ./contact --start</p>
          <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
            Construyamos algo sólido.
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
            Si tenés un proyecto que necesita pasar de la idea y las reglas de
            negocio a un sistema en producción, hablemos.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={SITE?.cvPath}
              download
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-accent-strong"
            >
              <Download className="h-4 w-4" />
              Descargar CV
            </a>
            <a
              href={`mailto:${SITE?.email}`}
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.02] px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-accent/40 hover:text-white"
            >
              <Mail className="h-4 w-4" />
              Enviar email
            </a>
            <a
              href={SITE?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.02] px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-accent/40 hover:text-white"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </div>

          <p className="mt-6 font-mono text-xs text-muted">
            {SITE?.email} · {SITE?.location}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
