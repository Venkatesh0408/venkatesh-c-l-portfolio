export interface SkillItem {
  name: string;
  category: "Embedded & Hardware" | "Industrial & Electrical" | "CAD & Prototyping" | "Software & Tools";
  practicalUse: string;
  appliedIn: string;
}

export const skillsData: SkillItem[] = [
  // Embedded & Hardware
  {
    name: "ESP8266 Microcontroller",
    category: "Embedded & Hardware",
    practicalUse: "Wi-Fi enabled embedded controller used for sensor telemetry transmission, WebSocket communication, and motor PWM logic.",
    appliedIn: "Submersible Micro Robot main telemetry control unit."
  },
  {
    name: "ESP32-CAM Module",
    category: "Embedded & Hardware",
    practicalUse: "Low-cost optical module featuring OV2640 camera, serving live MJPEG video streams over local Wi-Fi networks.",
    appliedIn: "Submersible Micro Robot visual inspection node."
  },
  {
    name: "Arduino Platforms",
    category: "Embedded & Hardware",
    practicalUse: "Microcontroller board prototyping, GPIO configuration, interrupt-driven sensor timing, and serial communications.",
    appliedIn: "Robotics testing rigs, thruster mixing circuits, and sensor benches."
  },
  {
    name: "Sensor Interfacing & Turbidity",
    category: "Embedded & Hardware",
    practicalUse: "ADC voltage reading, noise filtering, and mathematical calibration of optical/analog turbidity sensors.",
    appliedIn: "Water clarity telemetry in the Submersible Micro Robot."
  },
  {
    name: "Electronics Prototyping",
    category: "Embedded & Hardware",
    practicalUse: "Breadboard verification, soldering, voltage regulation (5V/3.3V rails), and motor driver (L298N/MOSFET) integration.",
    appliedIn: "Hull electronics chassis wiring and battery distribution."
  },

  // Industrial & Electrical
  {
    name: "PLC Automation Concepts",
    category: "Industrial & Electrical",
    practicalUse: "Relay ladder logic programming, timer-counter state machines, and industrial I/O signal routing.",
    appliedIn: "PLC-Based Object Segregation prototype architecture."
  },
  {
    name: "Electrical Control Panel Wiring",
    category: "Industrial & Electrical",
    practicalUse: "DIN-rail mounting, terminal block wiring, ferruling, relay coils, contactors, circuit breakers, and industrial grounding.",
    appliedIn: "4 months internship at Arrow Automation and XNG Automation."
  },
  {
    name: "Industrial Automation & Safety",
    category: "Industrial & Electrical",
    practicalUse: "Assembly line sensors, emergency stop circuitry, laser engraving machine calibration, and car-seat testing systems.",
    appliedIn: "Arrow Automation manufacturing operations."
  },
  {
    name: "Pneumatics & Electro-Pneumatics",
    category: "Industrial & Electrical",
    practicalUse: "Single/double-acting cylinders, 5/2 directional control solenoid valves, air pressure regulators, and pneumatic sequence circuits.",
    appliedIn: "5-day specialized workshop & industrial sorting diverters."
  },

  // CAD & Prototyping
  {
    name: "Solid Edge & 3D CAD",
    category: "CAD & Prototyping",
    practicalUse: "Parametric 3D part modeling, mechanical assembly fits, cylindrical shell layouts, and 2D drafting.",
    appliedIn: "Waterproof capsule and bracket design for underwater robot."
  },
  {
    name: "3D Printing Prototyping",
    category: "CAD & Prototyping",
    practicalUse: "Slicing, infill optimization, PETG/PLA material selection for watertight and rigid mechanical mounts.",
    appliedIn: "Motor thruster pods and camera chassis cradles."
  },

  // Software & Tools
  {
    name: "Embedded C / C++",
    category: "Software & Tools",
    practicalUse: "Writing firmware, timer interrupts, serial protocols, Wi-Fi reconnection routines, and sensor data buffering.",
    appliedIn: "Arduino IDE firmware for ESP8266 and ESP32 nodes."
  },
  {
    name: "Python & Flask (Project Level)",
    category: "Software & Tools",
    practicalUse: "RESTful API development, request routing, JSON payloads, and basic data processing.",
    appliedIn: "AI Health Assistant backend server."
  },
  {
    name: "React & Modern Web (Project Level)",
    category: "Software & Tools",
    practicalUse: "Component-driven frontend development, state hooks, responsive styling, and UI prototyping.",
    appliedIn: "Telemetry dashboards and engineering portfolio development."
  },
  {
    name: "GitHub & Deployment (Vercel/Render)",
    category: "Software & Tools",
    practicalUse: "Git version control, feature branches, pull requests, automated static CI/CD deployments.",
    appliedIn: "Project versioning and live web deployments."
  },
  {
    name: "OpenCV (Project Exposure)",
    category: "Software & Tools",
    practicalUse: "Basic image frame capture, color masking, edge detection, and visual inspection algorithms.",
    appliedIn: "Object detection experiments and camera inspection testing."
  }
];
