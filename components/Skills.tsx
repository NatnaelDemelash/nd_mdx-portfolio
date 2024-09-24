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
  { name: 'Git', icon: '/stacks/github.svg' },
  { name: 'Redux', icon: './stacks/redux.svg' },
  { name: 'Vue', icon: './stacks/vuejs.svg' },
  { name: 'Sass', icon: './stacks/sass-wordmark.svg' },
  { name: 'Framer', icon: './stacks/framer-motion.svg' }
]

const Skills = () => {
  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-12'>Skills</h2>
        <div className='flex flex-wrap justify-center space-x-6 space-y-4 leading-relaxed'>
          {skills.map(skill => (
            <div key={skill.name} className=''>
              <Image src={skill.icon} alt={skill.name} width={50} height={50} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
