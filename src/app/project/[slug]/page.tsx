import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projects } from "@/data/content";
import { ProjectDetailClient } from "./project-detail-client";

// ─────────────────────────────────────────────────────────────────
// Static Generation — pre-render all project slugs at build time
// ─────────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// ─────────────────────────────────────────────────────────────────
// Dynamic Metadata — per-project SEO
// ─────────────────────────────────────────────────────────────────
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Vikas`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Vikas`,
      description: project.description,
      type: "article",
    },
  };
}

// ─────────────────────────────────────────────────────────────────
// Page Component — Server Component that fetches data
// ─────────────────────────────────────────────────────────────────
export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  // Find adjacent projects for navigation
  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <ProjectDetailClient
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}
