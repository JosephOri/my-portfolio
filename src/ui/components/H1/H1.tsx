import styled from "styled-components";
import { AlignOptions, SizeOptions } from "../../../types/types";

interface H1Props {
  color?: string;
  align?: AlignOptions;
  uppercase?: boolean;
  size?: SizeOptions;
}

export const H1 = styled.h1<H1Props>`
  font-size: ${({ size }) => {
    switch (size) {
      case "sm":
        return "1.7rem";
      case "md":
        return "2.6rem";
      case "lg":
        return "3.6rem";
      case "xl":
        return "5rem";
      default:
        return "3.6rem";
    }
  }};
  font-weight: 700;
  color: ${(props) => props.color || props.theme.textPrimary || "#2d3436"};
  text-align: ${(props) => props.align || "left"};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "none")};
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;
