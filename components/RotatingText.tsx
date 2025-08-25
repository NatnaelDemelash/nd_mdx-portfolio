'use client'

import React, { useState, useEffect } from 'react'
import {
  Code,
  Zap,
  BrainCircuit,
  LayoutPanelLeft,
  ServerCog
} from 'lucide-react'

// ✨ 1. We now use an array of objects to include icons and text
const ROTATING_CONTENT = [
  {
    icon: <Code size={32} className='text-emerald-400' />,
    text: 'Front-End Site Development'
  },
  {
    icon: <Zap size={32} className='text-emerald-400' />,
    text: 'Workflow Automation with(n8n, Zapier, ...)'
  },
  {
    icon: <BrainCircuit size={32} className='text-emerald-400' />,
    text: 'AI-Powered Integrations'
  },
  {
    icon: <LayoutPanelLeft size={32} className='text-emerald-400' />,
    text: 'Responsive UI/UX Design'
  },
  {
    icon: <ServerCog size={32} className='text-emerald-400' />,
    text: 'API Development & Automation'
  }
]

const RotatingText = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // ✨ 2. Increased interval time to 4 seconds for a longer stay
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % ROTATING_CONTENT.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    // ✨ 3. This is the main card container with the glassmorphic style
    <div className='md:h-18 relative flex h-14 w-full max-w-md items-center justify-center overflow-hidden rounded-xl border border-emerald-400/20 bg-gradient-to-r from-emerald-400/10 via-green-500/10 to-emerald-400/10 px-6 py-4 shadow-lg backdrop-blur-sm'>
      {ROTATING_CONTENT.map((item, index) => (
        // ✨ 4. This container handles the slide-up animation
        <div
          key={index}
          className={`absolute flex w-full items-center gap-4 transition-all duration-700 ease-in-out ${
            index === currentIndex
              ? 'translate-y-0 opacity-100'
              : 'translate-y-full opacity-0'
          }`}
        >
          {/* 5. The interactive icon with hover effect */}
          <div className='ml-4 flex-shrink-0 transform transition-transform duration-300 hover:scale-110'>
            {item.icon}
          </div>
          {/* 6. The text with the golden gradient */}
          <span className='bg-gradient-to-r from-[#ab8a51] via-[#d6ae77] to-[#A68A64] bg-clip-text text-left text-base font-bold text-transparent md:text-lg'>
            {item.text}
          </span>
        </div>
      ))}
    </div>
  )
}

export default RotatingText
