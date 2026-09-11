import { Mail } from "lucide-react";
import { SITE } from "@/app/lib/content";
import { GitHubIcon, LinkedInIcon } from "./brand-icons";

export function Footer() {
  const year = new Date()?.getFullYear();

  return (
    <footer className="border-t border-white/5 bg-background/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-mono text-sm text-white">
            lucas<span className="text-accent">.barberis</span>
          </p>
          <p className="mt-1 text-xs text-muted">
            {SITE?.role} · {SITE?.location}
          </p>
          <p className="mt-2 font-mono text-[11px] text-muted/70">
            Construido con Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${SITE?.email}`}
            aria-label="Enviar email"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-muted transition-colors hover:border-accent/40 hover:text-white"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={SITE?.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-muted transition-colors hover:border-accent/40 hover:text-white"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/LucasBarberis04"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-muted transition-colors hover:border-accent/40 hover:text-white"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-white/5">
        <p className="mx-auto max-w-6xl px-4 py-4 text-center font-mono text-[11px] text-muted/70 sm:px-6 lg:px-8">
          © {year} {SITE?.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
