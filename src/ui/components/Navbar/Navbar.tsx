import { useThemeMode } from "../../../hooks/context/useThemeMode";
import DarkModeToggle from "react-dark-mode-toggle";
import { NavLink, NavLinks } from "./NavLink.styled";
import styled from "styled-components";
import MobileNav from "./MobileNav";

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

const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useThemeMode();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <Nav>
      <Logo>Ori Yossef</Logo>
      <NavLinks>
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path}>
            {item.label}
          </NavLink>
        ))}
        <DarkModeToggle
          checked={isDarkMode}
          onChange={() => setIsDarkMode((prev) => !prev)}
          size={55}
          speed={2}
        />
      </NavLinks>
      <MobileNav />
    </Nav>
  );
};

export default Navbar;
