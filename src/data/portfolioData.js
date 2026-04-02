const currentYear = new Date().getFullYear()

export const portfolio = {
  personal: {
    nameWords: ['BENJAMÍN', 'ALEXANDER', 'SOLANO', 'ORTEGA'],
    fullName: 'Benjamín Alexander Solano Ortega',
    role: 'Systems Engineer Student',
    university: 'Universidad Nacional de Costa Rica',
    location: 'San José, Costa Rica',
    email: 'benjaminalexander958@gmail.com',
    phone: '+506 8714 7684',
    github: 'https://github.com/Benjamin-Solano',
    linkedin: 'https://www.linkedin.com/in/inng-benjamin-solano',
  },

  description: [
    'Soy estudiante de Ingeniería en Sistemas con una sólida formación en desarrollo Full Stack, combinando experiencia práctica en Java, C#, .NET, React, PostgreSQL y MySQL.',
    'Me apasiona el diseño de software moderno y minimalista, la resolución de problemas complejos y la mejora continua de la experiencia de usuario. He participado en competencias de alto nivel como el ICPC y torneos internos de programación de la UNA, demostrando mi compromiso con la excelencia técnica y el trabajo en equipo bajo presión.',
  ],

  quote: {
    text: 'El minimalismo no es la falta de algo. Es simplemente la cantidad perfecta de algo.',
    author: 'Nicholas Burroughs',
  },

  languages: [
    { name: 'Español', level: 'Nativo', pct: 100 },
    { name: 'Inglés',  level: 'C1 — 85%', pct: 85 },
    { name: 'Alemán',  level: 'A1 — 10%', pct: 10 },
  ],

  skills: [
    {
      category: 'Backend',
      items: [
        { name: 'Java',  pct: 80 },
        { name: 'C#',    pct: 75 },
        { name: '.NET',  pct: 70 },
      ],
    },
    {
      category: 'Frontend',
      items: [
        { name: 'HTML / CSS',  pct: 90 },
        { name: 'JavaScript',  pct: 85 },
        { name: 'React',       pct: 75 },
        { name: 'Bootstrap',   pct: 70 },
      ],
    },
    {
      category: 'Bases de Datos',
      items: [
        { name: 'MySQL',      pct: 80 },
        { name: 'PostgreSQL', pct: 75 },
      ],
    },
    {
      category: 'Herramientas',
      items: [
        { name: 'Git / GitHub',        pct: 85 },
        { name: 'IntelliJ IDEA',       pct: 80 },
        { name: 'VS Code',             pct: 90 },
        { name: 'pgAdmin 4',           pct: 70 },
        { name: 'Visual Studio 2022',  pct: 75 },
      ],
    },
  ],

  experience: [
    {
      date: `2023 — ${currentYear}`,
      title: 'Tutor Privado de Programación',
      org: 'Universidad Nacional de Costa Rica',
      desc: 'Enseñanza de C++ a estudiantes de distintos niveles universitarios durante varios semestres, influyendo positivamente en su interés por la programación.',
      type: 'work',
    },
    {
      date: '2025',
      title: 'International Collegiate Programming Contest',
      org: 'ICPC — Fase Nacional',
      desc: 'Participación en la fase nacional del prestigioso torneo universitario de programación competitiva. Resolución de problemas en C++ en equipo bajo presión.',
      type: 'achievement',
    },
    {
      date: '2025',
      title: '2.º Lugar — Torneo de Programación',
      org: 'T.E.P. · UNA',
      desc: 'Segundo lugar junto a un equipo de programadores, resolviendo problemas estilo Codeforces e ICPC en C++.',
      type: 'achievement',
    },
    {
      date: '2025',
      title: 'Mentor · Escuela de Informática',
      org: 'Universidad Nacional de Costa Rica',
      desc: 'Rol de mentoría para estudiantes de primer año, abordando dudas sobre vida universitaria y programación.',
      type: 'work',
    },
    {
      date: `2025 — ${currentYear}`,
      title: 'Desarrollador · OfficeCore System',
      org: 'Datacor — Proyecto Universitario',
      desc: 'Desarrollo en equipo de un sistema de recursos humanos para la empresa Datacor como proyecto de ingeniería universitaria.',
      type: 'project',
    },
  ],

  aptitudes: [
    'Liderazgo colaborativo',
    'Trabajo en equipo',
    'Adaptabilidad',
    'Comunicación',
    'Autodidacta',
    'Puntualidad',
  ],
}
