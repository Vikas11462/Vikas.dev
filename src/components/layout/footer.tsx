"use client";

import { personalInfo } from "@/data/content";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.04] bg-background">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[100px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left — branding */}
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-bold text-foreground mb-2">
              {personalInfo.name.toUpperCase()}<span className="text-primary">.dev</span>
            </p>
            <p className="text-sm text-muted-foreground max-w-[280px]">
              Building scalable systems &amp; crafting immersive digital experiences.
            </p>
          </div>

          {/* Center — social icons */}
          <div className="flex items-center gap-5">
            {[
              { icon: Github, href: personalInfo.github, label: "GitHub" },
              { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noreferrer"
                whileHover={{ y: -3 }}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.02] text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                aria-label={label}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>

          {/* Right — back to top */}
          <motion.a
            href="#"
            whileHover={{ y: -2 }}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to top <ArrowUpRight size={14} />
          </motion.a>
        </div>

        {/* Bottom line */}
        <div className="section-divider mt-12 mb-6" />
        <p className="text-center text-xs text-muted-foreground/60">
          © {currentYear} {personalInfo.name}. Designed &amp; engineered from scratch.
        </p>
      </div>
    </footer>
  );
}
