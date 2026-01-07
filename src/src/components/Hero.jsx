import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

const containerMotion = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
};

const itemMotion = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const socials = [
  { name: "GitHub", icon: <FaGithub />, link: "https://github.com/rastogi30" },
  { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/ansh30/" },
  { name: "LeetCode", icon: <SiLeetcode />, link: "https://leetcode.com/u/llansh_01ll/" },
  { name: "HackerRank", icon: <FaHackerrank />, link: "https://www.hackerrank.com/profile/lakhanrastogi201" },
  { name: "Codeforces", icon: <SiCodeforces />, link: "https://codeforces.com/profile/llansh_01ll" },

];

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[540px] bg-gradient-to-b from-[var(--accent)]/15 via-transparent to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/4 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-[var(--accent-secondary)]/12 blur-[180px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(110,231,249,0.12)_0%,_transparent_55%)]"
        aria-hidden="true"
      />

      {/* Social rail */}
      <div className="fixed right-10 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-4 md:flex">
        {socials.map((s, i) => (
          <motion.a
            key={s.name}
            href={s.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + i * 0.12, duration: 0.45, ease: "easeOut" }}
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
            className="group relative flex items-center justify-center"
          >
            <motion.div
              variants={{
                hover: { scale: 1.5 },
              }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--text-muted)] shadow-[var(--shadow-soft)] group-hover:text-[var(--accent)]"
            >
              {s.icon}
            </motion.div>
            <motion.span
              variants={{
                hover: { opacity: 1, x: -16 },
              }}
              initial={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="pointer-events-none absolute right-14 whitespace-nowrap rounded-md border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-sm font-medium text-[var(--text-primary)] shadow-[var(--shadow-soft)] group-hover:font-semibold"
            >
              {s.name}
            </motion.span>
          </motion.a>
        ))}
      </div>


      {/* Main content */}
      <motion.div
        variants={containerMotion}
        initial="hidden"
        animate="show"
        className="mx-auto flex min-h-[75vh] max-w-6xl flex-col justify-center gap-10 px-6 pb-24 pt-28 sm:px-8 lg:min-h-[80vh] lg:pt-32"
      >
        <motion.div
          variants={itemMotion}
          className="relative max-w-fit"
        >
          <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--accent)]/18 via-transparent to-[var(--accent-secondary)]/18 blur-xl" aria-hidden="true" />
          <motion.h1
            className="relative text-4xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl"
            whileHover={{ textShadow: "0 0 24px rgba(110,231,249,0.35)" }}
          >
            Ansh Rastogi
          </motion.h1>
        </motion.div>

        <motion.p
          variants={itemMotion}
          className="max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg"
        >
          I build real-world web applications with a strong focus on problem-solving,
          clean architecture, and scalable development practices. I regularly practice
          Data Structures & Algorithms to strengthen my fundamentals.
        </motion.p>

        <motion.div
          variants={itemMotion}
          className="flex flex-wrap gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0 18px 45px rgba(110,231,249,0.25)" }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] px-6 py-3 text-sm font-semibold text-[var(--cta-text)] shadow-[var(--shadow-soft)]"
          >
            View Projects
          </motion.a>

          <motion.a
            href="#resume"
            whileHover={{ y: -3, borderColor: "rgba(110,231,249,0.45)" }}
            whileTap={{ y: 0 }}
            className="rounded-full border border-[var(--border)] bg-[var(--card)] px-6 py-3 text-sm font-semibold text-[var(--text-primary)] transition-colors"
          >
            Download Resume
          </motion.a>
        </motion.div>

        <motion.p
          variants={itemMotion}
          className="flex items-center gap-3 text-sm text-[var(--text-muted)]"
        >
          <span className="inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
          Computer Science • Full Stack Developer • Open to Opportunities
        </motion.p>

        <motion.div
          variants={itemMotion}
          className="flex gap-3 md:hidden"
        >
          {socials.map((s) => (
            <motion.a
              key={s.name}
              href={s.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--text-muted)] shadow-[var(--shadow-soft)]"
            >
              {s.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 h-105 w-105 -translate-x-1/2 rounded-full bg-[var(--accent-secondary)]/18 blur-[180px]"
        aria-hidden="true"
      />
    </section>
  );
}

export default Hero;
