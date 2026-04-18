"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/content";
import { MotionReveal, StaggerContainer } from "@/components/ui/motion-wrapper";

/**
 * Skills — Floating badge grid with staggered reveals.
 * Each category is a card, each skill is an animated badge.
 */
export function Skills() {
  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="skills" className="relative py-28 md:py-36 overflow-hidden">
      {/* Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Section header */}
        <MotionReveal className="mb-16 md:mb-20 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-4 block">
            Expertise
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Technical Arsenal
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            The tools and technologies I use to bring ideas to life.
          </p>
        </MotionReveal>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((categoryGroup, groupIndex) => (
            <MotionReveal
              key={categoryGroup.category}
              direction="up"
              delay={groupIndex * 0.1}
            >
              <div className="group h-full p-6 rounded-2xl border border-white/[0.04] bg-white/[0.01] hover:border-primary/15 hover:bg-white/[0.02] transition-all duration-500">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <h3 className="font-display font-bold text-foreground tracking-wide">
                    {categoryGroup.category}
                  </h3>
                </div>

                {/* Skill badges */}
                <StaggerContainer className="flex flex-wrap gap-2" staggerDelay={0.05}>
                  {categoryGroup.items.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={badgeVariants}
                      whileHover={{
                        scale: 1.05,
                        borderColor: "rgba(232, 168, 56, 0.3)",
                        transition: { duration: 0.2 },
                      }}
                      className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-full border border-white/[0.06] bg-white/[0.02] text-muted-foreground hover:text-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </StaggerContainer>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-28 md:mt-36" />
    </section>
  );
}
