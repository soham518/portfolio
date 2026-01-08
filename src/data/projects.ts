export type ProjectData = {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
  bullets?: string[];
};

export const projectsData: ProjectData[] = [
  {
    title: "Next.js Discussion Platform",
    description:
      "Topic‑based discussion platform with posts, comments, secure auth, and robust validation.",
    stack: ["Next.js", "Prisma", "NextAuth", "Zod", "Tailwind", "Shadcn"],
    github: "https://github.com/soham518/Discuss--NextJs",
    bullets: [
      "Threaded conversations with topics and comments.",
      "NextAuth (OAuth & credentials) + Zod validation.",
      "Prisma SQL schema for posts, users, votes.",
      "Responsive UI with Tailwind & Shadcn.",
      "Optimized SSR and API routes.",
    ],
  },
  {
    title: "Decentralised Voting App",
    description:
      "Voting DApp with Solidity contracts and React UI; blends on‑chain integrity with off‑chain data.",
    stack: ["React", "Express", "Node", "MongoDB", "Ethereum", "Solidity", "Metamask"],
    github: "https://github.com/soham518/Decentealised-Voting-App",
    bullets: [
      "Transparent, immutable voting flows.",
      "Solidity contracts for candidates and votes.",
      "React + MetaMask for real‑time Web3.",
      "Express/Node + MongoDB off‑chain storage.",
    ],
  },
  {
    title: "VideoHub Backend",
    description:
      "RESTful API for video upload/streaming with JWT auth and Cloudinary.",
    stack: ["Node", "Express", "MongoDB", "JWT", "Cloudinary"],
    github: "https://github.com/soham518/youtube-backend",
    bullets: [
      "Upload, stream, and manage videos.",
      "Cloudinary storage and optimization.",
      "JWT‑based authentication and authorization.",
    ],
  },
];


