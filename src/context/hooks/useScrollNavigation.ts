import { navItems, ScrollOptions } from "../../types/types";
import { useScroll } from "./useScroll";

export const useScrollNavigation = () => {
  const { activeSection, setActiveSection } = useScroll();

  const scrollToSection = (sectionId: ScrollOptions) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(sectionId);
    }
  };

  const handleHomeClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setActiveSection("home");
  };

  return {
    navItems,
    activeSection,
    scrollToSection,
    handleHomeClick,
  };
};
