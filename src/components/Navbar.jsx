import { useState } from 'react'
import { motion } from 'framer-motion'
import { EASE } from '../lib/motion'

const NAV_LINKS = [
  { label: 'Sobre mí',    href: '#about'      },
  { label: 'Educación',   href: '#education'  },
  { label: 'Skills',      href: '#skills'     },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Proyectos',   href: '#projects'   },
  { label: 'Servicios',   href: '#services'   },
  { label: 'Contacto',    href: '#contact'    },
]

const SunIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1"  x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22"  x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3"  y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
  </svg>
)

const MoonIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
)

export default function Navbar({ dark, setDark }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="fixed top-0 left-0 right-0 z-50 h-14
                   bg-cream-100 dark:bg-ink-900 border-b-2 border-ink-900 dark:border-cream-100"
      >
        <div className="h-full flex items-center justify-between px-6 md:px-16 lg:px-24 mx-auto" style={{ maxWidth: '72rem' }}>
          {/* Logo */}
          <a href="#hero" className="btn-brutal font-display text-xl px-3 py-1">
            BS
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="brutal-card-sm brutal-press
                           text-2xs tracking-widest2 uppercase
                           px-3 py-1.5 bg-cream-100 dark:bg-ink-900"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDark(!dark)}
              aria-label="Cambiar tema"
              className="btn-brutal p-2"
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Hamburger (mobile) */}
            <button
              className="md:hidden flex flex-col gap-[5px] w-6"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menú"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-full bg-current origin-center"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 w-full bg-current"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-full bg-current origin-center"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <motion.nav
        initial={false}
        animate={mobileOpen ? { opacity: 1, y: 0, pointerEvents: 'auto' } : { opacity: 0, y: -10, pointerEvents: 'none' }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="fixed top-14 left-0 right-0 z-40 bg-cream-100 dark:bg-ink-900
                   border-b-2 border-ink-900 dark:border-cream-100
                   px-6 py-6 flex flex-col gap-3 md:hidden"
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            onClick={() => setMobileOpen(false)}
            className="brutal-card-sm brutal-press
                       text-xs tracking-widest2 uppercase
                       px-4 py-2.5 bg-cream-100 dark:bg-ink-900"
          >
            {label}
          </a>
        ))}
      </motion.nav>
    </>
  )
}
