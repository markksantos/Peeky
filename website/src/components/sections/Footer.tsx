import Link from "next/link";
import { LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900 dark:text-white">Peeky</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-gray-900 dark:hover:text-white"
          >
            GitHub
          </a>
          <a
            href={LINKS.support}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-gray-900 dark:hover:text-white"
          >
            Support
          </a>
          <Link
            href="/privacy"
            className="transition-colors hover:text-gray-900 dark:hover:text-white"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="transition-colors hover:text-gray-900 dark:hover:text-white"
          >
            Terms
          </Link>
        </div>

        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Mark Santos. macOS is a trademark of Apple Inc.
        </p>
      </div>
    </footer>
  );
}
