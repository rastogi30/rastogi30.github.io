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
    description:
      "Generates secure passwords based on user-selected rules and criteria.",
    live: "https://password-generator-six-tan-59.vercel.app/",
    github: "https://github.com/rastogi30/Password-Generator",
  },
  {
    name: "Weather Information Explorer",
    description:
      "Displays real-time weather details for searched locations using public APIs.",
    live: "https://weather-ansh.netlify.app/",
    github: "https://github.com/rastogi30/WeatherInfoExplorer",
  },
  {
    name: "Tic Tac Game",
    description:
      "Classic two-player game built to practice state management and game logic.",
    live: "https://tic-tac-delta.vercel.app/",
    github: "https://github.com/rastogi30/Tic-Tac",
  },
  {
    name: "Razorpay Frontend UI Clone",
    description:
      "Frontend-only clone of Razorpay’s landing pages to practice responsive layouts and UI design.",
    live: "https://razopay-git-main-ansh-rastogis-projects.vercel.app/",
    github: "https://github.com/rastogi30/Razopay-/tree/main",
  },
];

const automationScripts = [
  {
    name: "IRCTC Captcha Recognition using OCR (Academic)",
    description:
      "Academic project exploring image preprocessing and OCR techniques by extracting captcha images from the IRCTC website and recognizing text using EasyOCR for learning purposes.",
    github: "https://github.com/rastogi30/IRCTC-Automation-Scripts/tree/main",
  },
  {
    name: "IRCTC PNR Status Workflow Automation (Academic)",
    description:
      "Academic automation script built to study browser automation and workflow handling by navigating the IRCTC PNR enquiry process using Selenium.",
    github: "https://github.com/rastogi30/IRCTC-Automation-Scripts/tree/main",
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
      className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-[radial-gradient(circle_at_top,_color-mix(in_srgb,var(--accent)_28%,transparent),_transparent_55%),linear-gradient(145deg,_color-mix(in_srgb,var(--card)_92%,transparent),_color-mix(in_srgb,var(--background)_100%,transparent))] px-5 py-20 sm:px-8 lg:px-12"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-40 opacity-80 [background:radial-gradient(140%_120%_at_12%_10%,color-mix(in_srgb,var(--accent-secondary)_24%,transparent),transparent_60%),radial-gradient(120%_130%_at_85%_15%,color-mix(in_srgb,var(--accent)_22%,transparent),transparent_65%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-30 opacity-70 [background:radial-gradient(120%_120%_at_10%_-10%,color-mix(in_srgb,var(--accent)_35%,transparent),transparent_45%),radial-gradient(90%_120%_at_90%_10%,color-mix(in_srgb,var(--accent-secondary)_30%,transparent),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-1/2 top-10 h-64 w-[120%] -translate-x-1/2 rounded-full bg-gradient-to-r from-[var(--accent)]/25 via-transparent to-[var(--accent-secondary)]/25 blur-3xl"
      />
      {/* Heading */}
      <div className="relative max-w-3xl space-y-4 rounded-3xl border border-[var(--border)]/60 bg-[var(--card)]/85 p-6 shadow-[var(--shadow-soft)] backdrop-blur sm:p-7">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-br from-[var(--accent)]/25 via-transparent to-[var(--accent-secondary)]/25 opacity-0 transition-opacity duration-500 hover:opacity-100"
        />
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.32em] text-[var(--text-muted)]">
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
      <div className="mt-12 grid gap-8 md:grid-cols-2 xl:gap-10">
        {featuredProjects.map((project, index) => (
          <motion.article
            key={project.name}
            {...fadeIn(index * 0.1)}
            layout
            whileHover={{ y: -12 }}
            className="group relative h-full overflow-hidden rounded-3xl border border-[var(--border)]/70 bg-[var(--card)]/85 shadow-[var(--shadow-soft)] transition-all duration-500 hover:border-transparent hover:shadow-[var(--shadow-elevated)]"
          >
            <div className="absolute inset-0 z-0 opacity-0 transition-all duration-500 group-hover:opacity-100">
              <div className="absolute inset-[-1px] rounded-[26px] bg-gradient-to-br from-[var(--accent)]/35 via-transparent to-[var(--accent-secondary)]/40 blur-sm" />
              <div className="absolute inset-0 rounded-[24px] bg-[var(--card)]/95 backdrop-blur-sm" />
            </div>
            <div className="relative z-10 flex h-full flex-col rounded-[22px] border border-transparent bg-[var(--card)]/92 p-7 transition-all duration-500 group-hover:border-[var(--accent)]/45 group-hover:bg-[var(--card)]/98 sm:p-8">
              <span className="pointer-events-none absolute inset-x-8 -top-px h-[3px] rounded-full bg-gradient-to-r from-[var(--accent)] via-[var(--accent-secondary)] to-[var(--accent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
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
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[var(--text-muted)] marker:text-[var(--accent)]/60">
                {project.learnings.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--border)]/70 bg-[var(--card)]/60 px-3 py-1 text-xs text-[var(--text-muted)] transition-colors duration-300 group-hover:border-[var(--accent)]/50 group-hover:text-[var(--accent)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-transparent bg-[var(--card)]/70 px-4 py-2 text-sm font-medium text-[var(--accent)] transition-all duration-500 hover:scale-[1.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] group-hover:border-[var(--accent)]/50"
                >
                  <span className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--accent)] via-[var(--accent-secondary)] to-[var(--accent)] opacity-0 transition-opacity duration-500 hover:opacity-100 group-hover:opacity-80" />
                  <span className="relative">Live</span>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[var(--border)]/70 px-4 py-2 text-sm font-medium text-[var(--text-muted)] transition-all duration-500 hover:scale-[1.04] hover:border-[var(--accent-secondary)] hover:text-[var(--accent-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-secondary)] group-hover:border-[var(--accent-secondary)]/45"
                >
                  <span className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--accent-secondary)]/10 via-transparent to-[var(--accent)]/10 opacity-0 transition-opacity duration-500 hover:opacity-70 group-hover:opacity-60" />
                  <span className="relative">GitHub</span>
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Mini Projects */}
      <motion.div {...fadeIn(0.4)} className="mt-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h3 className="text-lg font-semibold text-[var(--text-primary)]">
            Mini Projects
          </h3>
          <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {miniProjects.map((project) => (
            <div
              key={project.name}
              className="group relative h-full overflow-hidden rounded-2xl border border-[var(--border)]/70 bg-[var(--card)]/80 p-[1px] shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-[var(--shadow-elevated)]"
            >
              <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-[-1px] rounded-[22px] bg-gradient-to-br from-[var(--accent-secondary)]/35 via-transparent to-[var(--accent)]/30 blur-sm" />
                <div className="absolute inset-0 rounded-[20px] bg-[var(--card)]/95 backdrop-blur-sm" />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-between rounded-[18px] border border-transparent bg-[var(--card)]/90 p-4 transition-all duration-500 group-hover:border-[var(--accent-secondary)]/45 group-hover:bg-[var(--card)]/96 sm:p-5">
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  {project.name}
                </p>
                <p className="mt-1 text-xs text-[var(--text-muted)]">
                  {project.description}
                </p>
                <div className="mt-4 flex items-center gap-3 text-xs font-medium">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="relative inline-flex items-center gap-1 overflow-hidden rounded-full border border-transparent bg-[var(--card)]/70 px-3 py-1 text-[var(--accent)] transition-all duration-500 hover:scale-[1.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] group-hover:border-[var(--accent)]/40"
                  >
                    <span className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--accent)] via-[var(--accent-secondary)] to-[var(--accent)] opacity-0 transition-opacity duration-500 hover:opacity-100 group-hover:opacity-80" />
                    <span className="relative">Live</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="relative inline-flex items-center gap-1 overflow-hidden rounded-full border border-[var(--border)]/70 px-3 py-1 text-[var(--accent-secondary)] transition-all duration-500 hover:scale-[1.05] hover:border-[var(--accent-secondary)] hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-secondary)] group-hover:border-[var(--accent-secondary)]/45"
                  >
                    <span className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--accent-secondary)]/10 via-transparent to-[var(--accent)]/10 opacity-0 transition-opacity duration-500 hover:opacity-70 group-hover:opacity-60" />
                    <span className="relative">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Automation Scripts */}
      <motion.div {...fadeIn(0.5)} className="mt-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">
              Automation Scripts (Academic & Learning)
            </h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Scripts built to explore browser automation, image processing, and OCR
              techniques as part of hands-on learning.
            </p>
          </div>
          <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {automationScripts.map((script) => (
            <div
              key={script.name}
              className="group relative h-full overflow-hidden rounded-2xl border border-[var(--border)]/70 bg-[var(--card)]/80 p-[1px] shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-[var(--shadow-elevated)]"
            >
              <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-[-1px] rounded-[22px] bg-gradient-to-br from-[var(--accent)]/35 via-transparent to-[var(--accent-secondary)]/30 blur-sm" />
                <div className="absolute inset-0 rounded-[20px] bg-[var(--card)]/95 backdrop-blur-sm" />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-between rounded-[18px] border border-transparent bg-[var(--card)]/90 p-4 transition-all duration-500 group-hover:border-[var(--accent)]/40 group-hover:bg-[var(--card)]/96 sm:p-5">
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  {script.name}
                </p>
                <p className="mt-1 text-xs text-[var(--text-muted)]">
                  {script.description}
                </p>
                <a
                  href={script.github}
                  target="_blank"
                  rel="noreferrer"
                  className="relative mt-4 inline-flex w-max items-center gap-1 overflow-hidden rounded-full border border-transparent bg-[var(--card)]/70 px-3 py-1 text-xs font-medium text-[var(--accent)] transition-all duration-500 hover:scale-[1.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] group-hover:border-[var(--accent)]/40"
                >
                  <span className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--accent)] via-[var(--accent-secondary)] to-[var(--accent)] opacity-0 transition-opacity duration-500 hover:opacity-100 group-hover:opacity-80" />
                  <span className="relative">View GitHub Repository</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Projects;
