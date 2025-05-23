import { H1, Paragraph } from "../../ui/components";
import Section from "../../ui/components/Section";

const Home = () => {
  return (
    <Section id="home" className="grid place-content-center gap-1.5">
      <H1 align="center" className="text-6xl xl:text-7xl">
        Hi, I'm <span className="text-teal-400">Ori</span>
        <br />A Software developer
      </H1>
      <Paragraph align="center" weight={400} className="mt-7 px-3 text-xl">
        I enjoy solving complex problems. Frequently praised as creative and
        dedicated by my peers, I can be relied upon to help your company achieve
        its goals by providing sustainable and scalable solutions.
      </Paragraph>
    </Section>
  );
};

export default Home;
