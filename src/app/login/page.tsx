export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <section className="w-full max-w-md text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
          NOWEBY
        </p>

        <h1 className="text-4xl font-bold tracking-tight">
          Welcome to NOWEBY
        </h1>

        <p className="mt-4 text-zinc-400">
          Start your Web3 learning journey.
        </p>

        <div className="mt-8 space-y-3">
          <button className="w-full rounded-xl bg-white px-6 py-3.5 font-semibold text-black transition-transform hover:scale-[1.02]">
            Continue with Google
          </button>

          <button className="w-full rounded-xl border border-zinc-700 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-zinc-900">
            Continue with Email
          </button>
        </div>

        <p className="mt-6 text-xs text-zinc-500">
          By continuing, you agree to the NOWEBY experience.
        </p>
      </section>
    </main>
  );
}
