import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-neon-purple/20 bg-neon-purple/5 text-neon-purple text-xs font-mono tracking-widest uppercase">
            <Mail size={14} />
            <span>Let's Connect</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Something <span className="text-gradient">Extraordinary</span>?
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Whether you have a project in mind, want to discuss an opportunity, or just want
            to talk architecture — I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center mb-12"
        >
          <a
            href="mailto:shahar0151@gmail.com"
            className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan font-medium text-sm hover:bg-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300 hover:glow-cyan"
          >
            <Mail size={16} />
            Email Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 pt-8 border-t border-dark-700"
        >
          <p className="text-xs text-slate-600 font-mono">
            Designed & built with React, Tailwind CSS, and Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
