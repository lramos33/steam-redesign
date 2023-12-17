import { cn } from "@/helpers/tailwind.helper";

interface BadgeProps {
  className?: string;
  children: React.ReactNode;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "flex h-8 w-fit select-none items-center justify-center rounded bg-background-tertiary px-3 text-xs text-dim",
        className
      )}
    >
      {children}
    </span>
  );
}
