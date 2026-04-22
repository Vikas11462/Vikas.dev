"use client";

import { motion } from "framer-motion";
import { MotionReveal } from "@/components/ui/motion-wrapper";
import { ExternalLink, Code2, TrendingUp, Target, Zap } from "lucide-react";

/**
 * ProblemSolving — Engineering proof section.
 * Shows DSA discipline, LeetCode stats, and current focus.
 * This converts "learning DSA" from a claim into a verifiable signal.
 */

const stats = [
  {
    value: "125+",
    label: "Problems Solved",
    sub: "LeetCode",
    icon: Code2,
    color: "text-primary",
  },
  {
    value: "56",
    label: "Easy",
    sub: "foundation solid",
    icon: Target,
    color: "text-green-400",
  },
  {
    value: "58",
    label: "Medium",
    sub: "core logic",
    icon: TrendingUp,
    color: "text-yellow-400",
  },
  {
    value: "11",
    label: "Hard",
    sub: "pushing limits",
    icon: Zap,
    color: "text-red-400",
  },
];

const currentFocus = [
  { topic: "Backtracking", status: "active", detail: "N-Queens, Subsets, Permutations" },
  { topic: "Dynamic Programming", status: "next", detail: "Memoization → Tabulation" },
  { topic: "Trees & Graphs", status: "active", detail: "BFS, DFS, Binary Search Trees" },
  { topic: "Arrays & Two Pointers", status: "done", detail: "Sliding window, prefix sums" },
];

const statusConfig: Record<string, { label: string; className: string }> = {
  active: { label: "In Progress", className: "text-primary border-primary/20 bg-primary/5" },
  next: { label: "Up Next", className: "text-yellow-400 border-yellow-400/20 bg-yellow-400/5" },
  done: { label: "Solid", className: "text-green-400 border-green-400/20 bg-green-400/5" },
};

export function ProblemSolving() {
  return (
    <section id="problem-solving" className="relative py-28 md:py-36 overflow-hidden">
      {/* Atmosphere */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header */}
        <MotionReveal className="mb-16 md:mb-20">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-4 block">
            Problem Solving
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            DSA & Competitive Programming
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Consistent algorithmic practice is non-negotiable for engineering excellence.
            Here&apos;s where I am and where I&apos;m going.
          </p>
        </MotionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left — Stats */}
          <MotionReveal direction="left">
            <div className="h-full p-6 md:p-8 rounded-2xl border border-white/[0.05] bg-white/[0.01]">
              <h3 className="font-display font-bold text-foreground mb-6 flex items-center gap-2">
                <Code2 size={18} className="text-primary" />
                LeetCode Stats
              </h3>

              {/* Stat grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="p-4 rounded-xl border border-white/[0.04] bg-white/[0.01]"
                  >
                    <s.icon size={16} className={`${s.color} mb-2`} />
                    <div className={`font-display text-2xl font-bold ${s.color}`}>{s.value}</div>
                    <div className="text-sm font-medium text-foreground/70">{s.label}</div>
                    <div className="text-[11px] text-muted-foreground/50 mt-0.5">{s.sub}</div>
                  </motion.div>
                ))}
              </div>

              {/* Progress visualization: Easy/Medium/Hard bar */}
              <div className="mb-6">
                <div className="flex justify-between text-[11px] font-mono text-muted-foreground/50 mb-2">
                  <span>Easy (56)</span>
                  <span>Medium (58)</span>
                  <span>Hard (11)</span>
                </div>
                <div className="h-2 w-full rounded-full overflow-hidden flex gap-0.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "44.8%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-green-400/70 rounded-l-full"
                  />
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "46.4%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-yellow-400/70"
                  />
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "8.8%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-red-400/70 rounded-r-full"
                  />
                </div>
              </div>

              {/* Language note */}
              <p className="text-xs text-muted-foreground/40 font-mono mb-6">
                {"// Primary language: C++ · Also solving in Java"}
              </p>

              {/* CTA */}
              <a
                href="https://leetcode.com/u/Vikas_sahu43/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
              >
                View LeetCode Profile
                <ExternalLink size={13} />
              </a>
            </div>
          </MotionReveal>

          {/* Right — Current Focus */}
          <MotionReveal direction="right">
            <div className="h-full p-6 md:p-8 rounded-2xl border border-white/[0.05] bg-white/[0.01]">
              <h3 className="font-display font-bold text-foreground mb-6 flex items-center gap-2">
                <TrendingUp size={18} className="text-primary" />
                Current Learning Path
              </h3>

              <div className="flex flex-col gap-4 mb-8">
                {currentFocus.map((item, i) => (
                  <motion.div
                    key={item.topic}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start justify-between gap-4 p-4 rounded-xl border border-white/[0.04] bg-white/[0.01] hover:border-white/[0.07] transition-colors"
                  >
                    <div>
                      <div className="font-medium text-foreground/80 text-sm mb-1">{item.topic}</div>
                      <div className="text-xs text-muted-foreground/50">{item.detail}</div>
                    </div>
                    <span
                      className={`shrink-0 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full border ${statusConfig[item.status].className}`}
                    >
                      {statusConfig[item.status].label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Approach callout */}
              <div className="p-4 rounded-xl border border-primary/10 bg-primary/[0.03]">
                <p className="text-xs font-mono text-muted-foreground/70 leading-relaxed">
                  <span className="text-primary">Strategy: </span>
                  Pattern recognition over memorization.
                  Solve 3–5 problems per topic, understand the pattern,
                  then move forward. No grinding the same category.
                </p>
              </div>

              {/* GitHub link */}
              <a
                href="https://github.com/Vikas11462"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink size={14} />
                GitHub Profile
              </a>
            </div>
          </MotionReveal>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-28 md:mt-36" />
    </section>
  );
}
