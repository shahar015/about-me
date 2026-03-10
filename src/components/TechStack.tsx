import { motion, type Variants } from 'framer-motion'

const technologies = [
  { name: 'TypeScript', abbr: 'TS', color: '#3178c6' },
  { name: 'JavaScript', abbr: 'JS', color: '#f7df1e' },
  { name: 'Python', abbr: 'PY', color: '#3776ab' },
  { name: 'React', abbr: 'RX', color: '#61dafb' },
  { name: 'Node.js', abbr: 'ND', color: '#339933' },
  { name: 'Tailwind', abbr: 'TW', color: '#06b6d4' },
  { name: 'PostgreSQL', abbr: 'PG', color: '#4169e1' },
  { name: 'Kysely', abbr: 'KY', color: '#00e5ff' },
  { name: 'COBOL', abbr: 'CB', color: '#8b5cf6' },
  { name: 'AS/400', abbr: 'AS', color: '#ec4899' },
]

const ease = [0.16, 1, 0.3, 1] as const

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease },
  },
}

export default function TechStack() {
  return (
    <section id="stack" className="relative py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-6 mb-16"
        >
          <h2 className="font-display text-2xl md:text-3xl font-700 tracking-tight text-text-primary whitespace-nowrap">
            Core Stack
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-surface-5 to-transparent" />
          <span className="font-mono text-[11px] text-text-tertiary tracking-widest uppercase hidden sm:block">
            10 technologies
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-text-secondary text-base leading-relaxed max-w-2xl mb-14 font-light"
        >
          A strong advocate for query builders and raw control over heavy ORMs like
          Prisma and Drizzle. Experienced across the full spectrum — from modern TypeScript
          stacks to maintaining and modernizing legacy systems.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={item}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group card-surface rounded-xl p-5 flex flex-col items-center gap-3 cursor-default transition-all duration-300"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center font-mono text-xs font-600 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `color-mix(in srgb, ${tech.color} 12%, transparent)`,
                  color: tech.color,
                  border: `1px solid color-mix(in srgb, ${tech.color} 15%, transparent)`,
                }}
              >
                {tech.abbr}
              </div>
              <span className="text-[13px] text-text-secondary font-medium tracking-wide">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
