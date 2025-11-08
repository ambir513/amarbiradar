"use client";

import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/* ---------- Types ---------- */
export interface Project {
  name: string;
  logo: string;
  description: string;
  tech: string[];
  link?: string;
  type?: string;
}

export interface ProjectListingComponentProps {
  projects: Project[];
  className?: string;
  onProjectClick?: (project: Project) => void;
}

/* ---------- Component ---------- */
export default function ProjectListingComponent({
  projects,
  className,
  onProjectClick,
}: ProjectListingComponentProps) {
  const [activeItem, setActiveItem] = useState<Project | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref as unknown as React.RefObject<HTMLElement>, () =>
    setActiveItem(null)
  );

  // prevent background scroll
  useEffect(() => {
    document.body.style.overflow = activeItem ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeItem]);

  // close on ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveItem(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <AnimatePresence>
        {activeItem && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveItem(null)}
            />

            {/* Dialog */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <motion.div
                ref={ref}
                className="flex max-h-[90vh] w-full max-w-2xl flex-col gap-4 rounded-xl border bg-background p-6 shadow-lg"
              >
                <div className="flex flex-col items-center gap-4">
                  <div>
                    <Image
                      src={"/image/dev.jpg"}
                      alt={activeItem.name}
                      width={300}
                      height={300}
                      className=""
                    />
                  </div>
                  <div className="flex grow flex-col">
                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                      {activeItem.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-muted px-2 py-0.5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  {activeItem.description}
                </p>

                {activeItem.link && (
                  <a
                    href={activeItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-sm text-primary underline"
                  >
                    View Project →
                  </a>
                )}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Project List */}
      <div className={`relative flex items-start p-2 ${className || ""}`}>
        <div className="relative grid w-full grid-cols-1 items-center gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group mx-auto flex w-[320px] cursor-pointer flex-col items-center justify-center gap-4 rounded-lg border bg-background shadow-sm transition hover:shadow-md sm:w-[364px]"
              onClick={() => {
                setActiveItem(project);
                onProjectClick?.(project);
              }}
            >
              <div className="w-full overflow-hidden rounded-t-xl sm:w-[364px]">
                <Image
                  src={project.logo}
                  alt={project.name}
                  width={364}
                  height={364}
                  className="object-cover"
                />
              </div>  
              <div className="flex w-full flex-col gap-y-1 px-4 pb-5">
                <div className="font-medium">{project.name}</div>
                <div className="text-xs text-muted-foreground">
                  {project.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
