import { motion, useScroll, useTransform } from "framer-motion";
import {
  GraduationCap,
  School,
  Hammer,
  Bot,
  Rocket,
} from "lucide-react";

const phases = [
  {
    title: "School Education",
    icon: School,
    detail:
      "Completed secondary and senior secondary education with a strong focus on science and mathematics.",
    meta:
      "Class 10 – Gandhi Nagar Public School, Moradabad (95.4%) | Class 12 – Dayawati Modi Academy, Rampur (90.4%)",
    highlights: ["Strong performance in Maths & Science"],
  },
  {
    title: "Undergraduate Studies",
    icon: GraduationCap,
    detail:
      "B.Tech in Computer Science and Engineering with core focus on Data Structures, Algorithms, DBMS, Operating Systems, and Computer Networks.",
    meta:
      "Madan Mohan Malaviya University of Technology, Gorakhpur | CGPA: 8.1",
    highlights: ["Consistent academics", "Systems & web projects"],
  },
  {
    title: "Project Development",
    icon: Hammer,
    detail:
      "Built full-stack applications, mini tools, and automation scripts to apply theoretical knowledge in production-like environments.",
    highlights: ["Full-stack apps", "Automation scripts", "Mini utilities"],
  },
  {
    title: "Robotics Club Journey",
    icon: Bot,
    detail:
      "Progressed from Executive Member (2nd year) to Editorial & Web Developer Lead (3rd year), and currently serving as Vice President.",
    highlights: ["Vice President", "Web & Editorial Lead"],
  },
  {
    title: "Current Focus",
    icon: Rocket,
    detail:
      "Sharpening problem-solving skills through regular DSA practice and building production-ready projects; open to internship and full-time roles.",
    highlights: ["Daily DSA", "Production-ready builds", "Open to roles"],
    current: true,
  },
];

export default function Journey() {
  const { scrollYProgress } = useScroll();
  const lineHeight = useTransform(scrollYProgress, [0.15, 0.85], ["0%", "100%"]);

  return (
    <section id="journey" className="mx-auto max-w-6xl px-6 py-20">
      {/* Header */}
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold text-[var(--text-primary)]">
          Journey
        </h2>
        <p className="mt-3 text-sm text-[var(--text-muted)]">
          Academic growth, hands-on building, and leadership evolution.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative mt-14 border-l-2 border-[var(--border)]/60 pl-8">
        {/* Scroll progress line */}
        <motion.span
          style={{ height: lineHeight }}
          className="absolute left-[-2px] top-0 w-[2px]
                     bg-gradient-to-b from-[var(--accent)]
                     via-[var(--accent-secondary)] to-[var(--accent)]"
        />

        <div className="space-y-10">
          {phases.map((phase, index) => {
            const Icon = phase.icon;

            return (
              <motion.article
                key={phase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl border border-[var(--border)]/70
                           bg-[var(--card)]/85 p-6 backdrop-blur
                           transition-all duration-300
                           hover:border-[var(--accent)]/45
                           hover:shadow-[0_12px_30px_-12px_rgba(0,0,0,0.25)]"
              >
                {/* Timeline dot */}
                <span
                  className="absolute -left-[42px] top-8 h-4 w-4 rounded-full
                             bg-[var(--accent)]
                             shadow-[0_0_0_6px_rgba(99,102,241,0.15)]
                             transition-transform group-hover:scale-110"
                />

                {/* Title row */}
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-[var(--accent)]" />
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    {phase.title}
                  </h3>

                  {phase.current && (
                    <span className="ml-2 inline-flex items-center rounded-full
                                     bg-[var(--accent)]/15 px-3 py-1 text-[10px]
                                     font-semibold uppercase tracking-wide
                                     text-[var(--accent)] animate-pulse">
                      Now
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="mt-3 text-sm text-[var(--text-muted)]">
                  {phase.detail}
                </p>

                {/* Meta */}
                {phase.meta && (
                  <p className="mt-2 text-xs text-[var(--text-muted)]/80">
                    {phase.meta}
                  </p>
                )}

                {/* Highlights */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {phase.highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[var(--accent)]/10
                                 px-3 py-1 text-[11px] font-medium
                                 text-[var(--accent)]
                                 transition-all hover:-translate-y-0.5
                                 hover:bg-[var(--accent)]/15"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
