"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * useActiveSection — Tracks which section ID is currently in the viewport.
 *
 * Uses IntersectionObserver with a top-bias rootMargin so the section that
 * occupies the upper portion of the screen is considered "active". Debounced
 * via a ref-based approach to prevent flicker at section boundaries.
 *
 * Only runs on the home page ("/") — returns "" on all other routes.
 */
export function useActiveSection(sectionIds: string[]): string {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("");
  // Keep a Map of which sections are intersecting and their ratios
  const intersectingMap = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    // Only track sections on the home page
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id") || "";
          if (entry.isIntersecting) {
            intersectingMap.current.set(id, entry.intersectionRatio);
          } else {
            intersectingMap.current.delete(id);
          }
        });

        // Pick the section with the highest intersection ratio currently visible
        let best = "";
        let bestRatio = 0;
        sectionIds.forEach((id) => {
          const ratio = intersectingMap.current.get(id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        });

        if (best) setActiveSection(best);
      },
      {
        // Top bias: sections are "active" once they enter the upper 60% of viewport
        rootMargin: "-10% 0px -40% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
      }
    );

    // Observe all sections
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname, sectionIds]);

  return activeSection;
}
