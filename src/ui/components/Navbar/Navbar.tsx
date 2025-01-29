import { useThemeMode } from "../../../hooks/context/useThemeMode";
import DarkModeToggle from "react-dark-mode-toggle";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.textPrimary};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.primaryColor};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
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
    </Nav>
  );
};

export default Navbar;
