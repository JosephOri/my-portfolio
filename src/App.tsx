import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import Navbar from "./ui/components/Navbar/Navbar";
import { useThemeMode } from "./context/hooks/useThemeMode";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ToastContainer } from "react-toastify";
import Projects from "./pages/Projects";
const App = () => {
  const { theme } = useThemeMode();

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
