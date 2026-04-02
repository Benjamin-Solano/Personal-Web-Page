import { motion } from 'framer-motion'
import { portfolio } from '../data/portfolioData'
import { EASE, wordVariants, fadeUp } from '../lib/motion'
import ProfilePic from '../assets/ProfilePic.jpeg'

const { personal } = portfolio

export default function Hero() {
  return (
    <section id="hero" className="section-px min-h-screen flex flex-col pt-14 pb-10">

      {/* Top metadata bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
        className="flex justify-between items-center pt-10 pb-4"
      >
        <span className="section-label">Portfolio</span>
        <span className="section-label">{new Date().getFullYear()}</span>
      </motion.div>

      <div className="divider mb-0" />

      {/* Name + Photo */}
      <div className="flex-1 flex items-center gap-10 py-8 md:py-12">

        {/* Name */}
        <motion.div
          className="flex-1"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } } }}
        >
          {personal.nameWords.map((word, i) => (
            <div key={i} className="overflow-hidden leading-none">
              <motion.h1
                variants={wordVariants}
                className="font-display leading-none tracking-tight select-none
                           text-[17vw] sm:text-[15vw] md:text-[13vw] lg:text-[9vw]"
              >
                {word}
              </motion.h1>
            </div>
          ))}
        </motion.div>

        {/* Profile photo panel — lg+ only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.9 }}
          className="hidden lg:flex flex-col flex-shrink-0 w-64 xl:w-72 self-center"
        >
          <div className="brutal-card overflow-hidden">
            <img
              src={ProfilePic}
              alt={personal.fullName}
              className="w-full aspect-[3/4] object-cover grayscale object-top"
            />
            <div className="border-t-2 border-ink-900 dark:border-cream-100 px-4 py-3 text-center">
              <p className="section-label leading-relaxed">{personal.role}</p>
              <p className="text-2xs tracking-widest2 uppercase opacity-30 mt-1">{personal.location}</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="divider" />

      {/* Bottom info row */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 1.1 } } }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-8"
      >
        {/* Left: role + location */}
        <div className="flex flex-col gap-1">
          <motion.p variants={fadeUp(0)} className="text-xs tracking-widest2 uppercase opacity-60">
            {personal.role}
          </motion.p>
          <motion.p variants={fadeUp(0.05)} className="text-xs tracking-widest2 uppercase opacity-40">
            {personal.university}
          </motion.p>
          <motion.p variants={fadeUp(0.1)} className="text-xs tracking-widest2 uppercase opacity-30">
            {personal.location}
          </motion.p>
        </div>

        {/* Right: CTAs */}
        <motion.div variants={fadeUp(0.15)} className="flex flex-wrap gap-3">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn-brutal">
            GitHub
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 8L8 2M3 2h5v5"/>
            </svg>
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn-brutal">
            LinkedIn
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 8L8 2M3 2h5v5"/>
            </svg>
          </a>
          <a href="/cv.pdf" download className="btn-brutal">
            Descargar CV
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 2v6M2 6l3 3 3-3"/>
            </svg>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2, duration: 1 }}
        className="flex items-center gap-3 mt-8 md:mt-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-8 bg-current"
        />
        <span className="text-2xs tracking-widest3 uppercase">Scroll</span>
      </motion.div>
    </section>
  )
}
