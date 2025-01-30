import React, { useEffect, useRef } from "react";
import { useScroll } from "../../context/hooks/useScroll";
import { ScrollOptions } from "../../types/types";
import styled from "styled-components";

const SectionWrapper = styled.section`
  min-height: 100vh;
  scroll-snap-align: start;
  padding: 2rem 5%;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

interface SectionProps {
  id: ScrollOptions;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className }) => {
  const ref = useRef<HTMLElement | null>(null);
  const { setActiveSection } = useScroll();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(id);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [id, setActiveSection]);

  return (
    <SectionWrapper id={id} ref={ref} className={`${className}`}>
      {children}
    </SectionWrapper>
  );
};

export default Section;
