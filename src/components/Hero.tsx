import { motion, type Variants } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1] as const

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease },
  },
}

const lineReveal: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.2, ease, delay: 0.6 },
  },
}

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center px-6 lg:px-8 overflow-hidden">
      {/* Atmospheric gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.1, 0.06] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, #00e5ff 0%, transparent 65%)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute -bottom-60 -right-40 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 65%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full pt-32 pb-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Status tag */}
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/15 bg-accent/5 font-mono text-[11px] text-accent tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-800 leading-[0.95] tracking-[-0.03em] mb-8"
          >
            <span className="block text-text-primary">Full-Stack</span>
            <span className="block text-text-primary">Software</span>
            <span className="block">
              <span className="text-gradient-accent">Engineer</span>
              <span className="text-text-tertiary font-400 text-[0.4em] align-middle ml-4 tracking-normal">&</span>
            </span>
            <span className="block text-text-secondary font-400 text-[0.45em] mt-2 tracking-[-0.01em]">
              Technical Instructor
            </span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            variants={lineReveal}
            className="origin-left w-32 h-px bg-gradient-to-r from-accent to-transparent mb-8"
          />

          {/* Bio */}
          <motion.p
            variants={fadeUp}
            className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl font-light mb-12"
          >
            A software engineer with a deep passion for{' '}
            <span className="text-accent font-medium">"no-magic" architectures</span>,
            end-to-end type safety, and building high-performance applications. I specialize
            in taking complex, mission-critical systems and making them{' '}
            <span className="text-text-primary font-medium">fast, secure, and maintainable</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-16">
            <a
              href="#projects"
              className="group relative px-6 py-3 rounded-lg bg-accent text-surface-0 font-semibold text-sm tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.25)]"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-surface-5 text-text-secondary font-medium text-sm hover:border-accent/30 hover:text-accent transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-text-tertiary tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-text-tertiary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
