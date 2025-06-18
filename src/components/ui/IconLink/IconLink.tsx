import React from "react";
import { useThemeMode } from "@/context/hooks/useThemeMode";

interface Props {
  href: string;
  Icon: React.ElementType;
  label: string;
  size?: "small" | "medium" | "large" | "inherit";
}

const IconLink = ({ href, Icon, label, size = "inherit" }: Props) => {
  const { theme } = useThemeMode();
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      color="inherit"
      itemProp="sameAs"
      target="_blank"
      title={label}
      style={{ color: theme.iconBg }}
    >
      <button
        aria-label={label}
        aria-haspopup="true"
        className="mx-2 cursor-pointer"
      >
        <Icon fontSize={size} />
      </button>
    </a>
  );
};

export default IconLink;
