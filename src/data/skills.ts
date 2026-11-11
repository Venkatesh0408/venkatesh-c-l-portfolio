export type SkillCategory =
  | "Robotics and Automation"
  | "Electrical and Electronics"
  | "Embedded Systems"
  | "PLC and Industrial Automation"
  | "Sensors and Hardware Integration"
  | "CAD and Solid Edge"
  | "Arduino IDE"
  | "GitHub and project deployment tools";

export type ProficiencyLevel = "Practical Proficiency" | "Industrial Training" | "Project-Level Exposure" | "Foundational Knowledge";

export interface SkillItem {
  name: string;
  category: SkillCategory;
  level: ProficiencyLevel;
  practicalUse: string;
  appliedIn: string;
}

export const skillCategories: SkillCategory[] = [
  "Robotics and Automation",
  "Electrical and Electronics",
  "Embedded Systems",
  "PLC and Industrial Automation",
  "Sensors and Hardware Integration",
  "CAD and Solid Edge",
  "Arduino IDE",
  "GitHub and project deployment tools"
];

export const skillsData: SkillItem[] = [
  // 1. Robotics and Automation
  {
    name: "Underwater Inspection Robot Architecture",
    category: "Robotics and Automation",
    level: "Practical Proficiency",
    practicalUse: "Dual-controller design, propulsion pods, neutral buoyancy balancing, and tethered communication for confined water survey.",
    appliedIn: "Submersible Micro Robot (1st Prize, Innovex 2026)"
  },
  {
    name: "Catamaran Robotic Platform Prototyping",
    category: "Robotics and Automation",
    level: "Project-Level Exposure",
    practicalUse: "Twin-hull buoyancy calculations, differential thruster mixing for agile turning, and servo-actuated net retrieval.",
    appliedIn: "Automated Fish-Catching Boat prototype"
  },
  {
    name: "Automated Material Sorting Mechanism",
    category: "Robotics and Automation",
    level: "Project-Level Exposure",
    practicalUse: "Conveyor timing sequence, sensor classification, and electro-pneumatic diverter gate coordination.",
    appliedIn: "PLC-Based Object Segregation prototype"
  },
  {
    name: "Robot Kinematics & Actuation Labs",
    category: "Robotics and Automation",
    level: "Foundational Knowledge",
    practicalUse: "Degrees of freedom analysis, actuator selection, servo/stepper motor control, and robotic arm mechanisms.",
    appliedIn: "RRCE Robotics and Automation engineering coursework"
  },

  // 2. Electrical and Electronics
  {
    name: "Electrical Control Panel Wiring",
    category: "Electrical and Electronics",
    level: "Practical Proficiency",
    practicalUse: "DIN-rail layout, terminal block wiring, ferrule labeling, contactor/relay coil routing, and industrial grounding.",
    appliedIn: "Arrow Automation & XNG Automation internships"
  },
  {
    name: "Circuit Diagnostics & Multimeter Testing",
    category: "Electrical and Electronics",
    level: "Practical Proficiency",
    practicalUse: "Signal continuity tracing, DC voltage rail verification (3.3V/5V/12V/24V), current draw auditing, and fuse testing.",
    appliedIn: "Industrial switchgear testing and electronics lab rigs"
  },
  {
    name: "Motor Drivers & Power Distribution",
    category: "Electrical and Electronics",
    level: "Practical Proficiency",
    practicalUse: "L298N H-bridge configuration, MOSFET switching, Li-Po battery pack distribution, and voltage regulator stabilization.",
    appliedIn: "Robot hull electronics and conveyor propulsion"
  },
  {
    name: "Industrial Safety Systems & Interlocks",
    category: "Electrical and Electronics",
    level: "Industrial Training",
    practicalUse: "Emergency-stop circuit integration, optical safety interlocks, and machine-level protective enclosures.",
    appliedIn: "Arrow Automation car-seat test systems & laser calibration"
  },

  // 3. Embedded Systems
  {
    name: "ESP8266 Microcontroller",
    category: "Embedded Systems",
    level: "Practical Proficiency",
    practicalUse: "Wi-Fi telemetry broadcasting, WebSocket server setup, sensor ADC acquisition, and PWM motor throttle logic.",
    appliedIn: "Submersible Micro Robot main telemetry unit"
  },
  {
    name: "ESP32-CAM Module",
    category: "Embedded Systems",
    level: "Practical Proficiency",
    practicalUse: "OV2640 camera interface initialization, HTTP MJPEG stream serving over local wireless networks.",
    appliedIn: "Submersible Micro Robot optical inspection node"
  },
  {
    name: "Embedded C / C++ (Firmware)",
    category: "Embedded Systems",
    level: "Practical Proficiency",
    practicalUse: "Non-blocking millis() timers, hardware interrupt routines, serial UART parsing, and failsafe watchdog handling.",
    appliedIn: "Microcontroller firmware for underwater and surface robots"
  },
  {
    name: "Hardware Interface Protocols",
    category: "Embedded Systems",
    level: "Practical Proficiency",
    practicalUse: "UART serial telemetry, I2C bus sensor communication, analog voltage sampling, and digital GPIO debounce.",
    appliedIn: "Multi-MCU telemetry interconnects"
  },

  // 4. PLC and Industrial Automation
  {
    name: "PLC Architecture & I/O Signal Routing",
    category: "PLC and Industrial Automation",
    level: "Industrial Training",
    practicalUse: "Opto-isolated 24V DC input/output routing, scan-cycle logic execution, and field device interfacing.",
    appliedIn: "PLC Object Segregation & Diploma automation labs"
  },
  {
    name: "Ladder Logic Programming",
    category: "PLC and Industrial Automation",
    level: "Practical Proficiency",
    practicalUse: "Normally Open/Closed contact logic, internal latch bits, ON-delay/OFF-delay timers, and cycle counters.",
    appliedIn: "Automated conveyor sorting sequences"
  },
  {
    name: "Pneumatics & Electro-Pneumatics",
    category: "PLC and Industrial Automation",
    level: "Industrial Training",
    practicalUse: "5/2 way single/double solenoid valves, double-acting pneumatic cylinders, FRL units, and pneumatic sequencing.",
    appliedIn: "Certified 5-day specialized RRCE workshop & sorting prototype"
  },
  {
    name: "Automotive Assembly Line Testing",
    category: "PLC and Industrial Automation",
    level: "Industrial Training",
    practicalUse: "Assisted in operating and verifying automated car-seat assembly testing lines and sensor-driven pass/fail stations.",
    appliedIn: "Arrow Automation manufacturing floor"
  },

  // 5. Sensors and Hardware Integration
  {
    name: "Analog Turbidity Sensing",
    category: "Sensors and Hardware Integration",
    level: "Practical Proficiency",
    practicalUse: "Optical infrared light transmission sampling, analog voltage curve calibration, and sedimentation detection.",
    appliedIn: "Submersible Micro Robot water quality telemetry"
  },
  {
    name: "Inductive Proximity Sensors",
    category: "Sensors and Hardware Integration",
    level: "Practical Proficiency",
    practicalUse: "Eddy-current ferrous metal detection, threshold tuning, and high-speed conveyor trigger integration.",
    appliedIn: "Metal vs non-metal sorting automation"
  },
  {
    name: "Diffuse Optical & Photoelectric Sensors",
    category: "Sensors and Hardware Integration",
    level: "Practical Proficiency",
    practicalUse: "Infrared reflection beam interruption for part detection, conveyor entry/exit counting, and cycle trigger.",
    appliedIn: "Conveyor part presence detection"
  },
  {
    name: "Watertight Mechanical Sealing",
    category: "Sensors and Hardware Integration",
    level: "Practical Proficiency",
    practicalUse: "Radial O-ring seals, IP-rated waterproof cable glands, dynamic silicone shaft seals, and acrylic hull bonding.",
    appliedIn: "Submersible Micro Robot submersible hull pressure integrity"
  },

  // 6. CAD and Solid Edge
  {
    name: "Solid Edge 3D Parametric Modeling",
    category: "CAD and Solid Edge",
    level: "Practical Proficiency",
    practicalUse: "Parametric solid modeling, cylinder shell extrusion, end-cap design, assembly clearance verification, and 2D draft generation.",
    appliedIn: "Submersible hull geometry and thruster pod mounts"
  },
  {
    name: "Watertight Enclosure Mechanical Design",
    category: "CAD and Solid Edge",
    level: "Practical Proficiency",
    practicalUse: "Designing O-ring gland dimensions, flange bolt circles, camera lens viewing ports, and internal chassis trays.",
    appliedIn: "Submersible Micro Robot waterproof capsule"
  },
  {
    name: "3D Printing & Rapid Prototyping",
    category: "CAD and Solid Edge",
    level: "Practical Proficiency",
    practicalUse: "Slicing optimization, wall thickness parameters, infill density tuning for PETG/PLA structural brackets.",
    appliedIn: "Propeller shrouds, sensor brackets, and chassis standoffs"
  },

  // 7. Arduino IDE
  {
    name: "Firmware Development & Flashing",
    category: "Arduino IDE",
    level: "Practical Proficiency",
    practicalUse: "ESP8266 and ESP32 board package configuration, toolchain setup, baud-rate selection, and flash memory partitioning.",
    appliedIn: "All embedded robotics projects"
  },
  {
    name: "Serial Telemetry & Bench Calibration",
    category: "Arduino IDE",
    level: "Practical Proficiency",
    practicalUse: "Serial Plotter live graphing, sensor calibration math validation, timing jitter analysis, and debugging output.",
    appliedIn: "Turbidity sensor baseline calibration and motor ESC testing"
  },
  {
    name: "Rapid Hardware Prototyping",
    category: "Arduino IDE",
    level: "Practical Proficiency",
    practicalUse: "Rapid verification of third-party sensor breakout boards, PWM motor drivers, and I2C modules before final PCB integration.",
    appliedIn: "Bench testing rigs and prototype validation"
  },

  // 8. GitHub and project deployment tools
  {
    name: "Git & GitHub Version Control",
    category: "GitHub and project deployment tools",
    level: "Practical Proficiency",
    practicalUse: "Repository management, clean commit hygiene, branch management, issue tracking, and upstream code syncing.",
    appliedIn: "All engineering projects, repositories, and documentation"
  },
  {
    name: "Automated Deployment (Vercel / Render)",
    category: "GitHub and project deployment tools",
    level: "Project-Level Exposure",
    practicalUse: "Static asset optimization, build script pipelines, environment variable setup, and custom domain linking.",
    appliedIn: "Live portfolio and project dashboard deployments"
  },
  {
    name: "Modern Web Frontends (React / Tailwind)",
    category: "GitHub and project deployment tools",
    level: "Project-Level Exposure",
    practicalUse: "Component-based architecture, TypeScript state interfaces, responsive layout engineering, and telemetry UI styling.",
    appliedIn: "Command center interfaces and portfolio presentation"
  },
  {
    name: "Python & REST APIs (Flask)",
    category: "GitHub and project deployment tools",
    level: "Project-Level Exposure",
    practicalUse: "Lightweight REST API endpoints, JSON request-response formatting, and educational NLP intent mapping.",
    appliedIn: "AI Health Assistant project prototype backend"
  }
];
