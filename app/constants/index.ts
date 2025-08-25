import { IconType } from 'react-icons/lib'
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiReactquery,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiRedux
} from 'react-icons/si'

import { Experience, Project } from '@/app/types'

export const EXPERIENCES: Experience[] = [
  {
    year: 'JAN 2024 - Present',
    role: 'Software Engineer',
    company: 'GoodayOn',
    description: [
      'Designing and building internal tools that improve daily operations and team productivity.',
      'Creating smart AI-driven automations and workflows using n8n to reduce repetitive tasks.',
      'Developing custom Slack integrations for real-time collaboration and alerts.',
      'Engineering seamless integrations across different platforms to streamline business processes.',
      'Contributing to modern web applications with React, Vue, and Tailwind, ensuring responsive and maintainable code.'
    ],
    technologies: ['React', 'Vue', 'Tailwind', 'Firebase', 'n8n', 'Slack API']
  },
  {
    year: 'FEB 2021 - DEC 2023',
    role: 'Operations Team Lead',
    company: 'GoodayOn',
    description: [
      'Led the operations team while driving process improvements across multiple projects.',
      'Implemented automations in Jira to optimize workflows and reduce manual effort.',
      'Utilized Trello and Jira to manage projects, track progress, and improve team efficiency.',
      'Collaborated with cross-functional teams to ensure smooth project execution and delivery.'
    ],
    technologies: ['Jira', 'Trello', 'Jira Automation']
  }
]

export const PROJECTS: Project[] = [
  {
    num: '01',
    category: 'frontend',
    title: 'Puluk Travel',
    description:
      'Fully responsive modern UI/UX Website with Next.js for Travel and Camping App',
    tech: [SiTypescript, SiNextdotjs, SiTailwindcss],
    demo: 'https://puluk-travel.vercel.app',
    githubLink: 'https://github.com/NatnaelDemelash/puluk_travel',
    cover: '/images/projects/Project-1.png',
    background: 'bg-[#CD6155]'
  },
  {
    num: '02',
    category: 'frontend',
    title: 'Pizzeria Pizza',
    description:
      'Pizza ordering website. Users can browse through a variety of pizza options, select their preferred menu',
    tech: [SiReact, SiReactquery, SiTailwindcss],
    demo: 'https://pizzeria101.netlify.app/',
    githubLink: 'https://github.com/NatnaelDemelash/pizzeria_pizza',
    cover: '/images/projects/Project-2.png',
    background: 'bg-[#512E5F]'
  },
  {
    num: '03',
    category: 'frontend',
    title: 'OmniFood',
    description:
      '[Cloned website] An AI based tech company which majorly focuses on consumer well-being through a healthy diet.',
    tech: [SiHtml5, SiCss3, SiJavascript],
    demo: 'https://loquacious-haupia-108385.netlify.app/',
    githubLink: 'https://github.com/NatnaelDemelash/OmniFood',
    cover: '/images/projects/Project-3.png',
    background: 'bg-indigo-500'
  }
]
