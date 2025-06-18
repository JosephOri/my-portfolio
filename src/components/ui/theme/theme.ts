import { DefaultTheme } from "styled-components";

export interface Theme extends DefaultTheme {
  body: string;
  navbarBg: string;
  textPrimary: string;
  textSecondary: string;
  primaryColor: string;
  headerPrimary: string;
  headerSecondary: string;
  linkColor: string;
  linkHoverColor: string;
  cardBg: string;
  tagBg: string;
  tagText: string;
  inputBorder: string;
  buttonBg: string;
  buttonHoverBg: string;
  success: string;
  error: string;
  iconBg: string;
}

export const lightTheme: Theme = {
  body: "#FFFFFF",
  navbarBg: "#f8f9fa",
  textPrimary: "#333333",
  textSecondary: "#666666",
  primaryColor: "#4e9288",
  headerPrimary: "#333333",
  headerSecondary: "#4e9288",
  linkColor: "#2563eb",
  linkHoverColor: "#1d4ed8",
  cardBg: "#f9f9f9",
  tagBg: "#e0e0e0",
  tagText: "#333",
  inputBorder: "#ccc",
  buttonBg: "#4e9288",
  buttonHoverBg: "#4e9288",
  success: "#22c55e",
  error: "#ef4444",
  iconBg: "#000000",
};

export const darkTheme: Theme = {
  body: "#121212",
  navbarBg: "#1a1a1a",
  textPrimary: "#F5F5F5",
  textSecondary: "#B3B3B3",
  primaryColor: "#4e9288",
  headerPrimary: "#F5F5F5",
  headerSecondary: "#4e9288",
  linkColor: "#63b3ed",
  linkHoverColor: "#4d85bb",
  cardBg: "#1e1e1e",
  tagBg: "#333",
  tagText: "#FFFFFF",
  inputBorder: "#555",
  buttonBg: "#63b3ed",
  buttonHoverBg: "#4d85bb",
  success: "#16a34a",
  error: "#dc2626",
  iconBg: "#FFFFFF",
};
