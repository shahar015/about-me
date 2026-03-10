import { motion } from 'framer-motion'

const experiences = [
  {
    num: '01',
    title: 'Technical Lead & Instructor',
    org: 'Government Technology Program',
    description:
      'Led and managed an intensive, elite programming training course for a government agency. Architected full-stack curriculums covering modern TypeScript, React, Node.js, and PostgreSQL — designed to take developers from fundamentals to production-ready in record time.',
    tags: ['Curriculum Architecture', 'Full-Stack Training', 'Internal Tooling'],
  },
  {
    num: '02',
    title: 'Developer Mentorship',
    org: 'Government Technology Program',
    description:
      'Mentored incoming developers through complex codebases and production deployments. Established code review standards, pair programming practices, and a culture of writing clean, testable code from day one.',
    tags: ['Code Reviews', 'Pair Programming', 'Best Practices'],
  },
  {
    num: '03',
    title: 'Internal Tools Development',
    org: 'Government Technology Program',
    description:
      'Oversaw the development of internal tools built to streamline operations across the agency. Focused on end-to-end type safety, performance, and maintainability — ensuring every system was built to last.',
    tags: ['Type-Safe APIs', 'Performance', 'Maintainability'],
  },
  {
    num: '04',
    title: 'Legacy Systems Modernization',
    org: 'Enterprise',
    description:
      'Maintained and modernized versatile legacy systems including COBOL and AS/400 environments. Bridged the gap between decades-old infrastructure and modern development practices, ensuring continuity while enabling innovation.',
    tags: ['COBOL', 'AS/400', 'System Migration'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-6 mb-20"
        >
          <h2 className="font-display text-2xl md:text-3xl font-700 tracking-tight text-text-primary whitespace-nowrap">
            Experience
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-surface-5 to-transparent" />
          <span className="font-mono text-[11px] text-text-tertiary tracking-widest uppercase hidden sm:block">
            Career
          </span>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group border-t border-surface-4 hover:border-accent/15 transition-colors duration-500"
            >
              <div className="py-10 md:py-12 grid md:grid-cols-[80px_1fr_1.5fr] gap-6 md:gap-10 items-start">
                {/* Number */}
                <span className="font-mono text-[11px] text-text-tertiary tracking-widest md:pt-1">
                  {exp.num}
                </span>

                {/* Title block */}
                <div>
                  <h3 className="font-display text-xl font-700 text-text-primary mb-1 group-hover:text-accent transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="font-mono text-[12px] text-text-tertiary tracking-wide">
                    {exp.org}
                  </p>
                </div>

                {/* Description block */}
                <div>
                  <p className="text-text-secondary text-[15px] leading-relaxed font-light mb-5">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-surface-3 text-text-tertiary font-mono tracking-wide border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-surface-4" />
        </div>
      </div>
    </section>
  )
}
