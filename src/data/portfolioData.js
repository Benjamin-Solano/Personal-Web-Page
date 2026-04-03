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
        { name: 'Tailwind CSS', pct: 70 },
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
      desc: 'Desarrollé en equipo un sistema de recursos humanos para la empresa Datacor con el fin de centralizar procesos que heran manejados de forma dispersa en libros de excel.',
      type: 'project',
    },
  ],

  projects: [
    {
      title: 'U-Vote',
      subtitle: 'Plataforma Universitaria de Votaciones Digitales',
      description: 'Sistema web de votaciones digitales para la comunidad universitaria de la UNA. Permite crear, compartir y analizar procesos de decisión colectiva — desde elecciones estudiantiles hasta encuestas de retroalimentación — con total transparencia. El proyecto representa un ahorro estimado de $14,000 anuales frente a los servicios externos de votación actualmente utilizados por la institución.',
      stack: ['React', 'C# / .NET', 'PostgreSQL', 'Vercel'],
      live: 'https://u-vote-three.vercel.app/',
      github: 'https://github.com/Benjamin-Solano/U-Vote',
      stat: { value: '$14,000', label: 'ahorro anual estimado — UNA' },
      org: 'Universidad Nacional de Costa Rica',
      year: '2025',
    },
  ],

  services: [
    {
      icon: 'Book',
      title: 'Tutorias Privadas',
      description:
        'Clases personalizadas de programación enfocadas en C++, Java y fundamentos de informática para estudiantes universitarios. Metodología práctica basada en resolución de problemas y comprensión de algoritmos.',
      tags: ['C++', 'Java', 'Algoritmos', 'Universitario'],
    },
    {
      icon: 'Group',
      title: 'Proyectos en Equipo',
      description:
        'Abierto a participar en proyectos universitarios, open source o colaborativos. Aporto en diseño de sistemas, arquitectura backend, desarrollo frontend y gestión de bases de datos.',
      tags: ['React', 'C# / .NET', 'PostgreSQL', 'Full Stack'],
    },
    {
      icon: 'HandCash',
      title: 'Freelance',
      description:
        'Desarrollo de aplicaciones web, sistemas de información y soluciones a medida para empresas o emprendedores. Desde el diseño inicial hasta el despliegue en producción.',
      tags: ['Web', 'Sistemas', 'Consultoría', 'Despliegue'],
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
