export default function EducationSection() {
    const education = [
        {
            id: 1,
            degree: "B.Tech in Electronics and Computer Engineering",
            institution: "REVA University",
            location: "Bangalore, India",
            duration: "2022 - 2026",
            gpa: "8.21/10",
            description: "Currently pursuing my degree with focus on computer science, electronics, and software engineering principles. Minor in Artificial Intelligence and Machine Learning.",
            highlights: [
                "Core subjects: Data Structures, Algorithms, Database Management, Web Development",
                "Electronics: Digital Electronics, Microprocessors, Communication Systems",
                "Software: Object-Oriented Programming, Software Engineering, Operating Systems",
                "AI/ML: Machine Learning, Deep Learning, Computer Vision"
            ],
            achievements: [
                "Current Semester: 8th",
                "Minor in Artificial Intelligence and Machine Learning",
                "Active participation in technical clubs and workshops",
                "Completed multiple industry-relevant projects"
            ]
        },
        {
            id: 2,
            degree: "ISC (12th Grade)",
            institution: "St. Vincent Pallotti School",
            location: "Bangalore, India",
            duration: "2020 - 2022",
            gpa: "N/A",
            description: "Completed higher secondary education with focus on Science stream including Mathematics, Physics, and Computer Science.",
            highlights: [
                "Science Stream with Mathematics and Computer Science",
                "Strong foundation in logical thinking and problem-solving",
                "Active participation in school technical events"
            ],
            achievements: [
                "Excellent academic performance",
                "Participated in science exhibitions",
                "Member of school's computer club"
            ]
        },
        {
            id: 3,
            degree: "ICSE (10th Grade)",
            institution: "St. Vincent Pallotti School",
            location: "Bangalore, India",
            duration: "2018 - 2020",
            gpa: "94.6%",
            description: "Completed secondary education with excellent academic performance and strong foundation in core subjects.",
            highlights: [
                "Comprehensive curriculum covering all core subjects",
                "Strong foundation in Mathematics and Science",
                "Active participation in extracurricular activities"
            ],
            achievements: [
                "Outstanding academic performance with 94.6%",
                "Participated in various school events",
                "Strong foundation for higher studies"
            ]
        }
    ]

    const certifications = [
        {
            name: "Reinforcement Learning",
            issuer: "MathWorks",
            date: "2024",
            credential: "Reinforcement Learning Onramp"
        },
        {
            name: "Machine Learning",
            issuer: "MathWorks",
            date: "2024",
            credential: "Machine Learning Onramp"
        },
        {
            name: "Deep Learning",
            issuer: "MathWorks",
            date: "2024",
            credential: "Deep Learning Onramp"
        },
        {
            name: "Computer Vision",
            issuer: "MathWorks",
            date: "2024",
            credential: "Computer Vision Onramp"
        },
        {
            name: "Networking Basics",
            issuer: "Cisco",
            date: "2024",
            credential: "Cisco Networking Academy"
        },
        {
            name: "Front-End Development",
            issuer: "Meta",
            date: "2024",
            credential: "Meta Front-End Developer (Ongoing)"
        }
    ]

    return (
        <section id="education" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                        <span className="block">Education</span>
                        <span className="block text-gradient">Journey</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        My academic background and continuous learning journey that has shaped my technical expertise.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Education Timeline */}
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Academic Background</h3>
                        <div className="space-y-8">
                            {education.map((edu, index) => (
                                <div key={edu.id} className="relative">
                                    {/* Timeline Line */}
                                    {index < education.length - 1 && (
                                        <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                                    )}
                                    
                                    <div className="flex items-start space-x-6">
                                        {/* Timeline Dot */}
                                        <div className="relative">
                                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                                                {index + 1}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                                <h4 className="text-xl font-bold text-gray-900 mb-2 sm:mb-0">
                                                    {edu.degree}
                                                </h4>
                                                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                                                    {edu.gpa}
                                                </span>
                                            </div>
                                            
                                            <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mb-4">
                                                <span className="font-semibold text-gray-800">{edu.institution}</span>
                                                <span className="hidden sm:block mx-2">•</span>
                                                <span>{edu.location}</span>
                                                <span className="hidden sm:block mx-2">•</span>
                                                <span className="text-blue-600 font-medium">{edu.duration}</span>
                                            </div>
                                            
                                            <p className="text-gray-700 mb-4 leading-relaxed">
                                                {edu.description}
                                            </p>

                                            {/* Highlights */}
                                            <div className="mb-4">
                                                <h5 className="font-semibold text-gray-900 mb-2">Key Highlights:</h5>
                                                <ul className="space-y-1">
                                                    {edu.highlights.map((highlight, hIndex) => (
                                                        <li key={hIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                                                            <span className="text-blue-500 mt-1">•</span>
                                                            <span>{highlight}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Achievements */}
                                            <div>
                                                <h5 className="font-semibold text-gray-900 mb-2">Achievements:</h5>
                                                <ul className="space-y-1">
                                                    {edu.achievements.map((achievement, aIndex) => (
                                                        <li key={aIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                                                            <span className="text-green-500 mt-1">✓</span>
                                                            <span>{achievement}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Sidebar */}
                    <div className="lg:col-span-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Certifications</h3>
                        <div className="space-y-6">
                            {certifications.map((cert, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                                            {cert.name.charAt(0)}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-gray-900 mb-1">{cert.name}</h4>
                                            <p className="text-sm text-gray-600 mb-2">{cert.issuer}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs text-blue-600 font-medium">{cert.credential}</span>
                                                <span className="text-xs text-gray-500">{cert.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Additional Info */}
                        <div className="mt-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-gray-200/50">
                            <h4 className="font-semibold text-gray-900 mb-4">Learning Philosophy</h4>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                I believe in continuous learning and staying updated with the latest technologies. 
                                My education journey combines formal academic learning with practical, hands-on experience 
                                through projects and self-study.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 