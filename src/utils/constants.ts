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
      "a platform for support staff to transform customer interactions into polished AI-generated guides (powered by OpenAI), reducing manual effort and ensuring consistent documentation.",
    imageUrl: "public/supportai-chat-dashboard.png",
    techStack: ["Next.js", "Nest.js", "OpenAI", "PostgreSQL"],
    githubUrl: "https://github.com/SupportAI-Project/SupportAI",
    demoUrl:
      "https://www.canva.com/design/DAGoQOVuP8E/FKLiNfg6HMvnT_mJivBD-Q/watch?utm_content=DAGoQOVuP8E&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6844b85385",
  },

  {
    title: "Stoic Reads",
    description:
      "a vibrant social media platform where book lovers can share detailed reviews, discuss their favorite reads, and discover new literary gems through engaging community interactions.",
    imageUrl: "public/stoic-reads.png",
    techStack: ["React", "Express", "MongoDB", "Material-UI"],
    githubUrl: "https://github.com/JosephOri/StoicReads?tab=readme-ov-file",
    demoUrl: "https://www.youtube.com/watch?v=TeoeFkO_GTg",
  },
  {
    title: "React AI Chatbot",
    description:
      "a real-time AI chatbot built with React.js, seamlessly integrating ChatGPT, Gemini AI, and DeepSeek to deliver dynamic, multi-model conversations for enhanced user engagement.",
    imageUrl: "public/ai-chatbot.png",
    techStack: ["React", "Deepseek", "OpenAI", "Gemini AI"],
    githubUrl: "https://github.com/josephori/react-ai-chatbot",
    demoUrl:
      "https://www.canva.com/design/DAGoc_YO8zE/OiKhnn2-fkRBPeAuszdnog/watch?utm_content=DAGoc_YO8zE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h854902d2ad",
  },
];

export { images, links, projects };
