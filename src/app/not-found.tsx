"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Home, ArrowLeft } from "lucide-react";

/**
 * NotFound — Creative 404 page.
 * Maintains the portfolio's design language with ambient effects.
 */
export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden">
        {/* Atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(232,168,56,0.06),transparent_70%)]" />

        <div className="relative z-10 text-center px-6">
          {/* Big 404 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-[8rem] md:text-[12rem] font-bold leading-none text-foreground/[0.06] select-none">
              404
            </h1>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 md:mt-12"
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4">
              Lost in the <span className="text-gradient">void</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-10">
              The page you&apos;re looking for doesn&apos;t exist or was moved. 
              Let&apos;s get you back on track.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold transition-all hover:brightness-110 btn-glow"
              >
                <Home size={16} />
                Go Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-white/[0.06] hover:border-white/20"
              >
                <ArrowLeft size={16} />
                Go Back
              </button>
            </div>
          </motion.div>

          {/* Decorative floating shapes */}
          <motion.div
            animate={{ y: [-8, 8, -8], rotate: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-[10%] w-16 h-16 rounded-xl border border-primary/10 bg-primary/[0.03] rotate-12 hidden md:block"
          />
          <motion.div
            animate={{ y: [6, -6, 6], rotate: [0, -3, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-[15%] w-10 h-10 rounded-full border border-white/[0.06] bg-white/[0.02] hidden md:block"
          />
        </div>
      </main>
    </>
  );
}
