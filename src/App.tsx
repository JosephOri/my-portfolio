import Home from "./pages/Home/Home";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./ui/theme/theme";
import Navbar from "./ui/components/Navbar/Navbar";
import { useThemeMode } from "./context/hooks/useThemeMode";
import About from "./pages/About/About";

const App = () => {
  const { isDarkMode } = useThemeMode();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Navbar />
      <Home />
      <About />
    </ThemeProvider>
  );
};

export default App;
