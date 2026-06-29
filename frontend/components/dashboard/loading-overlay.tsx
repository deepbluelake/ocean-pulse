"use client";

import { motion } from "framer-motion";

export function LoadingOverlay() {
  return (
    <div className="pointer-events-none absolute inset-x-4 top-4 z-10 flex justify-center sm:justify-end">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.25, ease: "easeOut" }}
        className="rounded-md border border-cyan-100/15 bg-slate-950/55 px-4 py-2 text-sm text-cyan-50 shadow-lg shadow-cyan-950/20 backdrop-blur-xl"
      >
        Initializing globe surface
      </motion.div>
    </div>
  );
}
