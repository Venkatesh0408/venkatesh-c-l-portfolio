export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  points: string[];
  githubUrl?: string;
  demoUrl?: string;
  images: { url: string; caption: string }[];
  verifiedNote?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "submersible-micro-robot",
    title: "1. Submersible Micro Robot – Underwater Inspection",
    category: "Robotics & Marine Inspection",
    points: [
      "Developing a compact robot concept for visual inspection of confined water environments.",
      "Integrated ESP8266-based control architecture with an ESP32-CAM camera node for image capture and live viewing.",
      "Worked with turbidity sensing and sensor data collection for water-condition monitoring.",
      "Explored propulsion control, waterproof packaging and hardware integration.",
      "Created a PC-based mission-monitoring dashboard concept for camera view, sensor readings and inspection records.",
      "Camera-based visual assessment is distinguished from measured pH; the project does not use a pH sensor."
    ],
    githubUrl: "https://github.com/Venkatesh0408",
    demoUrl: "https://submersible-micro-robot.onrender.com",
    images: [
      { url: "/assets/test1.png", caption: "Physical Tank Submersion & Buoyancy Testing" },
      { url: "/assets/test2.png", caption: "Electronics Assembly & Turbidity Sensor Calibration" },
      { url: "/assets/sim1.png", caption: "CAD Simulation & Chassis Layout" }
    ],
    verifiedNote: "Camera-based visual assessment is distinguished from measured pH; the project does not use a pH sensor."
  },
  {
    id: "automated-fish-boat",
    title: "2. Automated Fish-Catching Boat",
    category: "Marine Robotics & Basic Automation",
    points: [
      "Developed an automated boat concept to support fish-catching activities.",
      "Explored a floating platform, propulsion and a mechanism for assisting fish collection.",
      "Focused on combining basic automation with a practical marine application."
    ],
    githubUrl: "https://github.com/Venkatesh0408",
    images: [
      { url: "/assets/im2.png", caption: "Floating Platform & Propulsion Integration Rig" }
    ]
  },
  {
    id: "plc-object-segregation",
    title: "3. PLC-Based Object Segregation Prototype",
    category: "Industrial Automation & Material Handling",
    points: [
      "Designed a prototype to identify and segregate metal and non-metal objects.",
      "Used sensor input, PLC logic and actuator-based sorting concepts.",
      "Demonstrated industrial automation in a material-handling process."
    ],
    githubUrl: "https://github.com/Venkatesh0408",
    images: [
      { url: "/assets/temp.png", caption: "Sensor Input & Actuator Sorting Diagram" }
    ]
  },
  {
    id: "ai-health-assistant",
    title: "4. AI Health Assistant",
    category: "Digital Assistant & Software Systems",
    points: [
      "Worked on an AI-assisted health information project and explored a digital assistant concept for health-related queries.",
      "Focused on presenting information through a user-friendly interface."
    ],
    githubUrl: "https://github.com/Venkatesh0408",
    images: []
  }
];
