interface BadgeProps {
  children: React.ReactNode;
  color?: string;
}

export default function Badge({ children, color }: BadgeProps) {
  return (
    <span
      className="rounded border bg-muted px-2 py-0.5 text-sm font-medium text-background"
      style={{ backgroundColor: color }}
    >
      {children}
    </span>
  );
}
