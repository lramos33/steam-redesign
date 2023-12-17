import { cn } from "@/helpers/tailwind.helper";

interface INotificationDotProps {
  number?: number;
  className?: string;
}

export function NotificationDot({ number, className }: INotificationDotProps) {
  return (
    <span className={cn(" flex h-4 w-4 items-center justify-center rounded-full bg-color-primary text-xs text-black", className)}>
      {number}
    </span>
  );
}
