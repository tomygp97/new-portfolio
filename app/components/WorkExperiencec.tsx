import { motion } from "framer-motion";
import { experiences } from "../constants";
import SectionTitle from "./SectionTitle";


export default function WorkExperience() {
        return (
        <section id="experience" className="py-20 bg-gray-100 min-h-screen">
            <div className="container mx-auto px-4">
            {/* <h2 className="text-3xl font-bold mb-8 text-center text-gray-600">Work Experience</h2> */}
            <SectionTitle title="Work Experience" />
            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-md z-10"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <h3 className="text-xl font-semibold mb-2 text-gray-500">{exp.role}</h3>
                        <p className="text-gray-500 mb-2">{exp.company} | {exp.period}</p>
                        <p className="text-gray-400">{exp.description}</p>
                    </motion.div>
                ))}
            </div>
            </div>
        </section>
        )
}