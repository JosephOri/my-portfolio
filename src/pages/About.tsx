import { useThemeMode } from "../context/hooks/useThemeMode";
import { H1, Paragraph } from "../ui/components";
import Section from "../ui/components/Section";

const About = () => {
  const { theme } = useThemeMode();
  return (
    <Section id="about" className="flex flex-col justify-center text-xl">
      <H1 className="mb-10 text-4xl" color={theme.headerSecondary} uppercase>
        Who Am I
      </H1>
      <Paragraph>
        I am constantly learning and improving my skills in programming,
        software development, and problem-solving. I am passionate about using
        technology to make a positive impact on society and am excited to
        contribute to innovative projects that can change the world. My
        Portfolio profile is a showcase of my projects and interests.
      </Paragraph>
    </Section>
  );
};

export default About;
