export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  highlights: string[];
  date: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  techStack: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  cgpa?: string;
  percentage?: string;
  logo?: string;
  photo?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  medium?: string;
  resumeUrl?: string;
}

export interface Achievement {
  title: string;
  description: string;
  link?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  url: string;
  date: string;
  readTime: string;
  imageUrl?: string;
}

export const personalInfo: PersonalInfo = {
  name: "Karthik Peddi",
  title: "Software Engineer & AI Enthusiast",
  email: "karthik.peddi.2103@gmail.com",
  phone: "+91 9515938076",
  location: "Noida, Uttar Pradesh",
  github: "https://github.com/karthikpeddi21032002",
  linkedin: "https://www.linkedin.com/in/karthik-peddi-59a567220/",
  medium: "https://medium.com/@karthik.peddi.2103",
  resumeUrl: "https://drive.google.com/file/d/1wpKQs6JZ7OV6fEZeNBNgLd3IW0rhhXbw/view?usp=sharing"
};

export const education: Education[] = [
  {
    id: "btech",
    institution: "National Institute of Technology, Rourkela",
    degree: "B.Tech in Computer Science",
    duration: "01-2020 - 05-2024",
    cgpa: "8.01",
    logo: "/NITR.png",
    photo: "/college.jpg"
  },
  {
    id: "intermediate",
    institution: "Krishnaveni Junior College",
    degree: "Intermediate (MPC)",
    duration: "2018 - 2020",
    percentage: "94.2%"
  }
];

export const experience: Experience[] = [
  {
    id: "ukg-2024",
    company: "Ultimate Kronos Group",
    position: "Software Engineer",
    duration: "January 2024 - Present",
    location: "Noida, Uttar Pradesh",
    description: [
      "Software Engineer with 1.6 years of hands-on experience in Java-SpringBoot based microservices, observability tooling, and AI-powered software agents.",
      "Increased efficiency and optimized RestfulAPI responses by 60%, enhancing performance for user and organization authentication flows within the UKG-Authn team using Auth0, including inbound and outbound SSO with SAML and OIDC.",
      "Designed Mid level design for an end-to-end migration tool for the backend services, successfully migrating 250 million users in 1,000 minutes using 5 pods.",
      "Developed an AI-powered observability agent capable of querying microservice health, fetching pod status from Kubernetes, retrieving logs via Splunk APIs, and generating incident reports with suggested resolutions using LLM-based reasoning and prompt engineering.",
      "Integrated foundational large language models (LLMs) with real-time telemetry and observability stacks, including OpenTelemetry and Grafana Cloud, to enable intelligent log summarization and troubleshooting automation."
    ],
    techStack: ["Java", "SpringBoot", "Kubernetes", "Auth0", "Splunk", "OpenTelemetry", "Grafana", "LLMs", "SAML", "OIDC"]
  }
];

export const projects: Project[] = [
  {
    id: "interview-bazar",
    title: "InterviewBazar",
    description: "AI-Powered Mock Interview Platform with real-human AI avatar for technical interviews",
    techStack: ["ReactJS", "TypeScript", "Vite", "Firebase", "MongoDB", "Kafka", "LLaMA", "WebRTC", "Java", "SpringBoot"],
    githubUrl: "https://github.com/karthikpeddi21032002",
    highlights: [
      "Users can register and choose their dream company, interview level (SDE-1/2/3, Leadership), and desired position",
      "Real-Human AI Avatar trained on public LeetCode and domain-specific data using fine-tuned LLaMA model",
      "Performance dashboard with metrics like accuracy, time complexity, and communication skills",
      "Peer reviews and mentor follow-up scheduling integration"
    ],
    date: "December 2024"
  },
  {
    id: "event-bazzarin",
    title: "EventBazzarin",
    description: "Event and Restaurant Booking Platform with microservices architecture",
    techStack: ["ReactJS", "TypeScript", "Vite", "SpringBoot", "Java", "Firebase", "MongoDB", "Kafka", "Event-driven Architecture"],
    liveUrl: "https://eventbazzarin.com",
    githubUrl: "https://github.com/karthikpeddi21032002",
    highlights: [
      "Users can explore and book events like home-hosted gatherings, fake weddings, parties, and restaurant experiences",
      "Organizers manage listings, availability, and certified content with no fake reviews",
      "Microservices for users, bookings, notifications, moderation, media, search, and payments",
      "Certified video reviews and real ambience footage"
    ],
    date: "January 2025"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "scaling-migration",
    title: "Scaling a 250 Million User Migration",
    description: "How we reduced a 4-month process to one sprint using efficient migration strategies and tools",
    url: "https://medium.com/@karthik.peddi.2103/scaling-a-250-million-user-migration-how-we-reduced-a-4-month-process-to-one-sprint-a8e36a7201ff",
    date: "2024",
    readTime: "8 min read"
  }
];

export const achievements: Achievement[] = [
  {
    title: "5★ Coder at HackerRank",
    description: "Solved 900+ DSA questions across various platforms"
  },
  {
    title: "LeetCode Rating: 1800",
    description: "Consistent problem-solving performance"
  },
  {
    title: "CodeChef Rating: 1652",
    description: "Competitive programming achievements"
  },
  {
    title: "Techgium 6th Edition Hackathon Semifinalist",
    description: "Developed Computer Vision algorithm for visual quality inspection of manufactured goods (PCB)"
  }
];

export const skills = {
  programmingLanguages: ["C", "C++", "Java", "JavaScript", "Python"],
  developerTools: ["VSCode", "Jupyter", "IntelliJ", "Git", "GitLab", "Jenkins"],
  technologies: ["SpringBoot", "Spring", "Redis", "Kafka", "RabbitMQ", "gRPC", "Grafana", "Prometheus", "Docker", "Kubernetes"],
  databases: ["MySQL", "MongoDB", "PostgreSQL"],
  aiMlTools: ["GitHub Copilot", "OpenAI Codex", "Anthropic Claude", "LangChain", "RAG", "Prompt Engineering", "Transformers"],
  cloudObservability: ["GCP", "AWS (basics)", "Docker", "Kubernetes", "Grafana", "Prometheus", "OpenTelemetry", "Splunk", "CI/CD"],
  testingBuildTools: ["JUnit", "Mockito", "Maven", "Gradle"]
};