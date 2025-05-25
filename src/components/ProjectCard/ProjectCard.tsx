import { FC } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { useThemeMode } from "@context/hooks/useThemeMode";
import IconLink from "../ui/IconLink/IconLink";

interface Props {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
}

const ProjectCard: FC<Props> = ({
  title,
  description,
  imageUrl,
  techStack,
  githubUrl,
  demoUrl,
}) => {
  const { theme } = useThemeMode();

  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
      style={{ backgroundColor: theme.cardBg }}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3
          className="mb-2 text-xl font-bold"
          style={{ color: theme.headerPrimary }}
        >
          {title}
        </h3>

        <p className="mb-4 flex-1" style={{ color: theme.textSecondary }}>
          {description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full px-3 py-1 text-sm"
              style={{
                backgroundColor: theme.tagBg,
                color: theme.tagText,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <IconLink
            href={githubUrl}
            Icon={GitHubIcon}
            label="Github"
            size="medium"
          />
          <IconLink
            href={demoUrl}
            Icon={PlayCircleIcon}
            label="Demo"
            size="medium"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
