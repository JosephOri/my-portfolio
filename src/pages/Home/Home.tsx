import { H1, Paragraph } from "../../ui/components";
import Section from "../../ui/components/Section";

const Home = () => {
  return (
    <Section id="home" className="flex flex-col items-center justify-center">
      <H1 align="center" className="mt-5 px-2 md:mt-3">
        I'm <span className="text-teal-400">Ori Yossef</span>
        <br />a Software developer
      </H1>
      <Paragraph align="center" size="lg" weight={400} className="mt-7 px-3">
        I enjoy solving complex problems. Frequently praised as detail-oriented
        by my peers, I can be relied upon to help your company achieve its goals
        by providing sustainable and scalable solutions.
      </Paragraph>
    </Section>
  );
};

export default Home;
