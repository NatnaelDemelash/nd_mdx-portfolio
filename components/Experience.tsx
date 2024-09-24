'use client'

import { EXPERIENCES } from '@/app/constants'
import { motion } from 'framer-motion'
import React from 'react'

const Experience = () => {
  return (
    <div className='mb-10 md:mb-20'>
      <h2 className='title mb-12'>Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className='mb-4 flex flex-wrap lg:justify-center'>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className='w-full lg:w-1/4'
            >
              <p className='mb-2 mt-2 text-[.6rem] text-neutral-400'>
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
                <span className='text-xs text-green-500'>
                  {experience.company}
                </span>
              </h6>
              <p className='mb-4 text-sm text-neutral-400'>
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
