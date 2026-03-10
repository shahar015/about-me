import { motion } from 'framer-motion'
import { Map, ArrowLeftRight, Trophy, Radio } from 'lucide-react'

const projects = [
  {
    icon: Map,
    title: 'M.A.P.S',
    tagline: 'Full-Stack Teaching Project',
    description:
      'A full-stack educational project designed to teach a student real-world software engineering through hands-on development. M.A.P.S simulates strategic field asset and resource deployment optimization — covering database design, API architecture, real-time state management, and production deployment patterns.',
    tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Kysely'],
    accent: '#00f0ff',
  },
  {
    icon: ArrowLeftRight,
    title: 'Swappy',
    tagline: 'Apartment Exchange Platform — In Development',
    description:
      'A peer-to-peer apartment subletting exchange platform where travelers swap homes instead of paying for accommodations. Swappy matches users based on location preferences and availability, enabling seamless vacation trades — eliminating the cost of travel stays entirely.',
    tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Real-Time Matching'],
    accent: '#a855f7',
  },
  {
    icon: Trophy,
    title: 'Buzz',
    tagline: '2nd Place — National Hackathon',
    description:
      'A competitive hackathon project that earned 2nd place at a national-level competition. Built under intense time constraints, Buzz demonstrated the ability to rapidly architect, build, and ship a polished product — from initial concept to live demo in under 48 hours.',
    tech: ['React', 'Node.js', 'Real-Time Data', 'Rapid Prototyping'],
    accent: '#f472b6',
  },
  {
    icon: Radio,
    title: 'Alias Mobile',
    tagline: 'In Development — Real-Time Multiplayer',
    description:
      'A real-time, WebRTC-powered multiplayer mobile game with complex state synchronization via WebSockets. Alias Mobile pushes the boundaries of peer-to-peer communication, handling concurrent game state across multiple clients with sub-100ms latency targets.',
    tech: ['React Native', 'WebRTC', 'WebSockets', 'State Sync'],
    accent: '#34d399',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Mission-critical systems, hackathon winners, and bleeding-edge experiments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group glass rounded-2xl p-6 relative overflow-hidden cursor-default transition-colors duration-300 hover:border-opacity-30"
              style={{
                borderColor: `color-mix(in srgb, ${project.accent} 0%, transparent)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `color-mix(in srgb, ${project.accent} 30%, transparent)`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `color-mix(in srgb, ${project.accent} 0%, transparent)`
              }}
            >
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-3xl"
                style={{ background: project.accent }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: `color-mix(in srgb, ${project.accent} 15%, transparent)` }}
                  >
                    <project.icon size={20} style={{ color: project.accent }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    <p className="text-xs font-mono" style={{ color: project.accent }}>
                      {project.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{
                        background: `color-mix(in srgb, ${project.accent} 8%, transparent)`,
                        color: `color-mix(in srgb, ${project.accent} 80%, white)`,
                        border: `1px solid color-mix(in srgb, ${project.accent} 15%, transparent)`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
