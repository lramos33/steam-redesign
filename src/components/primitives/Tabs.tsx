"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "@/helpers/tailwind.helper";

// ================================== //

type TTabsRootRef = ElementRef<typeof TabsPrimitive.Root>;
type TTabsRootProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Root>;

const TabsRoot = forwardRef<TTabsRootRef, TTabsRootProps>(({ children, ...props }, ref) => (
  <TabsPrimitive.Root ref={ref} {...props}>
    {children}
  </TabsPrimitive.Root>
));

TabsRoot.displayName = "TabRoot";

// ================================== //

type TTabContentRef = ElementRef<typeof TabsPrimitive.Content>;
type TTabContentProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Content>;

const TabContent = forwardRef<TTabContentRef, TTabContentProps>(({ children, className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn("rounded-b bg-background-hover p-4 focus-visible:outline-none data-[state=inactive]:hidden", className)}
    {...props}
  >
    {children}
  </TabsPrimitive.Content>
));

TabContent.displayName = "TabContent";

// ================================== //

type TTabTriggerRef = ElementRef<typeof TabsPrimitive.Trigger>;
type TTabTriggerProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>;

const TabTrigger = forwardRef<TTabTriggerRef, TTabTriggerProps>(({ children, className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "w-full items-center rounded-t bg-background-main py-2 text-sm text-dim",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=active]:bg-background-hover data-[state=active]:text-main",
      className
    )}
    {...props}
  >
    {children}
  </TabsPrimitive.Trigger>
));

TabTrigger.displayName = "TabTrigger";

// ================================== //

export const Tabs = {
  Root: TabsPrimitive.Root,
  List: TabsPrimitive.List,
  Content: TabContent,
  Item: TabTrigger,
};
