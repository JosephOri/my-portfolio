import { DefaultTheme } from "styled-components";

export type AlignOptions = "left" | "center" | "right";

export type SizeOptions = "sm" | "md" | "lg" | "xl";

export type FontWeightOptions = 300 | 400 | 500 | 600;
export interface Theme extends DefaultTheme {
  body: string;
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
