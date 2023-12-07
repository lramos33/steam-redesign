"use client";

import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "@/helpers/tailwind.helper";

// ================================== //

const toggleVariants = cva("rounded flex items-center justify-center ", {
  variants: {
    format: {
      icon: "text-lg h-11 w-11",
      default: "h-11 px-7 gap-2",
    },
    variant: {
      secondary: "hover:bg-background-hover data-[state=on]:bg-color-secondary",
      outline:
        "border border-background-highlight hover:border-background-hover data-[state=on]:border-none data-[state=on]:bg-color-secondary",
      text: "font-bold text-lg text-main px-0 h-fit data-[state=on]:text-color-primary",
    },
  },
  defaultVariants: {
    variant: "secondary",
    format: "default",
  },
});

// ================================== //

type TToggleRef = ElementRef<typeof TogglePrimitive.Root>;
type TToggleProps = ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>;

const Toggle = forwardRef<TToggleRef, TToggleProps>(({ className, variant, format, ...props }, ref) => (
  <TogglePrimitive.Root ref={ref} className={cn(toggleVariants({ variant, format, className }))} {...props} />
));

Toggle.displayName = "Toggle";

// ================================== //

export { Toggle };

export type TVariantProps = VariantProps<typeof toggleVariants>;
