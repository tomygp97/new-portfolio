import Image from "next/legacy/image"
import { motion } from 'framer-motion'

import { ExternalLink } from 'lucide-react'
import { Project as ProjectInterface } from '@/app/types/project'


export default function ProjectCard({ project }: { project: ProjectInterface }) {
    return (
        <motion.div 
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}
        >
            <div className="relative w-full h-48">
                <Image 
                    src={project.imageUrl}
                    alt={project.title} 
                    layout="fill"
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
                        <Image src="/github-svgrepo-com.svg" alt="GitHub Logo" width={20} height={20} className="" />
                        GitHub
                    </a>
                    <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-green-600 hover:text-green-800 transition-colors duration-300"
                    >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Live Demo
                    </a>
                </div>
            </div>
        </motion.div>
    )
}