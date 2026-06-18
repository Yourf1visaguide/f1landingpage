"use client";

import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-zinc-50 flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <div className="inline-flex items-center justify-center size-24 rounded-full bg-red-100 mb-8">
          <AlertTriangle className="size-12 text-red-700" />
        </div>

        <p className="text-red-700 font-semibold uppercase tracking-[0.25em] mb-3">
          Something Went Wrong
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6">
          Unexpected Error
        </h1>

        <p className="text-lg text-zinc-600 mb-10">
          We encountered a temporary issue while loading this page.
          Please try again in a moment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-xl font-semibold transition-colors cursor-pointer"
          >
            Try Again
          </button>

          <button
            onClick={() => window.location.href = "/"}
            className="bg-blue-950 hover:bg-blue-900 text-white px-8 py-4 rounded-xl font-semibold transition-colors cursor-pointer"
          >
            Go Home
          </button>
        </div>

        {process.env.NODE_ENV === "development" && (
          <div className="mt-10 p-4 rounded-lg bg-zinc-900 text-left overflow-auto">
            <pre className="text-red-400 text-sm whitespace-pre-wrap">
              {error.message}
            </pre>
          </div>
        )}
      </div>
    </main>
  );
}