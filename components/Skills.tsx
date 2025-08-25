import Image from 'next/image'

const skills = [
  {
    name: 'TypeScript',
    icon: '/stacks/ts.svg',
    description: 'JavaScript but better',
    bg: 'bg-blue-100'
  },
  {
    name: 'React',
    icon: '/stacks/reactjs.svg',
    description: 'JavaScript Library',
    bg: 'bg-cyan-100'
  },
  {
    name: 'Next.js',
    icon: '/stacks/nextjs.svg',
    description: 'React framework',
    bg: 'bg-gray-200 dark:bg-gray-700'
  },
  {
    name: 'Tailwind',
    icon: '/stacks/tailwind.svg',
    description: 'CSS framework',
    bg: 'bg-sky-100'
  },
  {
    name: 'Vue',
    icon: '/stacks/vuejs.svg',
    description: 'React framework',
    bg: 'bg-green-100'
  },
  {
    name: 'Git',
    icon: '/stacks/git.svg',
    description: 'Version control',
    bg: 'bg-orange-100'
  },
  {
    name: 'Supabase',
    icon: '/stacks/supabase.svg',
    description: 'Backend tool',
    bg: 'bg-green-100'
  }
]

const Skills = () => {
  return (
    <section id='skills' className='pb-24'>
      <h2 className='title mb-12'>Stacks</h2>
      <div className='mx-auto max-w-6xl'>
        <div className='grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
          {skills.map(skill => (
            <div
              key={skill.name}
              className='flex items-center rounded-xl bg-white px-5 py-4 shadow-md transition-shadow duration-300 hover:shadow-lg dark:bg-neutral-900'
            >
              {/* Icon with background shadow */}
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${skill.bg}`}
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={28}
                  height={28}
                  className='transition-transform duration-300 group-hover:scale-110'
                />
              </div>
              {/* Text content */}
              <div className='ml-4 flex flex-col'>
                <h3 className='text-sm font-semibold text-gray-800 dark:text-white'>
                  {skill.name}
                </h3>
                <p className='text-xs tracking-tight text-gray-500 dark:text-gray-400'>
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
