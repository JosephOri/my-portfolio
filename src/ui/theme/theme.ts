export const theme = {
  colors: {
    primary: "#2d3436",
    accent: "#0d9488",
    textPrimary: "white ",
    link: "#2563eb",
    linkHover: "#1d4ed8",
  },
  spacing: {
    section: "4rem",
  },
  breakpoints: {
    md: "768px",
    sm: "480px",
  },
} as const;

export type Theme = typeof theme;
