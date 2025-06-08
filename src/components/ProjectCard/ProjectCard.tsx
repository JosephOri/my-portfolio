import GitHubIcon from "@mui/icons-material/GitHub";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useThemeMode } from "@context/hooks/useThemeMode";
import IconLink from "../ui/IconLink/IconLink";
import { H1, Paragraph } from "../ui";
import { Project } from "@/utils/types";
import Tag from "../ui/Banner/Banner";

type Props = Project;

const ProjectCard = ({
  title,
  description,
  imageUrl,
  techStack,
  githubUrl,
  demoUrl,
  liveUrl,
  comingSoon = false,
  fixingBugs = false,
}: Props) => {
  const { theme } = useThemeMode();

  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
      style={{ backgroundColor: theme.cardBg }}
    >
      <div className="w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <H1
          className="mb-2 text-2xl font-bold"
          style={{ color: theme.headerPrimary }}
        >
          {title}
        </H1>
        <div className="flex flex-row gap-2">
          {comingSoon && <Tag text="Coming Soon..." color="yellow" />}
          {fixingBugs && <Tag text="Fixing Bugs" color="red" />}
        </div>

        <Paragraph
          className="mb-4 flex-1 text-lg"
          style={{ color: theme.textSecondary }}
        >
          {description}
        </Paragraph>

        <div className="mb-4 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Tag key={tech} text={tech} />
          ))}
        </div>

        <div className="flex gap-4">
          <IconLink
            href={githubUrl}
            Icon={GitHubIcon}
            label="Github"
            size="large"
          />
          {demoUrl && (
            <IconLink
              href={demoUrl}
              Icon={PlayCircleIcon}
              label="Demo"
              size="large"
            />
          )}
          {liveUrl && (
            <IconLink
              href={liveUrl}
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
