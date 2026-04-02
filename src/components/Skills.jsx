import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code } from 'iconoir-react'
import { portfolio } from '../data/portfolioData'
import { EASE } from '../lib/motion'

const { skills } = portfolio

const SEGMENTS = 16

function SkillBar({ pct, inView, rowDelay = 0 }) {
  const filled = Math.round((pct / 100) * SEGMENTS)
  return (
    <div className="flex gap-[2px] h-[8px] mt-[6px]">
      {Array.from({ length: SEGMENTS }).map((_, i) => (
        <motion.div
          key={i}
          className={`flex-1 ${i < filled ? 'bar-filled' : 'bar-empty'}`}
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ delay: rowDelay + i * 0.018, duration: 0.22, ease: 'easeOut' }}
          style={{ transformOrigin: 'bottom' }}
        />
      ))}
    </div>
  )
}

function SkillGroup({ category, items, delay, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: EASE, delay }}
      className="brutal-card p-5 bg-cream-100 dark:bg-ink-900"
    >
      <p className="col-label">{category}</p>
      <div className="flex flex-col gap-5">
        {items.map(({ name, pct }, i) => (
          <div key={name}>
            <div className="flex justify-between items-baseline">
              <span className="text-xs tracking-widest2 uppercase">{name}</span>
              <span className="text-2xs opacity-40">{pct}%</span>
            </div>
            <SkillBar pct={pct} inView={inView} rowDelay={delay + i * 0.07} />
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="section-wrapper" ref={ref}>
      {/* Section identifier */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
        className="flex items-center gap-4 mb-12"
      >
        <span className="section-tag">
          <Code width={12} height={12} strokeWidth={2} />
          <span>02</span>
        </span>
        <div className="divider flex-1" />
        <span className="section-tag">Skills</span>
      </motion.div>

      {/* Section big label */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        className="overflow-hidden mb-12"
      >
        <h2 className="font-display text-[10vw] sm:text-[8vw] md:text-[6vw] leading-none tracking-tight select-none">
          CONOCIMIENTO
        </h2>
      </motion.div>

      {/* Skills grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((group, i) => (
          <SkillGroup
            key={group.category}
            {...group}
            delay={i * 0.08}
            inView={inView}
          />
        ))}
      </div>

      {/* Note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6, ease: EASE }}
        className="mt-6 text-2xs opacity-30 tracking-widest2"
      >
        * Los porcentajes son auto-estimados basados en experiencia práctica.
      </motion.p>
    </section>
  )
}
