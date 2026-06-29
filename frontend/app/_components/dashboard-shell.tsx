"use client";

import { motion } from "framer-motion";

import { GlobeContainer } from "@/components/dashboard/globe-container";
import { InfoPanel } from "@/components/dashboard/info-panel";
import { LoadingOverlay } from "@/components/dashboard/loading-overlay";
import { Navbar } from "@/components/dashboard/navbar";
import { Sidebar } from "@/components/dashboard/sidebar";

export function DashboardShell() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_12%,rgba(20,184,166,0.18),transparent_26%),radial-gradient(circle_at_84%_18%,rgba(56,189,248,0.12),transparent_28%),linear-gradient(180deg,#020617_0%,#031525_48%,#04111f_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="grid flex-1 gap-4 p-4 pt-2 lg:grid-cols-[280px_minmax(0,1fr)_340px] lg:gap-5 lg:p-5 lg:pt-3"
        >
          <Sidebar />

          <section className="relative min-h-[52vh] overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] shadow-2xl shadow-cyan-950/25 backdrop-blur-xl lg:min-h-0">
            <GlobeContainer />
            <LoadingOverlay />
          </section>

          <InfoPanel />
        </motion.div>
      </div>
    </main>
  );
}
