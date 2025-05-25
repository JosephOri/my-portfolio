import Section from "@components/ui/Section";
import { H1 } from "@components/ui";
import { useThemeMode } from "@context/hooks/useThemeMode";
import ProjectCard from "@components/ProjectCard/ProjectCard";
import { links } from "@constants";

const projects = [
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
    title: "E-commerce Platform",
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

const Projects = () => {
  const { theme } = useThemeMode();
  return (
    <Section id="projects" className="mt-20 flex flex-col">
      <H1 color={theme.body}>hidden text for layout</H1>
      <H1 className="mb-10 text-4xl" color={theme.headerSecondary}>
        Projects
      </H1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            techStack={project.techStack}
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
