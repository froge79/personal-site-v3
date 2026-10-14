export type Project = {
  slug: string;
  title: string;
  year: string;
  description: string;
  reflection: string;
  details: string[];
  code: string;
};

const PLACEHOLDER_REFLECTION =
  "A short personal note about this project: what I enjoyed, what surprised me, and what I would do differently.";

const PLACEHOLDER_DETAILS = [
  "Stack: placeholder",
  "Notable technical detail: placeholder",
];

const projects: Project[] = [
  {
    slug: "joyhoops-site",
    title: "JoyHoops",
    year: "2024",
    description: "Full-stack site for local sports nonprofit. ",
    reflection: "I learned a lot building this before coding agents/vibe-coding really became mainstream. Went through so many dead-ends and stupid mistakes using Supabase. When Claude Code came along it really sped up the process.",
    details: ["Stack: NextJS, shadcn, Supabase, Stripe, Zod"],
    code: "https://github.com/froge79/joyhoops-site",
  },
  {
    slug: "polidebater-cac",
    title: "PoliDebater (Congressional App Challenge)",
    year: "2025",
    description: "Educational political/civic debate app with structure arguments and scoring",
    reflection: "Simple design, premise, but I beat out more complex apps by focusing on a real pain-point that the judges connected with.",
    details: ["Stack: NextJS, Radix/shadcn, OpenAI API, Upstash Redis"],
    code: "https://github.com/froge79/polidebater",
  },
  {
    slug: "circuitcheck",
    title: "circuitcheck",
    year: "2026",
    description: "Score circuits against size-matched random baselines",
    reflection: "Still very much a work in progress. Hoping to get some real researchers to use it. I think my idea is good but there are so many implementation difficulties.",
    details: ["Stack: circuit-tracer, Python"],
    code: "https://github.com/froge79/circuitcheck",
  },
  {
    slug: "ttr-europe",
    "title": "Ticket to Ride: Europe",
    year: "2024",
    description: "Implementation of the board game in vanilla Java Swing",
    reflection: "Group project for the CS class. I wrote 90% of the code and it really taught me the importance of structuring well and adhering to OOP princples. Was a bit unfortunate that one small bug caused our teacher to encounter a big error.",
    details: ["Stack: Java Swing"],
    code: "https://github.com/froge79/ticket-to-ride-europe"

  }
];

export function getAllProjects(): Project[] {
  return projects;
}
