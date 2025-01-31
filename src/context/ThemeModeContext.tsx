import React, { createContext, useState, useEffect } from "react";
import { darkTheme, lightTheme, Theme } from "../ui/theme/theme";

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
  const [isDarkMode, setIsDarkMode] = useState(true);
  const theme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    const body = document.body;
    body.style.backgroundColor = isDarkMode ? darkTheme.body : lightTheme.body;
  }, [isDarkMode]);

  return (
    <ThemeModeContext.Provider value={{ isDarkMode, setIsDarkMode, theme }}>
      {children}
    </ThemeModeContext.Provider>
  );
};
