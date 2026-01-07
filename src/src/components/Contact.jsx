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

function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.target;

    try {
      await emailjs.sendForm(
        "service_iatyefj",      // ✅ Service ID
        "template_k4tvj0k",     // ✅ Template ID
        form,
        "Ukq8eOwS0nLjndjUE"     // ✅ Public Key
      );

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      {...fadeIn(0.18)}
      className="mx-auto max-w-6xl px-6 pb-24 sm:px-8"
    >
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Left content */}
        <motion.div {...fadeIn(0.02)} className="space-y-6">
          <div className="space-y-3">
            <span className="text-sm uppercase tracking-[0.24em] text-[var(--text-muted)]">
              Contact
            </span>
            <h2 className="text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
              Let’s explore your next build.
            </h2>
            <p className="text-base text-[var(--text-muted)]">
              Share your idea or problem — I usually respond within 1–2 days.
            </p>
          </div>

          <a
            href="mailto:anshrastogi3007@gmail.com"
            className="block text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-secondary)]"
          >
            anshrastogi3007@gmail.com
          </a>
        </motion.div>

        {/* Contact form */}
        <motion.form
          {...fadeIn(0.06)}
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-[var(--border)] bg-[var(--card)]/90 p-6 shadow-[var(--shadow-soft)]"
        >
          <Field label="Name" name="from_name" placeholder="Enter your name" />
          <Field
            label="Email"
            name="from_email"
            placeholder="Enter your email address"
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
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] px-6 py-3 text-sm font-semibold text-[var(--cta-text)] disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {/* Status messages */}
          {status === "success" && (
            <p className="text-sm text-green-500">
              ✅ Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-500">
              ❌ Failed to send message. Please try again.
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
    <label className="flex flex-col gap-2 text-sm text-[var(--text-muted)]">
      {label}
      <Component
        name={name}
        placeholder={placeholder}
        rows={rows}
        type={type}
        required
        className="w-full rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition-colors focus:border-[var(--accent)]"
      />
    </label>
  );
}

export default Contact;
