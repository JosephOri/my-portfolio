import { Link, IconButton } from "@mui/material";
import React from "react";

interface Props {
  href: string;
  Icon: React.ElementType;
  label: string;
}

const IconLink = ({ href, Icon, label }: Props) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      color="inherit"
      itemProp="sameAs"
    >
      <IconButton aria-label={label} aria-haspopup="true" color="inherit">
        <Icon fontSize="large" />
      </IconButton>
    </Link>
  );
};

export default IconLink;
