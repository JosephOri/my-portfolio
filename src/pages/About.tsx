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
          <Paragraph className="text-lg xl:text-xl">
            I am constantly learning and improving my skills in programming,
            software development, and problem-solving. I am passionate about
            using technology to make a positive impact on society and am excited
            to contribute to innovative projects that can change the world. My
            Portfolio profile is a showcase of my projects and interests.
          </Paragraph>
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
