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
    accent: '#00e5ff',
    featured: true,
  },
  {
    icon: ArrowLeftRight,
    title: 'Swappy',
    tagline: 'Apartment Exchange Platform — In Development',
    description:
      'A peer-to-peer apartment subletting exchange platform where travelers swap homes instead of paying for accommodations. Swappy matches users based on location preferences and availability, enabling seamless vacation trades — eliminating the cost of travel stays entirely.',
    tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Real-Time Matching'],
    accent: '#8b5cf6',
    featured: true,
  },
  {
    icon: Trophy,
    title: 'Buzz',
    tagline: '2nd Place — National Hackathon',
    description:
      'A competitive hackathon project that earned 2nd place at a national-level competition. Built under intense time constraints, Buzz demonstrated the ability to rapidly architect, build, and ship a polished product — from initial concept to live demo in under 48 hours.',
    tech: ['React', 'Node.js', 'Real-Time Data', 'Rapid Prototyping'],
    accent: '#f59e0b',
    featured: false,
  },
  {
    icon: Radio,
    title: 'Alias Mobile',
    tagline: 'In Development — Real-Time Multiplayer',
    description:
      'A real-time, WebRTC-powered multiplayer mobile game with complex state synchronization via WebSockets. Alias Mobile pushes the boundaries of peer-to-peer communication, handling concurrent game state across multiple clients with sub-100ms latency targets.',
    tech: ['React Native', 'WebRTC', 'WebSockets', 'State Sync'],
    accent: '#10b981',
    featured: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-6 mb-20"
        >
          <h2 className="font-display text-2xl md:text-3xl font-700 tracking-tight text-text-primary whitespace-nowrap">
            Featured Work
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-surface-5 to-transparent" />
          <span className="font-mono text-[11px] text-text-tertiary tracking-widest uppercase hidden sm:block">
            4 Projects
          </span>
        </motion.div>

        {/* Featured projects — large cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {projects.filter(p => p.featured).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative card-surface rounded-2xl p-7 md:p-8 overflow-hidden cursor-default"
            >
              {/* Corner glow on hover */}
              <div
                className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"
                style={{ background: `radial-gradient(circle, ${project.accent}12, transparent)` }}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="mb-6">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `color-mix(in srgb, ${project.accent} 10%, transparent)`,
                      border: `1px solid color-mix(in srgb, ${project.accent} 15%, transparent)`,
                    }}
                  >
                    <project.icon size={20} style={{ color: project.accent }} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-700 text-text-primary mb-1 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p
                  className="font-mono text-[11px] tracking-widest uppercase mb-5"
                  style={{ color: project.accent }}
                >
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-text-secondary text-[14px] leading-relaxed font-light mb-6">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-surface-3 border border-border text-text-tertiary tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary projects — compact row */}
        <div className="grid md:grid-cols-2 gap-4">
          {projects.filter(p => !p.featured).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group card-surface rounded-xl p-6 overflow-hidden cursor-default"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: `color-mix(in srgb, ${project.accent} 10%, transparent)`,
                    border: `1px solid color-mix(in srgb, ${project.accent} 15%, transparent)`,
                  }}
                >
                  <project.icon size={18} style={{ color: project.accent }} strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-700 text-text-primary group-hover:text-accent transition-colors duration-300 mb-1">
                    {project.title}
                  </h3>
                  <p
                    className="font-mono text-[10px] tracking-widest uppercase mb-3"
                    style={{ color: project.accent }}
                  >
                    {project.tagline}
                  </p>
                  <p className="text-text-secondary text-[13px] leading-relaxed font-light mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-3 border border-border text-text-tertiary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
