import { motion } from 'framer-motion'
import { Book, Group, HandCash } from 'iconoir-react'
import { EASE, reveal } from '../lib/motion'

const SERVICES = [
  {
    icon: Book,
    title: 'Tutor Privado',
    description:
      'Clases personalizadas de programación enfocadas en C++, Java y fundamentos de informática para estudiantes universitarios. Metodología práctica basada en resolución de problemas y comprensión de algoritmos.',
    tags: ['C++', 'Java', 'Algoritmos', 'Universitario'],
  },
  {
    icon: Group,
    title: 'Proyectos en Equipo',
    description:
      'Abierto a participar en proyectos universitarios, open source o colaborativos. Aporto en diseño de sistemas, arquitectura backend, desarrollo frontend y gestión de bases de datos.',
    tags: ['React', 'C# / .NET', 'PostgreSQL', 'Full Stack'],
  },
  {
    icon: HandCash,
    title: 'Freelance',
    description:
      'Desarrollo de aplicaciones web, sistemas de información y soluciones a medida para empresas o emprendedores. Desde el diseño inicial hasta el despliegue en producción.',
    tags: ['Web', 'Sistemas', 'Consultoría', 'Despliegue'],
  },
]

export default function Services() {
  return (
    <section id="services" className="section-wrapper">
      {/* Section identifier */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
        className="flex items-center gap-4 mb-12"
      >
        <span className="section-tag">
          <HandCash width={12} height={12} strokeWidth={2} />
          <span>06</span>
        </span>
        <div className="divider flex-1" />
        <span className="section-tag">Servicios</span>
      </motion.div>

      {/* Big label */}
      <div className="overflow-hidden mb-12">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="font-display text-[10vw] sm:text-[8vw] md:text-[6vw] leading-none tracking-tight select-none"
        >
          OFREZCO
        </motion.h2>
      </div>

      {/* Service cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SERVICES.map(({ icon: Icon, title, description, tags }, i) => (
          <motion.div
            key={title}
            {...reveal(i * 0.1)}
            className="brutal-card p-6 flex flex-col gap-5 bg-cream-100 dark:bg-ink-900"
          >
            {/* Icon + title */}
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

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t-2 border-ink-900 dark:border-cream-100">
              {tags.map(tag => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
