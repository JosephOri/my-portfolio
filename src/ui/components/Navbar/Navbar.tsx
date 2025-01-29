import { useThemeMode } from "../../../hooks/context/useThemeMode";
import DarkModeToggle from "react-dark-mode-toggle";

const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useThemeMode();
  return (
    <DarkModeToggle
      className="mb-10"
      checked={isDarkMode}
      onChange={() => setIsDarkMode((prev) => !prev)}
      size={60}
    />
  );
};

export default Navbar;
