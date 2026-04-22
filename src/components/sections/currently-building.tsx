"use client";

import { motion } from "framer-motion";
import { MotionReveal } from "@/components/ui/motion-wrapper";
import { BookOpen, Code2, Cpu, Github } from "lucide-react";

/**
 * CurrentlyBuilding — Replaces the empty blog section.
 * Shows what Vikas is actively working on and learning.
 * Signals momentum and growth to recruiters.
 */

const building = [
  {
    icon: Code2,
    title: "This Portfolio",
    description: "Built with Next.js 14 App Router, Framer Motion, React Three Fiber, and TypeScript. Performance-first, SEO-aware, production-ready.",
    tag: "Shipped",
    tagColor: "text-green-400 border-green-400/20 bg-green-400/5",
  },
  {
    icon: Cpu,
    title: "Distributed Rate Limiter (v2)",
    description: "Extending the rate limiter with Redis Cluster mode, multi-region support, and a WebSocket-powered live monitoring dashboard.",
    tag: "In Progress",
    tagColor: "text-primary border-primary/20 bg-primary/5",
  },
  {
    icon: BookOpen,
    title: "DSA Mastery Path",
    description: "Systematic study — Trees, Graphs, Backtracking, and DP. Solving 5+ problems/week with pattern-focused notes on GitHub.",
    tag: "Ongoing",
    tagColor: "text-yellow-400 border-yellow-400/20 bg-yellow-400/5",
  },
];

const learning = [
  "System Design fundamentals (consistent hashing, CAP theorem)",
  "Redis advanced patterns (pub/sub, streams, cluster)",
  "Backend architecture — microservices vs monolith tradeoffs",
  "Dynamic Programming patterns (N-Queens, Coin Change, LCS)",
];

export function CurrentlyBuilding() {
  return (
    <section id="building" className="relative py-28 md:py-36 overflow-hidden">
      {/* Atmosphere */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-primary/[0.03] rounded-full blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header */}
        <MotionReveal className="mb-16 md:mb-20">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-4 block">
            Now
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Currently Building
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg">
            What I&apos;m shipping, studying, and thinking about right now.
            No zero days.
          </p>
        </MotionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {building.map((item, i) => (
            <MotionReveal key={item.title} direction="up" delay={i * 0.12}>
              <div className="h-full p-6 rounded-2xl border border-white/[0.05] bg-white/[0.01] hover:border-primary/10 hover:bg-white/[0.02] transition-all duration-500 group">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl border border-white/[0.06] bg-white/[0.02] flex items-center justify-center group-hover:border-primary/20 transition-colors">
                    <item.icon size={18} className="text-primary/70" />
                  </div>
                  <span className={`px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full border ${item.tagColor}`}>
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-display font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </MotionReveal>
          ))}
        </div>

        {/* Currently Learning strip */}
        <MotionReveal>
          <div className="p-6 md:p-8 rounded-2xl border border-white/[0.05] bg-white/[0.01]">
            <h3 className="font-display font-bold text-foreground mb-5 flex items-center gap-2">
              <BookOpen size={16} className="text-primary" />
              What I&apos;m Learning
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {learning.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                  {item}
                </motion.div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-white/[0.04] flex items-center gap-3">
              <a
                href="https://github.com/Vikas11462"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={15} />
                Follow progress on GitHub
              </a>
            </div>
          </div>
        </MotionReveal>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-28 md:mt-36" />
    </section>
  );
}
