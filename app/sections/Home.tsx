import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import Image from "next/legacy/image"

export default function Home() {
    return (
        <section
            className="relative bg-gray-100 py-20 h-screen bg-cover bg-center"
            id='home'
            style={{
                backgroundImage: 'url("/background.jpg")',
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
                        src={"/Foto-Perfil.jpg"}
                        alt="Tomás Gutiérrez"
                        width={200}
                        height={200}
                        className="rounded-full mx-auto border-4 border-white shadow-lg text-black"
                    />
                </motion.div>
                <motion.h1
                    // className="text-4xl font-bold mb-4 text-gray-600"
                    className="text-4xl font-bold mb-4 text-gray-100"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Tomás Gutiérrez
                </motion.h1>
                <motion.p
                    // className="text-xl mb-8 text-gray-400"
                    className="text-xl mb-8 text-gray-300"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Full Stack Developer
                </motion.p>
                <motion.p
                    className="max-w-2xl mx-auto text-gray-300"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Full Stack Developer with 2+ years of experience specializing in Golang, Laravel, Next.js, React.js and Node.js. Skilled in building scalable and efficient web applications, with a strong focus on backend development. Currently working as a Backend Developer at Nodos Hub, a software factory in Argentina.
                </motion.p>
                <motion.div
                    className="mt-14"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.a
                        href="/TomasGutierrezResume.pdf" // Enlace al CV
                        className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        download
                    >
                        Download Resume
                        <Download className="ml-2 w-6 h-6" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}