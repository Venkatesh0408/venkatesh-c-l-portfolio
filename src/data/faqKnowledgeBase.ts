export interface AssistantIntent {
  id: string;
  keywords: string[];
  spokenText: string;
  displayedText: string;
  navigationTarget?: string;
  action?: "openModal" | "downloadResume" | "openContact";
  actionPayload?: string;
  suggestedQuestions: string[];
}

export const assistantIntents: AssistantIntent[] = [
  {
    id: "intro",
    keywords: ["who is venkatesh", "tell me about venkatesh", "who are you", "introduce", "about", "bio", "overview", "summary"],
    spokenText: "Venkatesh C L is a Robotics and Automation Engineer from Bengaluru. He specializes in embedded systems, industrial automation, and robotics prototyping. I am taking you to his About section now.",
    displayedText: `**Venkatesh C L** is a passionate Robotics & Automation engineering student at Rajarajeswari College of Engineering (RRCE), Bengaluru.

- **Core Disciplines:** Robotics, Embedded Systems, Industrial Automation, Electrical Control Panels.
- **Mission:** Designing, building, and automating real-world hardware systems with practical engineering and rigorous testing.
- **Academic Score:** B.E. (CGPA 7.8), Diploma in EEE (75.40%, CGPA 8.29).`,
    navigationTarget: "about",
    suggestedQuestions: [
      "Show me his projects",
      "Explain his work experience",
      "What are his skills?"
    ]
  },
  {
    id: "projects",
    keywords: ["projects", "show me his projects", "show projects", "what did he build", "work samples", "portfolio projects", "hardware projects"],
    spokenText: "Venkatesh has developed four key engineering projects, led by his award-winning Submersible Micro Robot for underwater inspection. Navigating to the Projects section now.",
    displayedText: `Here are Venkatesh's key engineering systems:

1. **Submersible Micro Robot — Underwater Inspection** (Prototype Tested)
   Dual ESP8266 + ESP32-CAM optical inspection vehicle with turbidity sensing for confined water tanks. *(Winner: 1st Prize at Innovex 2026)*.
2. **Automated Fish-Catching Boat** (Concept Prototype)
   Catamaran surface vessel with thruster steering and servo-driven retrieval mechanism.
3. **PLC-Based Object Segregation** (Concept Prototype)
   Automated conveyor model sorting metals and non-metals via inductive sensing and pneumatic diverters.
4. **AI Health Assistant** (Educational Prototype)
   Conversational wellness guidance web prototype.`,
    navigationTarget: "projects",
    suggestedQuestions: [
      "Tell me about the underwater robot",
      "Explain his work experience",
      "What are his skills?"
    ]
  },
  {
    id: "underwater-robot",
    keywords: ["submersible", "underwater robot", "micro robot", "marine", "turbidity", "esp8266", "esp32-cam", "aquatic"],
    spokenText: "The Submersible Micro Robot is designed for inspecting confined water tanks and pipelines. It features live video streaming via ESP32-CAM and analog turbidity measurement on an ESP8266 controller. Importantly, it has no pH or distance sensors in its tested configuration.",
    displayedText: `**Submersible Micro Robot — Underwater Inspection (Prototype Tested)**

- **Architecture:** ESP8266 main control + ESP32-CAM optical streaming node.
- **Sensory Payload:** Calibrated analog turbidity sensor for water clarity measurement.
- **Inspection:** Live MJPEG video stream over local Wi-Fi.
- **Rigorous Technical Note:** *Explicitly operates with NO pH sensor and NO distance sensor in the verified configuration. Visual clarity is not chemical pH measurement.*
- **Honors:** 1st Prize in College-Level Project Exhibition at Innovex 2026.`,
    navigationTarget: "projects",
    action: "openModal",
    actionPayload: "submersible-micro-robot",
    suggestedQuestions: [
      "What are his skills?",
      "Show me his achievements",
      "Explain his work experience"
    ]
  },
  {
    id: "experience",
    keywords: ["experience", "internship", "internships", "work experience", "arrow automation", "xng automation", "industrial"],
    spokenText: "Venkatesh has 8 months of industrial internship experience across Arrow Automation and XNG Automation, working on laser engraving machines, car seat testing rigs, and control panel wiring. Guiding you to the Experience section.",
    displayedText: `**Industrial Internship Experience (8 Months Verified Total)**

1. **Arrow Automation (4 Months — Electrical Engineering Intern)**
   - Operated and calibrated high-precision industrial laser engraving machines.
   - Tested car-seat automotive assembly lines and safety mechanisms.
   - Wired industrial electrical control panels, relay blocks, and circuit breakers.

2. **XNG Automation (4 Months — Electrical Engineering Intern, 10 June – 11 Sept)**
   - Supported industrial automation workflows, sensor alignment, and hardware debugging.
   - Assisted senior engineers in cabinet wiring and motor control testing.`,
    navigationTarget: "experience",
    suggestedQuestions: [
      "What are his skills?",
      "Show me his education",
      "Open contact section"
    ]
  },
  {
    id: "skills",
    keywords: ["skills", "what are his skills", "tools", "technologies", "tech stack", "languages", "programming", "hardware"],
    spokenText: "Venkatesh's core technical toolkit spans embedded microcontrollers like ESP8266 and ESP32-CAM, PLC automation and control panel wiring, pneumatics, and Solid Edge 3D CAD modeling. Let's look at his technical matrix.",
    displayedText: `**Technical Capabilities & Tooling Matrix:**

- **Embedded & Hardware:** ESP8266, ESP32-CAM, Arduino Platforms, Turbidity Sensors, PWM Motor Controllers, Hardware Prototyping.
- **Industrial Automation:** PLC Ladder Logic, Control Panel Wiring, DIN-rail systems, Pneumatics & Electro-Pneumatic solenoid valves.
- **CAD & Prototyping:** Solid Edge, 3D CAD parametric assembly, 3D printing (PETG/PLA slicers).
- **Software & Tools:** Embedded C/C++, Arduino IDE, Python/Flask, React (project-level), Git, GitHub.
- *Strict Rule:* No arbitrary percentage bars — each skill is backed by real physical builds.`,
    navigationTarget: "skills",
    suggestedQuestions: [
      "Show me his projects",
      "Tell me about his education",
      "What awards has he won?"
    ]
  },
  {
    id: "education",
    keywords: ["education", "college", "degree", "diploma", "cgpa", "academics", "marks", "scores", "school", "rrce"],
    spokenText: "Venkatesh is pursuing his B.E. in Robotics and Automation at Rajarajeswari College of Engineering with a 7.8 CGPA. He also holds a Diploma in Electrical and Electronics Engineering with 75.40% and an 8.29 CGPA. Here is his academic timeline.",
    displayedText: `**Academic Trajectory:**

- **B.E. in Robotics & Automation Engineering (Pursuing, Final Year)**
  - Institution: Rajarajeswari College of Engineering (RRCE), Bengaluru
  - Score: **CGPA 7.8**
- **Diploma in Electrical & Electronics Engineering (EEE)**
  - Institution: MEI Polytechnic, Bengaluru
  - Score: **75.40% | CGPA 8.29**
- **Secondary School Leaving Certificate (SSLC)**
  - Score: **70.8%** *(Verified from latest resume)*`,
    navigationTarget: "education",
    suggestedQuestions: [
      "Explain his work experience",
      "Show me his achievements",
      "Open contact section"
    ]
  },
  {
    id: "achievements",
    keywords: ["achievements", "awards", "honors", "innovex", "certificates", "hackathon", "prizes", "chess", "tug of war", "sports"],
    spokenText: "Venkatesh won First Prize at Innovex 2026 for his underwater robot, First Place in the INNOVESTA 2K26 Fashion Walk, Second Prize in Tug of War and Third Prize in Chess, and participated in both the Agentic AI Hackathon and MSME Hackathon. Navigating to Achievements.",
    displayedText: `**Honors, Competitions & Certificates:**

- **1st Prize:** College-Level Project Exhibition at **Innovex 2026** (RRCE) for the Submersible Micro Robot.
- **1st Place:** Fashion Walk at **INNOVESTA 2K26** (Surana College).
- **2nd Prize (Tug of War) & 3rd Prize (Chess):** Sports & strategic competition trophy honors.
- **Participant:** **Agentic AI Hackathon** (12–13 March 2026) — Verified Certificate Scan available.
- **2nd Prize:** Water Conservation Short Film *"Silent Stream"*.
- **Certified Workshop:** 5-Day Intensive Workshop on **Pneumatics & Electro-Pneumatics**.
- **Participant:** MSME Innovation Hackathon.`,
    navigationTarget: "achievements",
    suggestedQuestions: [
      "Show me his projects",
      "Download resume",
      "Open contact section"
    ]
  },
  {
    id: "contact",
    keywords: ["contact", "hire", "email", "phone", "whatsapp", "call", "reach out", "connect", "linkedin", "message"],
    spokenText: "You can reach Venkatesh directly via email at venkateshcl0408@gmail.com, or phone at +91 8147134789, as well as on LinkedIn and GitHub. Guiding you to the Contact hub now.",
    displayedText: `**Secure Communications Hub:**

- **Location:** Bengaluru, Karnataka, India
- **Direct Phone:** [+91 8147134789](tel:+918147134789)
- **Email:** [venkateshcl0408@gmail.com](mailto:venkateshcl0408@gmail.com)
- **WhatsApp:** [Direct Chat](https://wa.me/918147134789)
- **LinkedIn:** [linkedin.com/in/venkatesh-venky-a63639313](https://linkedin.com/in/venkatesh-venky-a63639313)
- **GitHub:** [github.com/Venkatesh0408](https://github.com/Venkatesh0408)

*Click any link to launch your preferred communications application.*`,
    navigationTarget: "contact",
    action: "openContact",
    suggestedQuestions: [
      "Download resume",
      "Show me his projects",
      "Tell me about Venkatesh"
    ]
  },
  {
    id: "resume",
    keywords: ["resume", "cv", "download resume", "curriculum vitae", "pdf resume"],
    spokenText: "I have prepared Venkatesh's official engineering resume for you. You can download the PDF file directly.",
    displayedText: `**Engineering Resume (PDF)**

Venkatesh's complete resume includes verified academic records, detailed internship contributions at Arrow Automation & XNG Automation, and project schematics.

[Click here to view / download resume (PDF)](/assets/Venkatesh_CL_RESUME.pdf)`,
    action: "downloadResume",
    actionPayload: "/assets/Venkatesh_CL_RESUME.pdf",
    suggestedQuestions: [
      "Show me his projects",
      "Explain his work experience",
      "Open contact section"
    ]
  }
];

export const fallbackIntent: AssistantIntent = {
  id: "fallback",
  keywords: [],
  spokenText: "I don't have that specific detail in Venkatesh's approved profile yet. I can guide you through his verified projects, work experience, education, or open his contact section.",
  displayedText: `**Command Not Recognized in Approved Dossier**

I am programmed to only share verified engineering facts regarding Venkatesh C L.

You can ask me about:
- **"Tell me about Venkatesh"** — High-level summary & background
- **"Show me his projects"** — Submersible Micro Robot, Boat, PLC conveyor
- **"Explain his work experience"** — Arrow Automation & XNG Automation
- **"What are his skills?"** — Embedded systems, PLC, CAD, Pneumatics
- **"Tell me about his education"** — B.E. at RRCE & Diploma in EEE
- **"Open contact section"** — Direct phone, WhatsApp, email, & LinkedIn`,
  suggestedQuestions: [
    "Show me his projects",
    "Explain his work experience",
    "Open contact section"
  ]
};
