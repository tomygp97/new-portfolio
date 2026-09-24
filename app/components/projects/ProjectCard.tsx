'use client'

import Image from "next/image"
import { motion } from 'framer-motion'

import { ExternalLink } from 'lucide-react'
import type { Project as ProjectInterface } from '@/app/types/content'
import { uiLabels } from '@/app/constants'


export default function ProjectCard({ project }: { project: ProjectInterface }) {
    return (
        <motion.div 
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}
        >
            <div className="relative w-full h-48">
                <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    placeholder="blur"
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-gray-700 text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                        {tech}
                    </span>
                    ))}
                </div>
                <div className="flex justify-between mt-auto">
                    <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-blue-800 transition-colors duration-300 gap-1"
                    >
                        <Image src="/github-svgrepo-com.svg" alt="" width={20} height={20} />
                        {uiLabels.github}
                    </a>
                    <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-green-700 hover:text-green-900 transition-colors duration-300"
                    >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        {uiLabels.liveDemo}
                    </a>
                </div>
            </div>
        </motion.div>
    )
}