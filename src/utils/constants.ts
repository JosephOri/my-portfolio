import { Project } from "./types";
import supportaiChatDashboard from "@assets/supportai-chat-dashboard.png";
import weatherApp from "@assets/weather-app.png";
import googleFlightsClone from "@assets/google-flights-clone.png";
import aiChatbot from "@assets/ai-chatbot.png";
import stoicReads from "@assets/stoic-reads.png";
import programmerImage from "@assets/programmer2.svg";
import oriImage from "@assets/ori-image.jpeg";
import shekelMaster from "@assets/shekel-master.png";
import josephStore from "@assets/joseph-store.png";

const links = {
  linkedin: "https://www.linkedin.com/in/ori-joseph-45o/",
  github: "https://github.com/josephori",
  twitter: "https://x.com/josephori30",
};

const images = {
  programmerImage,
  oriImage,
};

const projects: Project[] = [
  {
    title: "Support AI",
    description:
      "a platform for support staff to transform customer interactions into polished AI-generated guides (powered by OpenAI), reducing manual effort and ensuring consistent documentation.",
    imageUrl: supportaiChatDashboard,
    techStack: [
      "TypeScript",
      "React",
      "Nest.js",
      "Docker",
      "PostgreSQL",
      "Material-UI",
      "OpenAI API",
      "Socket.io",
    ],
    githubUrl: "https://github.com/SupportAI-Project/SupportAI",
    demoUrl:
      "https://www.canva.com/design/DAGoQOVuP8E/FKLiNfg6HMvnT_mJivBD-Q/watch?utm_content=DAGoQOVuP8E&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6844b85385",
  },
  {
    title: "Joseph Store",
    description:
      "an e-commerce website for a generic store that can be reused as a real-world e-commerce platform, allowing users to browse and purchase products, and manage their shopping cart and payment information.",
    imageUrl: josephStore,
    techStack: [
      "TypeScript",
      "Next.js",
      "Prisma",
      "NextAuth",
      "PayPal & Stripe API",
      "Shadcn UI",
      "Tailwind",
    ],
    githubUrl: "https://github.com/JosephOri/joseph-store",
    liveUrl: "https://joseph-store.vercel.app/",
  },
  {
    title: "Stoic Reads",
    description:
      "a vibrant social media platform where book lovers can share detailed reviews, discuss their favorite reads, and discover new literary gems through engaging community interactions.",
    imageUrl: stoicReads,
    techStack: [
      "TypeScript",
      "React",
      "Express",
      "MongoDB",
      "PM2",
      "Material-UI",
    ],
    githubUrl: "https://github.com/JosephOri/StoicReads?tab=readme-ov-file",
    demoUrl: "https://www.youtube.com/watch?v=TeoeFkO_GTg",
  },

  {
    title: "Weather App",
    description:
      "a weather app that allows users to search for weather information for a specific city, and displays the weather information in a user-friendly interface.",
    imageUrl: weatherApp,
    techStack: ["TypeScript", "React", "OpenWeatherMap API", "Context API"],
    githubUrl: "https://github.com/josephori/Weather-app",
    liveUrl: "https://weather-app-josephori.netlify.app/",
  },
  {
    title: "Shekel Master",
    description:
      "a personal finance app that allows users to track their expenses and income, and visualize their financial data in a user-friendly interface.",
    imageUrl: shekelMaster,
    techStack: ["JavaScript", "Next.js", "Prisma", "CSS", "PostgreSQL"],
    githubUrl: "https://github.com/josephori/Shekel-Master",
    liveUrl: "https://shekel-master.netlify.app/",
  },

  {
    title: "React AI Chatbot",
    description:
      "a real-time AI chatbot built with React.js, seamlessly integrating ChatGPT, Gemini AI, and DeepSeek to deliver dynamic, multi-model conversations for enhanced user engagement.",
    imageUrl: aiChatbot,
    techStack: ["React", "Deepseek", "OpenAI", "Gemini AI"],
    githubUrl: "https://github.com/josephori/react-ai-chatbot",
    demoUrl:
      "https://www.canva.com/design/DAGoc_YO8zE/OiKhnn2-fkRBPeAuszdnog/watch?utm_content=DAGoc_YO8zE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h854902d2ad",
  },
  {
    title: "Google Flights Clone",
    description:
      "a clone of the Google Flights website, allowing users to search for flights and book them.",
    imageUrl: googleFlightsClone,
    techStack: ["Next.js", "Tailwind CSS", "RapidAPI"],
    githubUrl: "https://github.com/josephori/google-flights-clone",
  },
];

export { images, links, projects };
