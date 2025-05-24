import { H1, Paragraph } from "../ui/components";
import Section from "../ui/components/Section";
import { Grid } from "@mui/material";
import { programmerImage } from "../constants";
const Home = () => {
  return (
    <Section id="home" className="flex flex-col items-start justify-center">
      <Grid container spacing={4} className="items-center justify-center">
        <Grid size={{ xs: 12, md: 6 }}>
          <H1 className="text-2xl lg:text-6xl">
            Hi, I'm <span className="text-teal-400">Ori </span>
            <br />A Full Stack developer
          </H1>
          <Paragraph align="left" weight={400} className="mt-7 px-3 text-xl">
            I enjoy solving complex problems. Frequently praised as creative and
            dedicated by my peers, I can be relied upon to help your company
            achieve its goals by providing sustainable and scalable solutions.
          </Paragraph>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <img src={programmerImage} alt="profile" />
        </Grid>
      </Grid>
    </Section>
  );
};

export default Home;
