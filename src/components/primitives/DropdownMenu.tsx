"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "@/helpers/tailwind.helper";

type TDropdownMenuContentRef = ElementRef<typeof DropdownMenuPrimitive.Content>;
type TDropdownMenuContentProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>;

const DropdownMenuContent = forwardRef<TDropdownMenuContentRef, TDropdownMenuContentProps>(
  ({ className, sideOffset = 4, ...props }, ref) => (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[var(--radix-dropdown-menu-trigger-width)] overflow-hidden rounded bg-background-highlight p-1",
          "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
);

DropdownMenuContent.displayName = "DropdownMenuContent";

// ================================== //

type TDropdownMenuLabelRef = ElementRef<typeof DropdownMenuPrimitive.Label>;
type TDropdownMenuLabelProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>;

const DropdownMenuLabel = forwardRef<TDropdownMenuLabelRef, TDropdownMenuLabelProps>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Label ref={ref} className={cn("px-2 py-1.5 text-sm font-semibold", className)} {...props} />
));

DropdownMenuLabel.displayName = "DropdownMenuLabel";

// ================================== //

type TDropdownMenuItemRef = ElementRef<typeof DropdownMenuPrimitive.Item>;
type TDropdownMenuItemProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>;

const DropdownMenuItem = forwardRef<TDropdownMenuItemRef, TDropdownMenuItemProps>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "flex h-11 cursor-pointer select-none items-center gap-1.5 rounded-sm px-2 py-1.5 text-sm",
      "focus:bg-background-hover focus:outline-none",
      "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
      className
    )}
    {...props}
  />
));

DropdownMenuItem.displayName = "DropdownMenuItem";

// ================================== //

type TDropdownMenuSeparatorRef = ElementRef<typeof DropdownMenuPrimitive.Separator>;
type TDropdownMenuSeparatorProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>;

const DropdownMenuSeparator = forwardRef<TDropdownMenuSeparatorRef, TDropdownMenuSeparatorProps>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-background-hover", className)} {...props} />
));

DropdownMenuSeparator.displayName = "DropdownMenuSeparator";

// ================================== //

export const DropdownMenu = {
  Root: DropdownMenuPrimitive.Root,
  Trigger: DropdownMenuPrimitive.Trigger,
  Content: DropdownMenuContent,
  Label: DropdownMenuLabel,
  Group: DropdownMenuPrimitive.Group,
  Item: DropdownMenuItem,
  Separator: DropdownMenuSeparator,
};
