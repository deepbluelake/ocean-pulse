"use client";

import { motion } from "framer-motion";
import { Bell, Search, Waves } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="mx-4 mt-4 flex h-16 items-center justify-between rounded-lg border border-white/10 bg-white/[0.065] px-4 shadow-lg shadow-cyan-950/20 backdrop-blur-xl lg:mx-5"
    >
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-md border border-cyan-200/20 bg-cyan-300/10 text-cyan-100">
          <Waves className="size-5" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-base font-semibold text-white">
            OceanPulse
          </p>
          <p className="hidden text-xs text-cyan-100/60 sm:block">
            Interactive ocean exploration platform
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          aria-label="Search"
          size="icon"
          variant="ghost"
          className="text-cyan-100/80 hover:bg-white/10 hover:text-white"
        >
          <Search className="size-4" aria-hidden="true" />
        </Button>
        <Button
          aria-label="Notifications"
          size="icon"
          variant="ghost"
          className="text-cyan-100/80 hover:bg-white/10 hover:text-white"
        >
          <Bell className="size-4" aria-hidden="true" />
        </Button>
      </div>
    </motion.header>
  );
}
