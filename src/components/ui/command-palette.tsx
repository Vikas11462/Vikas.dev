"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, ArrowRight, Hash, Folder, Globe } from "lucide-react";
import { commandItems } from "@/data/content";
import { useRouter } from "next/navigation";

/**
 * CommandPalette — ⌘K / Ctrl+K keyboard-driven navigation.
 * Fuzzy match across sections, projects, and external links.
 * Full keyboard navigation with ↑ ↓ Enter Esc support.
 */
export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Filter items based on query
  const filtered = useMemo(() => {
    if (!query.trim()) return commandItems;
    const lower = query.toLowerCase();
    return commandItems.filter(
      (item) =>
        item.label.toLowerCase().includes(lower) ||
        item.section.toLowerCase().includes(lower)
    );
  }, [query]);

  // Group filtered items by section
  const grouped = useMemo(() => {
    const groups: Record<string, typeof commandItems> = {};
    filtered.forEach((item) => {
      if (!groups[item.section]) groups[item.section] = [];
      groups[item.section].push(item);
    });
    return groups;
  }, [filtered]);

  // Reset active index when filter changes
  useEffect(() => setActiveIndex(0), [query]);

  // Keyboard shortcut to open
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Focus input on open
  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const executeAction = useCallback(
    (item: (typeof commandItems)[0]) => {
      setOpen(false);
      if ("external" in item && item.external) {
        window.open(item.action, "_blank");
      } else if (item.action.startsWith("#")) {
        // Scroll to section on the same page
        const el = document.querySelector(item.action);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          // Navigate home first, then scroll
          router.push("/" + item.action);
        }
      } else {
        router.push(item.action);
      }
    },
    [router]
  );

  // Keyboard navigation within palette
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && filtered[activeIndex]) {
      e.preventDefault();
      executeAction(filtered[activeIndex]);
    }
  };

  const getSectionIcon = (section: string) => {
    switch (section) {
      case "Navigation":
        return <Hash size={14} />;
      case "Projects":
        return <Folder size={14} />;
      case "Social":
        return <Globe size={14} />;
      default:
        return <Hash size={14} />;
    }
  };

  let itemCounter = 0;

  return (
    <>
      {/* Trigger hint in navbar */}
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 h-9 px-3 rounded-lg border border-white/[0.06] bg-white/[0.02] text-xs text-muted-foreground hover:border-primary/20 hover:text-foreground transition-all"
        aria-label="Open command palette"
      >
        <Search size={13} />
        <span className="hidden lg:inline">Search...</span>
        <kbd className="ml-1 flex items-center gap-0.5 rounded border border-white/[0.08] bg-white/[0.03] px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground/60">
          <Command size={10} />K
        </kbd>
      </button>

      {/* The palette overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg mx-4 rounded-2xl border border-white/[0.08] bg-surface-elevated/95 backdrop-blur-2xl shadow-2xl shadow-black/40 overflow-hidden"
              onKeyDown={handleKeyDown}
            >
              {/* Search input */}
              <div className="flex items-center gap-3 border-b border-white/[0.06] px-5 py-4">
                <Search size={18} className="text-muted-foreground/60 flex-shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search pages, projects, links..."
                  className="flex-1 bg-transparent text-foreground text-sm placeholder:text-muted-foreground/40 outline-none"
                  autoComplete="off"
                  spellCheck={false}
                />
                <kbd className="flex items-center rounded border border-white/[0.08] bg-white/[0.03] px-1.5 py-0.5 text-[10px] text-muted-foreground/50 font-mono">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div className="max-h-[50vh] overflow-y-auto py-2 scrollbar-thin">
                {filtered.length === 0 ? (
                  <div className="px-5 py-8 text-center text-sm text-muted-foreground/60">
                    No results found for &ldquo;{query}&rdquo;
                  </div>
                ) : (
                  Object.entries(grouped).map(([section, items]) => (
                    <div key={section}>
                      <div className="px-5 py-2">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/40">
                          {section}
                        </span>
                      </div>
                      {items.map((item) => {
                        const currentIndex = itemCounter++;
                        const isActive = currentIndex === activeIndex;
                        return (
                          <button
                            key={item.id}
                            onClick={() => executeAction(item)}
                            onMouseEnter={() => setActiveIndex(currentIndex)}
                            className={`flex w-full items-center gap-3 px-5 py-2.5 text-sm transition-colors ${
                              isActive
                                ? "bg-primary/10 text-foreground"
                                : "text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            <span className={isActive ? "text-primary" : "text-muted-foreground/40"}>
                              {getSectionIcon(item.section)}
                            </span>
                            <span className="flex-1 text-left">{item.label}</span>
                            {isActive && (
                              <ArrowRight size={14} className="text-primary" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  ))
                )}
              </div>

              {/* Footer hint */}
              <div className="flex items-center gap-4 border-t border-white/[0.06] px-5 py-3 text-[10px] text-muted-foreground/40">
                <span className="flex items-center gap-1">
                  <kbd className="rounded border border-white/[0.08] px-1 py-0.5 font-mono">↑↓</kbd>
                  Navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="rounded border border-white/[0.08] px-1 py-0.5 font-mono">↵</kbd>
                  Select
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="rounded border border-white/[0.08] px-1 py-0.5 font-mono">esc</kbd>
                  Close
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
