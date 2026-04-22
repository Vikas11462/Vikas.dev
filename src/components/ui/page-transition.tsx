"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

/**
 * PageTransition — Wraps page content in a smooth fade+lift entrance animation.
 *
 * Applied globally in layout.tsx so every route change gets the transition.
 * Uses framer-motion to trigger on route changes.
 *
 * Specs:
 *   initial: opacity 0, y +12px
 *   animate: opacity 1, y 0
 *   duration: 0.45s
 *   ease: [0.16, 1, 0.3, 1] — premium spring ease-out
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      }}
      // Don't affect layout — full width/height passthrough
      style={{ minHeight: "100%" }}
    >
      {children}
    </motion.div>
  );
}
