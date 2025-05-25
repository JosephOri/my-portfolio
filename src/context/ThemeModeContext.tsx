import React, { createContext, useState, useEffect } from "react";
import { darkTheme, lightTheme, Theme } from "../components/ui/theme/theme";

interface ThemeModeContextType {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  theme: Theme;
}

export const ThemeModeContext = createContext<ThemeModeContextType | undefined>(
  undefined,
);

export const ThemeModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    const body = document.body;
    body.style.backgroundColor = isDarkMode ? darkTheme.body : lightTheme.body;

    const favicon = document.querySelector(
      "link[rel='icon']",
    ) as HTMLLinkElement | null;
    if (favicon) {
      favicon.href = `/favicon-${isDarkMode ? "dark" : "light"}.ico`;
    } else {
      const link = document.createElement("link");
      link.rel = "icon";
      link.href = `/favicon-${isDarkMode ? "dark" : "light"}.ico`;
      document.head.appendChild(link);
    }
  }, [isDarkMode]);

  return (
    <ThemeModeContext.Provider value={{ isDarkMode, setIsDarkMode, theme }}>
      {children}
    </ThemeModeContext.Provider>
  );
};
