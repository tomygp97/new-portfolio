import { motion } from 'framer-motion'

import { Project as ProjectInterface } from '@/app/types/project'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'


export default function ProjectCard({ project }: { project: ProjectInterface }) {
    console.log(project)
    return (
        <motion.div 
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="relative w-full h-48 text-black">
                <Image 
                    src={project.imageUrl} 
                    alt={project.title} 
                    layout="fill"
                    className="object-cover"
                    objectFit="cover"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                        {tech}
                    </span>
                    ))}
                </div>
                <div className="flex justify-between">
                    <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                    >
                        <Image src="/github-svgrepo-com.svg" alt="GitHub Logo" width={48} height={48} className="w-5 h-5 mr-2" />
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