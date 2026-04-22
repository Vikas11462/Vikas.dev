import { Metadata } from "next";
import { ProjectsClient } from "./projects-client";

export const metadata: Metadata = {
  title: "Projects",
  description: "A comprehensive list of my work, side projects, and experiments.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
