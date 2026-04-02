import { motion } from 'framer-motion'
import { Sparks, GitFork } from 'iconoir-react'
import { portfolio } from '../data/portfolioData'
import { EASE, reveal } from '../lib/motion'

// Save screenshots to src/assets/ with these exact filenames:
//   uvote-dark.jpg  — captura con fondo oscuro
//   uvote-light.jpg — captura con fondo claro
import UVoteDark  from '../assets/uvote-dark.jpg'
import UVoteLight from '../assets/uvote-light.jpg'

const IMAGES = {
  uvote: { dark: UVoteDark, light: UVoteLight },
}

const { projects } = portfolio

const ArrowOut = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M2 8L8 2M3 2h5v5"/>
  </svg>
)

function ProjectCard({ project, index }) {
  const imgs = IMAGES[project.title.toLowerCase().replace(/[^a-z]/g, '')]

  return (
    <motion.article
      {...reveal(index * 0.1)}
      className="brutal-card grid grid-cols-1 lg:grid-cols-[1fr_45%] overflow-hidden"
    >
      {/* LEFT — description */}
      <div className="p-6 md:p-8 flex flex-col justify-between
                      border-b-2 lg:border-b-0 lg:border-r-2
                      border-ink-900 dark:border-cream-100">
        <div>
          {/* Meta + title */}
          <p className="text-2xs tracking-widest2 uppercase opacity-40 mb-2">
            {project.org} · {project.year}
          </p>
          <h3 className="font-display text-5xl md:text-6xl leading-none tracking-tight mb-1">
            {project.title}
          </h3>
          <p className="text-xs tracking-widest2 uppercase opacity-60 mb-6">
            {project.subtitle}
          </p>

          <p className="text-sm leading-relaxed opacity-70 mb-6">
            {project.description}
          </p>

          {/* Stack tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map(tech => (
              <span key={tech} className="tag-pill">{tech}</span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {/* Stat */}
          <div className="brutal-card-sm p-4 flex items-baseline gap-3">
            <p className="font-display text-3xl leading-none tracking-tight">
              {project.stat.value}
            </p>
            <p className="text-2xs tracking-widest2 uppercase opacity-50 leading-snug">
              {project.stat.label}
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-3">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-brutal">
              GitHub <ArrowOut />
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT — diagonal split image */}
      {imgs && (
        <div className="relative overflow-hidden min-h-[260px] lg:min-h-0">
          {/* Dark — left half */}
          <img
            src={imgs.dark}
            alt={`${project.title} dark mode`}
            className="absolute inset-0 w-full h-full object-cover object-top select-none"
            style={{ clipPath: 'polygon(0 0, 58% 0, 42% 100%, 0 100%)' }}
            draggable={false}
          />
          {/* Light — right half */}
          <img
            src={imgs.light}
            alt={`${project.title} light mode`}
            className="absolute inset-0 w-full h-full object-cover object-top select-none"
            style={{ clipPath: 'polygon(58% 0, 100% 0, 100% 100%, 42% 100%)' }}
            draggable={false}
          />
          {/* Diagonal divider line */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <line
              x1="58" y1="0" x2="42" y2="100"
              stroke="currentColor" strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          {/* Mode labels */}
          <span className="absolute top-3 left-3 section-tag bg-ink-900 text-cream-50 dark:bg-cream-100 dark:text-ink-900 text-[10px]">
            Dark
          </span>
          <span className="absolute top-3 right-3 section-tag bg-cream-100 text-ink-900 dark:bg-ink-900 dark:text-cream-50 text-[10px]">
            Light
          </span>
        </div>
      )}
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-wrapper">
      {/* Section identifier */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: EASE }}
        className="flex items-center gap-4 mb-12"
      >
        <span className="section-tag">
          <Sparks width={12} height={12} strokeWidth={2} />
          <span>05</span>
        </span>
        <div className="divider flex-1" />
        <span className="section-tag">Proyectos</span>
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
          PROYECTOS
        </motion.h2>
      </div>

      {/* Projects list */}
      <div className="flex flex-col gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
