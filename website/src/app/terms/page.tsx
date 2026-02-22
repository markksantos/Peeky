import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Peeky",
  description: "Peeky terms of service and end-user license agreement.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24">
      <Link
        href="/"
        className="text-sm text-accent hover:underline"
      >
        &larr; Back to home
      </Link>

      <h1 className="mt-8 text-3xl font-bold text-gray-900 dark:text-white">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        Last updated: February 21, 2026
      </p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">1. License Grant</h2>
          <p className="mt-2">
            By purchasing Peeky, you are granted a non-exclusive, non-transferable license to install
            and use the software on any Mac computers that you own or control, for personal or
            commercial purposes.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">2. Restrictions</h2>
          <p className="mt-2">You may not:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Redistribute, resell, or sublicense the software</li>
            <li>Reverse engineer, decompile, or disassemble the software</li>
            <li>Remove or alter any proprietary notices or labels</li>
            <li>Use the software for any unlawful purpose</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">3. Updates</h2>
          <p className="mt-2">
            Your purchase includes lifetime access to all future updates of Peeky at no additional
            cost.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">4. Disclaimer of Warranties</h2>
          <p className="mt-2">
            Peeky is provided &ldquo;as is&rdquo; without warranty of any kind, express or implied,
            including but not limited to the warranties of merchantability, fitness for a particular
            purpose, and noninfringement.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">5. Limitation of Liability</h2>
          <p className="mt-2">
            In no event shall the author be liable for any claim, damages, or other liability arising
            from the use of the software. Total liability shall not exceed the amount paid for the
            software.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">6. Governing Law</h2>
          <p className="mt-2">
            These terms shall be governed by and construed in accordance with the laws of the United
            States, without regard to conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">7. Contact</h2>
          <p className="mt-2">
            If you have questions about these terms, please open an issue on our{" "}
            <a
              href="https://github.com/markksantos/Peeky/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              GitHub repository
            </a>
            .
          </p>
        </section>

        <p className="text-xs text-gray-400">
          macOS and Finder are trademarks of Apple Inc., registered in the U.S. and other countries.
        </p>
      </div>
    </div>
  );
}
