export interface Profile {
  name: string;
  degree: string;
  applicantRole: string;
  college: string;
  role: string;
  careerObjective: string;
  location: string;
  phone: string;
  email: string;
  whatsapp?: string;
  linkedin: string;
  github: string;
  portfolio: string;
  projectDemo: string;
  projectDemoRender: string;
  resumeUrl: string;
  languages: { language: string; proficiency: string }[];
  areasOfInterest: string[];
  stats: {
    cgpaBe: string;
    diplomaScore: string;
    diplomaCgpa: string;
    sslcScore: string;
    internshipDuration: string;
    projectsCount: string;
  };
}

export const profileData: Profile = {
  name: "VENKATESH C L",
  degree: "B.E. – Robotics & Automation",
  applicantRole: "BE – Robotics & Automation | Internship Applicant",
  college: "Rajarajeswari College of Engineering, Bengaluru (Autonomous; affiliated to VTU)",
  role: "ROBOTICS & AUTOMATION ENGINEER",
  careerObjective: "Robotics and Automation engineering student seeking an internship in robotics, embedded systems, industrial automation or product development. Interested in hands-on engineering, sensor integration, microcontroller-based systems, prototyping and testing, with a willingness to learn and contribute to practical engineering projects.",
  location: "Bengaluru, Karnataka",
  phone: "8147134789",
  email: "venkateshcl0408@gmail.com",
  whatsapp: "https://wa.me/918147134789",
  linkedin: "https://linkedin.com/in/venkatesh-venky-a63639313",
  github: "https://github.com/Venkatesh0408",
  portfolio: "https://venkatesh-c-l-portfolio.vercel.app",
  projectDemo: "https://submersible-micro-robot.vercel.app/",
  projectDemoRender: "https://submersible-micro-robot.onrender.com",
  resumeUrl: "/assets/Venkatesh_CL_RESUME.pdf",
  languages: [
    { language: "Kannada", proficiency: "Advanced" },
    { language: "Hindi", proficiency: "Intermediate" },
    { language: "English", proficiency: "Intermediate" }
  ],
  areasOfInterest: [
    "Robotics",
    "Embedded Systems",
    "Industrial Automation",
    "Electrical Automation",
    "Electronics Engineering",
    "Additive Manufacturing / 3D Printing",
    "Aerospace Engineering",
    "Machine Vision"
  ],
  stats: {
    cgpaBe: "7.8",
    diplomaScore: "75.40%",
    diplomaCgpa: "8.29",
    sslcScore: "70.8%",
    internshipDuration: "8 Months Total",
    projectsCount: "4"
  }
};
