import Home from "./pages/Home/Home";
import { ThemeProvider } from "styled-components";
import Navbar from "./ui/components/Navbar/Navbar";
import { useThemeMode } from "./context/hooks/useThemeMode";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import { ToastContainer } from "react-toastify";

const App = () => {
  const { theme } = useThemeMode();

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
