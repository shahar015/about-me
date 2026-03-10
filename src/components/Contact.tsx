import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/15 bg-accent/5 font-mono text-[11px] text-accent tracking-[0.2em] uppercase mb-8 block w-fit">
            Contact
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-800 leading-[1.05] tracking-tight text-text-primary mb-6">
            Ready to build
            <br />
            something{' '}
            <span className="text-gradient-accent">extraordinary</span>?
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed font-light max-w-lg mb-10">
            Whether you have a project in mind, want to discuss an opportunity, or
            just want to talk architecture — I'd love to hear from you.
          </p>

          <a
            href="mailto:hello@example.com"
            className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-lg bg-accent text-surface-0 font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.25)]"
          >
            <Mail size={16} />
            Email Me
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-28 pt-8 border-t border-surface-4 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="font-mono text-[11px] text-text-tertiary tracking-wide">
            Built with React, Tailwind CSS & Framer Motion
          </p>
          <p className="font-mono text-[11px] text-text-tertiary tracking-wide">
            &copy; {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
