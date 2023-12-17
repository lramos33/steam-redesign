"use client";

import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "@/helpers/tailwind.helper";

// ================================== //

type TScrollBarRef = ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>;
type TScrollBarProps = ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>;

const ScrollBar = forwardRef<TScrollBarRef, TScrollBarProps>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2 border-l border-l-transparent p-0.5",
      orientation === "horizontal" && "h-2 w-full flex-col border-t border-t-transparent p-0.5",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className={cn("relative flex-1 rounded-full bg-zinc-600")} />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));

ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

// ================================== //

interface TOrientation {
  orientation?: "vertical" | "horizontal" | "both";
}

type TScrollAreaRef = ElementRef<typeof ScrollAreaPrimitive.Root>;
type TScrollAreaProps = ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> & TOrientation;

const ScrollArea = forwardRef<TScrollAreaRef, TScrollAreaProps>(({ className, children, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.Root ref={ref} className={cn("relative", className)} {...props}>
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">{children}</ScrollAreaPrimitive.Viewport>
    {orientation === "both" ? (
      <>
        <ScrollBar orientation="vertical" />
        <ScrollBar orientation="horizontal" />
      </>
    ) : (
      <ScrollBar orientation={orientation} />
    )}
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));

ScrollArea.displayName = "ScrollAreaRoot";

export { ScrollArea };
