import { motion } from 'framer-motion'
import { portfolio } from '../data/portfolioData'

const { experience } = portfolio

const TYPE_STYLES = {
  work:        { label: 'Trabajo',    cls: 'text-gold-600   dark:text-gold-400'  },
  achievement: { label: 'Logro',      cls: 'text-ink-500    dark:text-cream-400' },
  project:     { label: 'Proyecto',   cls: 'text-ink-400    dark:text-cream-500' },
}

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper">
      {/* Section identifier */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-12"
      >
        <span className="section-label">03</span>
        <div className="divider flex-1" />
        <span className="section-label">Experiencia</span>
      </motion.div>

      {/* Big label */}
      <div className="overflow-hidden mb-12">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-[10vw] sm:text-[8vw] md:text-[6vw] leading-none tracking-tight opacity-10 select-none"
        >
          TRAYECTORIA
        </motion.h2>
      </div>

      {/* Experience list */}
      <div className="relative">
        {/* Vertical connecting line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="absolute left-[2.5rem] md:left-[4.5rem] top-0 bottom-0 w-px bg-ink-900/10 dark:bg-cream-50/10 origin-top hidden md:block"
        />

        <div className="flex flex-col gap-0">
          {experience.map(({ date, title, org, desc, type }, i) => {
            const typeStyle = TYPE_STYLES[type] || TYPE_STYLES.work
            const num = String(i + 1).padStart(2, '0')

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                className="group grid grid-cols-[5rem_1fr] md:grid-cols-[9rem_1fr] gap-4 md:gap-8
                           py-8 border-b border-ink-900/8 dark:border-cream-50/8 last:border-b-0"
              >
                {/* Number column */}
                <div className="flex flex-col items-start pt-1">
                  <span className="font-display text-3xl md:text-5xl leading-none tracking-tight
                                   opacity-15 group-hover:opacity-40 transition-opacity duration-300">
                    {num}
                  </span>
                </div>

                {/* Content column */}
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-2xs tracking-widest uppercase opacity-40">{date}</span>
                    <span className={`text-2xs tracking-widest uppercase ${typeStyle.cls}`}>
                      {typeStyle.label}
                    </span>
                  </div>

                  <h3 className="text-sm md:text-base font-mono font-medium tracking-tight mb-1
                                 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors duration-200">
                    {title}
                  </h3>
                  <p className="text-2xs tracking-widest2 uppercase opacity-40 mb-3">{org}</p>
                  <p className="text-xs leading-relaxed opacity-60 max-w-2xl">{desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
