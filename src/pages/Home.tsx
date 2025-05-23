import Section from "../ui/components/Section";
import { Grid } from "@mui/material";
import { images, links } from "../constants";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconLink from "../ui/components/IconLink/IconLink";
import { useThemeMode } from "../context/hooks/useThemeMode";
import { H1 } from "../ui/components/H1/H1";
import { Paragraph } from "../ui/components";
const Home = () => {
  const { theme } = useThemeMode();
  return (
    <Section id="home" className="flex flex-col items-start justify-center">
      <Grid container spacing={4} className="items-center justify-center">
        <Grid size={{ xs: 12, md: 6 }}>
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
          <IconLink
            href={links.github}
            Icon={GitHubIcon}
            label="Github profile"
          />
          <IconLink
            href={links.linkedin}
            Icon={LinkedInIcon}
            label="LinkedIn profile"
          />
          <IconLink
            href={links.twitter}
            Icon={TwitterIcon}
            label="Twitter profile"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <img
            src={images.programmerImage}
            alt="profile"
            className="w-full max-w-full"
          />
        </Grid>
      </Grid>
    </Section>
  );
};

export default Home;
