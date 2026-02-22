import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Peeky",
  description: "Peeky privacy policy. Peeky is an offline macOS app that does not collect any personal data.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24">
      <Link
        href="/"
        className="text-sm text-accent hover:underline"
      >
        &larr; Back to home
      </Link>

      <h1 className="mt-8 text-3xl font-bold text-gray-900 dark:text-white">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        Last updated: February 21, 2026
      </p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Overview</h2>
          <p className="mt-2">
            Peeky is a macOS Quick Look extension that runs entirely on your device. Your privacy is
            important to us, and Peeky is designed to respect it completely.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Data Collection</h2>
          <p className="mt-2">
            Peeky does <strong>not</strong> collect, store, or transmit any personal data. All file
            previews are generated locally on your Mac. No data ever leaves your device.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Cookies &amp; Analytics</h2>
          <p className="mt-2">
            Peeky does not use cookies, tracking pixels, or any analytics services. The app has no
            network connectivity requirements.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Third-Party Services</h2>
          <p className="mt-2">
            Peeky does not integrate with any third-party services. It operates entirely offline as
            a native macOS Quick Look extension.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Changes to This Policy</h2>
          <p className="mt-2">
            We may update this privacy policy from time to time. Any changes will be posted on this
            page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Contact</h2>
          <p className="mt-2">
            If you have questions about this privacy policy, please open an issue on our{" "}
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
