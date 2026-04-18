"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MotionReveal } from "@/components/ui/motion-wrapper";
import { testimonials } from "@/data/content";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

/**
 * Testimonials — Auto-advancing carousel with manual navigation.
 * Glassmorphic cards, avatar initials, smooth slide transitions.
 */
export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      filter: "blur(4px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      filter: "blur(4px)",
      transition: { duration: 0.3 },
    }),
  };

  return (
    <section id="testimonials" className="relative py-28 md:py-36 overflow-hidden">
      {/* Atmosphere */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="mx-auto max-w-4xl px-6 relative z-10">
        {/* Section header */}
        <MotionReveal className="text-center mb-16 md:mb-20">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            What people{" "}
            <span className="text-gradient">say</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Feedback from collaborators, teammates, and clients.
          </p>
        </MotionReveal>

        {/* Carousel */}
        <MotionReveal delay={0.1}>
          <div className="relative">
            {/* Card container */}
            <div className="relative min-h-[280px] md:min-h-[240px] flex items-center justify-center">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full"
                >
                  <div className="relative rounded-2xl border border-white/[0.04] bg-white/[0.01] p-8 md:p-10 text-center">
                    {/* Quote icon */}
                    <div className="flex justify-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Quote size={20} className="text-primary" />
                      </div>
                    </div>

                    {/* Quote text */}
                    <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-8 max-w-2xl mx-auto italic">
                      &ldquo;{testimonials[current].quote}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-center gap-4">
                      {/* Avatar initials */}
                      <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">
                          {testimonials[current].avatar}
                        </span>
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-foreground text-sm">
                          {testimonials[current].name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {testimonials[current].role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.02] text-muted-foreground hover:border-primary/30 hover:text-primary transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1);
                      setCurrent(i);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-6 bg-primary"
                        : "w-2 bg-white/10 hover:bg-white/20"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.02] text-muted-foreground hover:border-primary/30 hover:text-primary transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </MotionReveal>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-28 md:mt-36" />
    </section>
  );
}
