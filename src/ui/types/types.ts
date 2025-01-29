import { DefaultTheme } from "styled-components";

export interface Theme extends DefaultTheme {
  body: string;
  navbarBg: string;
  textPrimary: string;
  textSecondary: string;
  primaryColor: string;
  linkColor: string;
  linkHoverColor: string;
  cardBg: string;
  tagBg: string;
  tagText: string;
  inputBorder: string;
  buttonBg: string;
  buttonHoverBg: string;
}

export type AlignOptions = "left" | "center" | "right";

export type SizeOptions = "sm" | "md" | "lg" | "xl";

export type FontWeightOptions = 300 | 400 | 500 | 600;

export const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];
