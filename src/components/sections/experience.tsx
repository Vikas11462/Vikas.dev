"use client";

import { motion } from "framer-motion";
import { experience, education, achievements } from "@/data/content";
import { MotionReveal } from "@/components/ui/motion-wrapper";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";

/**
 * Experience — Glowing timeline with interactive milestones.
 * Includes both work experience and education.
 */
export function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36 overflow-hidden">
      {/* Atmosphere */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-6 relative z-10">
        {/* Section header */}
        <MotionReveal className="mb-16 md:mb-20">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-4 block">
            Journey
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Experience &amp; Education
          </h2>
        </MotionReveal>

        {/* Work Experience Timeline */}
        <div className="mb-16">
          <MotionReveal className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Briefcase size={14} className="text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground">Work</h3>
          </MotionReveal>

          <div className="relative ml-4 pl-8 md:pl-10 border-l border-white/[0.06]">
            {/* Glowing line accent */}
            <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-primary/30 via-primary/10 to-transparent" />

            {experience.map((job, index) => (
              <MotionReveal
                key={job.id}
                direction="left"
                delay={index * 0.1}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="absolute -left-[37px] md:-left-[45px] top-1 w-3 h-3 rounded-full border-2 border-primary bg-background shadow-[0_0_8px_rgba(232,168,56,0.3)]"
                />

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-3">
                  <div>
                    <h4 className="font-display text-xl font-bold text-foreground">
                      {job.role}
                    </h4>
                    <p className="text-muted-foreground font-medium">{job.company}</p>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-primary bg-primary/10 px-3 py-1.5 rounded-full w-fit flex-shrink-0">
                    {job.period}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-xl">
                  {job.description}
                </p>
              </MotionReveal>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <MotionReveal className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <GraduationCap size={14} className="text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground">Education</h3>
          </MotionReveal>

          <div className="relative ml-4 pl-8 md:pl-10 border-l border-white/[0.06]">
            <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-primary/20 via-transparent to-transparent" />

            {education.map((edu, index) => (
              <MotionReveal
                key={edu.id}
                direction="left"
                delay={index * 0.1}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[37px] md:-left-[45px] top-1 w-3 h-3 rounded-full border-2 border-primary/50 bg-background" />

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">
                  <div>
                    <h4 className="font-display text-lg font-bold text-foreground">
                      {edu.degree}
                    </h4>
                    <p className="text-muted-foreground">{edu.school}</p>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground bg-white/[0.03] px-3 py-1.5 rounded-full w-fit flex-shrink-0">
                    {edu.period}
                  </span>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
        {/* Achievements Timeline */}
        <div className="mt-16">
          <MotionReveal className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Trophy size={14} className="text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground">Achievements & Hackathons</h3>
          </MotionReveal>

          <div className="relative ml-4 pl-8 md:pl-10 border-l border-white/[0.06]">
            <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-primary/20 via-transparent to-transparent" />

            {achievements.map((achieve, index) => (
              <MotionReveal
                key={achieve.id}
                direction="left"
                delay={index * 0.1}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[37px] md:-left-[45px] top-1 w-3 h-3 rounded-full border-2 border-primary/50 bg-background" />

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">
                  <div>
                    <h4 className="font-display text-lg font-bold text-foreground">
                      {achieve.title}
                    </h4>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-primary bg-primary/5 px-3 py-1.5 rounded-full w-fit flex-shrink-0">
                    {achieve.date}
                  </span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-xl mt-2">
                  {achieve.description}
                </p>
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
