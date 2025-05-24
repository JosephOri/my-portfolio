import { useThemeMode } from "../context/hooks/useThemeMode";
import Section from "../ui/components/Section";
import { Grid } from "@mui/material";
import { images } from "../constants";
import { H1, Paragraph } from "../ui/components";
const About = () => {
  const { theme } = useThemeMode();
  return (
    <Section id="about" className="flex flex-col justify-center text-xl">
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <H1 className="text-2xl lg:text-4xl" color={theme.headerSecondary}>
            Who Am I
          </H1>
          <br />
          <Paragraph className="text-lg xl:text-xl">
            I am constantly learning and improving my skills in programming,
            software development, and problem-solving. I am passionate about
            using technology to make a positive impact on society and am excited
            to contribute to innovative projects that can change the world. My
            Portfolio profile is a showcase of my projects and interests.
          </Paragraph>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <img src={images.oriImage} alt="programmer" />
        </Grid>
      </Grid>
    </Section>
  );
};

export default About;
