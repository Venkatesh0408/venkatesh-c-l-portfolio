export interface LanguageItem {
  name: string;
  level: string;
  type: string;
  description: string;
}

export const languagesData: LanguageItem[] = [
  {
    name: "Kannada",
    level: "Advanced / Native",
    type: "Primary Mother Tongue",
    description: "Complete native fluency in spoken, written, and technical communication."
  },
  {
    name: "English",
    level: "Intermediate",
    type: "Professional Working Proficiency",
    description: "Technical reporting, engineering presentations, documentation, and client collaboration."
  },
  {
    name: "Hindi",
    level: "Intermediate",
    type: "Conversational Proficiency",
    description: "Effective conversational fluency for nationwide engineering and industrial team collaboration."
  }
];
