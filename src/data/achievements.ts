export interface AwardItem {
  id: string;
  title: string;
  category: "Award" | "Workshop";
  scanUrl?: string;
  pdfUrl?: string;
}

export const awardsList: AwardItem[] = [
  {
    id: "innovesta",
    title: "First Place – Fashion Walk, INNOVESTA 2K26, Surana College (27–28 February 2026)",
    category: "Award",
    scanUrl: "/assets/innovesta-2k26-certificate.jpg",
    pdfUrl: "/assets/INNOVESTA_2K26_Fashion_Walk_Certificate.pdf"
  },
  {
    id: "innovex",
    title: "First Prize – College-Level Project Exhibition, Innovex 2026 (3 November 2026)",
    category: "Award",
    scanUrl: "/assets/innovex-2026-certificate.jpg",
    pdfUrl: "/assets/Innovex_2026_Project_Exhibition_Certificate.pdf"
  },
  {
    id: "silent-stream",
    title: "Second Prize – Water Conservation Short Film, “Silent Stream” (SCR Activity)",
    category: "Award",
    scanUrl: "/assets/water-conservation-certificate.jpg",
    pdfUrl: "/assets/Water_Conservation_Silent_Stream_Certificate.pdf"
  },
  {
    id: "sports",
    title: "Second Prize – Tug of War | Third Prize – Chess",
    category: "Award",
    scanUrl: "/assets/sports-tug-of-war-chess-trophies.jpg",
    pdfUrl: "/assets/Sports_Tug_Of_War_Chess_Award.pdf"
  },
  {
    id: "agentic-ai",
    title: "Participant – Agentic AI Hackathon (12–13 March 2026)",
    category: "Award",
    scanUrl: "/assets/agentic-ai-hackathon-certificate.png",
    pdfUrl: "/assets/Agentic_AI_Hackathon_Certificate.pdf"
  },
  {
    id: "pneumatics",
    title: "Five-day workshop on Pneumatics and Electro-Pneumatics",
    category: "Workshop"
  },
  {
    id: "msme",
    title: "Participated in an MSME Hackathon",
    category: "Workshop"
  }
];
