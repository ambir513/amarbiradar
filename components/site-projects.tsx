"use client";

import ProjectListingComponent from "./ProjectListingComponent";

interface Project {
  name: string;
  logo: string;
  description: string;
  tech: string[];
  link?: string;
  type?: string;
}

const projects: Project[] = [
  {
    name: "VB Enterprieses",
    logo: "/image/vb.png",
    description:
      "A graphic design collaboration app for hybrid teams focused on creative workflows.",
    tech: ["Next.js", "Turso", "ShadCN UI"],
    type: "Hybrid App",
  },
  {
    name: "The DevTinder",
    logo: "/image/dev.png",
    description:
      "Inspired by the Tinder platform. Designed to foster professional connections among developers",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    type: "Web App",
  },

  {
    name: "Youtube Clone",
    logo: "/image/yt.png",
    description:
      "Email automation and delivery platform with a modern dashboard and real-time analytics.",
    tech: ["React", "Clerk", "Resend API"],
    type: "SaaS Tool",
  },
  {
    name: "Swiggy Clone",
    logo: "/image/swiggy.png",
    description:
      "This project is uses the Swiggy Production API. It is a clone of the Swiggy App for learning purposes.",
    tech: ["React", "Clerk", "Resend API"],
    type: "SaaS Tool",
  },

  {
    name: "FitMaker",
    logo: "/image/fitmaker.png",
    description:
      "A graphic design collaboration app for hybrid teams focused on creative workflows.",
    tech: ["Next.js", "Turso", "ShadCN UI"],
    type: "Hybrid App",
  },
  {
    name: "FitMaker",
    logo: "/image/fitmaker.png",
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
