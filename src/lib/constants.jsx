import { ReactLogo, ThreeJsLogo } from "@/components/icons";

// EmailJS
export const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";
export const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
export const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";

// Links
export const CONTACT_EMAIL = "lokeshsaraswat1511@gmail.com";
export const GITHUB_LINK = "https://github.com/LokonGit";
// Self-hosted, so no visitor data reaches GitHub just by loading the page
export const AVATAR_IMG_SRC = "/assets/pictures/lokesh_saraswat_avatar.webp";
export const LINKEDIN_LINK =
  "https://www.linkedin.com/in/lokesh-saraswat-7a9318371/";

export function getResumeLink() {
  return "/lokesh-saraswat-cv.pdf";
}

// Job experience
export const JOB_EXPERIENCE_LIST = {
  esummit: {
    id: "esummit",
    logoImgSrc: "/assets/textures/asteroids/esummit_logo.png",
    countryEmoji: "🇮🇳",
    Period: () => "Sept 2026 – now",
    Location: () => "E-Cell, IIT Roorkee",
    Occupation: () => "Senior Manager",
    company: "E-Summit '27",
    Description: () =>
      "I'm currently a Senior Manager in the Public Relations vertical, where we handle the PR of the Summit event.",
    Responsibilities: () => (
      <>
        <li>handling the PR of the Summit event</li>
      </>
    ),
    SkillsNeeded: () => (
      <>
        <li>listing</li>
        <li>finding</li>
        <li>convincing</li>
      </>
    ),
  },

  homa: {
    id: "homa",
    logoImgSrc: "/assets/textures/asteroids/homa_logo.png",
    countryEmoji: "🇮🇳",
    Period: () => "July 2026 – Sept 2026",
    Location: () => "Remote",
    Occupation: () => "Remote Intern",
    company: "Homa",
    Description: () =>
      "Homa is a Mumbai-based company. We built its internal software, which the company uses to manage its home managers, the home managers of HNIs in Mumbai.",
    Responsibilities: () => (
      <>
        <li>built the company's internal software for managing home managers</li>
      </>
    ),
    SkillsNeeded: () => (
      <>
        <li>Python</li>
        <li>JavaScript</li>
        <li>PostgreSQL</li>
        <li>FastAPI</li>
        <li>Next.js</li>
      </>
    ),
  },

  soc: {
    id: "soc",
    logoImgSrc: "/assets/textures/asteroids/mdg_logo.png",
    countryEmoji: "🇮🇳",
    Period: () => "Dec 2025 – Jan 2026 · 2 mos",
    Location: () => "MDG, IIT Roorkee",
    Occupation: () => "Freelance Project",
    company: "MDG's Season of Code",
    Description: () =>
      "Developed RoomView3D during the Season of Code (MDG), a web application that transforms a 2D room image into an interactive 3D visualization.",
    Responsibilities: () => (
      <>
        <li>implemented furniture customization features, allowing users to modify furniture positions and appearances in real time for an immersive room design experience</li>
      </>
    ),
    SkillsNeeded: () => (
      <>
        <li>Flask</li>
        <li>React</li>
        <li>React Three Fiber (React Drei)</li>
        <li>Three.js</li>
      </>
    ),
  },
};

// Certificates
export const CERTIFICATES_LIST = [
  {
    Title: () => "Competitive Programming",
    authorName: "Codeforces, AtCoder",
    Icon: () => <span className="font-emoji">🏆</span>,
    isRelevant: true,
  },
  {
    Title: () => "Data Structures & Algorithms",
    Icon: () => <span className="font-emoji">🧠</span>,
    isRelevant: true,
  },
  {
    Title: () => "Languages",
    authorName: "C, C++, Python, JavaScript, SQL, HTML, CSS",
    Icon: () => <span className="font-emoji">💻</span>,
    isRelevant: true,
  },
  {
    Title: () => "Development",
    authorName: "ReactJS, NextJS, TailwindCSS, NodeJS, ExpressJS, PostgreSQL, Supabase",
    Icon: () => <span className="font-emoji">⚛️</span>,
    isRelevant: true,
  },
  {
    Title: () => "Tools",
    authorName: "Git, GitHub, Gemini & Claude",
    Icon: () => <span className="font-emoji">🛠️</span>,
    isRelevant: true,
  },
];

// Projects
const sourceCodeLabel = () => "Source code";

export const PROJECTS_LIST = [
  {
    id: "inventory-management-system",
    Title: () => "Inventory Management System",
    Kicker: () => "Council work · 2026",
    Description: () =>
      "A full-stack web application built for IIT Roorkee's Cultural Council to streamline the booking, issuance, and return of physical assets.",
    tags: [
      { label: "Recharts" },
      { label: "PostgreSQL" },
      { label: "Axios" },
      { label: "Express 5" },
      { label: "bcryptjs" },
    ],
    thumbnailImgUrl: "/assets/pictures/inventory_thumbnail.webp",
    ThumbnailAlt: () => "Inventory and asset management illustration",
    links: [
      {
        Label: sourceCodeLabel,
        href: "https://github.com/LokonGit/Cult_OP",
        variant: "primary",
      },
    ],
  },
  {
    id: "roomview3d",
    Title: () => "RoomView3D",
    Kicker: () => "Season of Code · 2025",
    Description: () =>
      "A full-stack web application that provides an interactive 3D room visualization experience.",
    tags: [
      { label: "Three.js", Icon: ThreeJsLogo },
      { label: "React", Icon: ReactLogo },
      { label: "Python" },
      { label: "FastAPI" },
    ],
    thumbnailImgUrl: "/assets/pictures/roomview3d_thumbnail.webp",
    ThumbnailAlt: () => "3D furnished room rendered in RoomView3D",
    links: [
      {
        Label: sourceCodeLabel,
        href: "https://github.com/LokonGit/RoomView3D",
        variant: "primary",
      },
    ],
  },
];
