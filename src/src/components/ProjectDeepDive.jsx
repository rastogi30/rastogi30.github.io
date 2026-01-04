import { motion } from "framer-motion";

const deepDive = {
  architecture: [
    "Event-driven services split into ingestion, reconciliation, and reporting lanes.",
    "Immutable ledger stored in PostgreSQL with append-only guarantees.",
    "Aggregation layer with ClickHouse for exploratory analysis without touching the ledger.",
  ],
  dataFlow: [
    "OAuth gateway issues scoped tokens; service mesh enforces policy per workspace.",
    "Kafka topics capture source events, enriched through Temporal workflows before landing in the ledger.",
    "Projection workers hydrate API read models while preserving ordering guarantees.",
  ],
  tradeoffs: [
    "Accepted slightly higher write latency to preserve traceable audit snapshots.",
    "Chose Kafka over simpler queues to keep strict ordering per account.",
    "Invested in schema registry early to protect downstream consumers from drift.",
  ],
  next: [
    "Introduce adaptive anomaly detection to flag reconciliation drift earlier.",
    "Expand policy-as-code for customer-defined approval steps.",
    "Automate recovery drills to keep operational readiness verifiable.",
  ],
};

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.55, ease: "easeOut" },
  },
  viewport: { once: true, amount: 0.25 },
});

function ProjectDeepDive() {
  return (
    <motion.section
      {...fadeIn(0.1)}
      className="mx-auto max-w-6xl px-6 py-20 sm:px-8"
    >
      <div className="max-w-3xl space-y-4">
        <span className="text-sm uppercase tracking-[0.24em] text-[var(--text-muted)]">Project deep dive</span>
        <h2 className="text-balance text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
          Ledger Loop — audit-grade reconciliation at scale.
        </h2>
        <p className="text-base leading-relaxed text-[var(--text-muted)]">
          Built for finance teams who demand traceability before speed. Architecture favours explicit contracts, bounded contexts, and predictable failure modes.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <InfoCard title="Architecture overview" items={deepDive.architecture} index={0} />
        <InfoCard title="Data & authentication flow" items={deepDive.dataFlow} index={1} />
        <InfoCard title="Key trade-offs" items={deepDive.tradeoffs} index={2} />
        <InfoCard title="Next improvements" items={deepDive.next} index={3} />
      </div>
    </motion.section>
  );
}

function InfoCard({ title, items, index }) {
  return (
    <motion.article
      {...fadeIn(index * 0.08)}
      whileHover={{ y: -6, borderColor: "rgba(110,231,249,0.35)" }}
      className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/90 p-6 shadow-[var(--shadow-soft)] transition-colors duration-300"
    >
      <h3 className="text-lg font-semibold text-[var(--text-primary)]">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--text-muted)]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </motion.article>
  );
}

export default ProjectDeepDive;
