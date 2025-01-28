import styled from "styled-components";
import { H1, Paragraph } from "../../ui/components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  return (
    <Section>
      <H1 align="center">
        I'm <span className="text-teal-400">Ori Yossef</span>
        <br />a Software developer
      </H1>
      <Paragraph align="center" size="lg" weight={400}>
        I enjoy solving complex problems. Frequently praised as detail-oriented
        by my peers, I can be relied upon to help your company achieve its goals
        by providing sustainable and scalable solutions.
      </Paragraph>
    </Section>
  );
};

export default Home;
