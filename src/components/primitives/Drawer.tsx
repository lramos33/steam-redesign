"use client";

import * as DrawerPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "@/helpers/tailwind.helper";

// ==================================

const portalVariants = cva("fixed inset-0 z-50 flex", {
  variants: {
    position: {
      top: "items-start justify-center",
      bottom: "items-end justify-center",
      left: "justify-start",
      right: "justify-end",
    },
  },
});

interface IDrawerPortalProps extends DrawerPrimitive.DialogPortalProps, VariantProps<typeof portalVariants> {}

function DrawerPortal({ position, children }: IDrawerPortalProps) {
  return (
    <DrawerPrimitive.Portal>
      <div className={portalVariants({ position })}>{children}</div>
    </DrawerPrimitive.Portal>
  );
}

// ==================================

const contentVariant = cva(
  "relative z-50 scale-100 flex-col flex bg-white opacity-100 bg-background-main shadow-lg gap-4 p-4 min-w-[240px]",
  {
    variants: {
      position: {
        top: "animate-in slide-in-from-top w-full duration-300",
        bottom: "animate-in slide-in-from-bottom w-full duration-300",
        left: "animate-in slide-in-from-left h-full duration-300",
        right: "animate-in slide-in-from-right h-full duration-300",
      },
    },
  }
);

type TDrawerContentRef = ElementRef<typeof DrawerPrimitive.Content>;

interface IDrawerContentProps extends ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>, VariantProps<typeof contentVariant> {}

const DrawerContent = forwardRef<TDrawerContentRef, IDrawerContentProps>(({ position = "left", className, children, ...props }, ref) => {
  return (
    <DrawerPortal position={position}>
      <DrawerPrimitive.Content ref={ref} className={cn(contentVariant({ position }), className)} {...props}>
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
});

DrawerContent.displayName = "DrawerContent";

// ==================================

export const Drawer = {
  Root: DrawerPrimitive.Root,
  Trigger: DrawerPrimitive.Trigger,
  Content: DrawerContent,
};
