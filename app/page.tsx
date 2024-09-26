'use client'

import { motion } from 'framer-motion'
import HomePage from './sections/Home'
import Technologies from './sections/Technologies'
import Contact from './sections/Contact'
import WorkExperience from './sections/WorkExperiencec'
import Projects from './sections/Projects'


export default function Home() {
  return ( 
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HomePage />
      <Technologies />
      <Projects />
      <WorkExperience />
      <Contact />
    </motion.div>
  )
}