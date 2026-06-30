import * as React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3";
}

export function Heading({
  as: Component = "h2",
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <Component
      className={cn(
        "font-bold tracking-tight text-slate-900",
        {
          "text-5xl md:text-7xl": Component === "h1",
          "text-4xl md:text-5xl": Component === "h2",
          "text-2xl md:text-3xl": Component === "h3",
        },
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}