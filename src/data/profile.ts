export interface Profile {
  name: string;
  role: string;
  tagline: string;
  focus: string[];
  status: string;
  location: string;
  summary: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  gpsCoordinates: string;
}

export const profileData: Profile = {
  name: "Venkatesh C L",
  role: "Robotics & Automation Engineer",
  tagline: "Designing, Building and Automating Real-World Systems with Practical Engineering and Innovation.",
  focus: ["Robotics", "Industrial Automation", "Electrical Systems", "Embedded Design"],
  status: "Building Real-World Solutions...",
  location: "Bengaluru, Karnataka, India",
  summary: "Driven Robotics & Automation engineering student at Rajarajeswari College of Engineering with strong hands-on expertise in microcontroller programming (ESP8266, ESP32-CAM, Arduino), industrial electrical control panels, sensor telemetry, and mechanical CAD modeling.",
  phone: "+91 8147134789",
  email: "venkateshcl0408@gmail.com",
  linkedin: "https://linkedin.com/in/venkatesh-venky-a63639313",
  github: "https://github.com/Venkatesh0408",
  resumeUrl: "/assets/Venkatesh_CL_RESUME.pdf",
  gpsCoordinates: "12.9716° N, 77.5946° E (BENGALURU)",
};
