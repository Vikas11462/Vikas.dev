import React from "react";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { GalaxyBackground } from "@/components/ui/galaxy-background";
import { ClientProviders } from "@/components/ui/client-providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vikas — Full Stack Engineer",
    template: "%s — Vikas",
  },
  description:
    "Portfolio of Vikas, a Full Stack Engineer building scalable backend systems and immersive frontend experiences with Java, React, and Next.js.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Java",
    "Node.js",
    "Backend Developer",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Vikas" }],
  creator: "Vikas",
  openGraph: {
    title: "Vikas — Full Stack Engineer",
    description:
      "Building scalable backend systems and immersive frontend experiences.",
    type: "website",
    locale: "en_US",
    siteName: "Vikas Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikas — Full Stack Engineer",
    description:
      "Building scalable backend systems and immersive frontend experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vikas",
  url: "https://vikas.dev",
  jobTitle: "Full Stack Developer",
  description:
    "Backend-focused Full Stack Developer building scalable systems and real-world applications.",
  sameAs: [
    "https://github.com/Vikas11462",
    "https://www.linkedin.com/in/vikas-vk-ba5026329/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} scroll-smooth`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        {/* Prevent FOUC — set theme before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const t = localStorage.getItem('portfolio-theme');
                if (t) document.documentElement.setAttribute('data-theme', t);
              } catch(e) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-transparent text-foreground antialiased font-sans grain">
        <GalaxyBackground />
        <div className="relative z-10 w-full min-h-screen">
          <ClientProviders>{children}</ClientProviders>
        </div>
      </body>
    </html>
  );
}
