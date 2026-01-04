import { motion } from "framer-motion";

const thinkingCards = [
  {
    title: "Understand the problem first",
    description:
      "Before writing code, I try to clearly understand what the problem is asking, what the input and output should be, and what edge cases might exist.",
  },
  {
    title: "Think about flow",
    description:
      "I like to think about how data moves through the application and how the UI should behave in different situations like loading, success, or errors.",
  },
  {
    title: "Choose tools carefully",
    description:
      "I don’t pick technologies just because they are popular. I choose tools that make the project easier to build, understand, and improve later.",
  },
  {
    title: "Build, test, improve",
    description:
      "I prefer to build a basic working version first, test it properly, fix mistakes, and then improve the code step by step as I learn more.",
  },
];

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.55, ease: "easeOut" },
  },
  viewport: { once: true, amount: 0.2 },
});

function Thinking() {
  return (
    <motion.section
      id="thinking"
      {...fadeIn(0)}
      className="mx-auto max-w-6xl px-6 py-20 sm:px-8"
    >
      <div className="max-w-3xl space-y-4">
        <span className="text-sm uppercase tracking-[0.24em] text-[var(--text-muted)]">
          How I think
        </span>

        <h2 className="text-balance text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
          I focus on understanding before coding.
        </h2>

        <p className="text-base leading-relaxed text-[var(--text-muted)]">
          As a computer science student, I try not to jump directly into writing
          code. I first understand the problem clearly, think through the logic,
          and then start implementing a solution in a simple and structured way.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {thinkingCards.map((card, index) => (
          <motion.article
            key={card.title}
            {...fadeIn(index * 0.05)}
            whileHover={{ y: -6, borderColor: "rgba(110,231,249,0.35)" }}
            className="flex flex-col gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)]/90 p-6 shadow-[var(--shadow-soft)] transition-colors duration-300"
          >
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">
              {card.title}
            </h3>

            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              {card.description}
            </p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

export default Thinking;
