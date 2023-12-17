import { cn } from "@/helpers/tailwind.helper";

interface SeparatorProps {
  orientation?: "vertical" | "horizontal";
  className?: string;
}

export function Separator({ orientation = "horizontal", className }: SeparatorProps) {
  return <div className={cn("bg-color-secondary", orientation === "horizontal" ? "h-px w-full" : "h-full w-px", className)} />;
}
