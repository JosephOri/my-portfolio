import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.textPrimary};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.primaryColor};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;
