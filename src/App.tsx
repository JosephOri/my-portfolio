import Home from "./pages/Home/Home";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./ui/theme/theme";
import { useThemeMode } from "./hooks/context/useThemeMode";
import Navbar from "./ui/components/Navbar/Navbar";

const App = () => {
  const { isDarkMode } = useThemeMode();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Navbar />
      <Home />
    </ThemeProvider>
  );
};

export default App;
