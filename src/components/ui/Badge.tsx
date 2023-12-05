interface BadgeProps {
  children: React.ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return <span className="inline-flex items-center rounded bg-background-highlight px-3 py-2 text-xs text-dim">{children}</span>;
}
