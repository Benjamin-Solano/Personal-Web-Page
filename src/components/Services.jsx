import { motion } from 'framer-motion'
import { Book, Group, HandCash } from 'iconoir-react'
import { useT } from '../context/LanguageContext'
import { EASE, reveal } from '../lib/motion'

const ICON_MAP = { Book, Group, HandCash }

export default function Services() {
  const t = useT()
  const { services } = t

  return (
    <section id="services" className="section-wrapper">
      {/* Section identifier */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: EASE }}
        className="flex items-center gap-4 mb-12"
      >
        <span className="section-tag">
          <HandCash width={12} height={12} strokeWidth={2} />
          <span>06</span>
        </span>
        <div className="divider flex-1" />
        <span className="section-tag">{services.sectionTag}</span>
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
          {services.heading}
        </motion.h2>
      </div>

      {/* Service cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.items.map(({ icon, title, description, tags }, i) => {
          const Icon = ICON_MAP[icon]
          return (
            <motion.div
              key={title}
              {...reveal(i * 0.1)}
              className="brutal-card p-6 flex flex-col gap-5 bg-cream-100 dark:bg-ink-900"
            >
              <div>
                <div className="brutal-card-sm inline-flex p-2.5 mb-4">
                  <Icon width={18} height={18} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-3xl leading-none tracking-tight mb-2">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed opacity-70">
                  {description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t-2 border-ink-900 dark:border-cream-100">
                {tags.map(tag => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
