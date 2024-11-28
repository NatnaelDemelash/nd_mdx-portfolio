import Image from 'next/image'
import React from 'react'

const skills = [
  { name: 'HTML', icon: '/stacks/html.svg' },
  { name: 'CSS', icon: '/stacks/css.svg' },
  { name: 'TailwindCSS', icon: '/stacks/tailwind.svg' },
  { name: 'Javascript', icon: '/stacks/js.svg' },
  { name: 'React', icon: '/stacks/reactjs.svg' },
  { name: 'Typescript', icon: '/stacks/ts.svg' },
  { name: 'Next.js', icon: '/stacks/nextjs.svg' },
  { name: 'Git', icon: './stacks/git.svg' },
  { name: 'NPM', icon: '/stacks/npm-wordmark.svg' },
  { name: 'Redux', icon: './stacks/redux.svg' },
  { name: 'Vue', icon: './stacks/vuejs.svg' },
  { name: 'Sass', icon: './stacks/sass-wordmark.svg' },
  { name: 'Framer', icon: './stacks/framer-motion.svg' }
]

const Skills = () => {
  return (
    <section className='pb-24'>
      <h2 className='title mb-12'>My Skills</h2>
      <div>
        <div className='mx-auto max-w-6xl px-6'>
          <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4'>
            {skills.map(skill => (
              <div
                key={skill.name}
                className='group flex flex-col items-center justify-center rounded-lg bg-white p-3 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-neutral-900'
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={40}
                  height={40}
                  className='transition-transform duration-300 group-hover:scale-110'
                />
                <p className='mt-3 text-sm font-medium text-gray-700 hover:font-medium dark:text-white/55 dark:group-hover:text-white'>
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
