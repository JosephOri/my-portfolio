import styled from "styled-components";

interface ButtonProps {
  color?: string;
  variant?: "solid" | "outline";
}

export const ContactMessageButton = styled.button<ButtonProps>`
  padding: 0.8rem 1.5rem;
  background: ${({ theme, color, variant }) =>
    variant === "outline" ? "transparent" : color || theme.primaryColor};
  color: ${({ theme, color, variant }) =>
    variant === "outline" ? color || theme.primaryColor : "#fff"};
  border: 2px solid ${({ theme, color }) => color || theme.primaryColor};
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;
