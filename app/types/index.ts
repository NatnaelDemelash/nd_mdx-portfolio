// src/types/index.ts

import { IconType } from 'react-icons/lib'

export interface Experience {
  year: string
  role: string
  company: string
  description: string[] // Updated to an array of strings
  technologies?: string[]
}

export interface Project {
  num: string
  category: string
  title: string
  description: string
  tech: IconType[]
  demo: string
  githubLink: string
  cover: string
  background: string
}

export interface Technology {
  icon: IconType
  name: string
}
