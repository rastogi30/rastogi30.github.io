import { motion } from "framer-motion";

const featuredProjects = [
  {
    name: "EduNexus",
    subtitle: "Full Stack EdTech Platform",
    description:
      "EduNexus is a full-stack EdTech platform where instructors can create and manage courses, while students can enroll, access learning content, track progress, and interact through a modern dashboard experience.",
    learnings: [
      "Implemented secure authentication and authorization using JWT",
      "Designed REST APIs and connected frontend with backend services",
      "Built role-based dashboards for students and instructors",
    ],
    tech: ["React", "Redux", "Node.js", "Express.js", "MongoDB", "JWT"],
    live: "https://edunexus-edtech.vercel.app/",
    github: "https://github.com/rastogi30/EduNexus",
  },
  {
    name: "CodeCast",
    subtitle: "Real-Time Coding Collaboration Platform",
    description:
      "CodeCast is a real-time collaborative coding platform that allows multiple users to join shared rooms and write code together with instant synchronization, making it suitable for remote interviews and pair programming.",
    learnings: [
      "Worked with real-time state synchronization and live updates",
      "Implemented authentication and access control for shared rooms",
      "Improved component structure and frontend scalability",
    ],
    tech: ["Next.js", "TypeScript", "Clerk", "Convex", "Stream"],
    live: "https://code-cast-phi.vercel.app/",
    github: "https://github.com/rastogi30/CodeCast",
  },
];

const miniProjects = [
  {
    name: "Password Generator",
    description: "Generates secure passwords based on selected rules.",
    live: "#",
    github: "#",
  },
  {
    name: "Weather Application",
    description: "Displays real-time weather data using public APIs.",
    live: "#",
    github: "#",
  },
  {
    name: "Tic Tac Toe Game",
    description: "Classic game built to practice state management.",
    live: "#",
    github: "#",
  },
];

const automationScripts = [
  {
    name: "Railway Login Automation Script",
    description:
      "Automates form filling and navigation flow to study browser automation and scripting techniques.",
    github: "#",
  },
  {
    name: "PNR Status Tracking Script",
    description:
      "Fetches and monitors ticket status updates programmatically for learning automation workflows.",
    github: "#",
  },
];

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.55, ease: "easeOut" },
  },
  viewport: { once: true, amount: 0.25 },
});

function Projects() {
  return (
    <motion.section
      id="projects"
      {...fadeIn(0)}
      className="mx-auto max-w-6xl px-6 py-20 sm:px-8"
    >
      {/* Heading */}
      <div className="max-w-3xl space-y-4">
        <span className="text-sm uppercase tracking-[0.24em] text-[var(--text-muted)]">
          Projects
        </span>
        <h2 className="text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
          Projects built while learning full-stack development.
        </h2>
        <p className="text-base text-[var(--text-muted)]">
          A mix of product-focused applications, mini projects, and automation
          scripts that reflect my learning journey.
        </p>
      </div>

      {/* Featured Projects */}
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <motion.article
            key={project.name}
            {...fadeIn(index * 0.1)}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/95 p-8 shadow-[var(--shadow-soft)]"
          >
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">
              {project.name}
            </h3>
            <p className="text-sm text-[var(--text-muted)]">
              {project.subtitle}
            </p>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
              {project.description}
            </p>

            {/* Learnings */}
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[var(--text-muted)]">
              {project.learnings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            {/* Tech stack */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--text-muted)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-6 flex gap-3">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--accent)] px-4 py-2 text-sm text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--cta-text)] transition"
              >
                Live
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--text-muted)] hover:border-[var(--accent-secondary)] hover:text-[var(--accent-secondary)] transition"
              >
                GitHub
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Mini Projects */}
      <motion.div {...fadeIn(0.4)} className="mt-16">
        <h3 className="text-lg font-semibold text-[var(--text-primary)]">
          Mini Projects
        </h3>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {miniProjects.map((project) => (
            <div
              key={project.name}
              className="rounded-xl border border-[var(--border)] bg-[var(--card)]/70 p-5"
            >
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                {project.name}
              </p>
              <p className="mt-1 text-xs text-[var(--text-muted)]">
                {project.description}
              </p>
              <div className="mt-3 flex gap-3 text-xs">
                <a
                  href={project.live}
                  className="text-[var(--accent)] hover:underline"
                >
                  Live
                </a>
                <a
                  href={project.github}
                  className="text-[var(--accent-secondary)] hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Automation Scripts */}
      <motion.div {...fadeIn(0.5)} className="mt-16">
        <h3 className="text-lg font-semibold text-[var(--text-primary)]">
          Automation Scripts (Academic & Learning)
        </h3>
        <p className="mt-2 text-sm text-[var(--text-muted)]">
          Scripts built to explore browser automation, form handling, and
          workflow scripting.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {automationScripts.map((script) => (
            <div
              key={script.name}
              className="rounded-xl border border-[var(--border)] bg-[var(--card)]/70 p-5"
            >
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                {script.name}
              </p>
              <p className="mt-1 text-xs text-[var(--text-muted)]">
                {script.description}
              </p>
              <a
                href={script.github}
                className="mt-3 inline-block text-xs text-[var(--accent)] hover:underline"
              >
                View GitHub
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Projects;
