export interface SkillCategoryGroup {
  category: string;
  items: string[];
}

export const skillsResumeData: SkillCategoryGroup[] = [
  {
    category: "Embedded & Electronics",
    items: [
      "ESP8266",
      "ESP32-CAM",
      "Arduino platforms",
      "Sensor interfacing",
      "Turbidity sensing",
      "Basic motor-control hardware",
      "Electronics prototyping"
    ]
  },
  {
    category: "Automation",
    items: [
      "PLC-based automation concepts",
      "Electrical control panels",
      "Industrial automation",
      "Pneumatics and electro-pneumatics"
    ]
  },
  {
    category: "Design & Fabrication",
    items: [
      "Solid Edge",
      "CAD modelling concepts",
      "3D-printing concepts and prototyping"
    ]
  },
  {
    category: "Project Tools / Platforms",
    items: [
      "Arduino IDE",
      "GitHub",
      "Vercel",
      "Render",
      "Flask",
      "React",
      "OpenCV (project-level exposure)"
    ]
  }
];
