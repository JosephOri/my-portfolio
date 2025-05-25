import Section from "../components/ui/Section";
import { images, links } from "../utils/constants";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconLink from "../components/ui/IconLink/IconLink";
import { useThemeMode } from "../context/hooks/useThemeMode";
import { H1 } from "../components/ui/H1/H1";
import { Paragraph } from "../components/ui";

const Home = () => {
  const { theme } = useThemeMode();
  return (
    <Section id="home" className="flex flex-col items-start justify-center">
      <div className="grid grid-cols-1 items-center justify-center gap-9 md:grid-cols-2">
        <div>
          <H1 color={theme.headerPrimary} className="mb-7 text-2xl lg:text-4xl">
            Hi, I'm <span className="text-teal-400">Ori </span>
            <br />A Full Stack developer
          </H1>
          <Paragraph
            color={theme.textPrimary}
            className="text-md mb-7 lg:text-xl"
          >
            I enjoy solving complex problems. Frequently praised as creative and
            dedicated by my peers, I can be relied upon to help your company
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
            className="w-full max-w-full lg:w-2/3"
          />
        </div>
      </div>
    </Section>
  );
};

export default Home;
