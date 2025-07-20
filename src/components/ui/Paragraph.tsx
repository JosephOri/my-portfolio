import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const paragraphVariants = cva(
  "max-w-[65ch] leading-relaxed [&>a]:text-link [&>a]:underline [&>a]:underline-offset-2 [&>a]:transition-colors hover:[&>a]:text-link-hover",
  {
    variants: {
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
      weight: {
        300: "font-light",
        400: "font-normal",
        500: "font-medium",
        600: "font-semibold",
      },
      italic: {
        true: "italic",
      },
    },
    defaultVariants: {
      align: "left",
      weight: 400,
    },
  },
);

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {
  color?: string;
  maxWidth?: string;
}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  (
    { className, align, weight, italic, color, maxWidth, style, ...props },
    ref,
  ) => {
    return (
      <p
        className={cn(paragraphVariants({ align, weight, italic, className }))}
        ref={ref}
        style={{ color, maxWidth, ...style }}
        {...props}
      />
    );
  },
);
Paragraph.displayName = "Paragraph";

export { Paragraph };
