import { motion } from "framer-motion";

const projects = [
  {
    name: "Signal Atlas",
    problem: "Enable product squads to separate signal from noise in customer feedback loops.",
    tech: ["React", "Remix", "PostgreSQL", "Temporal"],
    focus: "Mapped ingestion pipelines to domain language so insights stay actionable and auditable.",
  },
  {
    name: "Ops Canvas",
    problem: "Give on-call engineers a single decision surface for distributed runbooks.",
    tech: ["Next.js", "tRPC", "PlanetScale", "Tailwind"],
    focus: "Designed API-first workflows where every UI path mirrors an operational decision tree.",
  },
  {
    name: "Ledger Loop",
    problem: "Automate reconciliation while preserving trustable, human-readable trails.",
    tech: ["NestJS", "GraphQL", "Kafka", "ClickHouse"],
    focus: "Balanced throughput and correctness by isolating reconciliation pipelines with circuit breakers.",
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

function Projects() {
  return (
    <motion.section
      id="projects"
      {...fadeIn(0.08)}
      className="mx-auto max-w-6xl px-6 py-20 sm:px-8"
    >
      <div className="max-w-3xl space-y-4">
        <span className="text-sm uppercase tracking-[0.24em] text-[var(--text-muted)]">Featured projects</span>
        <h2 className="text-balance text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
          Real constraints, explicit trade-offs.
        </h2>
        <p className="text-base leading-relaxed text-[var(--text-muted)]">
          Every build starts from the problem statement. Each card highlights the architectural approach and what I optimised for.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            {...fadeIn(index * 0.08)}
            whileHover={{ y: -8, borderColor: "rgba(110,231,249,0.35)" }}
            className="flex h-full flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--card)]/90 p-6 shadow-[var(--shadow-soft)] transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                {project.name}
              </div>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">{project.problem}</p>
              <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-[var(--border)] bg-[var(--background)]/60 px-3 py-1">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--background)]/60 p-4 text-sm leading-relaxed text-[var(--text-muted)]">
                <span className="block font-semibold text-[var(--accent)]">What I focused on</span>
                {project.focus}
              </div>
            </div>
            <div className="mt-6 flex gap-3 text-sm font-semibold">
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="flex-1 rounded-full border border-[var(--accent)] px-4 py-2 text-center text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-[var(--cta-text)]"
              >
                Live Demo
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="flex-1 rounded-full border border-[var(--border)] px-4 py-2 text-center text-[var(--text-muted)] transition-colors hover:border-[var(--accent-secondary)] hover:text-[var(--accent-secondary)]"
              >
                GitHub
              </motion.a>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
