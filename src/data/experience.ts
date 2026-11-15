export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  points: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "arrow-automation",
    role: "Electrical Engineering Intern",
    company: "Arrow Automation",
    duration: "4 months",
    points: [
      "Gained practical exposure to industrial automation equipment and engineering activities.",
      "Observed work around laser engraving machines and car-seat assembly/testing processes.",
      "Assisted with control-panel wiring and developed familiarity with industrial electrical systems."
    ]
  },
  {
    id: "xng-automation",
    role: "Electrical Engineering Intern",
    company: "XNG Automation",
    duration: "10 June – 11 September",
    points: [
      "Completed an internship in an electrical and automation work environment.",
      "Gained exposure to industrial engineering activities and automation-related equipment."
    ]
  }
];
