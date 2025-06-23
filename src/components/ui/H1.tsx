import { cn } from "@/lib/utils";
import { useThemeMode } from "@/context/hooks/useThemeMode";
import React from "react";

interface Props {
  color?: string;
  uppercase?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const H1 = ({ className, color, uppercase, children }: Props) => {
  const { theme } = useThemeMode();
  return (
    <h1
      className={cn(className, uppercase && "uppercase", "font-bold")}
      style={{ color: color || theme.textPrimary }}
    >
      {children}
    </h1>
  );
};
