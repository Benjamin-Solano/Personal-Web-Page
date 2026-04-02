import { motion } from 'framer-motion'
import { GraduationCap, Medal } from 'iconoir-react'
import { EASE, reveal } from '../lib/motion'

const EDUCATION = [
  {
    year: '2021',
    title: 'Bachillerato Internacional (IB)',
    org: 'Liceo de Costa Rica',
    type: 'degree',
    current: false,
  },
  {
    year: '2022 — Presente',
    title: 'Bachillerato en Ingeniería en Sistemas',
    org: 'Universidad Nacional de Costa Rica',
    type: 'degree',
    current: true,
  },
  {
    year: '2026',
    title: 'Scrum Fundamentals Certified',
    org: 'SCRUMstudy',
    type: 'cert',
    current: false,
  },
  {
    year: '2026',
    title: 'Claude Code Certified',
    org: 'Anthropic',
    type: 'cert',
    current: false,
  },
]

export default function Education() {
  return (
    <section id="education" className="section-wrapper">
      {/* Section identifier */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: EASE }}
        className="flex items-center gap-4 mb-12"
      >
        <span className="section-tag">
          <GraduationCap width={12} height={12} strokeWidth={2} />
          <span>02</span>
        </span>
        <div className="divider flex-1" />
        <span className="section-tag">Educación</span>
      </motion.div>

      {/* Big label */}
      <div className="overflow-hidden mb-12">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: EASE }}
          className="font-display text-[10vw] sm:text-[8vw] md:text-[6vw] leading-none tracking-tight select-none"
        >
          FORMACIÓN
        </motion.h2>
      </div>

      {/* Education list */}
      <div className="brutal-card">
        {EDUCATION.map(({ year, title, org, type, current }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-60px' }}
            transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
            className="group grid grid-cols-[5rem_1fr] md:grid-cols-[9rem_1fr] gap-4 md:gap-8
                       px-5 py-6
                       border-b-2 border-ink-900 dark:border-cream-100 last:border-b-0
                       hover:bg-cream-200/60 dark:hover:bg-ink-800/60 transition-colors duration-150"
          >
            {/* Icon column */}
            <div className="flex flex-col items-start pt-0.5 gap-2">
              <div className="brutal-card-sm p-1.5">
                {type === 'degree'
                  ? <GraduationCap width={16} height={16} strokeWidth={1.5} />
                  : <Medal width={16} height={16} strokeWidth={1.5} />
                }
              </div>
            </div>

            {/* Content column */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <span className="text-2xs tracking-widest2 uppercase opacity-40">{year}</span>
                {current && (
                  <span className="section-tag text-[10px] gap-1.5 py-0.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inset-0 rounded-full bg-current opacity-60" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-current" />
                    </span>
                    En curso
                  </span>
                )}
              </div>
              <h3 className="text-sm md:text-base font-mono font-medium tracking-tight mb-0.5
                             group-hover:underline underline-offset-4 decoration-2 transition-all duration-150">
                {title}
              </h3>
              <p className="text-2xs tracking-widest2 uppercase opacity-40">{org}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
