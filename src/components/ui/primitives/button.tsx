import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground border-t-4 border-b-4 border-primary-rgb",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20",
        outline:
          "border-t-4 bg-background border-secondary hover:bg-foreground hover:text-background border-b-4",
        secondary:
          "border-t-4 border-b-4 border-muted bg-secondary text-secondary-foreground shadow-xs",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-2 underline font-normal",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "text-xs h-6 gap-1.5 px-2 has-[>svg]:px-2.5",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 px-6 has-[>svg]:px-4",
        xl: "h-15 px-10 has-[>svg]:px-6 text-lg",
        "2xl": "h-12 px-10 has-[>svg]:px-8",
        "3xl": "h-14 px-12 has-[>svg]:px-10",
        "4xl": "h-16 px-14 has-[>svg]:px-12",
        "5xl": "h-20 px-16 has-[>svg]:px-14",
        "6xl": "h-24 px-20 has-[>svg]:px-16",
        "7xl": "h-28 px-24 has-[>svg]:px-20",
        "8xl": "h-32 px-28 has-[>svg]:px-24",
        "9xl": "h-36 px-32 has-[>svg]:px-28",
        "10xl": "h-40 px-36 has-[>svg]:px-32",
        "11xl": "h-44 px-40 has-[>svg]:px-36",
        "12xl": "h-48 px-44 has-[>svg]:px-40",
        icon: "min-w-9 size-9",
        "icon-xl": "min-w-14 size-14",
        clear: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  disabled,
  style,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      disabled={disabled}
      style={{ cursor: disabled ? "not-allowed" : "pointer", ...style }}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
