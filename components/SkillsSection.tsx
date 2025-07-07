import { useRef, useEffect, useState } from 'react'

export default function SkillsSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isClient, setIsClient] = useState(false)
    
    useEffect(() => {
        setIsClient(true)
    }, [])

    const skills = [
        { name: "Python", level: 85, color: "from-blue-400 to-blue-600", icon: "🐍" },
        { name: "C/C++", level: 80, color: "from-blue-600 to-blue-800", icon: "🔷" },
        { name: "Java", level: 60, color: "from-orange-500 to-red-500", icon: "☕" },
        { name: "SQL", level: 70, color: "from-blue-300 to-blue-500", icon: "🗄️" },
        { name: "Verilog", level: 75, color: "from-purple-500 to-pink-500", icon: "🔌" },
        { name: "Assembly", level: 65, color: "from-gray-500 to-gray-700", icon: "⚙️" },
        { name: "HTML/CSS", level: 80, color: "from-orange-400 to-orange-600", icon: "🌐" },
        { name: "JavaScript", level: 70, color: "from-yellow-500 to-orange-500", icon: "🟨" },
        { name: "React", level: 60, color: "from-cyan-400 to-blue-500", icon: "⚛️" },
        { name: "Git", level: 75, color: "from-orange-500 to-red-500", icon: "📚" },
        { name: "Machine Learning", level: 80, color: "from-purple-500 to-pink-500", icon: "🤖" },
        { name: "Data Structures", level: 85, color: "from-green-400 to-green-600", icon: "📊" }
    ]

    return (
        <section ref={containerRef} id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 20% 80%, #007AFF 0%, transparent 50%), radial-gradient(circle at 80% 20%, #34C759 0%, transparent 50%), radial-gradient(circle at 40% 40%, #FF6B6B 0%, transparent 50%)`,
                }}></div>
            </div>

            {/* Animated Floating Elements */}
            <div className="absolute top-10 right-10 w-24 h-24 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-400/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                        <span className="block">Technical</span>
                        <span className="block text-gradient">Skills</span>
                    </h2>
                    
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        A comprehensive overview of my technical expertise and proficiency levels
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group-hover:border-blue-300"
                        >
                            {/* Skill Header with Magnetic Icon */}
                            <div className="flex items-center justify-between mb-4 relative z-10">
                                <div className="flex items-center space-x-3">
                                    <div className="text-2xl group-hover:rotate-12 transition-transform duration-300">
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                                        {skill.name}
                                    </h3>
                                </div>
                                <span className="text-sm font-medium text-gray-500 group-hover:text-blue-500 transition-colors duration-300">
                                    {skill.level}%
                                </span>
                            </div>

                            {/* Enhanced Progress Bar with Physics */}
                            <div className="relative z-10">
                                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                    <div
                                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden transition-all duration-1000 ease-out`}
                                        style={{ width: `${skill.level}%` }}
                                    >
                                        {/* Shimmer Effect */}
                                        <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Skill Level Indicator with Magnetic Effect */}
                            <div className="mt-3 flex justify-between text-xs text-gray-500 relative z-10">
                                <span>Beginner</span>
                                <span>Expert</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Enhanced Additional Skills Section */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                        Additional Skills & Tools
                    </h3>
                    
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "UNIX Shell", "VS Code", "Arduino", "Raspberry Pi", "Linux",
                            "DevOps", "CI/CD", "Agile", "Scrum", "Embedded Systems",
                            "Microprocessors", "OS Basics", "R", "TensorFlow", "Scikit-learn",
                            "Pandas", "NumPy", "Jupyter", "Computer Vision", "Deep Learning"
                        ].map((tool, index) => (
                            <span
                                key={tool}
                                className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-200/50 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300 cursor-pointer hover:scale-105"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
} 