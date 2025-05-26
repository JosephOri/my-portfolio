import Section from "@components/ui/Section";
import { H1 } from "@components/ui";
import { useThemeMode } from "@context/hooks/useThemeMode";
import ProjectCard from "@components/ProjectCard/ProjectCard";
import { projects } from "@utils/constants";

const Projects = () => {
  const { theme } = useThemeMode();
  return (
    <Section id="projects" className="mt-20 flex flex-col">
      <br />
      <br />
      <H1 className="mb-10 text-6xl" color={theme.headerSecondary}>
        My Projects
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
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
