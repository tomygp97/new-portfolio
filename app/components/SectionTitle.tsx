import { motion } from "framer-motion"

interface SectionTitleProps {
    title: string
}

export default function SectionTitle ({title}: SectionTitleProps) {
    return (
        <motion.h2
            className="text-gray-600 text-3xl md:text-4xl font-bold mb-8 text-center relative pb-3 after:content-[''] after:block after:w-24 after:h-1 after:bg-blue-500 after:mx-auto after:mt-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            // whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 300 } }}  // Añadir un rebote cuando se haga hover
>
            {title}
        </motion.h2>
    )
}
