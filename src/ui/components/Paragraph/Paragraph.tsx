import styled from "styled-components";
import {
  AlignOptions,
  FontWeightOptions,
  SizeOptions,
} from "../../../types/types";

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
  font-weight: ${({ weight }) => weight || 400};
  line-height: 1.6;
  max-width: ${({ maxWidth }) => maxWidth || "65ch"};
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};

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
