import styled from "styled-components";
import {
  AlignOptions,
  FontWeightOptions,
  SizeOptions,
} from "../../types/types";

interface ParagraphProps {
  color?: string;
  align?: AlignOptions;
  size?: SizeOptions;
  weight?: FontWeightOptions;
  maxWidth?: string;
  italic?: boolean;
}

export const Paragraph = styled.p<ParagraphProps>`
  color: ${({ color, theme }) => color || theme.textPrimary || "#333"};
  text-align: ${({ align }) => align || "left"};
  font-size: ${({ size }) => {
    switch (size) {
      case "sm":
        return "1rem";
      case "md":
        return "1.1rem";
      case "lg":
        return "1.25rem";
      case "xl":
        return "1.7rem";
      default:
        return "1rem";
    }
  }};
  font-weight: ${({ weight }) => weight || 400};
  line-height: 1.6;
  max-width: ${({ maxWidth }) => maxWidth || "65ch"};
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: ${({ size: size }) =>
      size === "xl" ? "1.125rem" : "0.9375rem"};
    line-height: 1.5;
  }

  a {
    color: ${({ theme }) => theme.linkColor || "#2563eb"};
    text-decoration: underline;
    text-underline-offset: 3px;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.linkHoverColor || "#1d4ed8"};
    }
  }
`;
