import { motion } from "framer-motion";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: "easeOut" },
  },
  viewport: { once: true, amount: 0.3 },
});

function Resume() {
  return (
    <motion.section
      id="resume"
      {...fadeIn(0.16)}
      className="mx-auto max-w-6xl px-6 py-20 sm:px-8"
    >
      <motion.div
        {...fadeIn(0.05)}
        whileHover={{ y: -4, borderColor: "rgba(110,231,249,0.35)" }}
        className="flex flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)]/90 px-6 py-12 shadow-[var(--shadow-soft)] transition-colors duration-300 sm:flex-row sm:items-center sm:justify-between sm:px-10"
      >
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-[var(--text-primary)]">Resume ready on request</h2>
          <p className="text-sm leading-relaxed text-[var(--text-muted)]">
            Download the one-page summary. The living resume will be refreshed with ongoing work before interviews.
          </p>
        </div>
        <motion.a
          href="https://drive.google.com/file/d/1m8gtWz-iksIFG1OzvTyiSiDMPQZX1VSN/view?usp=sharing"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] px-6 py-3 text-sm font-semibold text-[var(--cta-text)]"
        >
          Download Resume
        </motion.a>
      </motion.div>
    </motion.section>
  );
}

export default Resume;
