"use client";

import { motion } from "framer-motion";
import { MotionReveal } from "@/components/ui/motion-wrapper";
import { personalInfo, skills, experience, education, achievements, resumeData } from "@/data/content";
import { Download, Mail, Github, Linkedin, MapPin, Calendar, Award, BookOpen } from "lucide-react";

/**
 * Resume — Web-based premium resume viewer.
 * Two-column layout matching professional resume standards.
 * Includes download CTA for PDF version.
 */
export function Resume() {
  return (
    <section id="resume" className="relative py-28 md:py-36 overflow-hidden">
      {/* Atmosphere */}
      <div className="absolute bottom-[20%] left-0 w-[400px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-5xl px-6 relative z-10">
        {/* Section header */}
        <MotionReveal className="text-center mb-12 md:mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-4 block">
            Resume
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-gradient">credentials</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A complete overview of my professional background and technical skills.
          </p>
        </MotionReveal>

        {/* Download CTA */}
        <MotionReveal delay={0.1} className="flex justify-center mb-12">
          <a
            href="/vikas-cv.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 text-sm font-medium text-primary transition-all hover:bg-primary/20 hover:border-primary/50 btn-glow"
          >
            <Download size={16} />
            Download PDF Resume
          </a>
        </MotionReveal>

        {/* Resume card */}
        <MotionReveal delay={0.15}>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.01] overflow-hidden">
            {/* Resume Header */}
            <div className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 md:p-10 border-b border-white/[0.06]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    {personalInfo.name}
                  </h3>
                  <p className="text-primary font-medium mt-1">{personalInfo.role}</p>
                </div>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-primary/60" />
                    {personalInfo.email}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-primary/60" />
                    India
                  </div>
                </div>
              </div>
            </div>

            {/* Two-column body */}
            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.04]">
              {/* Left sidebar — Skills & contact */}
              <div className="p-8 md:p-10 space-y-8">
                {/* Summary */}
                <div>
                  <h4 className="flex items-center gap-2 font-display font-bold text-foreground mb-4 text-sm uppercase tracking-wider">
                    <BookOpen size={14} className="text-primary" />
                    Summary
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {resumeData.summary}
                  </p>
                </div>

                {/* Technical Skills */}
                <div>
                  <h4 className="flex items-center gap-2 font-display font-bold text-foreground mb-4 text-sm uppercase tracking-wider">
                    <Award size={14} className="text-primary" />
                    Technical Skills
                  </h4>
                  <div className="space-y-3">
                    {Object.entries(resumeData.technicalSkills).map(([category, items]) => (
                      <div key={category}>
                        <p className="text-xs font-semibold text-foreground/80 mb-1">{category}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{items}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div>
                  <h4 className="font-display font-bold text-foreground mb-4 text-sm uppercase tracking-wider">
                    Links
                  </h4>
                  <div className="flex flex-col gap-2">
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={14} /> GitHub
                    </a>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin size={14} /> LinkedIn
                    </a>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h4 className="flex items-center gap-2 font-display font-bold text-foreground mb-4 text-sm uppercase tracking-wider">
                    <Calendar size={14} className="text-primary" />
                    Education
                  </h4>
                  <div className="space-y-4">
                    {education.map((edu) => (
                      <div key={edu.id}>
                        <p className="text-sm font-semibold text-foreground">{edu.degree}</p>
                        <p className="text-xs text-muted-foreground">{edu.school}</p>
                        <p className="text-xs text-primary/60 mt-0.5">{edu.period}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right body — Experience & Achievements */}
              <div className="lg:col-span-2 p-8 md:p-10 space-y-10">
                {/* Experience */}
                <div>
                  <h4 className="font-display font-bold text-foreground mb-6 text-sm uppercase tracking-wider border-b border-white/[0.06] pb-3">
                    Professional Experience
                  </h4>
                  <div className="space-y-8">
                    {experience.map((job) => (
                      <div key={job.id} className="relative pl-6 border-l-2 border-primary/20">
                        <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary" />
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-1 mb-2">
                          <div>
                            <h5 className="font-semibold text-foreground">{job.role}</h5>
                            <p className="text-sm text-primary/80">{job.company}</p>
                          </div>
                          <span className="text-xs text-muted-foreground bg-white/[0.03] px-2 py-1 rounded w-fit flex-shrink-0">
                            {job.period}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {job.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-display font-bold text-foreground mb-6 text-sm uppercase tracking-wider border-b border-white/[0.06] pb-3">
                    Achievements & Hackathons
                  </h4>
                  <div className="space-y-6">
                    {achievements.map((a) => (
                      <div key={a.id} className="relative pl-6 border-l-2 border-primary/15">
                        <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary/50" />
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-1 mb-2">
                          <h5 className="font-semibold text-foreground">{a.title}</h5>
                          <span className="text-xs text-primary/60">{a.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {a.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h4 className="font-display font-bold text-foreground mb-4 text-sm uppercase tracking-wider border-b border-white/[0.06] pb-3">
                    Certifications & Learning
                  </h4>
                  <ul className="space-y-2">
                    {resumeData.certifications.map((cert, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 flex-shrink-0" />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-28 md:mt-36" />
    </section>
  );
}
