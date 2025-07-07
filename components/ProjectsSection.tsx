export default function ProjectsSection() {
    const completedProjects = [
        {
            id: 1,
            title: "Personal Portfolio Website",
            description: "A modern, responsive portfolio website built with React, TypeScript, and TailwindCSS. Features smooth animations, dark mode, and a beautiful UI design.",
            technologies: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
            image: "/portfolio-preview.jpg",
            github: "https://github.com/samarthdivakar/portfolio",
            live: "https://samarth-portfolio.vercel.app",
            category: "Web Development"
        },
        {
            id: 2,
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            image: "/ecommerce-preview.jpg",
            github: "https://github.com/samarthdivakar/ecommerce",
            live: "https://ecommerce-demo.vercel.app",
            category: "Full Stack"
        },
        {
            id: 3,
            title: "Machine Learning Model for Image Classification",
            description: "A deep learning model using TensorFlow and Keras for image classification with 95% accuracy on the CIFAR-10 dataset.",
            technologies: ["Python", "TensorFlow", "Keras", "NumPy", "Pandas"],
            image: "/ml-preview.jpg",
            github: "https://github.com/samarthdivakar/image-classifier",
            live: null,
            category: "Machine Learning"
        },
        {
            id: 4,
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
            technologies: ["React", "Firebase", "TailwindCSS", "React DnD"],
            image: "/task-app-preview.jpg",
            github: "https://github.com/samarthdivakar/task-manager",
            live: "https://task-manager-demo.vercel.app",
            category: "Web Development"
        }
    ]

    const plannedProjects = [
        {
            id: 5,
            title: "AI-Powered Chat Application",
            description: "A real-time chat application with AI-powered features like smart replies, sentiment analysis, and automated responses.",
            technologies: ["React", "Node.js", "Socket.io", "OpenAI API", "PostgreSQL"],
            image: "/chat-app-preview.jpg",
            github: null,
            live: null,
            category: "AI/ML",
            status: "In Planning"
        },
        {
            id: 6,
            title: "Blockchain-Based Voting System",
            description: "A decentralized voting system using blockchain technology for secure, transparent, and tamper-proof elections.",
            technologies: ["Solidity", "Web3.js", "React", "Node.js", "IPFS"],
            image: "/voting-system-preview.jpg",
            github: null,
            live: null,
            category: "Blockchain",
            status: "In Planning"
        },
        {
            id: 7,
            title: "Real-Time Analytics Dashboard",
            description: "A comprehensive analytics dashboard with real-time data visualization, custom reports, and interactive charts.",
            technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Redis"],
            image: "/analytics-preview.jpg",
            github: null,
            live: null,
            category: "Data Analytics",
            status: "In Planning"
        }
    ]

    return (
        <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                        <span className="block">Featured</span>
                        <span className="block text-gradient">Projects</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        A showcase of my completed projects and upcoming ideas that demonstrate my skills and passion for technology.
                    </p>
                </div>

                {/* Completed Projects */}
                <div className="mb-20">
                    <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Completed Projects
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {completedProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className="group bg-white rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
                            >
                                {/* Project Image */}
                                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-6xl opacity-20">🚀</div>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                                            Completed
                                        </span>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <div className="mb-4">
                                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                            {project.category}
                                        </span>
                                    </div>
                                    
                                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                        {project.title}
                                    </h4>
                                    
                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {project.description}
                                    </p>
                                    
                                    {/* Technologies */}
                                    <div className="mb-6">
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    {/* Project Links */}
                                    <div className="flex space-x-3">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 bg-gray-900 text-white py-2 px-4 rounded-lg text-sm font-semibold text-center hover:bg-gray-800 transition-colors duration-300"
                                            >
                                                View Code
                                            </a>
                                        )}
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg text-sm font-semibold text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                                            >
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Planned Projects */}
                <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Upcoming Projects
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {plannedProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 relative"
                            >
                                {/* Project Image */}
                                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-gray-600/20"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-6xl opacity-20">🔄</div>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                                            {project.status}
                                        </span>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <div className="mb-4">
                                        <span className="text-sm font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                                            {project.category}
                                        </span>
                                    </div>
                                    
                                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                                        {project.title}
                                    </h4>
                                    
                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {project.description}
                                    </p>
                                    
                                    {/* Technologies */}
                                    <div className="mb-6">
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    {/* Coming Soon Badge */}
                                    <div className="text-center">
                                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold rounded-lg">
                                            Coming Soon
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <p className="text-lg text-gray-600 mb-6">
                        Interested in collaborating on a project or have an idea you'd like to discuss?
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                        Let's Work Together
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
} 