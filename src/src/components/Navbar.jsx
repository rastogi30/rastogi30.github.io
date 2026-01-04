import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#thinking", label: "How I Think" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

const navLinkMotion = {
  hidden: { opacity: 0, y: -6 },
  show: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + index * 0.04, duration: 0.4, ease: "easeOut" },
  }),
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-5xl pt-3">
        <div className="relative flex items-center justify-between rounded-full border border-[var(--border)] bg-[var(--background)]/85 px-5 py-3 shadow-[0_18px_40px_rgba(8,12,24,0.18)] backdrop-blur">
          <a
            href="#home"
            className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--text-primary)]"
          >
            AR
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                custom={index}
                initial="hidden"
                animate="show"
                variants={navLinkMotion}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9}}
                className="group relative text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                {item.label}
                <span className="pointer-events-none absolute inset-x-0 -bottom-2 h-px origin-center scale-x-0 bg-gradient-to-r from-[var(--accent)] via-[var(--accent-secondary)] to-[var(--accent)] transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--text-primary)] shadow-[var(--shadow-soft)] lg:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-label="Toggle navigation"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                
              >
                {open ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="mt-3 rounded-2xl border border-[var(--border)] bg-[var(--card)]/92 px-5 pb-5 pt-4 shadow-[0_20px_48px_rgba(8,12,24,0.3)] backdrop-blur lg:hidden"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl border border-transparent px-3 py-2 text-sm font-medium text-[var(--text-muted)] transition-colors hover:border-[var(--accent)]/40 hover:bg-[var(--background)]/55 hover:text-[var(--text-primary)]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
