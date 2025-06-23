import Section from "../components/ui/Section";
import { images, links } from "../utils/constants";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconLink from "../components/ui/IconLink/IconLink";
import { useThemeMode } from "../context/hooks/useThemeMode";
import { Paragraph, H1 } from "../components/ui";

const Home = () => {
  const { theme } = useThemeMode();
  return (
    <Section id="home" className="flex flex-col items-start justify-center">
      <div className="grid grid-cols-1 items-center justify-between gap-9 md:grid-cols-2">
        <div>
          <H1 color={theme.headerPrimary} className="mb-7 text-2xl lg:text-6xl">
            <p className="mb-3">
              Hi, I'm <span style={{ color: theme.headerSecondary }}>Ori </span>
            </p>
            <p>A Full Stack developer</p>
          </H1>
          <Paragraph
            color={theme.textPrimary}
            className="text-md mb-7 lg:text-2xl"
          >
            I'm a relentless problem-solver who turns complex challenges into
            elegant code. With a passion for innovation and a reputation for
            creative, high-impact solutions, I thrive where technology meets
            ingenuity. Let's build the future, one line at a time.
          </Paragraph>
          <div className="flex gap-4">
            <IconLink
              href={links.github}
              Icon={GitHubIcon}
              label="Github profile"
              size="large"
            />
            <IconLink
              href={links.linkedin}
              Icon={LinkedInIcon}
              label="LinkedIn profile"
              size="large"
            />
            <IconLink
              href={links.twitter}
              Icon={TwitterIcon}
              label="Twitter profile"
              size="large"
            />
          </div>
        </div>
        <div>
          <img
            src={images.programmerImage}
            alt="profile"
            className="w-full max-w-full"
          />
        </div>
      </div>
    </Section>
  );
};

export default Home;
