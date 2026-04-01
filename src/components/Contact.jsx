import { motion } from 'framer-motion'
import { portfolio } from '../data/portfolioData'

const { personal } = portfolio

const CONTACT_ITEMS = [
  {
    label: 'Email',
    value: personal.email,
    href:  `mailto:${personal.email}`,
  },
  {
    label: 'Teléfono',
    value: personal.phone,
    href:  `tel:${personal.phone.replace(/\s/g,'')}`,
  },
  {
    label: 'GitHub',
    value: 'github.com/Benjamin-Solano',
    href:  personal.github,
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'inng-benjamin-solano',
    href:  personal.linkedin,
    external: true,
  },
  {
    label: 'Ubicación',
    value: personal.location,
    href:  null,
  },
]

const ArrowOut = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M2 8L8 2M3 2h5v5"/>
  </svg>
)

export default function Contact() {
  return (
    <section id="contact" className="section-wrapper">
      {/* Section identifier */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-12"
      >
        <span className="section-label">04</span>
        <div className="divider flex-1" />
        <span className="section-label">Contacto</span>
      </motion.div>

      {/* Large heading */}
      <div className="overflow-hidden mb-12 md:mb-16">
        <motion.h2
          initial={{ y: '110%' }}
          whileInView={{ y: '0%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[14vw] sm:text-[12vw] md:text-[9vw] leading-none tracking-tight"
        >
          HABLEMOS
        </motion.h2>
      </div>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-sm leading-relaxed opacity-60 max-w-xl mb-14"
      >
        Estoy disponible para proyectos freelance, colaboraciones académicas o
        simplemente para conversar sobre tecnología y desarrollo de software.
        No dudes en escribirme.
      </motion.p>

      {/* Contact grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-900/8 dark:bg-cream-50/8">
        {CONTACT_ITEMS.map(({ label, value, href, external }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="group bg-cream-100 dark:bg-ink-900 p-6 hover:bg-cream-200 dark:hover:bg-ink-800 transition-colors duration-200"
          >
            <p className="section-label mb-3">{label}</p>
            {href ? (
              <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="text-xs tracking-widest group-hover:text-gold-600 dark:group-hover:text-gold-400
                           transition-colors duration-200 flex items-center gap-2 break-all"
              >
                {value}
                {external && <ArrowOut />}
              </a>
            ) : (
              <p className="text-xs tracking-widest opacity-60">{value}</p>
            )}
          </motion.div>
        ))}
      </div>

      {/* CTA button */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <a
          href={`mailto:${personal.email}`}
          className="btn-outline text-sm px-8 py-4"
        >
          Enviar un mensaje
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 6h8M6 2l4 4-4 4"/>
          </svg>
        </a>
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline text-sm px-8 py-4"
        >
          Ver GitHub
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 8L8 2M3 2h5v5"/>
          </svg>
        </a>
      </motion.div>
    </section>
  )
}
