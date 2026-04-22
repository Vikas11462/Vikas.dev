"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/content";
import { MotionReveal } from "@/components/ui/motion-wrapper";
import { ExternalLink, Github, ArrowUpRight, ArrowRight } from "lucide-react";

export function ProjectsTeaser() {
  // Only take top 2 featured projects
  const featuredProjects = projects.filter(p => p.featured).slice(0, 2);

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
        <div className="flex flex-col gap-16 md:gap-28">
          {featuredProjects.map((project, index) => (
            <MotionReveal
              key={project.id}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={0.1}
            >
              <div
                className={`group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center`}
              >
                {/* Project image */}
                <Link
                  href={`/project/${project.slug}`}
                  className={index % 2 !== 0 ? "lg:order-2" : ""}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/[0.06] bg-surface-elevated cursor-pointer shadow-2xl shadow-black/40"
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                        <ArrowUpRight size={16} className="text-white" />
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4">
                      <span className="font-mono text-xs text-white/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </motion.div>
                </Link>

                {/* Project info */}
                <div className={index % 2 !== 0 ? "lg:order-1 lg:text-right" : ""}>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Featured
                  </span>

                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                    {project.description}
                  </p>

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

                  <div className={`flex items-center gap-4 ${index % 2 !== 0 ? "lg:justify-end" : ""}`}>
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
                        GitHub
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
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>

        {/* View All Projects CTA */}
        <MotionReveal className="mt-20 flex justify-center text-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors py-4 px-8 rounded-full border border-white/[0.08] hover:border-primary/50 bg-white/[0.02] hover:bg-primary/10"
          >
            View All Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </MotionReveal>
      </div>

      <div className="section-divider mt-28 md:mt-36" />
    </section>
  );
}
