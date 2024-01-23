type ProjectsType = {
  name: string;
  description: string;
  githubUrl: string;
  previewUrl: string;
  stack: Array<string>;
};

export const projects: Array<ProjectsType> = [
  {
    name: "Gridl",
    description: "Your very own social moodboard, in one simple link in bio.",
    githubUrl: "",
    previewUrl: "",
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "Prisma",
      "Supabase",
      "tRPC",
      "Vercel",
      "AWS",
      "Tailwind",
    ],
  },
  {
    name: "Gradiently",
    description:
      "A minimal, lightweight npm package that generates beautiful colours and gradients.",
    githubUrl: "https://github.com/elijahnikov/gradiently",
    previewUrl: "https://gradiently-demo.vercel.app/",
    stack: ["TypeScript", "React"],
  },
  {
    name: "Crumble",
    description: "A social media network for film lovers.",
    githubUrl: "",
    previewUrl: "",
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "Prisma",
      "Planetscale",
      "tRPC",
      "Vercel",
      "AWS",
      "Tailwind",
    ],
  },
  {
    name: "UI",
    description: "A lightweight UI library.",
    githubUrl: "https://github.com/elijahnikov/ui",
    previewUrl: "https://ui-sepia.vercel.app/tooltip",
    stack: ["TypeScript", "React", "Tailwind"],
  },
  {
    name: "FitnessApp",
    description: "A modern full stack fitness web app.",
    githubUrl: "https://github.com/elijahnikov/fitness",
    previewUrl: "",
    stack: [
      "React",
      "Next.js",
      "GraphQL",
      "PostgreSQL",
      "Apollo",
      "Express.js",
    ],
  },
];
