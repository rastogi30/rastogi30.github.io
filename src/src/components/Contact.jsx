import { motion } from "framer-motion";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: "easeOut" },
  },
  viewport: { once: true, amount: 0.25 },
});

function Contact() {
  return (
    <motion.section
      id="contact"
      {...fadeIn(0.18)}
      className="mx-auto max-w-6xl px-6 pb-24 sm:px-8"
    >
      <div className="grid gap-12 lg:grid-cols-2">
        <motion.div {...fadeIn(0.02)} className="space-y-6">
          <div className="space-y-3">
            <span className="text-sm uppercase tracking-[0.24em] text-[var(--text-muted)]">Contact</span>
            <h2 className="text-balance text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
              Let’s explore your next build.
            </h2>
            <p className="text-base leading-relaxed text-[var(--text-muted)]">
              Share the problem you need solved or the hypothesis you want to test. I respond within two business days with next steps.
            </p>
          </div>
          <div className="space-y-2 text-sm text-[var(--text-muted)]">
            <a href="mailto:hello@avery.codes" className="block font-medium text-[var(--accent)] transition-colors hover:text-[var(--accent-secondary)]">
              hello@avery.codes
            </a>
            <a href="https://github.com/avery-dev" className="block font-medium text-[var(--accent)] transition-colors hover:text-[var(--accent-secondary)]">
              github.com/avery-dev
            </a>
            <a href="https://linkedin.com/in/avery-thompson" className="block font-medium text-[var(--accent)] transition-colors hover:text-[var(--accent-secondary)]">
              linkedin.com/in/avery-thompson
            </a>
          </div>
        </motion.div>
        <motion.form
          {...fadeIn(0.06)}
          className="space-y-5 rounded-2xl border border-[var(--border)] bg-[var(--card)]/90 p-6 shadow-[var(--shadow-soft)]"
        >
          <Field label="Name" id="name" placeholder="Jordan Lee" type="text" />
          <Field label="Email" id="email" placeholder="you@team.com" type="email" />
          <Field
            as="textarea"
            label="What would you like to explore?"
            id="context"
            placeholder="Briefly describe the challenge."
            rows={4}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] px-6 py-3 text-sm font-semibold text-[var(--cta-text)]"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
}

function Field({ label, id, placeholder, type = "text", as = "input", rows }) {
  const Component = as;
  return (
    <label className="flex flex-col gap-2 text-sm text-[var(--text-muted)]" htmlFor={id}>
      {label}
      <Component
        id={id}
        name={id}
        placeholder={placeholder}
        rows={rows}
        type={type}
        className="w-full rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition-colors focus:border-[var(--accent)]"
      />
    </label>
  );
}

export default Contact;
