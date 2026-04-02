import { motion } from 'framer-motion'
import { Journal, Medal } from 'iconoir-react'
import { portfolio } from '../data/portfolioData'
import { EASE } from '../lib/motion'

const { experience } = portfolio

const TYPE_STYLES = {
  work:        { label: 'Trabajo',   cls: 'type-work'        },
  achievement: { label: 'Logro',     cls: 'type-achievement' },
  project:     { label: 'Proyecto',  cls: 'type-project'     },
}

function EntryList({ items, startIndex }) {
  return (
    <div className="brutal-card">
      {items.map(({ date, title, org, desc, type }, i) => {
        const typeStyle = TYPE_STYLES[type] || TYPE_STYLES.work
        const num = String(startIndex + i + 1).padStart(2, '0')

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-60px' }}
            transition={{ duration: 0.65, ease: EASE, delay: i * 0.08 }}
            className="group grid grid-cols-[5rem_1fr] md:grid-cols-[9rem_1fr] gap-4 md:gap-8
                       px-5 py-7
                       border-b-2 border-ink-900 dark:border-cream-100 last:border-b-0
                       hover:bg-cream-200/60 dark:hover:bg-ink-800/60 transition-colors duration-150"
          >
            {/* Number */}
            <div className="flex flex-col items-start pt-1">
              <span className="font-display text-3xl md:text-5xl leading-none tracking-tight
                               opacity-15 group-hover:opacity-50 transition-opacity duration-200">
                {num}
              </span>
            </div>

            {/* Content */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-2xs tracking-widest2 uppercase opacity-40">{date}</span>
                <span className={`text-2xs tracking-widest2 uppercase ${typeStyle.cls}`}>
                  {typeStyle.label}
                </span>
              </div>
              <h3 className="text-sm md:text-base font-mono font-medium tracking-tight mb-1
                             group-hover:underline underline-offset-4 decoration-2 transition-all duration-150">
                {title}
              </h3>
              <p className="text-2xs tracking-widest2 uppercase opacity-40 mb-3">{org}</p>
              <p className="text-xs leading-relaxed opacity-60 max-w-2xl">{desc}</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default function Experience() {
  const mainEntries = experience.filter(e => e.type === 'work' || e.type === 'project')
  const achievements = experience.filter(e => e.type === 'achievement')

  return (
    <section id="experience" className="section-wrapper">
      {/* Section identifier */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: EASE }}
        className="flex items-center gap-4 mb-12"
      >
        <span className="section-tag">
          <Journal width={12} height={12} strokeWidth={2} />
          <span>04</span>
        </span>
        <div className="divider flex-1" />
        <span className="section-tag">Experiencia</span>
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
          TRAYECTORIA
        </motion.h2>
      </div>

      {/* Trabajos & Proyectos */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, ease: EASE }}
        className="flex items-center gap-3 mb-4"
      >
        <Journal width={12} height={12} strokeWidth={2} className="opacity-50" />
        <p className="text-2xs tracking-widest2 uppercase opacity-50 border-l-2 border-ink-900 dark:border-cream-100 pl-3">Trabajos &amp; Proyectos</p>
        <div className="divider flex-1" />
      </motion.div>

      <EntryList items={mainEntries} startIndex={0} />

      {/* Logros */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, ease: EASE }}
        className="flex items-center gap-3 mt-12 mb-4"
      >
        <Medal width={12} height={12} strokeWidth={2} className="opacity-50" />
        <p className="text-2xs tracking-widest2 uppercase opacity-50 border-l-2 border-ink-900 dark:border-cream-100 pl-3">Logros &amp; Reconocimientos</p>
        <div className="divider flex-1" />
      </motion.div>

      <EntryList items={achievements} startIndex={mainEntries.length} />
    </section>
  )
}
