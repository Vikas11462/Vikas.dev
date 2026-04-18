"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MotionReveal } from "@/components/ui/motion-wrapper";
import { personalInfo } from "@/data/content";
import { Mail, ArrowUpRight, CheckCircle, Send } from "lucide-react";

/**
 * Contact — Premium CTA with contact form.
 * Clean glassmorphic form, ambient atmosphere, success state.
 */
export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      // Connects directly to the user's email via formsubmit.co
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
            _subject: `New Portfolio Message from ${formData.get("name")}`,
        })
      });
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden">
      {/* Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-3xl px-6 relative z-10">
        {/* Header */}
        <MotionReveal className="text-center mb-12">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-4 block">
            Contact
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Let&apos;s build something{" "}
            <span className="text-gradient">great together</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Have a project, opportunity, or just want to chat? My inbox is always open.
          </p>
        </MotionReveal>

        {/* Quick email link */}
        <MotionReveal delay={0.1} className="flex justify-center mb-10">
          <a
            href={`mailto:${personalInfo.email}`}
            className="group flex items-center gap-3 rounded-full border border-white/[0.06] bg-white/[0.02] px-6 py-3 text-sm text-muted-foreground hover:border-primary/20 hover:text-foreground transition-all"
          >
            <Mail size={16} className="text-primary" />
            {personalInfo.email}
            <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </MotionReveal>

        {/* Contact form */}
        <MotionReveal delay={0.2}>
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-2xl border border-white/[0.04] bg-white/[0.01] p-8 md:p-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
                    Name
                  </label>
                  <input
                    required
                    id="contact-name"
                    name="name"
                    type="text"
                    className="w-full bg-white/[0.02] border border-white/[0.06] rounded-lg px-4 py-3 text-base md:text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-email" className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
                    Email
                  </label>
                  <input
                    required
                    id="contact-email"
                    name="email"
                    type="email"
                    className="w-full bg-white/[0.02] border border-white/[0.06] rounded-lg px-4 py-3 text-base md:text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/20 transition-all"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-message" className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  required
                  id="contact-message"
                  name="message"
                  rows={5}
                  className="w-full bg-white/[0.02] border border-white/[0.06] rounded-lg px-4 py-3 text-base md:text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground py-3.5 text-sm font-semibold transition-all hover:brightness-110 btn-glow disabled:opacity-50 disabled:cursor-not-allowed mt-2"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={14} />
                  </>
                )}
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/[0.03] p-12 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mb-5">
                <CheckCircle size={24} className="text-green-400" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Message Sent!
              </h3>
              <p className="text-muted-foreground mb-8">
                Thank you for reaching out. I&apos;ll get back to you soon.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Send Another →
              </button>
            </motion.div>
          )}
        </MotionReveal>
      </div>
    </section>
  );
}
