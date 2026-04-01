import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Sobre mí',    href: '#about'      },
  { label: 'Skills',      href: '#skills'     },
  { label: 'Experiencia', href: '#experience' },
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
  const { scrollY } = useScroll()
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1])

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-6 md:px-16
                   bg-cream-100/85 dark:bg-ink-900/85 backdrop-blur-lg"
        style={{ borderBottom: `0.5px solid rgba(${dark ? '240,237,232' : '10,9,8'},calc(var(--tw-border-opacity,1)*0.12))` }}
      >
        {/* Monogram */}
        <a
          href="#hero"
          className="font-display text-xl tracking-widest2 hover:text-gold-600 dark:hover:text-gold-400 transition-colors duration-200"
        >
          BS
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-2xs tracking-widest2 uppercase opacity-50 hover:opacity-100 transition-opacity duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDark(!dark)}
            aria-label="Cambiar tema"
            className="w-8 h-8 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-200"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden flex flex-col gap-1 w-6 opacity-60 hover:opacity-100 transition-opacity"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-px w-full bg-current origin-center transition-transform"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-px w-full bg-current"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-px w-full bg-current origin-center"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <motion.nav
        initial={false}
        animate={mobileOpen ? { opacity: 1, y: 0, pointerEvents: 'auto' } : { opacity: 0, y: -10, pointerEvents: 'none' }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="fixed top-14 left-0 right-0 z-40 bg-cream-100 dark:bg-ink-900 border-b border-ink-900/10 dark:border-cream-50/10 px-6 py-6 flex flex-col gap-5 md:hidden"
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            onClick={() => setMobileOpen(false)}
            className="text-xs tracking-widest2 uppercase opacity-60 hover:opacity-100 transition-opacity"
          >
            {label}
          </a>
        ))}
      </motion.nav>
    </>
  )
}
