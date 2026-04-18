"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/content";
import { MotionReveal } from "@/components/ui/motion-wrapper";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

/**
 * Projects — Featured project showcase with editorial card layout.
 * Alternating layout, hover depth effect, tech stack pills.
 * Now links to /project/[slug] detail pages.
 */
export function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-36 overflow-hidden">
      {/* Atmosphere */}
      <div className="absolute top-[20%] left-0 w-[400px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Section header */}
        <MotionReveal className="mb-16 md:mb-20">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-4 block">
            Work
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Featured Projects
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg">
            A selection of projects I&apos;ve built — from distributed backend systems to full stack platforms.
          </p>
        </MotionReveal>

        {/* Project cards */}
        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((project, index) => (
            <MotionReveal
              key={project.id}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={0.1}
            >
              <div
                className={`group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 !== 0 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Project image / visual block — clickable */}
                <Link href={`/project/${project.slug}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/[0.04] bg-surface-elevated cursor-pointer ${
                      index % 2 !== 0 ? "lg:order-2" : ""
                    }`}
                  >
                    {/* Gradient visual */}
                    <div className="absolute inset-0 bg-gradient-to-br from-surface-elevated via-zinc-900/80 to-surface" />

                    {/* Project number watermark */}
                    <div className="absolute top-6 left-6">
                      <span className="font-display text-7xl md:text-8xl font-bold text-white/[0.03]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Center label */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-xl font-medium text-white/20 group-hover:text-white/30 transition-colors">
                        {project.title}
                      </span>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Top-right arrow on hover */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <ArrowUpRight size={16} className="text-foreground" />
                      </div>
                    </div>
                  </motion.div>
                </Link>

                {/* Project info */}
                <div className={index % 2 !== 0 ? "lg:order-1 lg:text-right" : ""}>
                  {/* Featured badge */}
                  {project.featured && (
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Featured
                    </span>
                  )}

                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className={`flex flex-wrap gap-2 mb-8 ${index % 2 !== 0 ? "lg:justify-end" : ""}`}>
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full border border-white/[0.06] bg-white/[0.02] text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className={`flex items-center gap-4 ${index % 2 !== 0 ? "lg:justify-end" : ""}`}>
                    {/* Case study link - always shown */}
                    <Link
                      href={`/project/${project.slug}`}
                      className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      View Case Study
                      <ArrowUpRight size={14} />
                    </Link>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github size={16} />
                        Source
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live
                      </a>
                    )}
                  </div>
                </div>
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
