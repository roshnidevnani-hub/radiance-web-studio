import * as React from "react";
import { cn } from "@/lib/utils";

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export function Text({
  children,
  className,
  ...props
}: TextProps) {
  return (
    <p
      className={cn(
        "text-lg leading-8 text-slate-600",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}