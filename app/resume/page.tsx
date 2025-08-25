'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ResumeContent from '@/components/ResumeContent'
import Link from 'next/link'
import { FaDownload } from 'react-icons/fa'

export default function ResumePage() {
  return (
    <div className='container mx-auto mt-12 max-w-4xl px-4 py-16 md:py-24'>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='title mb-4'
      >
        My Resume
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='mb-12 text-neutral-600 dark:text-neutral-400'
      >
        A detailed look at my professional journey, skills, and certifications.
      </motion.p>

      {/* Download Button
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='mb-16 flex justify-center'
      >
        <a
          href='/Natnael_Demelash_Resume.pdf' // Replace with the actual path to your resume file
          download
          className='inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-700 shadow-sm transition-all duration-300 hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700'
        >
          <FaDownload />
          <span>Download Resume</span>
        </a>
      </motion.div> */}

      {/* The Resume Content Component */}
      <ResumeContent />
    </div>
  )
}
