"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  CheckCircle,
} from "lucide-react";

interface Project {
  slug: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string;
  results: string[];
  techStack: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

interface ProjectDetailClientProps {
  project: Project;
  prevProject: { slug: string; title: string } | null;
  nextProject: { slug: string; title: string } | null;
}

/**
 * ProjectDetailClient — Rich case-study layout.
 * Sections: Hero → Overview → Problem → Solution → Architecture → Tech → Results → Nav
 */
export function ProjectDetailClient({
  project,
  prevProject,
  nextProject,
}: ProjectDetailClientProps) {
  const fadeUp = {
    initial: { opacity: 0, y: 30, filter: "blur(4px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  return (
    <>
      <Navbar />
      <main className="relative pt-24 md:pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          {/* ── Back link ──────────────────────────────── */}
          <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10 group"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Back to Projects
            </Link>
          </motion.div>

          {/* ── Hero ───────────────────────────────────── */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            {project.featured && (
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Featured Project
              </span>
            )}
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {project.description}
            </p>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-2 mt-8">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium rounded-full border border-primary/20 bg-primary/5 text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            {(project.githubUrl || project.liveUrl) && (
              <div className="flex items-center gap-4 mt-8">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:border-white/[0.15] transition-all"
                  >
                    <Github size={16} />
                    View Source
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:brightness-110 btn-glow transition-all"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </motion.div>

          {/* ── Divider ────────────────────────────────── */}
          <div className="section-divider mb-16" />

          {/* ── Problem ────────────────────────────────── */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                <span className="text-red-400 text-sm font-bold">!</span>
              </div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
                The Problem
              </h2>
            </div>
            <p className="text-muted-foreground leading-[1.8] text-base md:text-lg">
              {project.problem}
            </p>
          </motion.div>

          {/* ── Solution ───────────────────────────────── */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                <CheckCircle size={16} className="text-green-400" />
              </div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
                The Solution
              </h2>
            </div>
            <p className="text-muted-foreground leading-[1.8] text-base md:text-lg">
              {project.solution}
            </p>
          </motion.div>

          {/* ── Architecture ──────────────────────────── */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <span className="text-blue-400 text-sm font-bold">⚙</span>
              </div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
                Architecture
              </h2>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.01] p-6 md:p-8 font-mono text-sm text-muted-foreground leading-relaxed">
              {project.architecture}
            </div>
          </motion.div>

          {/* ── Results ────────────────────────────────── */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-primary text-sm font-bold">★</span>
              </div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
                Results & Impact
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.results.map((result, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.04] bg-white/[0.01] p-5"
                >
                  <CheckCircle
                    size={18}
                    className="text-primary mt-0.5 flex-shrink-0"
                  />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {result}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Project Navigation ─────────────────────── */}
          <div className="section-divider mb-10" />
          <div className="flex items-center justify-between gap-4">
            {prevProject ? (
              <Link
                href={`/project/${prevProject.slug}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft
                  size={16}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                <div className="text-left">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60 block">
                    Previous
                  </span>
                  <span className="text-sm font-medium">{prevProject.title}</span>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                href={`/project/${nextProject.slug}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-right"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60 block">
                    Next
                  </span>
                  <span className="text-sm font-medium">{nextProject.title}</span>
                </div>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
