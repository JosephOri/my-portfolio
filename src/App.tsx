import Home from "./pages/Home/Home";
import { useThemeMode } from "./hooks/context/useThemeMode";
import styled, { ThemeProvider } from "styled-components";
import DarkModeToggle from "react-dark-mode-toggle";

import { darkTheme, lightTheme } from "./ui/theme/theme";

const App = () => {
  const { isDarkMode, setIsDarkMode } = useThemeMode();

  const Container = styled.div`
    background-color: ${(props) => props.theme.body};
    height: 100vh;
  `;

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Container>
        <DarkModeToggle
          checked={isDarkMode}
          onChange={() => setIsDarkMode((prev) => !prev)}
          size={60}
        />
        <Home />
      </Container>
    </ThemeProvider>
  );
};

export default App;
