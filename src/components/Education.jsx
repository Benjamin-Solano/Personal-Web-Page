import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Medal, NavArrowUp, NavArrowDown } from 'iconoir-react'
import { useT } from '../context/LanguageContext'
import { EASE } from '../lib/motion'

const VISIBLE = 4

function ScrollSection({ items, title, icon: Icon, inProgress, delay = 0 }) {
  const [offset, setOffset] = useState(0)
  const [dir, setDir] = useState(1)

  const canUp = offset > 0
  const canDown = offset + VISIBLE < items.length
  const visible = items.slice(offset, offset + VISIBLE)

  function go(delta) {
    setDir(delta)
    setOffset(o => Math.max(0, Math.min(o + delta, items.length - VISIBLE)))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, ease: EASE, delay }}
      className="flex flex-col gap-3 min-w-0"
    >
      {/* Section header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="brutal-card-sm p-1.5">
            <Icon width={14} height={14} strokeWidth={1.5} />
          </div>
          <span className="text-2xs font-mono tracking-widest2 uppercase opacity-60">{title}</span>
        </div>

        {/* Navigation controls */}
        <div className="flex items-center gap-1">
          <span className="text-2xs font-mono opacity-30 mr-1">
            {offset + 1}–{Math.min(offset + VISIBLE, items.length)}/{items.length}
          </span>
          <button
            onClick={() => go(-1)}
            disabled={!canUp}
            className="brutal-card-sm p-1 disabled:opacity-20 disabled:cursor-not-allowed
                       enabled:hover:bg-cream-200 dark:enabled:hover:bg-ink-800
                       transition-colors duration-100 cursor-pointer"
            aria-label="Scroll up"
          >
            <NavArrowUp width={12} height={12} strokeWidth={2} />
          </button>
          <button
            onClick={() => go(1)}
            disabled={!canDown}
            className="brutal-card-sm p-1 disabled:opacity-20 disabled:cursor-not-allowed
                       enabled:hover:bg-cream-200 dark:enabled:hover:bg-ink-800
                       transition-colors duration-100 cursor-pointer"
            aria-label="Scroll down"
          >
            <NavArrowDown width={12} height={12} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Card list */}
      <div className="brutal-card overflow-hidden">
        <AnimatePresence initial={false} mode="popLayout">
          {visible.map(({ year, title: itemTitle, org, current }, i) => (
            <motion.div
              key={`${itemTitle}-${offset + i}`}
              initial={{ opacity: 0, y: dir > 0 ? 16 : -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: dir > 0 ? -16 : 16 }}
              transition={{ duration: 0.22, ease: EASE, delay: i * 0.04 }}
              className="group grid grid-cols-[1fr] gap-1
                         px-4 py-4
                         border-b-2 border-ink-900 dark:border-cream-100 last:border-b-0
                         hover:bg-cream-200/60 dark:hover:bg-ink-800/60 transition-colors duration-150"
            >
              <div className="flex flex-wrap items-center gap-2 mb-0.5">
                <span className="text-2xs tracking-widest2 uppercase opacity-40">{year}</span>
                {current && (
                  <span className="section-tag text-[10px] gap-1.5 py-0.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inset-0 rounded-full bg-current opacity-60" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-current" />
                    </span>
                    {inProgress}
                  </span>
                )}
              </div>
              <h3 className="text-xs md:text-sm font-mono font-medium tracking-tight leading-snug
                             group-hover:underline underline-offset-4 decoration-2 transition-all duration-150">
                {itemTitle}
              </h3>
              <p className="text-2xs tracking-widest2 uppercase opacity-40">{org}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Progress dots */}
      {items.length > VISIBLE && (
        <div className="flex gap-1 justify-center">
          {Array.from({ length: items.length - VISIBLE + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setDir(i > offset ? 1 : -1); setOffset(i) }}
              className={`h-1 rounded-full transition-all duration-200 cursor-pointer
                ${i === offset
                  ? 'w-4 bg-ink-900 dark:bg-cream-100'
                  : 'w-1 bg-ink-900/20 dark:bg-cream-100/20 hover:bg-ink-900/40 dark:hover:bg-cream-100/40'
                }`}
              aria-label={`Go to position ${i + 1}`}
            />
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default function Education() {
  const t = useT()
  const { education } = t

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
        <span className="section-tag">{education.sectionTag}</span>
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
          {education.heading}
        </motion.h2>
      </div>

      {/* Two parallel columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <ScrollSection
          items={education.degrees}
          title={education.degreesTitle}
          icon={GraduationCap}
          inProgress={education.inProgress}
          delay={0}
        />
        <ScrollSection
          items={education.certs}
          title={education.certsTitle}
          icon={Medal}
          inProgress={education.inProgress}
          delay={0.1}
        />
      </div>
    </section>
  )
}
