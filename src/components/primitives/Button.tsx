import { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Link } from "@/lib/next";

import { cn } from "@/helpers/tailwind.helper";

// ================================== //

const buttonVariants = cva("rounded flex items-center justify-center h-11", {
  variants: {
    format: {
      icon: "w-11 text-2xl",
      default: "px-6 gap-2",
    },
    variant: {
      unstyled: "px-0 rounded-none h-fit w-fit",
      secondary: "bg-color-secondary hover:bg-white hover:bg-color-primary hover:text-dark",
      link: "px-0 w-fit h-fit hover:underline rounded-none",
      green: "bg-color-accent-green text-dark font-bold hover:opacity-90",
      outline: "border border-background-highlight hover:border-background-hover",
      highlight: "bg-background-highlight hover:bg-background-hover",
      ghost: "hover:bg-background-hover",
    },
  },
  defaultVariants: {
    variant: "highlight",
    format: "default",
  },
});

// ================================== //

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, Omit<VariantProps<typeof buttonVariants>, "format"> {
  href?: string;
  asIcon?: boolean;
  isExternal?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, href, variant, asIcon, className, isExternal, ...props }, ref) => {
  if (href) {
    return (
      <Link
        href={href}
        className={cn(buttonVariants({ variant, format: asIcon ? "icon" : "default" }), className)}
        {...(isExternal && { target: "_blank" })}
      >
        {children}
      </Link>
    );
  }

  return (
    <button {...props} ref={ref} className={cn(buttonVariants({ variant, format: asIcon ? "icon" : "default" }), className)}>
      {children}
    </button>
  );
});

Button.displayName = "Button";

export { Button };
