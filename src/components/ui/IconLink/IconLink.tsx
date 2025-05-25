import styled from "styled-components";
import React from "react";

interface Props {
  href: string;
  Icon: React.ElementType;
  label: string;
  size?: "small" | "medium" | "large" | "inherit";
}

const StyledButton = styled.button`
  color: ${({ theme }) => theme.textPrimary};
`;

const IconLink = ({ href, Icon, label, size = "inherit" }: Props) => {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      color="inherit"
      itemProp="sameAs"
      target="_blank"
    >
      <StyledButton
        aria-label={label}
        aria-haspopup="true"
        className="mx-2 cursor-pointer bg-transparent text-inherit"
      >
        <Icon fontSize={size} />
      </StyledButton>
    </a>
  );
};

export default IconLink;
