import { Project } from "./types";

const links = {
  linkedin: "https://www.linkedin.com/in/ori-joseph-45o/",
  github: "https://github.com/josephori",
  twitter: "https://x.com/josephori30",
  supportAi: {
    github: "https://github.com/SupportAI-Project/SupportAI",
    demoVideo:
      "https://www.canva.com/design/DAGoQOVuP8E/FKLiNfg6HMvnT_mJivBD-Q/watch?utm_content=DAGoQOVuP8E&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6844b85385",
    image: "public/supportai-chat-dashboard.png",
  },
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
    imageUrl: links.supportAi.image,
    techStack: ["Next.js", "Nest.js", "OpenAI", "PostgreSQL"],
    githubUrl: links.supportAi.github,
    demoUrl: links.supportAi.demoVideo,
  },
  {
    title: "React AI Chatbot",
    description:
      "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
    imageUrl: "/images/ecommerce-preview.jpg",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/yourusername/ecommerce",
    demoUrl: "https://your-ecommerce.com",
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
