"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Activity, CircleCheck, Cpu, MapPin } from "lucide-react";
import { SITE } from "@/app/lib/content";

type Line =
  | { kind: "cmd"; text: string }
  | { kind: "out"; text: string }
  | { kind: "ok"; text: string };

const LINES: Line[] = [
  { kind: "cmd", text: "whoami" },
  { kind: "out", text: `${SITE.name} — ${SITE.role}` },
  { kind: "cmd", text: "systemctl status developer.service" },
  { kind: "ok", text: "active (running) — full-stack pipeline online" },
  { kind: "cmd", text: "cat status.json" },
];

function useUptime() {
  const startRef = useRef<number | null>(null);
  const [elapsed, setElapsed] = useState(0);
  useEffect(() => {
    startRef.current = Date.now();
    const id = setInterval(() => {
      if (startRef.current !== null) {
        setElapsed(Math.floor((Date.now() - startRef.current) / 1000));
      }
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const s = elapsed;
  const hh = String(Math.floor(s / 3600)).padStart(2, "0");
  const mm = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}

export function StatusTerminal() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(reduceMotion ? LINES.length : 0);
  const uptime = useUptime();

  useEffect(() => {
    if (reduceMotion) return;
    if (visible >= LINES.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), visible === 0 ? 500 : 650);
    return () => clearTimeout(t);
  }, [visible, reduceMotion]);

  const metricsReady = visible >= LINES.length;

  return (
    <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-surface/80 shadow-2xl shadow-black/40 backdrop-blur-sm">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.03] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <span className="ml-3 font-mono text-xs text-muted">
          lucas@portfolio: ~/status
        </span>
      </div>

      {/* Body */}
      <div className="space-y-1.5 p-4 font-mono text-[13px] leading-relaxed sm:p-5">
        {LINES.slice(0, visible).map((line, i) => (
          <motion.p
            key={i}
            initial={reduceMotion ? false : { opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className={
              line.kind === "cmd"
                ? "text-slate-200"
                : line.kind === "ok"
                  ? "text-accent"
                  : "text-muted"
            }
          >
            {line.kind === "cmd" ? (
              <>
                <span className="text-accent-2">➜</span>{" "}
                <span className="text-accent">~</span>{" "}
                <span className="text-white">{line.text}</span>
              </>
            ) : line.kind === "ok" ? (
              <>
                <CircleCheck className="mr-1.5 inline h-3.5 w-3.5 -translate-y-px" />
                {line.text}
              </>
            ) : (
              <>{line.text}</>
            )}
          </motion.p>
        ))}

        {!metricsReady ? (
          <p className="text-white terminal-cursor" aria-hidden="true" />
        ) : (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-3 rounded-lg border border-white/10 bg-black/30 p-4"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-muted">
                system.status
              </span>
              <span className="flex items-center gap-1.5 text-xs text-accent">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                {SITE.status}
              </span>
            </div>
            <dl className="grid grid-cols-1 gap-2 text-[12.5px] sm:grid-cols-2">
              <Metric icon={<MapPin className="h-3.5 w-3.5" />} k="location" v={SITE.location} />
              <Metric icon={<Cpu className="h-3.5 w-3.5" />} k="focus" v="Full-stack · Data" />
              <Metric icon={<Activity className="h-3.5 w-3.5" />} k="load" v="requerimientos → producción" />
              <Metric icon={<CircleCheck className="h-3.5 w-3.5" />} k="uptime" v={uptime} mono />
            </dl>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function Metric({
  icon,
  k,
  v,
  mono,
}: {
  icon: React.ReactNode;
  k: string;
  v: string;
  mono?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-accent-2">{icon}</span>
      <span className="text-muted">{k}:</span>
      <span className={mono ? "tabular-nums text-slate-200" : "text-slate-200"}>
        {v}
      </span>
    </div>
  );
}
