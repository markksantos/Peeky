import Link from "next/link";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  external?: boolean;
}

export default function Button({
  href,
  variant = "primary",
  children,
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-all duration-200";
  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-dark shadow-lg shadow-accent/25 hover:shadow-accent-dark/30",
    secondary:
      "border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:bg-gray-800",
  };

  const className = `${base} ${variants[variant]}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
