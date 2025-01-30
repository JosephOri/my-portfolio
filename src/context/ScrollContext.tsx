import React, { createContext, useState } from "react";
import { ScrollOptions } from "../types/types";

type ScrollContextType = {
  activeSection: ScrollOptions;
  setActiveSection: (section: ScrollOptions) => void;
};

export const ScrollContext = createContext<ScrollContextType | undefined>({
  activeSection: "home",
  setActiveSection: () => {},
});

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeSection, setActiveSection] = useState<ScrollOptions>("home");

  return (
    <ScrollContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ScrollContext.Provider>
  );
};
