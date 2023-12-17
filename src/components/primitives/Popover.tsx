"use client";

import * as PopoverPrimitive from "@radix-ui/react-popover";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "@/helpers/tailwind.helper";

// ================================== //

type TPopoverContentRef = ElementRef<typeof PopoverPrimitive.Content>;
type TPopoverContentProps = ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>;

const PopoverContent = forwardRef<TPopoverContentRef, TPopoverContentProps>(
  ({ className, align = "center", sideOffset = 4, ...props }, ref) => {
    return (
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          {...props}
          ref={ref}
          align={align}
          sideOffset={sideOffset}
          className={cn(
            "z-50 flex min-w-[--radix-popover-trigger-width] flex-col gap-6 rounded bg-background-highlight p-4 focus:outline-none",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
            "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            className
          )}
        />
      </PopoverPrimitive.Portal>
    );
  }
);

PopoverContent.displayName = "PopoverContent";

// ================================== //

export const Popover = {
  Root: PopoverPrimitive.Root,
  Trigger: PopoverPrimitive.Trigger,
  Content: PopoverContent,
};
