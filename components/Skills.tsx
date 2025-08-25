import Image from 'next/image'

const skills = [
  {
    name: 'TypeScript',
    icon: '/stacks/ts.svg',
    description: 'Typed superset of JavaScript',
    bg: 'bg-blue-100 dark:bg-blue-900/40'
  },
  {
    name: 'React',
    icon: '/stacks/reactjs.svg',
    description: 'UI library for building interfaces',
    bg: 'bg-cyan-100 dark:bg-cyan-900/40'
  },
  {
    name: 'JavaScript',
    icon: '/stacks/javascript.svg',
    description: 'Programming language of the web',
    bg: 'bg-yellow-100 dark:bg-yellow-900/40'
  },
  {
    name: 'Next.js',
    icon: '/stacks/nextjs.svg',
    description: 'Full-stack React framework',
    bg: 'bg-gray-200 dark:bg-gray-700'
  },
  {
    name: 'Tailwind',
    icon: '/stacks/tailwind.svg',
    description: 'Utility-first CSS framework',
    bg: 'bg-sky-100 dark:bg-sky-900/40'
  },
  {
    name: 'Vue',
    icon: '/stacks/vuejs.svg',
    description: 'Progressive JavaScript framework',
    bg: 'bg-green-100 dark:bg-green-900/40'
  },
  {
    name: 'Git',
    icon: '/stacks/git.svg',
    description: 'Version control system',
    bg: 'bg-orange-100 dark:bg-orange-900/40'
  },
  {
    name: 'Supabase',
    icon: '/stacks/supabase.svg',
    description: 'Open-source Firebase alternative',
    bg: 'bg-green-100 dark:bg-green-900/40'
  },
  {
    name: 'n8n',
    icon: '/stacks/n8n.svg',
    description: 'Workflow automation tool',
    bg: 'bg-purple-100 dark:bg-purple-900/40'
  }
]

const Skills = () => {
  return (
    <section id='skills' className='pb-24'>
      <h2 className='title mb-12'>Tech Stack</h2>
      <div className='mx-auto max-w-6xl'>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
          {skills.map(skill => (
            <div
              key={skill.name}
              className='hover:border-gradient-to-r group flex items-center rounded-xl border border-transparent bg-white from-indigo-400 to-cyan-400 px-5 py-4 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:bg-neutral-900'
            >
              {/* Icon with background */}
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${skill.bg} transition-transform duration-300 group-hover:rotate-6`}
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={28}
                  height={28}
                  className='transition-transform duration-300 group-hover:scale-110'
                />
              </div>
              {/* Text */}
              <div className='ml-4 flex flex-col'>
                <h3 className='text-sm font-semibold text-gray-800 dark:text-white'>
                  {skill.name}
                </h3>
                <p className='text-xs text-gray-500 dark:text-gray-400'>
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
