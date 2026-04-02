// Shared animation constants and variant factories
// Single source of truth for easing and common motion patterns

export const EASE = [0.16, 1, 0.3, 1]

// Slide-up reveal for sections (whileInView)
export const reveal = (delay = 0) => ({
  initial:     { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0  },
  viewport:    { once: true, margin: '-80px' },
  transition:  { duration: 0.7, ease: EASE, delay },
})

// hidden/visible variant for staggered children (animate)
export const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0,
    transition: { duration: 0.6, ease: EASE, delay },
  },
})

// Character/word slide-up reveal (used in Hero name)
export const wordVariants = {
  hidden:  { y: '110%', opacity: 0 },
  visible: { y: '0%',   opacity: 1,
    transition: { duration: 0.9, ease: EASE },
  },
}
