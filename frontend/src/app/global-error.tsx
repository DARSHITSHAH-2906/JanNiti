"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-(--bg-primary) text-(--text-primary)">
        <div className="flex min-h-screen items-center justify-center p-6">
          <div className="max-w-lg rounded-2xl border border-(--border-primary) bg-(--bg-card) p-8 text-center shadow-(--shadow-lg)">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
              Application Error
            </p>
            <h1 className="mt-3 text-2xl font-bold">Something went wrong</h1>
            <p className="mt-3 text-sm text-(--text-secondary)">
              The app hit a rendering error while building this page.
            </p>
            <button
              type="button"
              onClick={() => reset()}
              className="mt-6 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}