export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  datesText: string;
  type: string;
  status: "verified" | "needs_confirmation";
  summary: string;
  responsibilities: string[];
  equipment: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "arrow-automation",
    role: "Electrical Engineering Intern",
    company: "Arrow Automation",
    duration: "4 Months",
    datesText: "Verified 4 Months Industrial Placement",
    type: "Industrial Internship",
    status: "verified",
    summary: "Hands-on engineering exposure to automated industrial manufacturing, laser engraving machinery, and automotive assembly lines.",
    responsibilities: [
      "Assisted in operation, focal calibration, and testing of high-precision industrial laser engraving machines.",
      "Participated in automated car-seat assembly and structural testing procedures adhering to safety protocols.",
      "Executed industrial electrical control-panel wiring, wire harnessing, ferrule labeling, and continuity testing."
    ],
    equipment: ["Laser Engraving Systems", "Control Panels", "Multi-meters & Calibrators", "Relay Blocks", "Automotive Testing Rigs"]
  },
  {
    id: "xng-automation",
    role: "Electrical Engineering Intern",
    company: "XNG Automation",
    duration: "4 Months",
    datesText: "10 June – 11 September",
    type: "Industrial Internship",
    status: "verified",
    summary: "Practical training in industrial automation workflows, sensor telemetry, and hardware debugging.",
    responsibilities: [
      "Gained exposure to automation architecture, motor control systems, and industrial sensor integration.",
      "Assisted senior engineers in troubleshooting electrical cabinets, sensors, and actuator loops on the shop floor.",
      "Maintained system logs, wiring schematics, and prototype inspection documentation."
    ],
    equipment: ["Industrial Automation Kits", "Photoelectric & Proximity Sensors", "Drive Controllers", "Panel Enclosures"]
  }
];
