'use client'

import React from 'react'
import { Button } from './ui/button'
import { FaLocationArrow } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section className='flex flex-col items-center py-16 md:mt-48'>
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='max-w-4xl text-center text-2xl font-bold md:text-4xl'
      >
        Ready to take your
        <span className='bg-gradient-to-r from-[#ab8a51] via-[#d6ae77] to-[#A68A64] bg-clip-text text-transparent'>
          {' '}
          digital presence{' '}
        </span>
        to the next level?
      </motion.h1>

      {/* Sub text */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='my-6 px-6 text-center leading-7 text-gray-700 dark:text-gray-300 md:mt-10 md:max-w-2xl'
      >
        Let&apos;s build something meaningful together. Whether it&apos;s a
        sleek front-end, powerful automation, or a custom tool, I can help bring
        your ideas to life.
      </motion.p>

      {/* Call to action */}
      <a href='mailto:natnael.dev101@gmail.com'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button className='flex transform items-center gap-3 rounded-xl bg-gradient-to-r from-[#ab8a51] via-[#d6ae77] to-[#A68A64] px-6 py-3 text-lg font-medium text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl'>
            <span>Let&apos;s get in touch</span>
            <FaLocationArrow />
          </Button>
        </motion.div>
      </a>

      {/* Extra: social icons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className='mt-8 flex gap-6'
      >
        <a
          href='https://github.com/NatnaelDemelash'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white'
        >
          GitHub
        </a>
        <a
          href='https://linkedin.com/in/natnaeldemelash'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white'
        >
          LinkedIn
        </a>
      </motion.div>
    </section>
  )
}

export default Contact
