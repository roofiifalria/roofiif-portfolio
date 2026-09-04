export const siteConfig = {
  name: "Roofiif Alria Dzakwan",
  title: "Roofiif Alria Dzakwan — Developer Portfolio",
  description:
    "Informatics Engineering graduate from ITS. Data Analyst, AI & ML Engineer. Building data-driven solutions for government and industry.",
  url: "https://roofiif.dev",
};

export const hero = {
  name: "Roofiif Alria Dzakwan",
  roles: [
    "Informatics Engineering Graduate",
    "Data Analyst",
    "AI & ML Engineer",
  ],
  intro:
    "Informatics Engineering graduate from ITS with hands-on experience in Data Analytics, AI/ML, research, and digital solutions. Experienced in working on data-driven projects across industry and academic environments, with a strong interest in solving problems through technology, analytical thinking, and continuous learning.",
  cta: {
    projects: "#projects",
    resume: "/resume.pdf",
  },
  socials: {
    linkedin: "https://linkedin.com/in/roofiif",
    github: "https://github.com/roofiifalria",
    email: "mailto:roofiifalria9@gmail.com",
  },
  profileImage: "/images/profile.png",
};

export const about = {
  summary:
    "Informatics Engineering graduate at Institut Teknologi Sepuluh Nopember with experience in data analysis, digital transformation, research, and organizational leadership. Experienced in working on data-driven projects with government and industry stakeholders, including the Yogyakarta Regional Police and Ministry of Law and Human Rights. Led a 17-member team across three bureaus at HMTC ITS and developed strong analytical, problem-solving, communication, and leadership capabilities.",
  education: {
    degree: "Bachelor of Informatics Engineering",
    institution: "Institut Teknologi Sepuluh Nopember (ITS), Surabaya",
    graduationDate: "August 7, 2026",
    gpa: "3.39 / 4.00",
  },
  funFact:
    "Directed 17 active members and managed over 15 clubs in organizational programs involving approximately 1,400 students across four academic batches.",
};

export const skills = {
  languages: ["Python", "Golang", "SQL"],
  dataAi: ["Ollama", "Claude", "Dataiku", "n8n"],
  tools: ["Figma", "Excel", "PowerPoint", "Word", "Git", "GitHub", "VS Code"],
  softSkills: [],
};

export interface Project {
  slug: string;
  title: string;
  tag: string;
  description: string;
  techStack: string[];
  outcome: string;
  image: string;
  github: string;
  caseStudy: string;
  details: {
    problem: string;
    constraints: string;
    architecture: string;
    results: string;
  };
}

export const projects: Project[] = [
  {
    slug: "continual-learning-ids",
    title: "GAN-Based Generative Replay for Continual Learning in IDS",
    tag: "Final Project",
    description:
      "Developed a GAN-based generative replay framework to address catastrophic forgetting in continual learning for intrusion detection systems.",
    techStack: ["Python", "GAN", "PPO", "Continual Learning"],
    outcome:
      "Improved model adaptation to evolving network threats, evaluated via F1-score, precision, recall, and accuracy.",
    image: "/images/project-1.png",
    github: "https://github.com/roofiifalria",
    caseStudy: "/projects/continual-learning-ids",
    details: {
      problem:
        "Intrusion detection systems must adapt to evolving threats, but neural networks suffer from catastrophic forgetting when trained on new data sequentially. Previous knowledge is overwritten, degrading performance on earlier threat patterns.",
      constraints:
        "Balancing memory efficiency with replay fidelity. GAN training instability when generating high-dimensional network traffic features. Evaluation across multiple sequential tasks with shifting class distributions.",
      architecture:
        "A continual learning pipeline where a GAN generates synthetic replay samples from previous tasks. These samples are mixed with new task data during training, preserving old knowledge while learning new threat patterns. PPO is explored for optimizing the replay strategy.",
      results:
        "The framework maintained strong F1-scores across sequential tasks, significantly reducing catastrophic forgetting compared to naive fine-tuning baselines. Precision and recall remained balanced across both old and new threat categories.",
    },
  },
  {
    slug: "financial-ai-assistant",
    title: "Financial AI Assistant",
    tag: "Personal Project",
    description:
      "Built a technical trading assistant using Retrieval-Augmented Generation (RAG) to combine financial knowledge retrieval with automated chart analysis.",
    techStack: ["RAG", "Ollama", "LLMs", "Python"],
    outcome:
      "Generated analytical insights and actionable trading outputs by integrating 3 LLMs.",
    image: "/images/project-2.png",
    github: "https://github.com/roofiifalria",
    caseStudy: "/projects/financial-ai-assistant",
    details: {
      problem:
        "Retail traders lack access to institutional-grade analysis tools. Combining real-time chart data with domain knowledge requires manual effort that is slow and error-prone.",
      constraints:
        "Running multiple LLMs locally via Ollama with limited GPU resources. Ensuring RAG retrieval quality over a heterogeneous financial knowledge base. Latency requirements for near-real-time chart analysis.",
      architecture:
        "A RAG pipeline retrieves relevant financial knowledge from a curated vector store. Three specialized LLMs handle different aspects: chart pattern recognition, fundamental analysis, and trade signal generation. Ollama serves all models locally.",
      results:
        "The system produced coherent, multi-perspective trading analyses combining technical and fundamental signals. Response latency stayed under acceptable thresholds for interactive use with local LLM inference.",
    },
  },
  {
    slug: "early-warning-system",
    title: "Early-Warning System for Yogyakarta Regional Police",
    tag: "Internship",
    description:
      "Developed an early-warning system by scraping and analyzing 3,400+ crime-related tweets, identifying potential risk hotspots through Social Network Analysis (SNA).",
    techStack: ["Python", "Data Scraping", "SNA", "Data Visualization"],
    outcome:
      "Enabled data-driven operational decision-making and centralized monitoring.",
    image: "/images/project-3.png",
    github: "https://github.com/roofiifalria",
    caseStudy: "/projects/early-warning-system",
    details: {
      problem:
        "Law enforcement in Yogyakarta needed a proactive approach to crime prevention. Traditional monitoring relied on manual reports with significant lag, missing emerging risk patterns on social media.",
      constraints:
        "Handling noisy, informal social media text in Bahasa Indonesia. Building a reliable scraping pipeline for 3,400+ tweets. Mapping social network structures to identify influential accounts and information flow patterns.",
      architecture:
        "A Python scraping pipeline collects crime-related tweets. NLP preprocessing cleans and categorizes the data. Social Network Analysis maps relationships between accounts and topics, identifying clusters and key nodes. Visualizations surface risk hotspots on geographic and network maps.",
      results:
        "The system provided Yogyakarta Regional Police with a centralized monitoring dashboard. SNA revealed previously hidden information flow patterns, enabling proactive resource allocation to emerging risk areas.",
    },
  },
];

