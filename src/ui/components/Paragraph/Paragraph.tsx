import styled from "styled-components";
import { AlignOptions, FontWeightOptions } from "../../../types/types";

interface ParagraphProps {
  color?: string;
  align?: AlignOptions;
  weight?: FontWeightOptions;
  maxWidth?: string;
  italic?: boolean;
}

export const Paragraph = styled.p<ParagraphProps>`
  color: ${({ color, theme }) => color || theme.textPrimary || "#333"};
  font-weight: ${({ weight }) => weight || 400};
  line-height: 1.6;
  max-width: ${({ maxWidth }) => maxWidth || "65ch"};
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};

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
