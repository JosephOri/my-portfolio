import { Project } from "./types";

const links = {
  linkedin: "https://www.linkedin.com/in/ori-joseph-45o/",
  github: "https://github.com/josephori",
  twitter: "https://x.com/josephori30",
};

const images = {
  programmerImage: "public/programmer2.svg",
  oriImage: "public/ori-image.jpeg",
};

const projects: Project[] = [
  {
    title: "Support AI",
    description:
      "a platform that enabled technical support staff to generate, edit, and finalize AI-generated guides with OpenAI API based on customer interactions, reducing repetitive tasks.",
    imageUrl: "public/supportai-chat-dashboard.png",
    techStack: ["Next.js", "Nest.js", "OpenAI", "PostgreSQL"],
    githubUrl: "https://github.com/SupportAI-Project/SupportAI",
    demoUrl:
      "https://www.canva.com/design/DAGoQOVuP8E/FKLiNfg6HMvnT_mJivBD-Q/watch?utm_content=DAGoQOVuP8E&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6844b85385",
  },
  {
    title: "React AI Chatbot",
    description:
      "a Real-time AI Chatbot with React.js, integrating ChatGPT, Gemini AI and DeepSeek for dynamic conversations.",
    imageUrl: "public/ai-chatbot.png",
    techStack: ["React", "Deepseek", "ChatGPT", "Gemini AI"],
    githubUrl: "https://github.com/josephori/react-ai-chatbot",
    demoUrl:
      "https://www.canva.com/design/DAGoc_YO8zE/OiKhnn2-fkRBPeAuszdnog/watch?utm_content=DAGoc_YO8zE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h854902d2ad",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    imageUrl: "/images/task-app-preview.jpg",
    techStack: ["React", "Firebase", "Material-UI", "Redux"],
    githubUrl: "https://github.com/yourusername/task-app",
    demoUrl: "https://your-task-app.com",
  },
];

export { images, links, projects };
