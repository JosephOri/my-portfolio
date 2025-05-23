import styled from "styled-components";
import { SizeOptions } from "../../../types/types";

interface H1Props {
  color?: string;
  uppercase?: boolean;
  size?: SizeOptions;
}

export const H1 = styled.h1<H1Props>`
  font-weight: 700;
  color: ${(props) => props.color || props.theme.textPrimary || "#2d3436"};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "none")};
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;
