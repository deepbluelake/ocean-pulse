"use client";

import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";

export function GlobeContainer() {
  return (
    <div className="relative flex h-full min-h-[52vh] items-center justify-center overflow-hidden p-6 lg:min-h-full">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.2),transparent_32%),linear-gradient(145deg,rgba(15,23,42,0),rgba(8,47,73,0.34))]" />
      <div className="absolute left-1/2 top-1/2 h-[min(72vw,620px)] w-[min(72vw,620px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100/10" />
      <div className="absolute left-1/2 top-1/2 h-[min(58vw,500px)] w-[min(58vw,500px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100/15" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[min(48vw,420px)] w-[min(48vw,420px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-100/25"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative flex aspect-square w-[min(70vw,420px)] max-w-full flex-col items-center justify-center rounded-full border border-cyan-100/20 bg-slate-950/70 text-center shadow-[inset_0_0_70px_rgba(34,211,238,0.16),0_0_90px_rgba(8,145,178,0.22)] backdrop-blur"
      >
        <Globe2 className="mb-4 size-12 text-cyan-100/75" aria-hidden="true" />
        <p className="text-lg font-semibold text-white sm:text-2xl">
          3D Earth Loading...
        </p>
        <p className="mt-3 max-w-xs text-sm leading-6 text-cyan-100/55">
          Globe rendering surface prepared for React Three Fiber.
        </p>
      </motion.div>
    </div>
  );
}
