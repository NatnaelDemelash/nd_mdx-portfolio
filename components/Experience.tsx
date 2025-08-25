'use client'

import { EXPERIENCES } from '@/app/constants'
import { motion } from 'framer-motion'
import React from 'react'

const Experience = () => {
  return (
    <div className='mb-10 md:mb-32'>
      <h2 className='title mb-12'>Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className='mb-4 flex flex-wrap space-x-8 lg:justify-center'
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className='w-full lg:w-[20%]'
            >
              <p className='mb-2 mt-2 text-[.8rem] font-bold text-neutral-400'>
                {experience.year}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className='w-full lg:w-[75%]'
            >
              <h6 className='mb-2 text-2xl font-semibold'>
                {experience.role} -{' '}
                <span className='bg-gradient-to-r from-[#ab8a51] via-[#d6ae77] to-[#A68A64] bg-clip-text text-xs font-bold text-transparent'>
                  {experience.company}
                </span>
              </h6>
              <p className='mb-4 text-sm dark:text-white/40'>
                {experience.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
