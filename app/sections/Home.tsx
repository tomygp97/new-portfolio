'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import Image from "next/image"
import { hero, siteConfig } from '../constants'

export default function Home() {
    return (
        <section
            className="relative bg-gray-100 py-20 min-h-screen bg-cover bg-center"
            id='home'
            style={{
                backgroundImage: 'url("/background.webp")',
            }}
        >
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 relative inline-block"
                    whileHover={{ scale: 1.05 }}
                    style={{ zIndex: 1}}
                >
                    <Image
                        src={hero.photo.src}
                        alt={hero.photo.alt}
                        width={200}
                        height={200}
                        priority
                        className="rounded-full mx-auto border-4 border-white shadow-lg"
                    />
                </motion.div>
                {/* El texto del hero se renderiza visible desde el HTML para no retrasar el LCP */}
                <h1 className="text-4xl font-bold mb-4 text-gray-100">
                    {siteConfig.name}
                </h1>
                <p className="text-xl mb-8 text-gray-300">
                    {hero.role}
                </p>
                <p className="max-w-2xl mx-auto text-gray-300">
                    {hero.pitch}
                </p>
                <motion.div
                    className="mt-14"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.a
                        href={hero.resume.href}
                        className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        download
                    >
                        {hero.resume.label}
                        <Download className="ml-2 w-6 h-6" aria-hidden="true" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}
