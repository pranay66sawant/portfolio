export const personalInfo = {
  name: "Pranay Sawant",
  role: "Frontend Developer",
  tagline: "Building scalable web applications with clean and efficient code",
  bio: "Frontend developer with 2+ years of experience building fast, scalable web applications. I specialize in React, Next.js, and modern UI systems focused on performance and user experience. Currently building real-world products and improving frontend architecture.",
  email: "pranaysawant2205@gmail.com",
  location: "Pune, India",
  availability: "Open to opportunities",
  github: "https://github.com/pranay66sawant",
  linkedin: "https://www.linkedin.com/in/pranay-sawant-22m5/",
  twitter: "https://twitter.com",
  resume: "/Pranay_Sawant_Frontend_Developer.pdf",
};

export const skills = {
  core: [
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Framer Motion", level: 75 },
    { name: "JavaScript", level: 88 },
  ],
  tools: [
    "Git & GitHub",
    "VS Code",
    "Vercel",
    "Webpack",
    "Postman",
  ],
  learning: ["Node.js", "Backend Architecture ", "API Design", "AWS"],
};

export const projects = [
  {
    id: 1,
    title: "Pune Tourism",
    description:
      "A real-time analytics dashboard with interactive charts, dark mode, and smooth animations built for SaaS products.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
    category: "Full Stack",
    image: "/projects/pune.png",
    github: "https://github.com",
    live: "https://pune-tourism.vercel.app/",
    featured: true,
    year: "Ongoing",
  },
  {
    id: 2,
    title: "Botree",
    description:
      "A drag-and-drop creative tool for designers to build visual moodboards with real-time collaboration features.",
    tech: ["React", "Framer Motion", "Zustand", "Supabase"],
    category: "Frontend",
    image: "/projects/botree.png",
    github: "https://github.com",
    live: "https://botree.in/",
    featured: true,
    year: "2024",
  },
  {
    id: 3,
    title: "Live It Up",
    description:
      "Modern event management platform with ticketing, RSVPs, and beautiful landing pages for any event type.",
    tech: ["Next.js", "Tailwind", "Prisma", "PostgreSQL"],
    category: "Frontend",
    image: "/projects/liveitup.png",
    github: "https://github.com",
    live: "https://liveitup.in/",
    featured: false,
    year: "2023",
  },
  {
    id: 4,
    title: "BJW Health",
    description:
      "A link-in-bio tool for developers. Customizable profiles with GitHub stats, tech stack badges, and project cards.",
    tech: ["Next.js", "TypeScript", "Tailwind", "MongoDB"],
    category: "Frontend",
    image: "/projects/bjw.png",
    github: "https://github.com",
    live: "https://bjwhealth.com/index.html",
    featured: false,
    year: "2023",
  },
];

export const experience = [
  {
    company: "PixelForge Studio",
    role: "Frontend Developer",
    period: "Jan 2024 – Present",
    duration: "Current",
    description:
      "Building and maintaining high-performance React applications for enterprise clients. Led migration from CRA to Next.js, reducing load times by 40%.",
    achievements: [
      "Migrated legacy React app to Next.js 14 with App Router",
      "Built reusable component library used across 3 products",
      "Improved Lighthouse scores from 62 to 94",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind", "Storybook"],
  },
  {
    company: "Freelance",
    role: "Frontend Developer",
    period: "Jun 2023 – Dec 2023",
    duration: "6 months",
    description:
      "Worked with startups and agencies to deliver responsive, animated landing pages and web apps under tight deadlines.",
    achievements: [
      "Delivered 8 client projects on time",
      "Built e-commerce frontend with cart and checkout",
      "Created design systems from Figma specs",
    ],
    tech: ["React", "Framer Motion", "SCSS", "JavaScript"],
  },
  {
    company: "ByteBase Labs",
    role: "Junior Frontend Intern",
    period: "Jan 2023 – May 2023",
    duration: "5 months",
    description:
      "Contributed to the company's main SaaS product, fixing bugs and shipping new UI features in a fast-paced agile environment.",
    achievements: [
      "Resolved 30+ UI bugs in production",
      "Built new onboarding flow increasing user activation by 18%",
      "Collaborated with designers in weekly design reviews",
    ],
    tech: ["React", "JavaScript", "Material UI", "REST APIs"],
  },
];

export const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "15+", label: "Projects Built" },
  { value: "8+", label: "Production Deployments" },
  { value: "100%", label: "Responsive Designs" },
];

export const techStack = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Express.js",
  "REST API Design",
  "PostgreSQL",
  "Prisma",
  "Authentication (JWT / NextAuth)",
  "Git",
  "Figma",
  "Vercel",
];
