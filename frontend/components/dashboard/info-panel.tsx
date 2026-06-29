"use client";

import { motion } from "framer-motion";
import { Activity, MapPin, Waves } from "lucide-react";

const stats = [
  { label: "Marine APIs", value: "Pending", icon: Activity },
  { label: "Selection", value: "None", icon: MapPin },
  { label: "Ocean layers", value: "Ready", icon: Waves },
];

export function InfoPanel() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-lg border border-white/10 bg-white/[0.065] p-4 shadow-xl shadow-cyan-950/20 backdrop-blur-xl"
    >
      <div className="rounded-md border border-cyan-100/10 bg-slate-950/35 p-5">
        <p className="text-xs uppercase text-cyan-100/55">Explorer</p>
        <h2 className="mt-3 text-2xl font-semibold text-white">
          Click anywhere on Earth to explore.
        </h2>
        <p className="mt-4 text-sm leading-6 text-slate-300">
          Marine conditions and biodiversity insights will appear here once the
          API layer is connected.
        </p>
      </div>

      <div className="mt-4 grid gap-3">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.045] p-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-md bg-cyan-300/10 text-cyan-100">
                  <Icon className="size-4" aria-hidden="true" />
                </div>
                <span className="text-sm text-slate-300">{stat.label}</span>
              </div>
              <span className="text-sm font-medium text-white">
                {stat.value}
              </span>
            </div>
          );
        })}
      </div>
    </motion.aside>
  );
}
