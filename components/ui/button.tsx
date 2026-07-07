import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-xl font-semibold",
    "transition-all duration-300 ease-out",
    "focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:scale-[0.98]",
    "hover:-translate-y-0.5",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30",

        secondary:
          "bg-slate-900 text-white shadow-lg hover:bg-slate-800 hover:shadow-xl",

        outline:
          "border border-slate-300 bg-white text-slate-900 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50",

        ghost:
          "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
      },

      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-11 px-6",
        lg: "h-14 px-8 text-lg",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}