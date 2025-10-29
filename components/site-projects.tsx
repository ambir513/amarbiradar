"use client";

import ProjectListingComponent from "./ProjectListingComponent";

interface Project {
  name: string;
  logo: React.ReactNode;
  description: string;
  tech: string[];
  link?: string;
  type?: string;
}

const projects: Project[] = [
  {
    name: "Supabase",
    logo: <h1>Hii</h1>,
    description:
      "A UI/UX design system built for Supabase community projects with animations and accessibility.",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    type: "Web App",
  },
  {
    name: "Resend",
    logo: <h1>Hii</h1>,
    description:
      "Email automation and delivery platform with a modern dashboard and real-time analytics.",
    tech: ["React", "Clerk", "Resend API"],
    type: "SaaS Tool",
  },
  {
    name: "Turso",
    logo: <h1>Hii</h1>,
    description:
      "A graphic design collaboration app for hybrid teams focused on creative workflows.",
    tech: ["Next.js", "Turso", "ShadCN UI"],
    type: "Hybrid App",
  },
];

export function SiteProjects() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-4 text-xl font-semibold">Projects</h1>
      <ProjectListingComponent projects={projects} />
    </div>
  );
}
