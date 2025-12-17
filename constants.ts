import { 
  Brain, 
  Database, 
  Layout, 
  Terminal, 
  Users, 
  FileSpreadsheet,
  Award,
  BookOpen
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Mitesh Ramesh Lohar",
  title: "CS Engineering | Data Analytics | AI/ML",
  emailPrimary: "loharmitesh9@gmail.com",
  emailSecondary: "miteshlohar2019@gmail.com",
  phone: "7506569812",
  location: "Thane, Maharashtra, India",
  linkedin: "https://www.linkedin.com/in/mitesh-ramesh-lohar",
  summary: "I am Mitesh R Lohar from Lokmanya Tilak College of Engineering. I have successfully completed internships and simulations focused on Data Analytics, including the IBM SkillsBuild Summer Internship and Deloitte Data Analytics Job Simulation. I actively serve as Documentation Coordinator at Seva Foundation (NSS Unit), enhancing my communication, record management, and organizational skills."
};

export const SKILLS = [
  { name: "Data Science", icon: Brain, level: 85 },
  { name: "Data Analytics", icon: Database, level: 90 },
  { name: "Python", icon: Terminal, level: 80 },
  { name: "Oracle Applications", icon: Layout, level: 75 },
  { name: "Adaptability", icon: Users, level: 95 },
  { name: "Documentation", icon: FileSpreadsheet, level: 90 },
];

export const CERTIFICATIONS = [
  "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
  "Data Science for Everyone",
  "Data Analyst Career Path",
  "Artificial Intelligence",
  "Discover Data Analysis",
  "Deloitte Data Analytics Job Simulation"
];

export const EXPERIENCE = [
  {
    id: 1,
    role: "Vice President - Red Ribbon Club (RRC)",
    company: "NSS LTCE",
    period: "July 2025 - Present (6 months)",
    location: "Navi Mumbai, Maharashtra, India",
    description: [
      "Appointed as Vice President of the Red Ribbon Club (RRC) under NSS at Lokmanya Tilak College of Engineering.",
      "Led HIV/AIDS awareness drives and blood donation campaigns.",
      "Coordinated events in collaboration with NGOs and public health departments.",
      "Supervised a team of volunteers and organized outreach programs.",
      "Represented RRC at inter-college and district-level initiatives."
    ]
  },
  {
    id: 2,
    role: "AI/ML Intern",
    company: "YBI Foundation",
    period: "May 2025 - June 2025 (2 months)",
    location: "India",
    description: [
      "Completed a 2-week intensive internship focused on Artificial Intelligence and Generative AI.",
      "Gained hands-on experience with AI technologies, machine learning concepts, and generative AI applications.",
      "Developed proficiency in AI tools and methodologies while working on practical projects."
    ]
  },
  {
    id: 3,
    role: "Seva Foundation Documentation Co-ordinator",
    company: "NSS LTCE",
    period: "December 2024 - April 2025 (5 months)",
    location: "Navi Mumbai, Maharashtra, India",
    description: [
      "Serving as Documentation Coordinator for the National Service Scheme (NSS).",
      "Responsible for maintaining records, coordinating documentation processes, and supporting administrative activities.",
      "Working with Seva Foundation to organize and manage official documentation and communications."
    ]
  },
  {
    id: 4,
    role: "Data Analytics Intern",
    company: "IBM SkillsBuild (via CSRBOX)",
    period: "June 2024 - August 2024 (3 months)",
    location: "India",
    description: [
      "Completed a 6-week internship on Data Analytics under the IBM SkillsBuild Summer Internship Program.",
      "Worked on real-world datasets, learned data visualization, analysis techniques.",
      "Improved Python skills for data handling and automation."
    ]
  }
];

export const EDUCATION = [
  {
    school: "Lokmanya Tilak College of Engineering",
    degree: "Bachelor of Engineering - BE",
    year: "2023",
    note: "Want to learn something new daily"
  }
];

export const PROJECTS = [
  {
    title: "AI-Powered Trip Planner",
    description: "A Python-based web application that uses advanced AI technologies to generate personalized travel itineraries. It integrates the LLaMA 3.2 language model via Ollama with CrewAI’s multi-agent framework and Google Serper search to collaboratively research destinations and create detailed day-by-day travel plans. Through an intuitive Streamlit interface, users provide travel details and preferences to receive specialized recommendations.",
    technologies: ["Python", "LLaMA 3.2", "CrewAI", "Google Serper", "Streamlit"]
  },
  {
    title: "PPE Compliance Monitoring System",
    description: "An advanced safety monitoring solution using computer vision and deep learning to automatically detect Personal Protective Equipment (PPE) compliance in real-time. Leveraging YOLOv8 technology, it identifies safety gear including hardhats, masks, and safety vests while tracking violations. Features include live webcam monitoring, face recognition-based attendance tracking, and real-time dashboard analytics.",
    technologies: ["YOLOv8", "Deep Learning", "Computer Vision", "Face Recognition", "Python"]
  }
];
