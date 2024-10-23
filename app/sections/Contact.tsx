'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from "next/legacy/image"
import { contactInfo } from '../constants'
import SectionTitle from '../components/SectionTitle'

export default function Contact() {
    const [copiedEmail, setCopiedEmail] = useState(false);

    const handleEmailClick = async (e: React.MouseEvent<HTMLAnchorElement>, item: typeof contactInfo[0]) => {
        if (item.label === 'Email') {
            e.preventDefault()
            try {
                await navigator.clipboard.writeText(item.username)
                setCopiedEmail(true)
                setTimeout(() => setCopiedEmail(false), 2000) // Reset after 2 seconds
                console.log('Email copied to clipboard')
            } catch (err) {
                console.error('Failed to copy text: ', err)
                // Fallback method
                const textArea = document.createElement("textarea")
                textArea.value = item.username
                document.body.appendChild(textArea)
                textArea.focus()
                textArea.select()
                try {
                    document.execCommand('copy')
                    setCopiedEmail(true)
                    setTimeout(() => setCopiedEmail(false), 2000)
                } catch (err) {
                    console.error('Fallback: Oops, unable to copy', err)
                }
                document.body.removeChild(textArea)
            }
        }
    }

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
                        className="flex flex-col items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-300 text-black cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        onClick={(e) => handleEmailClick(e, item)}
                        >
                        <Image src={item.icon.src} alt={item.icon.alt} width={48} height={48} />
                        <h3 className="text-lg font-semibold mt-2 text-gray-600">{item.label}</h3>
                        <p className="text-sm text-center text-gray-600">{item.username}</p>
                        {item.label === 'Email' && copiedEmail && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className='absolute bottom-2 -right-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-2 py-1 rounded text-xs'
                            >
                                Email Copied!
                            </motion.div>
                        )}
                    </motion.a>
                ))}
                </div>
            </motion.div>
            </div>
        </section>
        )

}