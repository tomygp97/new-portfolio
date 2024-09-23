'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { contactInfo } from '../constants'
import SectionTitle from './SectionTitle'

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4">
            <SectionTitle title="Contact Me" />
            <motion.div 
                className="max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {contactInfo.map((item, index) => (
                    <motion.a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-300 text-black"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                        <Image src={item.icon.src} alt={item.icon.alt} width={48} height={48} />
                        <h3 className="text-lg font-semibold mt-2 text-gray-600">{item.label}</h3>
                        
                        <p className="text-sm text-center text-gray-600">{item.username}</p>
                    </motion.a>
                ))}
                </div>
            </motion.div>
            </div>
        </section>
        )

}