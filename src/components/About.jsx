import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { portfolio } from '../data/portfolioData'

const { description, quote, languages, aptitudes } = portfolio

const reveal = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  whileInView:{ opacity: 1, y: 0  },
  viewport:   { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

export default function About() {
  const ref  = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-wrapper">
      {/* Section identifier */}
      <motion.div {...reveal()} className="flex items-center gap-4 mb-12">
        <span className="section-label">01</span>
        <div className="divider flex-1" />
        <span className="section-label">Sobre mí</span>
      </motion.div>

      {/* Large quote */}
      <motion.blockquote
        {...reveal(0.05)}
        className="mb-12 md:mb-16"
      >
        <p className="font-display text-[6.5vw] sm:text-[5vw] md:text-[3.8vw] leading-tight tracking-tight
                      text-ink-800 dark:text-cream-100 mb-3 max-w-5xl">
          "{quote.text}"
        </p>
        <footer className="text-2xs tracking-widest2 uppercase opacity-40">
          — {quote.author}
        </footer>
      </motion.blockquote>

      <div className="divider mb-12" />

      {/* Two-column: description + languages */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">

        {/* Description */}
        <motion.div {...reveal(0.1)} className="flex flex-col gap-5">
          {description.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed opacity-70">
              {p}
            </p>
          ))}
        </motion.div>

        {/* Languages */}
        <motion.div {...reveal(0.15)}>
          <p className="section-label mb-6">Idiomas</p>
          <div ref={ref} className="flex flex-col gap-6">
            {languages.map(({ name, level, pct }, i) => (
              <div key={name}>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-xs tracking-widest uppercase">{name}</span>
                  <span className="text-2xs opacity-40 tracking-widest">{level}</span>
                </div>
                {/* Segmented bar */}
                <div className="flex gap-[3px] h-[10px]">
                  {Array.from({ length: 20 }).map((_, j) => {
                    const filled = Math.round((pct / 100) * 20)
                    return (
                      <motion.div
                        key={j}
                        className={`flex-1 ${
                          j < filled
                            ? 'bg-ink-800 dark:bg-cream-100'
                            : 'bg-ink-200 dark:bg-ink-600'
                        }`}
                        initial={{ scaleY: 0, opacity: 0 }}
                        animate={inView
                          ? { scaleY: 1, opacity: 1 }
                          : { scaleY: 0, opacity: 0 }
                        }
                        transition={{
                          delay: i * 0.1 + j * 0.025,
                          duration: 0.25,
                          ease: 'easeOut',
                        }}
                        style={{ transformOrigin: 'bottom' }}
                      />
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Aptitudes */}
      <motion.div {...reveal(0.2)}>
        <p className="section-label mb-5">Aptitudes</p>
        <div className="flex flex-wrap gap-2">
          {aptitudes.map((apt, i) => (
            <motion.span
              key={apt}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="tag-pill"
            >
              {apt}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
