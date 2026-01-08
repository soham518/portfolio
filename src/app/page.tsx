"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import SectionTitle from "@/components/section-title";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-hero-gradient">
      <section id="hero" className="container mx-auto px-6 pt-24 pb-16 md:pt-32 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Hi, I’m Soham —
            <br />
            <span className="text-primary">Full‑Stack Developer</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-prose"
          >
            I craft reliable, accessible, and performant web experiences using Next.js, TypeScript, and modern cloud tooling.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="#projects" className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-6 py-3 shadow hover:shadow-lg transition-transform hover:-translate-y-0.5">
              View My Work <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 border">
              Contact
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="justify-self-center"
        >
          <div className="relative h-72 w-72 md:h-94 md:w-74 rounded-full overflow-hidden ring-2 ring-primary/20 shadow-xl">
            <Image src="/profile_photo.jpg" alt="Soham profile photo" fill className="object-cover" />
          </div>
        </motion.div>
      </section>

      <AboutSection />
      <ExperienceSection />
      <ProjectsTeaser />
    </div>
  );
}

function SectionShell({ id, children, title }: { id: string; children: React.ReactNode; title: string }) {
  return (
    <section id={id} className="container mx-auto px-6 py-16 md:py-24">
      <SectionTitle>{title}</SectionTitle>
      {children}
    </section>
  );
}

function AboutSection() {
  const skillGroups: { title: string; items: string[] }[] = [
    {
      title: "Languages",
      items: [
        "C",
        "C++",
        "Python",
        "JavaScript",
        "TypeScript",
        "Solidity",
        "Rust",
        "HTML",
        "CSS",
      ],
    },
    {
      title: "Frameworks",
      items: [
        "React Js",
        "Express Js",
        "Node Js",
        "Tailwind",
        "Next Js",
        "Flutter",
      ],
    },
    { title: "Database", items: ["SQL", "Mongo DB"] },
    {
      title: "Tools and Technologies",
      items: [
        "Git",
        "GitHub",
        "Blockchain",
        "Ethereum",
        "EVM",
        "MySQL Workbench",
        "Power BI",
        "Foundry",
        "Solana",
      ],
    },
    {
      title: "Libraries",
      items: ["Ethers.js", "Web3.js", "NextAuth", "Zod", "Openzeppelin"],
    },
  ];
  return (
    <SectionShell id="about" title="About & Skills">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground leading-relaxed"
        >
          Motivated and detail‑oriented full‑stack developer with hands‑on experience in Ethereum development—specialising in Solidity smart contracts and DApps. Skilled in React/Next.js across frontend and backend, with a passion for building user‑friendly web applications and collaborating in teams.
        </motion.p>
        <div className="space-y-6">
          {skillGroups.map((group, gi) => (
            <div key={group.title}>
              <motion.h3
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: gi * 0.02 }}
                className="text-sm font-medium text-muted-foreground mb-2"
              >
                {group.title}
              </motion.h3>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.03 } } }}
                className="flex flex-wrap gap-2"
              >
                {group.items.map((item) => (
                  <motion.li
                    key={item}
                    variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}
                  >
                    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs bg-secondary">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function ExperienceSection() {
  const experiences = [
    {
      company: "EduPlus Campus",
      role: "Blockchain Developer Project Intern",
      duration: "Jul 2024 — Dec 2024",
      description:
        "Built a blockchain‑based credential verification project. Integrated a React web app with Ethereum, authored optimized Solidity contracts, and shipped a usable DApp.",
    },
    {
      company: "HICA Club, VU Pune",
      role: "Blockchain Lead",
      duration: "Mar 2025 — Present",
      description:
        "Organizing technical events (workshops, hackathons) and guiding peers on blockchain fundamentals and project building.",
    },
  ];
  return (
    <SectionShell id="experience" title="Experience">
      <ol className="relative border-s pl-6 space-y-8">
        {experiences.map((exp) => (
          <motion.li
            key={exp.company}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            <div className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-primary" />
            <h3 className="font-medium">
              {exp.role} · <span className="text-primary">{exp.company}</span>
            </h3>
            <p className="text-sm text-muted-foreground">{exp.duration}</p>
            <p className="mt-2 text-muted-foreground">{exp.description}</p>
          </motion.li>
        ))}
      </ol>
    </SectionShell>
  );
}

function ProjectsTeaser() {
  return (
    <SectionShell id="projects" title="Featured Projects">
      <div className="flex items-center justify-between mb-6">
        <p className="text-muted-foreground">A few highlights from recent work.</p>
        <Link href="/projects" className="text-primary hover:underline inline-flex items-center gap-1">
          See all <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {projectsData.slice(0, 3).map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-xl border p-6 shadow-sm hover:shadow-md transition-transform hover:-translate-y-0.5 bg-card"
          >
            <h3 className="font-semibold mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.stack.slice(0, 3).map((t) => (
                <span key={t} className="px-2 py-1 rounded-full bg-secondary text-xs">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
    </div>
    </SectionShell>
  );
}
