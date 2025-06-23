import GitHubIcon from "@mui/icons-material/GitHub";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useThemeMode } from "@context/hooks/useThemeMode";
import IconLink from "../ui/IconLink/IconLink";
import { Paragraph, H1 } from "../ui";
import { Project } from "@/utils/types";
import Tag from "../ui/Banner/Banner";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  const { theme } = useThemeMode();

  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
      style={{ backgroundColor: theme.cardBg }}
    >
      <div className="w-full overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <H1 className="mb-2 text-2xl font-bold" color={theme.headerPrimary}>
          {project.title}
        </H1>
        <div className="flex flex-row gap-2">
          {project.comingSoon && <Tag text="Coming Soon..." color="yellow" />}
          {project.fixingBugs && <Tag text="Fixing Bugs" color="red" />}
        </div>

        <Paragraph
          className="mb-4 flex-1 text-lg"
          style={{ color: theme.textPrimary }}
        >
          {project.description}
        </Paragraph>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Tag key={tech} text={tech} />
          ))}
        </div>

        <div className="flex gap-4">
          <IconLink
            href={project.githubUrl}
            Icon={GitHubIcon}
            label="Github"
            size="large"
          />
          {project.demoUrl && (
            <IconLink
              href={project.demoUrl}
              Icon={PlayCircleIcon}
              label="Demo"
              size="large"
            />
          )}
          {project.liveUrl && (
            <IconLink
              href={project.liveUrl}
              Icon={OpenInNewIcon}
              label="Live"
              size="large"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
