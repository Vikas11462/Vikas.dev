"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/content";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ExternalLink, Github, ArrowUpRight, ArrowLeft } from "lucide-react";

export function ProjectsClient() {
  const [filter, setFilter] = useState("All");

  // Get unique tech stacks
  const allTechStacks = useMemo(() => {
    const stacks = new Set<string>();
    projects.forEach((p) => p.techStack.forEach((t) => stacks.add(t)));
    return ["All", ...Array.from(stacks).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.techStack.includes(filter));
  }, [filter]);

  return (
    <>
      <Navbar />
      <main className="relative pt-24 md:pt-32 pb-20 min-h-screen">
        <div className="absolute top-[10%] left-0 w-[400px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Back to Home
            </Link>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              All Projects
            </h1>
            <p className="text-muted-foreground max-w-2xl text-lg">
              A comprehensive list of my work, side projects, and experiments.
            </p>
          </motion.div>

          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-16"
          >
            {allTechStacks.map((stack) => (
              <button
                key={stack}
                onClick={() => setFilter(stack)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === stack
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-surface-elevated border border-white/[0.06] text-muted-foreground hover:text-foreground hover:border-white/20"
                }`}
              >
                {stack}
              </button>
            ))}
          </motion.div>

          {/* Project List */}
          <motion.div layout className="flex flex-col gap-16 md:gap-24">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  transition={{ duration: 0.4 }}
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
                    <div
                      className={`flex flex-wrap gap-2 mb-8 ${
                        index % 2 !== 0 ? "lg:justify-end" : ""
                      }`}
                    >
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
                    <div
                      className={`flex items-center gap-4 ${
                        index % 2 !== 0 ? "lg:justify-end" : ""
                      }`}
                    >
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
                </motion.div>
              ))}
            </AnimatePresence>
            {filteredProjects.length === 0 && (
              <p className="text-center text-muted-foreground py-20">
                No projects found for {filter}.
              </p>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
