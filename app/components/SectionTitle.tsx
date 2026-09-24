'use client'

import { motion } from "framer-motion"

interface SectionTitleProps {
    title: string
}

export default function SectionTitle ({title}: SectionTitleProps) {
    return (
        <motion.h2
            className="text-gray-600 text-3xl md:text-4xl font-bold mb-8 text-center relative pb-3 after:content-[''] after:block after:w-24 after:h-1 after:bg-blue-500 after:mx-auto after:mt-2"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
>
            {title}
        </motion.h2>
    )
}
