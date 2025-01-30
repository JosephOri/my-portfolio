import { H1, Paragraph } from "../../ui/components";
import Section from "../../ui/components/Section";

const About = () => {
  return (
    <Section id="about">
      <H1 className="mb-10" size="md" uppercase>
        let me introduce myself
      </H1>
      <Paragraph size="sm">Hi Everyone, I am Ori Yossef.</Paragraph>
      <Paragraph size="sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, saepe
        tempore iusto laudantium facere eius explicabo modi quia minima nam.
      </Paragraph>
      <Paragraph size="sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum adipisci
        reprehenderit sequi facere tenetur amet?
      </Paragraph>
    </Section>
  );
};

export default About;
