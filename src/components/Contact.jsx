import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: "easeOut" },
  },
  viewport: { once: true, amount: 0.25 },
});

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        "service_iatyefj",
        "template_k4tvj0k",
        e.target,
        "Ukq8eOwS0nLjndjUE"
      );

      setStatus("success");
      e.target.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      {...fadeIn(0.15)}
      className="mx-auto max-w-6xl px-6 pb-28 sm:px-8"
    >
      <div className="grid gap-14 lg:grid-cols-2">
        {/* Left content */}
        <motion.div {...fadeIn(0)} className="space-y-6">
          <span className="text-xs uppercase tracking-[0.32em] text-[var(--text-muted)]">
            Contact
          </span>

          <h2 className="text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
            Let’s build something meaningful.
          </h2>

          <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
            Have an idea, opportunity, or just want to connect?  
            Drop a message — it goes straight to my inbox.
          </p>

          <div className="rounded-xl border border-[var(--border)]/60 bg-[var(--card)]/60 px-4 py-3 text-xs text-[var(--text-muted)]">
            ⏱ Usually responds within 24–48 hours
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          {...fadeIn(0.08)}
          onSubmit={handleSubmit}
          className="space-y-5 rounded-3xl border border-[var(--border)]/70 bg-[var(--card)]/90 p-6 shadow-[var(--shadow-soft)] backdrop-blur sm:p-7"
        >
          <Field
            label="Your Name"
            name="from_name"
            placeholder="Enter your name"
          />

          <Field
            label="Your Email"
            name="from_email"
            placeholder="Enter your email"
            type="email"
          />

          <Field
            as="textarea"
            label="Message"
            name="message"
            placeholder="Write your message here"
            rows={4}
          />

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] px-6 py-3 text-sm font-semibold text-[var(--cta-text)] transition-all disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sending…" : "Send Message"}
          </motion.button>

          {/* Status feedback */}
          {status === "success" && (
            <p className="text-sm text-emerald-500">
              ✅ Message sent successfully. I’ll get back to you soon!
            </p>
          )}

          {status === "error" && (
            <p className="text-sm text-red-500">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </motion.form>
      </div>
    </motion.section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  as = "input",
  rows,
}) {
  const Component = as;

  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="font-medium text-[var(--text-muted)]">
        {label}
      </span>

      <Component
        name={name}
        type={type}
        rows={rows}
        placeholder={placeholder}
        required
        className="w-full rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition-all focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]/40"
      />
    </label>
  );
}
