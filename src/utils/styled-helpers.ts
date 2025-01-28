import { theme } from "../ui/theme/theme";

export const respondTo = {
  md: `(max-width: ${theme.breakpoints.md})`,
  sm: `(max-width: ${theme.breakpoints.sm})`,
};

export const media = {
  md: `@media ${respondTo.md}`,
  sm: `@media ${respondTo.sm}`,
};
