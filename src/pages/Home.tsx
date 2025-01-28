import styled from "styled-components";
import { H1, Paragraph } from "../ui/components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Home = () => {
  return (
    <Section>
      <H1 align="center">
        Hi, I'm <span className="text-teal-400">Ori Yossef</span>
        <br /> a Software developer
      </H1>
      <Paragraph align="center" size="lg" weight={400}>
        I specialize in creating web applications that are reliable, scalable,
        and secure. I use a variety of programming languages, frameworks, and
        tools to build custom applications and integrate with existing systems.
      </Paragraph>
    </Section>
  );
};

export default Home;
