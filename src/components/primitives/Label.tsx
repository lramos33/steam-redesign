"use client";

import * as LabelPrimitive from "@radix-ui/react-label";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "@/helpers/tailwind.helper";

// ================================== //

type TLabelRef = ElementRef<typeof LabelPrimitive.Root>;
type TLabelProps = ComponentPropsWithoutRef<typeof LabelPrimitive.Root>;

const Label = forwardRef<TLabelRef, TLabelProps>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn("w-fit select-none text-sm font-semibold peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)}
    {...props}
  />
));

Label.displayName = LabelPrimitive.Root.displayName;

// ================================== //

export { Label };
