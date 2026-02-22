import { Eye } from "@phosphor-icons/react/dist/ssr";

interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent">
      <Eye size={14} weight="duotone" />
      {text}
    </span>
  );
}
