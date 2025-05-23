import Section from "../ui/components/Section";
import { H1, Paragraph } from "../ui/components";
import { useThemeMode } from "../context/hooks/useThemeMode";
const Projects = () => {
  const { theme } = useThemeMode();
  return (
    <Section id="projects" className="mt-20 flex flex-col justify-center">
      <H1 className="mb-10 text-4xl" color={theme.headerSecondary}>
        Projects
      </H1>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </Paragraph>
    </Section>
  );
};

export default Projects;
