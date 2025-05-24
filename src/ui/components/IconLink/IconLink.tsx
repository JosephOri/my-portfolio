import styled from "styled-components";
import React from "react";
interface Props {
  href: string;
  Icon: React.ElementType;
  label: string;
}

const StyledButton = styled.button`
  color: ${({ theme }) => theme.textPrimary};
`;

const IconLink = ({ href, Icon, label }: Props) => {
  return (
    <a href={href} rel="noopener noreferrer" color="inherit" itemProp="sameAs">
      <StyledButton
        aria-label={label}
        aria-haspopup="true"
        className="mx-2 cursor-pointer bg-transparent text-inherit"
      >
        <Icon fontSize="large" />
      </StyledButton>
    </a>
  );
};

export default IconLink;
