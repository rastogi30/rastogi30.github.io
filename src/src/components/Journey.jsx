import { motion } from "framer-motion";

const phases = [
  {
    title: "Learning phase",
    detail: "Rebuilt core CS utilities — parsers, schedulers, caching layers — to internalise fundamentals.",
  },
  {
    title: "Building phase",
    detail: "Prototyped internal tools that automated manual ops reviews and exposed system blind spots.",
  },
  {
    title: "Shipping phase",
    detail: "Led cross-functional releases with staged rollouts, observability dashboards, and feedback cadences.",
  },
  {
    title: "Growth phase",
    detail: "Coached squads on design critiques, testing culture, and aligning product bets with engineering reality.",
  },
];

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.55, ease: "easeOut" },
  },
  viewport: { once: true, amount: 0.25 },
});

function Journey() {
  return (
    <motion.section
      id="journey"
      {...fadeIn(0.12)}
      className="mx-auto max-w-6xl px-6 py-20 sm:px-8"
    >
      <div className="max-w-3xl space-y-4">
        <span className="text-sm uppercase tracking-[0.24em] text-[var(--text-muted)]">Experience / Journey</span>
        <h2 className="text-balance text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
          Growth through deliberate cycles.
        </h2>
        <p className="text-base leading-relaxed text-[var(--text-muted)]">
          Each stage layered responsibility — from exploring fundamentals, to shipping intentional work, to guiding teams through ambiguity.
        </p>
      </div>
      <div className="relative mt-14 border-l border-[var(--border)] pl-10">
        <span className="absolute left-[-2px] top-0 h-full w-1 bg-gradient-to-b from-[var(--accent)]/50 via-transparent to-[var(--accent-secondary)]/50" aria-hidden="true" />
        <div className="space-y-10">
          {phases.map((phase, index) => (
            <motion.article
              key={phase.title}
              {...fadeIn(index * 0.08)}
              className="relative pl-6"
            >
              <span className="absolute left-[-31px] top-2 h-3 w-3 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] shadow-[0_0_0_4px_var(--background)]" aria-hidden="true" />
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">{phase.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{phase.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Journey;
