import { motion } from 'framer-motion'

export default function SkillsSection() {
    const skills = [
        { name: 'React', level: 85, color: 'from-blue-500 to-blue-600' },
        { name: 'JavaScript', level: 90, color: 'from-yellow-500 to-yellow-600' },
        { name: 'TypeScript', level: 80, color: 'from-blue-600 to-blue-700' },
        { name: 'Node.js', level: 75, color: 'from-green-500 to-green-600' },
        { name: 'Python', level: 85, color: 'from-blue-500 to-purple-600' },
        { name: 'HTML/CSS', level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'Tailwind CSS', level: 90, color: 'from-cyan-500 to-blue-500' },
        { name: 'Git', level: 80, color: 'from-orange-600 to-red-600' },
        { name: 'PostgreSQL', level: 70, color: 'from-blue-400 to-blue-500' },
        { name: 'MongoDB', level: 65, color: 'from-green-400 to-green-500' },
        { name: 'Docker', level: 60, color: 'from-blue-500 to-blue-600' },
        { name: 'AWS', level: 55, color: 'from-orange-500 to-yellow-500' }
    ]

    const frameworks = [
        { name: 'Next.js', icon: '⚡' },
        { name: 'Express.js', icon: '🚀' },
        { name: 'NestJS', icon: '🪺' },
        { name: 'Django', icon: '🐍' },
        { name: 'TensorFlow', icon: '🧠' },
        { name: 'PyTorch', icon: '🔥' },
        { name: 'Redux', icon: '🔄' },
        { name: 'GraphQL', icon: '📊' }
    ]

    const tools = [
        { name: 'VS Code', icon: '💻' },
        { name: 'Postman', icon: '📮' },
        { name: 'Figma', icon: '🎨' },
        { name: 'Jira', icon: '📋' },
        { name: 'Docker', icon: '🐳' },
        { name: 'GitHub', icon: '🐙' },
        { name: 'Vercel', icon: '▲' },
        { name: 'Netlify', icon: '🌐' }
    ]

    return (
        <section id="skills" className="py-20 bg-white">
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
                        Skills & Technologies
                    </motion.h2>
                    <motion.p 
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        A comprehensive overview of my technical skills and the tools I use to bring ideas to life.
                    </motion.p>
                </motion.div>

                {/* Programming Languages & Skills */}
                <motion.div 
                    className="mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <motion.h3 
                        className="text-2xl font-semibold text-gray-900 mb-8 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Programming Languages & Skills
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div 
                                key={skill.name}
                                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02, y: -2 }}
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-semibold text-gray-800">{skill.name}</span>
                                    <span className="text-sm text-gray-600">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                    <motion.div 
                                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Frameworks & Libraries */}
                <motion.div 
                    className="mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <motion.h3 
                        className="text-2xl font-semibold text-gray-900 mb-8 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Frameworks & Libraries
                    </motion.h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        {frameworks.map((framework, index) => (
                            <motion.div 
                                key={framework.name}
                                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-blue-100"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <motion.div 
                                    className="text-4xl mb-3"
                                    animate={{ rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                                >
                                    {framework.icon}
                                </motion.div>
                                <h4 className="font-semibold text-gray-800">{framework.name}</h4>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Tools & Platforms */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.h3 
                        className="text-2xl font-semibold text-gray-900 mb-8 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Tools & Platforms
                    </motion.h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        {tools.map((tool, index) => (
                            <motion.div 
                                key={tool.name}
                                className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-green-100"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <motion.div 
                                    className="text-4xl mb-3"
                                    animate={{ y: [0, -3, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                                >
                                    {tool.icon}
                                </motion.div>
                                <h4 className="font-semibold text-gray-800">{tool.name}</h4>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Additional Skills */}
                <motion.div 
                    className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.h3 
                        className="text-2xl font-semibold text-gray-900 mb-6 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        viewport={{ once: true }}
                    >
                        Additional Skills
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <motion.div 
                            className="text-center"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-3xl mb-3">🎯</div>
                            <h4 className="font-semibold text-gray-800 mb-2">Problem Solving</h4>
                            <p className="text-gray-600 text-sm">Strong analytical and logical thinking skills</p>
                        </motion.div>
                        <motion.div 
                            className="text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.4 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-3xl mb-3">🤝</div>
                            <h4 className="font-semibold text-gray-800 mb-2">Team Collaboration</h4>
                            <p className="text-gray-600 text-sm">Excellent communication and teamwork abilities</p>
                        </motion.div>
                        <motion.div 
                            className="text-center"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-3xl mb-3">📚</div>
                            <h4 className="font-semibold text-gray-800 mb-2">Continuous Learning</h4>
                            <p className="text-gray-600 text-sm">Always eager to learn new technologies and methodologies</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
} 