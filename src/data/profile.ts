export interface Profile {
  name: string;
  degree: string;
  college: string;
  role: string;
  introduction: string;
  tagline: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  whatsapp: string;
  resumeUrl: string;
  gpsCoordinates?: string;
  focus?: string[];
  status?: string;
  stats: {
    cgpaBe: string;
    diplomaScore: string;
    internshipDuration: string;
    projectsCount: string;
  };
}

export const profileData: Profile = {
  name: "VENKATESH C L",
  degree: "B.E. – Robotics and Automation",
  college: "Rajarajeswari College of Engineering, Bengaluru",
  role: "Robotics & Automation Engineer",
  introduction: "An aspiring Robotics and Automation Engineer interested in developing practical engineering solutions through robotics, embedded systems, electrical automation and hardware integration.",
  tagline: "Designing, building, and automating real-world hardware systems with practical engineering and rigorous testing.",
  location: "Bengaluru, Karnataka, India",
  gpsCoordinates: "12.9716° N, 77.5946° E (Bengaluru)",
  focus: ["Robotics", "Industrial Automation", "Electrical Systems", "Embedded Design"],
  status: "Building Real-World Solutions",
  phone: "+91 8147134789",
  email: "venkateshcl0408@gmail.com",
  linkedin: "https://linkedin.com/in/venkatesh-venky-a63639313",
  github: "https://github.com/Venkatesh0408",
  whatsapp: "https://wa.me/918147134789",
  resumeUrl: "/assets/Venkatesh_CL_RESUME.pdf",
  stats: {
    cgpaBe: "7.8",
    diplomaScore: "75.40%",
    internshipDuration: "8 Mos",
    projectsCount: "4"
  }
};
