import { useThemeMode } from "../../../context/hooks/useThemeMode";
import DarkModeToggle from "react-dark-mode-toggle";
import { NavLink, NavLinks } from "./NavLink.styled";
import styled from "styled-components";
import MobileNav from "./MobileNav";
import { useScrollNavigation } from "../../../context/hooks/useScrollNavigation";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 5%;
  background-color: ${({ theme }) => theme.navbarBg};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  backdrop-filter: saturate(180%) blur(5px);
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.textPrimary};
`;

const DesktopControls = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileControls = styled.div`
  display: none;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useThemeMode();
  const { navItems, scrollToSection, handleHomeClick } = useScrollNavigation();

  return (
    <Nav>
      <Logo onClick={handleHomeClick} className="cursor-pointer">
        Ori Yossef
      </Logo>
      <NavLinks>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => scrollToSection(item.label)}
          >
            {item.label.toUpperCase()}
          </NavLink>
        ))}
        <DesktopControls>
          <DarkModeToggle
            checked={isDarkMode}
            onChange={() => setIsDarkMode((prev) => !prev)}
            size={55}
            speed={2}
          />
        </DesktopControls>
      </NavLinks>

      <MobileControls>
        <DarkModeToggle
          checked={isDarkMode}
          onChange={() => setIsDarkMode((prev) => !prev)}
          size={45}
          speed={2}
        />
        <MobileNav />
      </MobileControls>
    </Nav>
  );
};

export default Navbar;
