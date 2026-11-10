export interface AchievementItem {
  id: string;
  title: string;
  event: string;
  category: "Award" | "Hackathon" | "Workshop" | "Extracurricular";
  awardPlacement: string;
  date: string;
  organiser: string;
  description: string;
  hasScan: boolean;
  scanUrl?: string;
  status: "verified";
}

export const achievementsData: AchievementItem[] = [
  {
    id: "innovex-2026",
    title: "1st Prize — College-Level Project Exhibition",
    event: "Innovex 2026",
    category: "Award",
    awardPlacement: "1st Place (Gold)",
    date: "03 November 2026",
    organiser: "Rajarajeswari College of Engineering (RRCE)",
    description: "Awarded First Prize for the Submersible Micro Robot prototype demonstrating dual-microcontroller telemetry and optical underwater inspection in confined water tanks.",
    hasScan: true,
    scanUrl: "/assets/award-logo.png",
    status: "verified"
  },
  {
    id: "innovesta-2k26",
    title: "1st Place — Fashion Walk",
    event: "INNOVESTA 2K26",
    category: "Extracurricular",
    awardPlacement: "1st Place",
    date: "27–28 February 2026",
    organiser: "Surana College",
    description: "Secured top position representing RRCE in the inter-collegiate creative and cultural showcase.",
    hasScan: false,
    status: "verified"
  },
  {
    id: "agentic-ai-hackathon",
    title: "Participant — Agentic AI Hackathon",
    event: "National Agentic AI Hackathon",
    category: "Hackathon",
    awardPlacement: "Participation & Finalist",
    date: "12–13 March 2026",
    organiser: "Agentic Systems Forum",
    description: "Collaborated on agentic workflow integration, tool calling patterns, and multi-agent systems.",
    hasScan: true,
    scanUrl: "/assets/college-logo.png",
    status: "verified"
  },
  {
    id: "silent-stream-film",
    title: "2nd Prize — Water Conservation Short Film",
    event: "'Silent Stream' SCR Initiative",
    category: "Award",
    awardPlacement: "2nd Prize",
    date: "2025",
    organiser: "Student Community Responsibility (SCR)",
    description: "Directed and edited an educational short film raising community awareness around aquatic pollution and urban water table conservation.",
    hasScan: false,
    status: "verified"
  },
  {
    id: "pneumatics-workshop",
    title: "5-Day Workshop on Pneumatics & Electro-Pneumatics",
    event: "Advanced Industrial Automation Training",
    category: "Workshop",
    awardPlacement: "Certified Completion",
    date: "2025",
    organiser: "Department of Robotics & Automation, RRCE",
    description: "Intensive 5-day hands-on certification covering pneumatic circuit design, solenoid directional valves, electro-pneumatic ladder logic, and air system safety.",
    hasScan: false,
    status: "verified"
  },
  {
    id: "msme-hackathon",
    title: "Participant — MSME Innovation Hackathon",
    event: "MSME Hackathon",
    category: "Hackathon",
    awardPlacement: "Project Pitch Finalist",
    date: "2025",
    organiser: "Ministry of MSME Initiative",
    description: "Proposed cost-effective robotic solutions for micro-industrial manufacturing inspection and object sorting.",
    hasScan: false,
    status: "verified"
  },
  {
    id: "tug-of-war-chess",
    title: "Sports Honors: 2nd Prize Tug of War & 3rd Prize Chess",
    event: "Annual College Sports Meet",
    category: "Extracurricular",
    awardPlacement: "2nd & 3rd Place",
    date: "2025",
    organiser: "RRCE Sports Council",
    description: "Demonstrated tactical thinking and team leadership across competitive collegiate athletics and chess tournaments.",
    hasScan: false,
    status: "verified"
  }
];
