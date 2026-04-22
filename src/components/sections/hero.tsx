"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { personalInfo } from "@/data/content";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import profilePhoto from "../../../ss/download.jpg";

/**
 * Hero — Cinematic opening statement.
 * Features: floating photo composition, parallax depth layers,
 * mouse-reactive movement, staggered text reveals, ambient orbs.
 */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  // Mouse-reactive parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
      const y = (e.clientY - window.innerHeight / 2) / window.innerHeight;
      mouseX.set(x * 20);
      mouseY.set(y * 20);
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  // Status line typing effect
  const [statusText, setStatusText] = useState("");
  const fullStatus = "Available for opportunities";
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setStatusText(fullStatus.slice(0, i + 1));
      i++;
      if (i >= fullStatus.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden"
    >
      {/* ── Background atmosphere ─────────────────────── */}
      {/* Main radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(232,168,56,0.08),transparent_70%)]" />

      {/* Floating orbs */}
      <motion.div
        style={{ y: orbY }}
        className="glow-orb glow-orb-primary w-[500px] h-[500px] top-[10%] left-[15%] animate-drift opacity-40"
      />
      <motion.div
        style={{ y: orbY }}
        className="glow-orb glow-orb-warm w-[400px] h-[400px] bottom-[10%] right-[10%] animate-drift opacity-30"
        aria-hidden
      />
      <motion.div
        style={{ y: orbY }}
        className="glow-orb glow-orb-cool w-[300px] h-[300px] top-[60%] left-[50%] animate-drift opacity-20"
        aria-hidden
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Content ─────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full pt-20 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center lg:min-h-[80vh]">
          {/* Left column — Typography */}
          <motion.div style={{ y: titleY }} className="order-2 lg:order-1 text-center lg:text-left">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-6 lg:mb-8"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              <span className="text-sm font-medium text-muted-foreground tracking-wide font-mono">
                {statusText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] tracking-tight mb-6"
            >
              <span className="block text-foreground">I build</span>
              <span className="block text-gradient">systems that</span>
              <span className="block text-foreground">
                scale<span className="text-primary">.</span>
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0 mb-8 lg:mb-10"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold transition-all hover:brightness-110 btn-glow"
              >
                View My Work
                <ArrowDown size={14} className="animate-bounce" />
              </a>
              <a
                href="/vikas-cv.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-white/[0.06] hover:border-white/20"
              >
                Download CV
              </a>
            </motion.div>

            {/* Social row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4 mt-8 lg:mt-12"
            >
              <div className="h-px w-8 bg-white/10" />
              {[
                { icon: Github, href: personalInfo.github },
                { icon: Linkedin, href: personalInfo.linkedin },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column — Photo composition */}
          <motion.div
            style={{ y: photoY, x: springX, rotateY: springX, rotateX: springY }}
            className="order-1 lg:order-2 flex items-center justify-center perspective-container py-4 lg:py-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[180px] sm:w-[220px] md:w-[280px] lg:w-[340px]"
            >
              {/* Rim glow behind photo */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-2xl animate-pulse-glow" />

              {/* Layered frame panels */}
              <div className="absolute -inset-2 rounded-2xl border border-primary/10 -rotate-2 translate-x-3 translate-y-3 opacity-40" />
              <div className="absolute -inset-1 rounded-2xl border border-white/[0.04] rotate-1 -translate-x-2 translate-y-2 opacity-60" />

              {/* Main photo container */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/[0.08] bg-surface-elevated shadow-2xl shadow-black/50">
                <Image 
                  src={profilePhoto} 
                  alt="Vikas Profile" 
                  fill 
                  className="object-cover"
                  priority 
                />

                {/* Spotlight overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />

                {/* Edge highlight */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating accent shapes */}
              <motion.div
                animate={{ y: [-5, 5, -5], rotate: [0, 3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-12 h-12 rounded-lg border border-primary/20 bg-primary/5 rotate-12"
              />
              <motion.div
                animate={{ y: [5, -5, 5], rotate: [0, -2, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-8 w-8 h-8 rounded-full border border-white/10 bg-white/[0.02]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-muted-foreground/30 to-transparent"
        />
      </motion.div>

      {/* Marquee strip */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-white/[0.03] bg-background/50 backdrop-blur-sm">
        <div className="marquee-track py-3">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-8 shrink-0">
              {["FULL STACK", "REACT", "NEXT.JS", "JAVA", "NODE.JS", "SYSTEM DESIGN", "REST APIs", "REDIS", "POSTGRESQL", "SUPABASE"].map(
                (item) => (
                  <span key={`${item}-${i}`} className="text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground/30 whitespace-nowrap flex items-center gap-8">
                    {item}
                    <span className="w-1 h-1 rounded-full bg-primary/30" />
                  </span>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
