import { motion } from 'framer-motion'

export default function ProjectsSection() {
    const completedProjects = [
        {
            title: "Personal Portfolio Website",
            description: "A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and mobile-first design.",
            technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
            github: "https://github.com/samarthdivakar/portfolio",
            live: "https://samarth-portfolio.vercel.app",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
            category: "Web Development"
        },
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            github: "https://github.com/samarthdivakar/ecommerce",
            live: "https://ecommerce-demo.vercel.app",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
            category: "Full Stack"
        },
        {
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
            technologies: ["React", "Firebase", "Material-UI", "React DnD"],
            github: "https://github.com/samarthdivakar/task-manager",
            live: "https://task-manager-demo.vercel.app",
            image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop",
            category: "Web App"
        }
    ]

    const plannedProjects = [
        {
            title: "AI-Powered Chatbot",
            description: "An intelligent chatbot using natural language processing and machine learning to provide customer support and assistance.",
            technologies: ["Python", "TensorFlow", "NLP", "FastAPI"],
            status: "In Planning",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
            category: "AI/ML"
        },
        {
            title: "Social Media Analytics Dashboard",
            description: "A comprehensive analytics dashboard for social media platforms with data visualization and insights.",
            technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
            status: "In Planning",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
            category: "Data Analytics"
        },
        {
            title: "Mobile Fitness App",
            description: "A cross-platform mobile app for fitness tracking, workout plans, and progress monitoring.",
            technologies: ["React Native", "Firebase", "Redux", "Expo"],
            status: "In Planning",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
            category: "Mobile Development"
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.h2 
                        className="text-4xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        My Projects
                    </motion.h2>
                    <motion.p 
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        A showcase of my completed projects and upcoming ideas that demonstrate my skills and passion for development.
                    </motion.p>
                </motion.div>

                {/* Completed Projects */}
                <motion.div 
                    className="mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <motion.h3 
                        className="text-3xl font-semibold text-gray-900 mb-8 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Completed Projects
                    </motion.h3>
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {completedProjects.map((project, index) => (
                            <motion.div 
                                key={project.title}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                                variants={itemVariants}
                                whileHover={{ scale: 1.02, y: -5 }}
                            >
                                <motion.div 
                                    className="relative overflow-hidden h-48"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <motion.div 
                                        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                    />
                                    <motion.div 
                                        className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileHover={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {project.category}
                                    </motion.div>
                                </motion.div>
                                <div className="p-6">
                                    <motion.h4 
                                        className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300"
                                        whileHover={{ x: 5 }}
                                    >
                                        {project.title}
                                    </motion.h4>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech) => (
                                            <motion.span 
                                                key={tech}
                                                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                                                whileHover={{ scale: 1.05, backgroundColor: "#3B82F6", color: "white" }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                    <div className="flex gap-3">
                                        <motion.a 
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 bg-gray-900 text-white text-center py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            GitHub
                                        </motion.a>
                                        <motion.a 
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Live Demo
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Planned Projects */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <motion.h3 
                        className="text-3xl font-semibold text-gray-900 mb-8 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Upcoming Projects
                    </motion.h3>
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {plannedProjects.map((project, index) => (
                            <motion.div 
                                key={project.title}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 border-dashed border-gray-200"
                                variants={itemVariants}
                                whileHover={{ scale: 1.02, y: -5 }}
                            >
                                <motion.div 
                                    className="relative overflow-hidden h-48"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-70"
                                    />
                                    <motion.div 
                                        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                                        initial={{ opacity: 0.3 }}
                                        whileHover={{ opacity: 0.6 }}
                                    />
                                    <motion.div 
                                        className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        {project.status}
                                    </motion.div>
                                    <motion.div 
                                        className="absolute top-4 right-4 bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileHover={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {project.category}
                                    </motion.div>
                                </motion.div>
                                <div className="p-6">
                                    <motion.h4 
                                        className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300"
                                        whileHover={{ x: 5 }}
                                    >
                                        {project.title}
                                    </motion.h4>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <motion.span 
                                                key={tech}
                                                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                                                whileHover={{ scale: 1.05, backgroundColor: "#F97316", color: "white" }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Call to Action */}
                <motion.div 
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.p 
                        className="text-lg text-gray-600 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Interested in collaborating on a project? Let's build something amazing together!
                    </motion.p>
                    <motion.a 
                        href="#contact"
                        className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>Get In Touch</span>
                        <motion.svg 
                            className="ml-2 h-5 w-5" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </motion.svg>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
} 