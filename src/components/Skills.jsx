import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiRedux,
  SiNextdotjs,
  SiExpress,
  SiPostman,
} from "react-icons/si";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: "easeOut" },
  },
  viewport: { once: true, amount: 0.25 },
});

const skillCategories = [
  {
    title: "Frontend",
    description: "Building responsive screens with clean, accessible code.",
    skills: [
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
      { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend",
    description: "Building APIs and backend logic for real-world applications.",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
      { name: "Express", icon: <SiExpress />, color: "#000000" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    ],
  },
  {
    title: "Workflow",
    description: "Tools I use to manage code, test APIs, and collaborate.",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      { name: "GitHub", icon: <FaGithub />, color: "#181717" },
      { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
    ],
  },
];

function Skills() {
  return (
    <motion.section
      id="skills"
      {...fadeIn(0)}
      className="mx-auto max-w-6xl px-6 py-20 sm:px-8"
    >
      <div className="max-w-2xl space-y-4">
        <span className="text-sm uppercase tracking-[0.24em] text-[var(--text-muted)]">
          Skills
        </span>
        <h2 className="text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
          A practical stack built through projects.
        </h2>
        <p className="text-base text-[var(--text-muted)]">
          I focus on a clear split between frontend, backend, and daily workflow tools so every release stays smooth.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <motion.article
            key={category.title}
            {...fadeIn(0.1 + index * 0.08)}
            whileHover={{ y: -6, borderColor: "rgba(110,231,249,0.3)" }}
            className="rounded-3xl border border-[var(--border)] bg-[var(--card)]/90 p-6 shadow-[var(--shadow-soft)] transition-colors sm:p-8"
          >
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">{category.title}</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">{category.description}</p>

            <div className="mt-6 grid gap-4">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skill.name}
                  className="group flex items-center gap-3 rounded-2xl border border-[var(--border)]/60 bg-[var(--background)]/55 p-3 transition-colors hover:border-[var(--accent)]/45 hover:bg-[var(--background)]/75"
                >
                  <motion.span
                    style={{ "--icon-accent": skill.color }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--card)] text-2xl text-[var(--text-muted)] transition-colors group-hover:text-[var(--icon-accent)]"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3 + skillIndex * 0.25, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {skill.icon}
                  </motion.span>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">{skill.name}</p>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
