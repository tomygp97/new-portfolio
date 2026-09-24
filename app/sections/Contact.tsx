'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from "next/image"
import { Copy, Check } from 'lucide-react'
import { contactInfo, sectionTitles, uiLabels } from '../constants'
import SectionTitle from '../components/SectionTitle'

export default function Contact() {
    const [copiedEmail, setCopiedEmail] = useState(false);

    const handleCopyEmail = async (email: string) => {
        try {
            await navigator.clipboard.writeText(email)
            setCopiedEmail(true)
            setTimeout(() => setCopiedEmail(false), 2000)
        } catch {
            // Sin acceso al portapapeles: el link mailto sigue disponible
        }
    }

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4">
            <SectionTitle title={sectionTitles.contact} />
            <motion.div
                className="max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {contactInfo.map((item, index) => {
                    const isEmail = item.href.startsWith('mailto:')
                    return (
                    <motion.div
                        key={item.label}
                        className="relative flex flex-col items-center bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-300 text-black"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <a
                            href={item.href}
                            {...(isEmail ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                            className="flex flex-col items-center w-full p-4 rounded-lg"
                        >
                            <Image src={item.icon} alt="" width={48} height={48} />
                            <h3 className="text-lg font-semibold mt-2 text-gray-600">{item.label}</h3>
                            <p className="text-sm text-center text-gray-600">{item.username}</p>
                        </a>
                        {isEmail && (
                            <button
                                type="button"
                                onClick={() => handleCopyEmail(item.username)}
                                className="mb-3 inline-flex items-center gap-1 rounded px-3 py-2 text-sm text-gray-700 hover:text-blue-700"
                            >
                                {copiedEmail ? <Check className="w-4 h-4" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
                                {copiedEmail ? uiLabels.emailCopied : uiLabels.copyEmail}
                            </button>
                        )}
                        {isEmail && (
                            <span className="sr-only" aria-live="polite">
                                {copiedEmail ? uiLabels.emailCopiedAnnouncement : ''}
                            </span>
                        )}
                    </motion.div>
                    )
                })}
                </div>
            </motion.div>
            </div>
        </section>
        )

}
