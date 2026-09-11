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
        <div className="rounded-2xl border border-accent/20 bg-surface/70 p-8 shadow-[0_0_40px_rgba(110,231,247,0.06),inset_0_0_0_1px_rgba(110,231,247,0.08)] sm:p-10">
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
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(110,231,247,0.25)] transition-all hover:bg-accent-strong hover:shadow-[0_0_28px_rgba(110,231,247,0.35)]"
            >
              <Download className="h-4 w-4" />
              Descargar CV
            </a>
            <a
              href={`mailto:${SITE?.email}`}
              className="inline-flex items-center gap-2 rounded-lg border border-accent/25 bg-accent/[0.06] px-5 py-3 text-sm font-semibold text-accent transition-all hover:border-accent/50 hover:bg-accent/[0.12] hover:text-white"
            >
              <Mail className="h-4 w-4" />
              Enviar email
            </a>
            <a
              href={SITE?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-accent-2/25 bg-accent-2/[0.06] px-5 py-3 text-sm font-semibold text-accent-2 transition-all hover:border-accent-2/50 hover:bg-accent-2/[0.12] hover:text-white"
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
