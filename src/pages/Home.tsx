import Section from "../ui/components/Section";
import { Grid } from "@mui/material";
import {
  githubUrl,
  linkedinUrl,
  programmerImage,
  twitterUrl,
} from "../constants";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconLink from "../ui/components/IconLink/IconLink";
const Home = () => {
  return (
    <Section id="home" className="flex flex-col items-start justify-center">
      <Grid container spacing={4} className="items-center justify-center">
        <Grid size={{ xs: 12, md: 6 }}>
          <h1 className="text-2xl font-bold lg:text-4xl xl:text-5xl">
            Hi, I'm <span className="text-teal-400">Ori </span>
            <br />A Full Stack developer
          </h1>
          <p className="mt-7 text-lg xl:text-xl">
            I enjoy solving complex problems. Frequently praised as creative and
            dedicated by my peers, I can be relied upon to help your company
            achieve its goals by providing sustainable and scalable solutions.
          </p>
          <IconLink href={githubUrl} Icon={GitHubIcon} label="Github profile" />
          <IconLink
            href={linkedinUrl}
            Icon={LinkedInIcon}
            label="LinkedIn profile"
          />
          <IconLink
            href={twitterUrl}
            Icon={TwitterIcon}
            label="Twitter profile"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <img src={programmerImage} alt="profile" />
        </Grid>
      </Grid>
    </Section>
  );
};

export default Home;
