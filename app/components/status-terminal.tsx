"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SITE } from "@/app/lib/content";

type Line =
  | { kind: "cmd"; text: string }
  | { kind: "out"; text: string };

const LINES: Line[] = [
  { kind: "cmd", text: "whoami" },
  { kind: "out", text: `${SITE.name} — ${SITE.role}` },
  { kind: "cmd", text: "systemctl status developer.service" },
];

export function StatusTerminal() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(reduceMotion ? LINES.length : 0);

  useEffect(() => {
    if (reduceMotion) return;
    if (visible >= LINES.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), visible === 0 ? 500 : 650);
    return () => clearTimeout(t);
  }, [visible, reduceMotion]);

  return (
    <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-surface/80 shadow-2xl shadow-black/40 backdrop-blur-sm">
      <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.03] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <span className="ml-3 font-mono text-xs text-muted">
          lucas@portfolio: ~/status
        </span>
      </div>

      <div className="space-y-1.5 p-4 font-mono text-[13px] leading-relaxed sm:p-5">
        {LINES.slice(0, visible).map((line, i) => (
          <motion.p
            key={i}
            initial={reduceMotion ? false : { opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className={line.kind === "cmd" ? "text-slate-200" : "text-muted"}
          >
            {line.kind === "cmd" ? (
              <>
                <span className="text-accent-2">➜</span>{" "}
                <span className="text-accent">~</span>{" "}
                <span className="font-bold text-white">{line.text}</span>
              </>
            ) : (
              <>{line.text}</>
            )}
          </motion.p>
        ))}

        <p className="text-white terminal-cursor" aria-hidden="true" />
      </div>
    </div>
  );
}
