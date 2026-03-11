import { motion } from 'framer-motion'
import {
  Code2,
  Database,
  Server,
  Layout,
  Braces,
  Container,
  FolderTree,
} from 'lucide-react'

const technologies = [
  { name: 'TypeScript', icon: Braces, color: '#3178c6' },
  { name: 'JavaScript', icon: Code2, color: '#f7df1e' },
  { name: 'Python', icon: Code2, color: '#3776ab' },
  { name: 'React', icon: Layout, color: '#61dafb' },
  { name: 'Node.js', icon: Server, color: '#339933' },
  { name: 'Tailwind CSS', icon: Layout, color: '#06b6d4' },
  { name: 'PostgreSQL', icon: Database, color: '#4169e1' },
  { name: 'Kysely', icon: Database, color: '#00f0ff' },
  { name: 'Nx / Turborepo', icon: FolderTree, color: '#a855f7' },
  { name: 'DevOps', icon: Container, color: '#f472b6' },
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
}

export default function TechStack() {
  return (
    <section id="stack" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Core <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A strong advocate for query builders and raw control over heavy ORMs.
            Experienced across the full spectrum — from modern TypeScript stacks
            to CI/CD pipelines, containerization, and monorepo tooling.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={item}
              whileHover={{ y: -6, scale: 1.05 }}
              className="group glass rounded-xl p-5 flex flex-col items-center gap-3 cursor-default hover:border-neon-cyan/20 transition-colors duration-300"
            >
              <tech.icon
                size={28}
                style={{ color: tech.color }}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-sm text-slate-300 font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
