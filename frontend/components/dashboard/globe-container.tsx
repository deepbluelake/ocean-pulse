"use client";

import { motion } from "framer-motion";

import { InteractiveEarth } from "@/components/globe/interactive-earth";

export function GlobeContainer() {
  return (
    <div className="relative h-full min-h-[52vh] overflow-hidden bg-slate-950 lg:min-h-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="h-full min-h-[52vh] lg:min-h-full"
      >
        <InteractiveEarth />
      </motion.div>
    </div>
  );
}
