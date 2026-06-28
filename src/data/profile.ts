export const profile = {
  name: 'Vernando Cahyadi',
  title: 'Software Engineer (Mid-Level)',
  location: 'Indonesia',
  email: 'vernando41@gmail.com',
  phone: '+62 813 1790 9976',
  linkedin: 'https://www.linkedin.com/in/vernando-cahyadi-ba53a2160/',
  summary:
    'Mid-level Software Engineer with ~4 years of experience building and maintaining production web and mobile systems. Currently acting as PIC (Person in Charge) for a logistics platform focused on truck tracking and route optimization, contributing across frontend and backend using React, Spring Boot, and .NET Core. Experienced in translating business requirements into scalable technical solutions, making implementation trade-offs, and delivering reliable features in collaboration with cross-functional teams.',
}

export const skills = [
  {
    category: 'Backend',
    items: ['Java (Spring Boot)', 'C# (.NET Core)', 'Node.js', 'RESTful API design', 'Performance optimization'],
  },
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'UI flow implementation', 'Frontend performance optimization'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'SQL', 'Schema design', 'Client-specific database views', 'Reporting'],
  },
  {
    category: 'Mobile',
    items: ['Flutter'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker (basic)', 'Google OR-Tools', 'HERE Maps API', 'OpenAI API', 'Cursor', 'Claude Code'],
  },
  {
    category: 'Practices',
    items: ['Clean architecture', 'Modular design', 'Requirement analysis', 'Trade-off evaluation'],
  },
]

export const experience = [
  {
    company: 'Commsult Indonesia',
    role: 'Software Engineer (Mid-Level)',
    period: 'May 2021 – Present',
    points: [
      'Acting as PIC for a logistics platform focused on truck tracking and route optimization, responsible for developing, maintaining, and enhancing core system features.',
      'Designed and implemented frontend and backend features for real-time tracking and route optimization using React, Spring Boot, Google OR-Tools, and HERE Maps.',
      'Led development of reporting features, including client-specific database views, supporting operational and external reporting needs.',
      'Improved system performance and scalability by refactoring large APIs into smaller services, optimizing backend response times, and improving frontend load performance.',
      'Delivered and handed over a warehouse dashboard and CMS integrated with SAP, later transitioned to another team for maintenance.',
    ],
  },
  {
    company: 'Accelist Lentera Indonesia',
    role: 'Software Developer',
    period: 'Mar 2020 – Apr 2021',
    points: [
      'Maintained and enhanced logistics and delivery planning systems using Vue, Angular, and .NET Core, supporting operational workflows.',
      'Developed dealer financing and automotive invoicing systems using React and .NET Core.',
      'Improved delivery scheduling optimization and system maintainability.',
      'Improved code quality and maintainability through clean code practices and modular architecture.',
    ],
  },
  {
    company: 'Freelance',
    role: 'Software Developer',
    period: 'Jul 2022 – Aug 2022',
    points: [
      'Delivered an end-to-end dealer financing web application for an automotive client using React and .NET Core.',
      'Led requirements clarification, system design, implementation, integration, and deployment, working directly with the client.',
    ],
  },
]

export const education = [
  {
    school: 'BINUS University',
    degree: "Bachelor's Degree in Computer Science (Software Engineering)",
    period: '2016 – 2020',
  },
]

export const certifications = [
  { name: 'IELTS (General Training)', detail: 'Overall Band 6.5 — May 2025' },
]

export const projects = [
  {
    name: 'Route Optimizer',
    description:
      'A logistics route-planning demo: add stops, choose one-way or round-trip, and compute the most efficient visiting order. Optimization runs on Google OR-Tools (Python) via a serverless backend; the map and geocoding use OpenStreetMap/Leaflet — no paid mapping API required.',
    stack: ['React', 'TypeScript', 'Leaflet', 'Python', 'Google OR-Tools', 'Vercel'],
    demoUrl: 'https://route-optimizer-web-vernando.vercel.app/',
  },
]
