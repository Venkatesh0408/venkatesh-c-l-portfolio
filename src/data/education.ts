export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  status: string;
  score: string;
}

export const educationData: EducationItem[] = [
  {
    id: "be-robotics",
    degree: "B.E. – Robotics & Automation",
    institution: "Rajarajeswari College of Engineering, Bengaluru (Autonomous; affiliated to VTU)",
    status: "Pursuing",
    score: "CGPA: 7.8"
  },
  {
    id: "diploma-eee",
    degree: "Diploma – Electrical & Electronics Engineering",
    institution: "MEI Polytechnic",
    status: "Completed",
    score: "75.40% | CGPA: 8.29"
  },
  {
    id: "sslc",
    degree: "SSLC",
    institution: "Karnataka Secondary Education Board",
    status: "Completed",
    score: "70.8%"
  }
];
