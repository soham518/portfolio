import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export type Project = {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
};

export default function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay }}
    >
      <Card className="h-full hover:shadow-lg transition-transform hover:-translate-y-1">
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.map((t) => (
              <span key={t} className="px-2 py-1 rounded-full bg-secondary text-xs">
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            {project.github && (
              <Link href={project.github} target="_blank" className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm hover:bg-secondary">
                <Github className="h-4 w-4" /> GitHub
              </Link>
            )}
            {project.demo && (
              <Link href={project.demo} target="_blank" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm shadow hover:shadow-md">
                <ExternalLink className="h-4 w-4" /> Live Demo
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}


