const learningModules = [
  {
    title: "What is Web3?",
    description: "Understand the basic idea behind Web3.",
  },
  {
    title: "What is a Wallet?",
    description: "Learn how a Web3 wallet works.",
  },
  {
    title: "What is Gas?",
    description: "Understand transaction fees on blockchain.",
  },
{
  title: "What is a Blockchain?",
  description: "Learn how blockchain stores information.",
},
];

export default function AppPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <section className="mx-auto w-full max-w-5xl">
        {/* Header */}
        <header>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            NOWEBY
          </p>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Welcome back 👋
          </h1>

          <p className="mt-3 text-zinc-400">
            Continue your Web3 learning journey.
          </p>
        </header>

        {/* Progress */}
        <section className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <p className="text-sm text-zinc-500">
            Your Progress
          </p>

          <div className="mt-4 flex items-end justify-between">
            <div>
              <p className="text-4xl font-bold">
                0 XP
              </p>

              <p className="mt-2 text-sm text-zinc-500">
                0 / 5 modules completed
              </p>
            </div>

            <span className="text-sm text-zinc-500">
              Beginner
            </span>
          </div>
        </section>

        {/* Learning */}
        <section className="mt-10">
          <div className="mb-5">
            <h2 className="text-2xl font-semibold">
              Start Learning
            </h2>

            <p className="mt-2 text-zinc-500">
              Learn Web3 one concept at a time.
            </p>
          </div>

          <div className="space-y-3">
            {learningModules.map((module, index) => (
              <div
                key={module.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition hover:border-zinc-600"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-sm font-semibold">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      {module.title}
                    </h3>

                    <p className="mt-1 text-sm text-zinc-500">
                      {module.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Wallet */}
        <section className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <p className="text-sm text-zinc-500">
            Wallet
          </p>

          <h2 className="mt-2 text-xl font-semibold">
            Your Web3 wallet
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Wallet integration will be added in a later step.
          </p>
        </section>
      </section>
    </main>
  );
}
