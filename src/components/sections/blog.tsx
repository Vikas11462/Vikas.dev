"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/data/content";
import { MotionReveal } from "@/components/ui/motion-wrapper";
import { ArrowUpRight, Clock } from "lucide-react";

/**
 * Blog — Editorial article cards with hover reveals.
 */
export function Blog() {
  return (
    <section id="blog" className="relative py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 relative z-10">
        {/* Section header */}
        <MotionReveal className="mb-16 md:mb-20 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-4 block">
            Writing
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Latest Articles
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Thoughts on engineering, architecture, and building great software.
          </p>
        </MotionReveal>

        {/* Blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <MotionReveal key={post.id} direction="up" delay={index * 0.1}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer h-full flex flex-col p-7 rounded-2xl border border-white/[0.04] bg-white/[0.01] hover:border-primary/15 hover:bg-white/[0.02] transition-all duration-500"
              >
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-muted-foreground/60 mb-5">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                  <span className="flex items-center gap-1">
                    <Clock size={11} />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>

                {/* Read link */}
                <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all duration-300">
                  Read Article
                  <ArrowUpRight size={14} />
                </div>
              </motion.article>
            </MotionReveal>
          ))}
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-28 md:mt-36" />
    </section>
  );
}
