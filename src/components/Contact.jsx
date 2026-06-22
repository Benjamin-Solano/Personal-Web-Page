import { motion } from 'framer-motion'
import { Mail } from 'iconoir-react'
import { portfolio } from '../data/portfolioData'
import { useT } from '../context/LanguageContext'
import { EASE } from '../lib/motion'

const { personal } = portfolio

const ArrowOut = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M2 8L8 2M3 2h5v5"/>
  </svg>
)

export default function Contact() {
  const t = useT()
  const { contact } = t

  const contactItems = [
    { label: 'Email',         value: personal.email,               href: `mailto:${personal.email}`                 },
    { label: contact.phone,   value: personal.phone,               href: `tel:${personal.phone.replace(/\s/g, '')}` },
    { label: 'GitHub',        value: 'github.com/Benjamin-Solano', href: personal.github,    external: true          },
    { label: 'LinkedIn',      value: 'linkedin.com/in/inng-benjamin-solano', href: personal.linkedin, external: true },
    { label: contact.location, value: personal.location,           href: null                                        },
  ]

  return (
    <section id="contact" className="section-wrapper">
      {/* Section identifier */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: EASE }}
        className="flex items-center gap-4 mb-12"
      >
        <span className="section-tag">
          <Mail width={12} height={12} strokeWidth={2} />
          <span>07</span>
        </span>
        <div className="divider flex-1" />
        <span className="section-tag">{contact.sectionTag}</span>
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
          {contact.heading}
        </motion.h2>
      </div>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
        className="text-sm leading-relaxed opacity-60 max-w-xl mb-14"
      >
        {contact.subtext}
      </motion.p>

      {/* Contact grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {contactItems.map(({ label, value, href, external }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, ease: EASE, delay: i * 0.07 }}
            className="brutal-card-sm brutal-press bg-cream-100 dark:bg-ink-900 p-6"
          >
            <p className="col-label">{label}</p>
            {href ? (
              <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="text-xs tracking-widest2 flex items-center gap-2 break-all
                           hover:underline underline-offset-4 decoration-2 transition-all duration-150"
              >
                {value}
                {external && <ArrowOut />}
              </a>
            ) : (
              <p className="text-xs tracking-widest2 opacity-60">{value}</p>
            )}
          </motion.div>
        ))}
      </div>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.4 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <a href={`mailto:${personal.email}`} className="btn-brutal-lg">
          {contact.sendMessage}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 6h8M6 2l4 4-4 4"/>
          </svg>
        </a>
        <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn-brutal-lg">
          {contact.viewGithub}
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 8L8 2M3 2h5v5"/>
          </svg>
        </a>
      </motion.div>
    </section>
  )
}
