import Home from "./pages/Home/Home";
import { useThemeMode } from "./hooks/context/useThemeMode";
import { ThemeProvider } from "styled-components";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { darkTheme, lightTheme } from "./ui/theme/theme";

const App = () => {
  const { isDarkMode, setIsDarkMode } = useThemeMode();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <DarkModeSwitch
        style={{ marginBottom: "2rem" }}
        checked={isDarkMode}
        onChange={() => setIsDarkMode((prev) => !prev)}
        size={60}
      />
      <Home />
    </ThemeProvider>
  );
};

export default App;
