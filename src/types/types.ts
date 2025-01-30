export type AlignOptions = "left" | "center" | "right";

export type SizeOptions = "sm" | "md" | "lg" | "xl";

export type FontWeightOptions = 300 | 400 | 500 | 600;

export type ScrollOptions = "home" | "about" | "projects" | "contact";

export type NavItem = {
  path: string;
  label: ScrollOptions;
};

export const navItems: NavItem[] = [
  { path: "/", label: "home" },
  { path: "/about", label: "about" },
  { path: "/projects", label: "projects" },
  { path: "/contact", label: "contact" },
];
