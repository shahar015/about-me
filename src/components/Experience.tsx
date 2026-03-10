import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Users, Wrench } from 'lucide-react'

const experiences = [
  {
    icon: Briefcase,
    title: 'Technical Lead & Instructor',
    org: 'Government Technology Program',
    period: 'Current',
    description:
      'Led and managed an intensive, elite programming training course for a government agency. Architected full-stack curriculums covering modern TypeScript, React, Node.js, and PostgreSQL — designed to take developers from fundamentals to production-ready in record time.',
    highlights: ['Curriculum Architecture', 'Full-Stack Mentorship', 'Internal Tooling'],
  },
  {
    icon: Users,
    title: 'Developer Mentorship',
    org: 'Government Technology Program',
    period: 'Current',
    description:
      'Mentored incoming developers through complex codebases and production deployments. Established code review standards, pair programming practices, and a culture of writing clean, testable code from day one.',
    highlights: ['Code Reviews', 'Pair Programming', 'Best Practices'],
  },
  {
    icon: Wrench,
    title: 'Internal Tools Development',
    org: 'Government Technology Program',
    period: 'Current',
    description:
      'Oversaw the development of internal tools built to streamline operations across the agency. Focused on end-to-end type safety, performance, and maintainability — ensuring every system was built to last.',
    highlights: ['Type-Safe APIs', 'Performance', 'Maintainability'],
  },
  {
    icon: GraduationCap,
    title: 'Legacy Systems Modernization',
    org: 'Enterprise',
    period: 'Ongoing',
    description:
      'Maintained and modernized versatile legacy systems including COBOL and AS/400 environments. Bridged the gap between decades-old infrastructure and modern development practices, ensuring continuity while enabling innovation.',
    highlights: ['COBOL', 'AS/400', 'System Migration'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Building mission-critical systems and cultivating the next generation of engineers.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan/40 via-neon-purple/40 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative md:pl-20"
              >
                <div className="hidden md:flex absolute left-4 top-6 w-8 h-8 rounded-full bg-dark-800 border border-neon-cyan/30 items-center justify-center z-10">
                  <exp.icon size={14} className="text-neon-cyan" />
                </div>

                <div className="glass rounded-2xl p-6 hover:border-neon-cyan/20 transition-colors duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <div className="md:hidden flex w-8 h-8 rounded-full bg-dark-800 border border-neon-cyan/30 items-center justify-center">
                      <exp.icon size={14} className="text-neon-cyan" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                      <p className="text-sm text-slate-400">
                        {exp.org} <span className="text-neon-cyan/60">· {exp.period}</span>
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-neon-cyan/5 text-neon-cyan/80 border border-neon-cyan/10 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
