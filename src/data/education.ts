export interface EducationItem {
  id: string;
  degree: string;
  discipline: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  status: "verified" | "needs_confirmation";
  highlights: string[];
}

export const educationData: EducationItem[] = [
  {
    id: "be-robotics",
    degree: "Bachelor of Engineering (B.E.)",
    discipline: "Robotics & Automation Engineering",
    institution: "Rajarajeswari College of Engineering (RRCE)",
    location: "Bengaluru, India",
    period: "Pursuing (Final Year)",
    score: "CGPA: 7.8",
    status: "verified",
    highlights: [
      "Specialized in Industrial Robotics, Embedded Controllers, PLC, and Autonomous Systems.",
      "Department Lead in Innovex 2026 Project Exhibition (Awarded 1st Prize).",
      "Hands-on labs in Robot Kinematics, Pneumatic Actuation, and Computer Vision integration."
    ]
  },
  {
    id: "diploma-eee",
    degree: "Diploma",
    discipline: "Electrical & Electronics Engineering (EEE)",
    institution: "MEI Polytechnic",
    location: "Bengaluru, India",
    period: "Completed",
    score: "75.40% (CGPA 8.29)",
    status: "verified",
    highlights: [
      "Rigorous grounding in Electrical Machines, Switchgear, Power Systems, and Circuit Design.",
      "Control panel fabrication, wiring standards, relay logic, and industrial troubleshooting."
    ]
  },
  {
    id: "sslc",
    degree: "Secondary School Leaving Certificate (SSLC)",
    discipline: "General Sciences & Mathematics",
    institution: "Karnataka Secondary Education Examination Board",
    location: "Bengaluru, India",
    period: "Completed",
    score: "70.8% (Verified from latest resume)",
    status: "verified",
    highlights: [
      "Solid foundation in Mathematics, Physical Sciences, and Technical Aptitude."
    ]
  }
];
