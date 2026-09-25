export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <section className="w-full max-w-4xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
          NOWEBY
        </p>

        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
          Web3 made simple.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
          Learn Web3. Understand it. Then use it.
        </p>

        <button className="mt-10 rounded-full bg-white px-7 py-3.5 font-semibold text-black transition-transform hover:scale-105">
          Start Learning
        </button>

        <p className="mt-6 text-sm text-zinc-500">
          No seed phrase complexity. No Web3 jargon overload.
        </p>
      </section>
    </main>
  );
}
