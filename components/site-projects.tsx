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
    name: "VB Enterprises",
    logo: "/image/vb.png",
    link: "https://vbenterprises.work",
    description:
      "A graphic design collaboration app for hybrid teams focused on creative workflows.",
    tech: ["Next.js", "TailwindCSS", "Shadcn UI", "21st dev", "Clerk Auth"],
    type: "Company Website",
  },
  {
    name: "The DevTinder",
    logo: "/image/dev.png",
    link: "https://thedevtinder.xyz",
    description:
      "Inspired by the Tinder platform. Designed to foster professional connections among developers",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    type: "Web App",
  },

  {
    name: "Youtube Clone",
    logo: "/image/yt.png",
    link: "https://youtube.amarbiradar.me",
    description:
      "Email automation and delivery platform with a modern dashboard and real-time analytics.",
    tech: ["React", "Clerk", "Resend API"],
    type: "SaaS Tool",
  },
  {
    name: "Swiggy Clone",
    logo: "/image/swiggy.png",
    link: "https://swiggy.amarbiradar.me",
    description:
      "This project is uses the Swiggy Production API. It is a clone of the Swiggy App for learning purposes.",
    tech: ["React", "Clerk", "Resend API"],
    type: "SaaS Tool",
  },
  {
    name: "FitMaker",
    logo: "/image/fitmaker.png",
    link: "https://fitmaker.vercel.app",
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
