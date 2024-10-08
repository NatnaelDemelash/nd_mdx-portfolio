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

export const EXPERIENCES = [
  {
    year: 'JAN 2024 - Present',
    role: 'Software Engineer',
    company: 'GoodayOn',
    description: `Contributing to the development of web applications using JavaScript, Vue.js, and React.js. Worked closely other developers to prioritize features and enhancements.`,
    technologies: ['Vue', 'Tailwind', 'React', 'Firebase']
  },
  {
    year: 'FEB 2021 - DEC 2023',
    role: 'Operation Team Lead',
    company: 'GoodayOn',
    description: `Successfully utilize CRM software tools, including Trello and Jira, to streamline and
      enhance project management processes.`
    // technologies: ['Vue', 'Firebase'],
  }
]

export const PROJECTS = [
  {
    num: '01',
    category: 'frontend',
    title: 'Puluk Travel',
    description:
      'Fully responsive modern UI/UX Website with Next.js for Travel and Camping App',
    tech: [SiTypescript, SiNextdotjs, SiTailwindcss] as IconType[],
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
      'Pizza ordering website .Users can browse through a variety of pizza options, select their preferred menu',
    tech: [SiReact, SiReactquery, SiTailwindcss] as IconType[],
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
    tech: [SiHtml5, SiCss3, SiJavascript] as IconType[],
    demo: 'https://loquacious-haupia-108385.netlify.app/',
    githubLink: 'https://github.com/NatnaelDemelash/OmniFood',
    cover: '/images/projects/Project-3.png',
    background: 'bg-indigo-500'
  }
  // {
  //   num: '04',
  //   category: 'frontend',
  //   title: 'Aurora Aisel',
  //   description:
  //     'An Ecommerce app built with React.js using react context -( FakeStore API) for data fetching/backend',
  //   tech: [SiReact, SiRedux, SiTailwindcss, SiReactquery] as IconType[],
  //   demo: 'https://aurora-aisel-shop.vercel.app',
  //   githubLink: 'https://github.com/NatnaelDemelash/aurora_aisel_shop',
  //   cover: '/images/projects/Project-4.png',
  //   background: 'bg-[#F0B27A]'
  // }
]
