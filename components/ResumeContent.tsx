'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaTools, FaCertificate } from 'react-icons/fa'

// Define the data for the resume
const resumeData = {
  summary:
    'Front End Developer with 2 years of solid experience in all aspects of front-end development using React JS, Tailwind CSS and JavaScript. Proven ability to take an idea from concept to completion. Proficient in modern web technologies, including React, Next.js, and Vue.js, with a strong understanding of responsive design and UI/UX principles. Adept at translating design concepts into fully functional, interactive web experiences while optimizing performance and ensuring cross-browser compatibility. Passionate about continuous learning and keeping up with the latest industry trends to deliver innovative solutions.',
  experience: [
    {
      role: 'Front End Developer',
      company: 'GoodayOn',
      year: 'January 2024 - Present',
      location: 'Addis Ababa',
      description: [
        'Engineered responsive user interfaces for web applications using Vue.js, reducing bugs and improving user engagement through enhanced interactive features and seamless navigation.',
        'Contributed to the design and development of dynamic, user-friendly web applications.'
      ]
    },
    {
      role: 'IT Support',
      company: 'GoodayOn',
      year: 'Feburary 2021 - December 2023',
      location: 'Addis Ababa',
      description: [
        'Acted as the first point of contact for all IT & technical queries and managed Active Directory assets including user accounts and devices.',
        'Developed analytic skills and attention to detail by analyzing system logs and identifying potential issues.',
        'Performed diagnostics and resolved software problems.'
      ]
    },
    {
      role: 'Junior Web Developer',
      company: 'Addis Ababa University',
      year: 'May 2019 - July 2019',
      location: 'Addis Ababa',
      description: [
        'Cooperated with designers to create clean interfaces and simple, intuitive interactions and experiences.',
        'Developed project concepts and maintained optimal workflow.',
        'Worked with senior developers to manage large, complex design projects for corporate clients.'
      ]
    }
  ],
  education: [
    {
      degree: 'Bachelor of Science in Information System',
      school: 'Addis Ababa University',
      year: '2020'
    }
  ],
  skills: {
    frontend: [
      'HTML',
      'CSS',
      'JavaScript',
      'Tailwind CSS',
      'Vue',
      'React',
      'TypeScript',
      'Redux',
      'Framer-Motion',
      'Next.js'
    ],
    tools: ['GIT', 'Tableau', 'Jira', 'Firebase', 'Grafana']
  },
  certifications: [
    {
      name: 'Specialization in Front End Web Development',
      issuer: 'ALX',
      year: '2023'
    },
    {
      name: 'Foundations of User Experience (UX) Design',
      issuer: 'Coursera',
      year: '2021'
    }
  ]
}

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}

const ResumeContent = () => {
  return (
    <div className='space-y-16'>
      {/* Summary Section */}
      <motion.section
        variants={sectionVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <h2 className='mb-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100'>
          Summary
        </h2>
        <p className='leading-relaxed text-neutral-600 dark:text-neutral-400'>
          {resumeData.summary}
        </p>
      </motion.section>

      {/* Experience Section - Using Timeline Style */}
      <motion.section
        variants={sectionVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <h2 className='mb-8 text-2xl font-semibold text-neutral-900 dark:text-neutral-100'>
          Experience
        </h2>
        <div className='relative ml-4 md:ml-6'>
          <div className='absolute inset-y-0 left-0 w-px bg-neutral-300 dark:bg-neutral-800' />
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className='relative mb-8 flex flex-col pl-6 last:mb-0'
            >
              <div className='absolute left-0 top-2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-neutral-300 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900' />
              <h3 className='text-lg font-semibold text-neutral-900 dark:text-neutral-100'>
                {exp.role} @ {exp.company}
              </h3>
              <p className='font-mono text-sm text-neutral-500 dark:text-neutral-400'>
                {exp.year}
              </p>
              <ul className='mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-neutral-600 marker:text-[#8B4513] dark:text-neutral-400 dark:marker:text-[#d6ae77]'>
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        variants={sectionVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <h2 className='mb-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100'>
          Education
        </h2>
        {resumeData.education.map((edu, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='flex items-center gap-4'
          >
            <FaGraduationCap className='text-2xl text-neutral-500 dark:text-neutral-400' />
            <div>
              <p className='font-semibold text-neutral-900 dark:text-neutral-100'>
                {edu.degree}
              </p>
              <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                {edu.school} &bull; {edu.year}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Skills & Certifications */}
      <div className='grid grid-cols-1 gap-12 md:grid-cols-2'>
        {/* Skills Section */}
        <motion.section
          variants={sectionVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <h2 className='mb-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100'>
            Skills
          </h2>
          <div className='mb-4 flex items-center gap-4'>
            <FaTools className='text-2xl text-neutral-500 dark:text-neutral-400' />
            <span className='text-lg font-medium text-neutral-900 dark:text-neutral-100'>
              Technologies
            </span>
          </div>
          <div className='flex flex-wrap gap-2'>
            {resumeData.skills.frontend.map((skill, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                className='rounded-full bg-neutral-200 px-3 py-1 text-sm font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300'
              >
                {skill}
              </motion.span>
            ))}
          </div>
          <div className='mb-4 mt-6 flex items-center gap-4'>
            <FaTools className='text-2xl text-neutral-500 dark:text-neutral-400' />
            <span className='text-lg font-medium text-neutral-900 dark:text-neutral-100'>
              Tools
            </span>
          </div>
          <div className='flex flex-wrap gap-2'>
            {resumeData.skills.tools.map((skill, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                className='rounded-full bg-neutral-200 px-3 py-1 text-sm font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300'
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          variants={sectionVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <h2 className='mb-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100'>
            Certifications
          </h2>
          {resumeData.certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className='mb-4 flex items-center gap-4 last:mb-0'
            >
              <FaCertificate className='text-2xl text-neutral-500 dark:text-neutral-400' />
              <div>
                <p className='font-semibold text-neutral-900 dark:text-neutral-100'>
                  {cert.name}
                </p>
                <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                  {cert.issuer} &bull; {cert.year}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.section>
      </div>
    </div>
  )
}

export default ResumeContent
