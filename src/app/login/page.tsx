"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleContinue() {
    setMessage("");
    setError("");

    if (!email) {
      setError("Please enter your email.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }

    setMessage(`Ready to continue with ${email}`);
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-12">
      <section className="w-full max-w-md">
        <div className="text-center">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.3em] text-zinc-300"
          >
            NOWEBY
          </Link>

          <h1 className="mt-10 text-4xl font-bold tracking-tight">
            Welcome back
          </h1>

          <p className="mt-3 text-zinc-400">
            Continue your Web3 learning journey.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <button className="w-full rounded-xl bg-white px-6 py-3.5 font-semibold text-black transition-transform hover:scale-[1.02]">
            Continue with Google
          </button>

          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-zinc-800" />

            <span className="text-xs uppercase tracking-wider text-zinc-600">
              or
            </span>

            <div className="h-px flex-1 bg-zinc-800" />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-zinc-300"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3.5 text-white outline-none transition focus:border-zinc-500"
            />
          </div>

          <button
            onClick={handleContinue}
            className="w-full rounded-xl bg-zinc-800 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-zinc-700"
          >
            Continue with Email
          </button>

          {error && (
            <p className="text-center text-sm text-red-400">
              {error}
            </p>
          )}

          {message && (
            <p className="text-center text-sm text-green-400">
              {message}
            </p>
          )}
        </div>

        <p className="mt-8 text-center text-sm text-zinc-500">
          New to NOWEBY?{" "}
          <span className="text-zinc-300">Start learning for free.</span>
        </p>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm text-zinc-500 transition-colors hover:text-white"
          >
            ← Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
