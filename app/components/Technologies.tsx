'use client'


import { motion } from 'framer-motion'
import { technologies } from '../constants';
import SectionTitle from './SectionTitle';

function TechIcon({ icon, name }: { icon: React.ReactNode; name: string }) {
    return (
        <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            >
            {icon}
            <span className="mt-2 text-sm">{name}</span>
        </motion.div>
    )
}

export default function Technologies() {
    return (
        <section id="technologies" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* <h2 className="text-3xl font-bold mb-10 text-center text-gray-600" id="technologies">Technologies</h2> */}
                <SectionTitle title="Technologies"/>
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, staggerChildren: 0.1 }}
                    >
                    {technologies.map((tech) => (
                        <TechIcon key={tech.name} icon={tech.icon} name={tech.name} />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}