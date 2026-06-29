"use client";

import { motion } from "framer-motion";
import { Compass, Fish, Layers3, Radar, ThermometerSun } from "lucide-react";

import { Button } from "@/components/ui/button";

const tools = [
  { label: "Explore", icon: Compass, active: true },
  { label: "Layers", icon: Layers3 },
  { label: "Marine Life", icon: Fish },
  { label: "Conditions", icon: ThermometerSun },
  { label: "Signals", icon: Radar },
];

export function Sidebar() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-lg border border-white/10 bg-white/[0.065] p-3 shadow-xl shadow-cyan-950/20 backdrop-blur-xl"
    >
      <nav
        aria-label="Ocean exploration tools"
        className="grid gap-2 sm:grid-cols-5 lg:grid-cols-1"
      >
        {tools.map((tool) => {
          const Icon = tool.icon;

          return (
            <Button
              key={tool.label}
              variant={tool.active ? "secondary" : "ghost"}
              className="h-12 justify-start gap-3 px-3 text-cyan-50 hover:bg-white/10 hover:text-white sm:justify-center lg:justify-start"
            >
              <Icon className="size-4" aria-hidden="true" />
              <span className="hidden lg:inline">{tool.label}</span>
            </Button>
          );
        })}
      </nav>

      <div className="mt-4 hidden rounded-md border border-cyan-100/10 bg-cyan-100/[0.06] p-4 lg:block">
        <p className="text-xs uppercase text-cyan-100/55">Mode</p>
        <p className="mt-1 text-sm font-medium text-cyan-50">
          Global discovery
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          Data layers are staged for future marine APIs and biodiversity
          overlays.
        </p>
      </div>
    </motion.aside>
  );
}
