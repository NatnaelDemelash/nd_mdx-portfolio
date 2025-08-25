'use client'

import { EXPERIENCES } from '@/app/constants'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { Experience as ExperienceType } from '@/app/types'

const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className='mb-16 md:mb-32'>
      <h2 className='title mb-12'>Experience</h2>
      <div className='space-y-4'>
        {EXPERIENCES.map((experience: ExperienceType, index: number) => (
          <div
            key={index}
            className='border-b border-neutral-200 pb-4 last:border-b-0 dark:border-neutral-800'
          >
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='flex cursor-pointer items-center justify-between rounded-lg p-4 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800'
              onClick={() => toggleOpen(index)}
            >
              <div>
                <h6 className='text-lg font-semibold text-neutral-900 dark:text-neutral-100'>
                  {experience.role}{' '}
                  <span className='ml-1 bg-gradient-to-r from-[#8B4513] via-[#D2B48C] to-[#C0A180] bg-clip-text text-sm font-bold text-transparent dark:from-[#ab8a51] dark:via-[#d6ae77] dark:to-[#A68A64]'>
                    @{experience.company}
                  </span>
                </h6>
                <p className='mt-1 font-mono text-xs text-neutral-500 dark:text-neutral-400'>
                  {experience.year}
                </p>
              </div>

              <motion.div
                initial={false}
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown className='text-neutral-400 dark:text-neutral-500' />
              </motion.div>
            </motion.div>

            {/* Expandable Content */}
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className='overflow-hidden pl-5 pr-4 md:pl-9'
                >
                  {/* Description */}
                  <ul className='list-disc space-y-2 pt-4 text-[0.9rem] leading-relaxed text-neutral-700 marker:text-[#8B4513] dark:text-white/70 dark:marker:text-[#d6ae77]'>
                    {experience.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  {experience.technologies && (
                    <motion.div
                      className='mt-4 flex flex-wrap gap-2'
                      initial='hidden'
                      animate='visible'
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: { staggerChildren: 0.1 }
                        }
                      }}
                    >
                      {experience.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 }
                          }}
                          className='rounded-full bg-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300'
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
