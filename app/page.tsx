'use client'

import { motion } from 'framer-motion'
import HomePage from './components/HomePage'
import Technologies from './components/Technologies'
import Contact from './components/Contact'
import WorkExperience from './components/WorkExperiencec'


export default function Home() {
  return ( 
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HomePage />
      <Technologies />
      <WorkExperience />
      <Contact />
    </motion.div>
  )
}