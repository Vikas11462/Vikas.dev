"use client";

import { personalInfo } from "@/data/content";
import { stats as statsData } from "@/data/content";
import { MotionReveal } from "@/components/ui/motion-wrapper";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Code2, Server, Palette } from "lucide-react";

const highlights = [
  {
    icon: Server,
    title: "Backend Architecture",
    desc: "Java, Spring Boot, Redis — fault-tolerant distributed systems.",
  },
  {
    icon: Code2,
    title: "Frontend Craft",
    desc: "React, Next.js, TypeScript — performant and immersive interfaces.",
  },
  {
    icon: Palette,
    title: "Design Sensibility",
    desc: "Bridging engineering precision with thoughtful visual design.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">
      {/* Section atmosphere */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <MotionReveal className="mb-16 md:mb-20">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-4 block">
            About
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight max-w-2xl">
            Engineer at the intersection of{" "}
            <span className="text-gradient">systems & craft</span>
          </h2>
        </MotionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — narrative text */}
          <MotionReveal direction="up" delay={0.1} className="lg:col-span-3">
            <p className="text-lg md:text-xl text-muted-foreground leading-[1.8] mb-8">
              {personalInfo.about}
            </p>

            {/* Animated Stats row */}
            <div className="flex flex-wrap gap-8 md:gap-12 pt-6 border-t border-white/[0.04]">
              {statsData.map((stat) => (
                <div key={stat.label}>
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    duration={2000}
                    className="block font-display text-3xl md:text-4xl font-bold text-primary mb-1"
                  />
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </MotionReveal>

          {/* Right — highlight cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {highlights.map((item, i) => (
              <MotionReveal key={item.title} direction="right" delay={0.15 + i * 0.1}>
                <div className="group flex gap-4 p-5 rounded-xl border border-white/[0.04] bg-white/[0.01] hover:border-primary/20 hover:bg-white/[0.02] transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-28 md:mt-36" />
    </section>
  );
}
