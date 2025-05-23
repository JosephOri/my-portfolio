import { useThemeMode } from "../context/hooks/useThemeMode";
import { H1, Paragraph } from "../ui/components";
import Section from "../ui/components/Section";

const About = () => {
  const { theme } = useThemeMode();
  return (
    <Section id="about" className="flex flex-col justify-center text-xl">
      <H1 className="mb-10 text-4xl" color={theme.headerSecondary} uppercase>
        let me introduce myself
      </H1>
      <Paragraph>Hi Everyone, I am Ori Yossef.</Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, saepe
        tempore iusto laudantium facere eius explicabo modi quia minima nam.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum adipisci
        reprehenderit sequi facere tenetur amet?
      </Paragraph>
    </Section>
  );
};

export default About;
