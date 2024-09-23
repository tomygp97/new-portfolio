import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HomePage() {
    return (
        <section className="bg-gray-100 py-20 h-screen" id='home'>
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 relative inline-block"
                    whileHover={{ scale: 1.05 }}
                >
                    <Image
                        src={"/Foto-Perfil.jpg"}
                        alt="Tomás Gutiérrez"
                        width={200}
                        height={200}
                        className="rounded-full mx-auto border-4 border-white shadow-lg text-black"
                    />
                </motion.div>
                <motion.h1
                className="text-4xl font-bold mb-4 text-gray-600"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                >
                Tomás Gutiérrez
                </motion.h1>
                <motion.p
                className="text-xl mb-8 text-gray-400"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                >
                Full Stack Developer
                </motion.p>
                <motion.p
                className="max-w-2xl mx-auto text-gray-400"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                >
                Passionate Full Stack Developer with extensive experience in JavaScript, React, Node.js, and PHP.
                Dedicated to creating efficient, scalable, and user-friendly web applications.
                </motion.p>
            </div>
        </section>
    )
}