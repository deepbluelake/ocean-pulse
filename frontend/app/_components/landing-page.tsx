"use client";

import { motion } from "framer-motion";
import { ArrowRight, Gauge, Globe2, Waves } from "lucide-react";

import { Button } from "@/components/ui/button";

const signals = [
  {
    label: "Ocean state",
    value: "Live-ready",
    icon: Waves,
  },
  {
    label: "Geospatial layer",
    value: "Globe-ready",
    icon: Globe2,
  },
  {
    label: "Operational posture",
    value: "API-first",
    icon: Gauge,
  },
];

export function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <section className="relative flex min-h-screen items-center px-6 py-10 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,116,144,0.16),transparent_34%),radial-gradient(circle_at_82%_22%,rgba(16,185,129,0.22),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0),rgba(8,47,73,0.08))]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(180deg,transparent,rgba(8,47,73,0.12))]" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="mb-5 inline-flex items-center rounded-full border border-border bg-white/70 px-3 py-1 text-sm font-medium text-muted-foreground shadow-sm backdrop-blur">
              OceanPulse platform foundation
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-normal text-foreground sm:text-6xl lg:text-7xl">
              OceanPulse
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              A modern interface foundation for marine intelligence, built to
              support real-time APIs, geospatial layers, and an interactive
              globe experience when the data layer is ready.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="gap-2">
                Explore foundation
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button size="lg" variant="secondary">
                View system status
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
            className="relative min-h-[420px] overflow-hidden rounded-lg border border-white/50 bg-slate-950 shadow-2xl shadow-cyan-950/20"
            aria-label="Abstract ocean monitoring preview"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(34,211,238,0.36),transparent_25%),linear-gradient(145deg,rgba(6,182,212,0.12),rgba(15,23,42,0.96)_52%,rgba(20,83,45,0.56))]" />
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/35" />
            <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-200/15" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-100/30"
            />
            <div className="absolute inset-x-6 bottom-6 grid gap-3 sm:grid-cols-3">
              {signals.map((signal) => {
                const Icon = signal.icon;

                return (
                  <div
                    key={signal.label}
                    className="rounded-md border border-white/10 bg-white/10 p-4 text-white backdrop-blur"
                  >
                    <Icon
                      className="mb-3 size-5 text-cyan-100"
                      aria-hidden="true"
                    />
                    <p className="text-xs uppercase text-cyan-100/75">
                      {signal.label}
                    </p>
                    <p className="mt-1 font-medium">{signal.value}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
