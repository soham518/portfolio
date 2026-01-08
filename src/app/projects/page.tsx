"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/project-card";
import { projectsData } from "@/data/projects";

const projects = projectsData;

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-6 py-16 md:py-24">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-semibold mb-8"
      >
        Projects
      </motion.h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <div key={p.title} className="flex flex-col">
            <ProjectCard project={p} delay={idx * 0.05} />
            {p.bullets && (
              <ul className="mt-4 ml-4 list-disc text-sm text-muted-foreground space-y-1">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


