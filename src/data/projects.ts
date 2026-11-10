export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  status: "Prototype Tested" | "Concept Prototype" | "Educational Prototype";
  statusType: "verified" | "prototype" | "concept";
  shortSummary: string;
  problem: string;
  objective: string;
  solution: string;
  hardware: string[];
  software: string[];
  keyContributions: string[];
  workflow: string[];
  challenges: string[];
  limitations: string[];
  futureWork: string[];
  images: { url: string; caption: string }[];
  accentColor: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "submersible-micro-robot",
    title: "Submersible Micro Robot — Underwater Inspection",
    category: "Marine Robotics & Embedded Systems",
    status: "Prototype Tested",
    statusType: "verified",
    shortSummary: "Compact underwater exploration and telemetry vehicle engineered for visual inspection of narrow confined aquatic environments.",
    problem: "Confined water tanks, hazardous drainage pipes, and industrial reservoirs are difficult and unsafe for human divers to visually survey and monitor for sedimentation.",
    objective: "Design and validate a compact tethered submersible vehicle that streams live video and telemetry data (turbidity) back to a terrestrial command base.",
    solution: "Dual-microcontroller architecture separating camera streaming from sensor/motor operations: ESP32-CAM streams low-latency MJPEG video over local network while ESP8266 manages turbidity telemetry and propulsion actuation within a sealed waterproof hull.",
    hardware: [
      "ESP8266 Microcontroller (Main Control Unit)",
      "ESP32-CAM Module (Optical Inspection Node)",
      "Analog Turbidity Sensor (Water Quality Measurement)",
      "Micro DC Motors with Waterproof Propeller Assembly",
      "Sealed Acrylic Pressure Cylinder with O-Ring Gaskets",
      "Power Distribution Board (Li-Po Battery System)"
    ],
    software: [
      "Embedded C / C++ (Arduino IDE)",
      "HTTP Video Server on ESP32-CAM",
      "WebSocket Real-time Telemetry Server on ESP8266",
      "Web Dashboard Interface for Telemetry & Control"
    ],
    keyContributions: [
      "Designed and fabricated waterproof enclosure with sealed cable glands and dynamic propeller shaft seals.",
      "Developed firmware for dual-MCU coordination over tether communication protocol.",
      "Calibrated analog turbidity sensor curve for clear-water vs sediment-heavy metrics.",
      "Conducted multiple controlled buoyancy and submersion tests in campus testing tanks."
    ],
    workflow: [
      "1. Pre-dive Hull & Seal Integrity Check",
      "2. Calibration of Turbidity Sensor in Standard Buffer Solutions",
      "3. Microcontroller Wireless/Tether Handshake with Base Station",
      "4. Submersion & Propulsion Thrust Calibration",
      "5. Real-time Video Stream Inspection & Data Logging"
    ],
    challenges: [
      "Maintaining neutral buoyancy while balancing battery pack center of gravity.",
      "Preventing water ingress around high-speed motor drive shafts.",
      "Managing thermal buildup inside an airtight enclosed acrylic hull during extended operation."
    ],
    limitations: [
      "CRITICAL FACT: The latest validated poster configuration features NO pH sensor and NO distance sensor. Visual inspection is not equivalent to chemical pH measurement.",
      "Operates within confined freshwater testing environments; not yet field-tested in high-current ocean conditions."
    ],
    futureWork: [
      "Integrating calibrated analog pH probe and ultrasonic sonar depth sensor.",
      "Implementing 6-DOF IMU stabilization and depth-hold PID controller.",
      "Upgrading hull materials for deep industrial sewer testing."
    ],
    images: [
      { url: "/assets/test1.png", caption: "Physical Tank Submersion & Neutral Buoyancy Testing" },
      { url: "/assets/test2.png", caption: "Electronics Assembly & Turbidity Sensor Bench Calibration" },
      { url: "/assets/sim1.png", caption: "CAD Simulation & Chassis Layout" }
    ],
    accentColor: "#00D4FF"
  },
  {
    id: "automated-fish-boat",
    title: "Automated Fish-Catching Boat",
    category: "Marine Robotics & Mechatronics",
    status: "Concept Prototype",
    statusType: "prototype",
    shortSummary: "Automated catamaran platform concept combining floating buoyancy, radio control propulsion, and mechanical net harvesting.",
    problem: "Small-scale aquaculture ponds require labor-intensive manual netting that can stress fish stock and prove inefficient over broad surface areas.",
    objective: "Scaffold a surface watercraft capable of remote guided traversal and automated scoop-mechanism actuation for controlled fish gathering.",
    solution: "Twin-hull catamaran design powered by dual brushless thrusters with servo-linked retrieval net hopper controlled by an embedded RF transceiving unit.",
    hardware: [
      "Custom Catamaran Floats (High Buoyancy Foam & PVC)",
      "Dual Waterproof Brushless Thrusters with ESCs",
      "Microcontroller Base (Arduino / Atmel)",
      "High-Torque Metal Gear Servos for Net Deployment",
      "2.4 GHz Multi-channel RF Transceiver Module"
    ],
    software: [
      "Embedded C++ for Differential Steering Thrust Mixing",
      "PWM Servo Angle Profiling for Gentle Net Sweeping"
    ],
    keyContributions: [
      "Engineered twin-hull buoyancy calculations to support payload retrieval weight.",
      "Programmed differential drive mixer for sharp turning radius on water surface."
    ],
    workflow: [
      "Platform Launch -> Surface Traversal -> Target Alignment -> Net Lowering -> Scoop Sweep -> Hopper Elevation"
    ],
    challenges: [
      "Balancing craft trim during asymmetric net load retrieval.",
      "Propeller entanglement prevention in pond weed."
    ],
    limitations: [
      "Concept prototype: Does NOT claim autonomous GPS waypoint navigation or production ocean fielding without formal verification."
    ],
    futureWork: [
      "Integration of optical machine vision camera to autonomously track fish school density.",
      "Solar trickle-charging array on upper deck canopy."
    ],
    images: [
      { url: "/assets/im2.png", caption: "Chassis & Propulsion Integration Test Rig" }
    ],
    accentColor: "#007BFF"
  },
  {
    id: "plc-object-segregation",
    title: "PLC-Based Object Segregation Prototype",
    category: "Industrial Automation",
    status: "Concept Prototype",
    statusType: "prototype",
    shortSummary: "Automated industrial conveyor model that detects, classifies, and diverts metallic versus non-metallic items using sensor logic and pneumatic actuators.",
    problem: "Manual sorting on high-throughput assembly lines is prone to operator fatigue, inconsistency, and slower sorting cycle times.",
    objective: "Model a modular conveyor station with automated sensor discrimination and pneumatic diverter gates.",
    solution: "Integrated conveyor track with inductive proximity sensors for ferrous metal detection and photoelectric sensors for non-metal detection, sequenced through ladder logic to trigger pneumatic sorting cylinders.",
    hardware: [
      "Industrial Programmable Logic Controller (PLC Architecture)",
      "Inductive Proximity Sensor (Ferrous Metal Detection)",
      "Diffuse Optical Photoelectric Sensor (Presence Detection)",
      "Miniature Conveyor Belt with DC Gearmotor",
      "Pneumatic Solenoid Actuator Valves & Air Cylinders"
    ],
    software: [
      "Ladder Logic Diagram Programming",
      "Timer/Counter Sequencing & Interlock Logic"
    ],
    keyContributions: [
      "Drafted ladder logic timing diagrams to synchronize sensor triggers with diverter gate fire pulses.",
      "Wired 24V DC industrial control loop with opto-isolated relay interfaces."
    ],
    workflow: [
      "Object Placement -> Optical Detection -> Inductive Metal Check -> Logic Divert Route -> Pneumatic Bin Sort"
    ],
    challenges: [
      "Minimizing debounce jitter on high-speed conveyor passes.",
      "Ensuring fail-safe interlocks in case of conveyor jam."
    ],
    limitations: [
      "Conceptual bench prototype; not tied to an unverified commercial PLC brand model."
    ],
    futureWork: [
      "Color sensor integration for multi-spectral sorting.",
      "SCADA dashboard integration for parts-per-hour count."
    ],
    images: [
      { url: "/assets/temp.png", caption: "Sensor Loop Wiring & Relay Logic Schematic" }
    ],
    accentColor: "#B388FF"
  },
  {
    id: "ai-health-assistant",
    title: "AI Health Assistant",
    category: "AI & Software Systems",
    status: "Educational Prototype",
    statusType: "concept",
    shortSummary: "Interactive AI-powered conversational web application exploring intelligent health information retrieval and conversational wellness guidance.",
    problem: "Finding quick, structured, and easily digestible preliminary wellness guidelines online can be cumbersome for lay users.",
    objective: "Develop a responsive web chatbot interface that parses user wellness inquiries and presents relevant informational references.",
    solution: "Full-stack web application with React frontend and Flask/Python backend that processes natural language queries against approved wellness references.",
    hardware: [
      "Client Terminal / Web Browser",
      "Cloud Server Node"
    ],
    software: [
      "React.js with Modern CSS",
      "Python Flask REST API",
      "NLP Query Tokenizer & Intent Parser"
    ],
    keyContributions: [
      "Designed clean terminal-styled medical assistance UI.",
      "Engineered prompt templates and intent routing algorithms."
    ],
    workflow: [
      "User Query Input -> Tokenization & Intent Classification -> Knowledge Lookup -> Informational Readout"
    ],
    challenges: [
      "Filtering ambiguous or out-of-scope non-medical inputs gracefully."
    ],
    limitations: [
      "STRICT BOUNDARY: Strictly an educational and informational software prototype. It is NOT a certified medical diagnostic system and cannot offer clinical advice."
    ],
    futureWork: [
      "Integration of wearable health band telemetry (heart rate, SpO2) via Bluetooth Low Energy."
    ],
    images: [],
    accentColor: "#00E599"
  }
];
