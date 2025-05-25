import { useThemeMode } from "../context/hooks/useThemeMode";
import Section from "../components/ui/Section";
import { images } from "../utils/constants";
import { H1, Paragraph } from "../components/ui";

const About = () => {
  const { theme } = useThemeMode();
  return (
    <Section id="about" className="flex flex-col justify-center text-xl">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <H1 className="text-2xl lg:text-4xl" color={theme.headerSecondary}>
            Who Am I
          </H1>
          <br />
          <div className="text-lg xl:text-xl">
            <Paragraph>
              I'm a developer with a passion for turning ideas into reality
              through clean, efficient code. Problem-solving isn't just a skill,
              it's a mindset. Whether it's debugging a stubborn issue or
              architecting a scalable system, I love the thrill of the
              challenge.
            </Paragraph>
            <br />
            <Paragraph>
              Away from the keyboard, I'm a lifelong learner, always exploring
              new technologies, frameworks, and methodologies. My peers
              describes me as a creative problem-solver, deeply dedicated to my
              code and driven by curiosity. Collaboration is at the heart of my
              work. I believe the best results come from shared knowledge, open
              communication, and a bit of humor along the way.
            </Paragraph>
            <br />
            <Paragraph>
              When I'm not coding, you'll find me at the gym or reading a book.
              At the end of the day, I'm someone who cares deeply about
              craftsmanship in code and in life.
            </Paragraph>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src={images.oriImage}
            alt="programmer"
            className="w-2/3 max-w-full"
          />
        </div>
      </div>
    </Section>
  );
};

export default About;