export const internshipGallery = [
  {
    src: "/images/logo-ads.png",
    alt: "Presenting data insights at ADS Digital Partner",
    caption: "Presenting data insights at ADS Digital Partner",
  },
  {
    src: "/images/internship-2.png",
    alt: "Conducting field network surveys for Petrokimia Consulting",
    caption: "Conducting field network surveys for Petrokimia Consulting",
  },
  {
    src: "/images/internship-3.jpeg",
    alt: "Collaborating with the team at HMTC ITS",
    caption: "Collaborating with the team at HMTC ITS",
  },
];

export const achievements = [
  {
    title: "Student Creativity Program (PKM): Blockchain for SME Transactions",
    description:
      "Selected as a Simbelmawa account recipient, qualifying for the final national funding selection stage.",
  },
];

export const experience = [
  {
    role: "Administrator Intern",
    company: "My ITS Learning",
    period: "Sep 2024 – Dec 2024",
    description:
      "Managed educational content processing and uploading, ensuring data integrity.",
  },
  {
    role: "Head of Student Talent & Interest Dept",
    company: "HMTC ITS",
    period: "Jan 2025 – Dec 2025",
    description:
      "Led 17 staff members across 3 bureaus, overseeing 10 student development programs.",
  },
  {
    role: "Data Analyst Intern",
    company: "ADS Digital Partner",
    period: "Feb 2025 – Jan 2026",
    description:
      "Developed early-warning systems for Yogyakarta Regional Police and Kemenkumham.",
  },
  {
    role: "Research Assistant",
    company: "Petrokimia Network Consulting Project",
    period: "Jul 2025 – Dec 2025",
    description:
      "Conducted field surveys, designed network topologies, and performed domain testing.",
  },
];

export const contact = {
  heading: "Interested in working together?",
  subtext:
    "Open for full-time opportunities, internships, and research collaborations.",
  email: "roofiifalria9@gmail.com",
  phone: "+62 8123 1524 2496",
  whatsapp:
    "https://api.whatsapp.com/send/?phone=081231524296&text&type=phone_number&app_absent=0",
  responseTime: "I usually respond within 1-2 business days.",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: contact.whatsapp },
];

export const certificates = [
  { image: "/images/certificate/certificate-14.png" },
  { image: "/images/certificate/certificate-4.png" },
  { image: "/images/certificate/certificate-3.png" },
  { image: "/images/certificate/certificate-1.jpg" },
  { image: "/images/certificate/certificate-5.png" },
  { image: "/images/certificate/certificate-2.png" },
  { image: "/images/certificate/certificate-6.jpg" },
  { image: "/images/certificate/certificate-7.jpg" },
  { image: "/images/certificate/certificate-8.jpg" },
  { image: "/images/certificate/certificate-9.png" },
  { image: "/images/certificate/certificate-10.jpg" },
  { image: "/images/certificate/certificate-11.png" },
  { image: "/images/certificate/certificate-12.jpg" },
  { image: "/images/certificate/certificate-13.png" },
];
