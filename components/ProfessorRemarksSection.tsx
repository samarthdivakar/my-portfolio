export default function ProfessorRemarksSection() {
    const professors = [
        {
            id: 1,
            name: "Dr. Sarah Johnson",
            position: "Professor of Computer Science",
            department: "School of Engineering",
            institution: "Dayananda Sagar University",
            image: "/professor1.jpg",
            remark: "Samarth is an exceptional student who demonstrates remarkable problem-solving skills and a deep understanding of computer science concepts. His ability to think critically and approach complex problems systematically sets him apart. He consistently shows initiative in learning new technologies and is always eager to help his peers.",
            rating: 5,
            strengths: ["Problem Solving", "Technical Skills", "Leadership", "Innovation"]
        },
        {
            id: 2,
            name: "Prof. Michael Chen",
            position: "Associate Professor",
            department: "Electronics Engineering",
            institution: "Dayananda Sagar University",
            image: "/professor2.jpg",
            remark: "Samarth's analytical thinking and practical approach to engineering problems is commendable. He has shown excellent skills in both theoretical concepts and hands-on implementation. His projects demonstrate creativity and technical proficiency. He is a team player who contributes significantly to group projects.",
            rating: 5,
            strengths: ["Analytical Thinking", "Practical Skills", "Teamwork", "Creativity"]
        },
        {
            id: 3,
            name: "Dr. Emily Rodriguez",
            position: "Assistant Professor",
            department: "Software Engineering",
            institution: "Dayananda Sagar University",
            image: "/professor3.jpg",
            remark: "Samarth exhibits outstanding programming skills and a strong foundation in software development principles. His ability to learn new frameworks quickly and implement complex features is impressive. He shows great potential for becoming an excellent software engineer with his attention to detail and code quality.",
            rating: 5,
            strengths: ["Programming", "Learning Ability", "Code Quality", "Problem Solving"]
        },
        {
            id: 4,
            name: "Prof. David Kim",
            position: "Professor",
            department: "Data Science & AI",
            institution: "Dayananda Sagar University",
            image: "/professor4.jpg",
            remark: "Samarth has shown exceptional aptitude in machine learning and artificial intelligence. His understanding of algorithms and data structures is excellent. He approaches AI problems with both theoretical rigor and practical implementation skills. His enthusiasm for emerging technologies is inspiring.",
            rating: 5,
            strengths: ["Machine Learning", "Algorithms", "AI/ML", "Emerging Tech"]
        }
    ]

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <svg
                key={i}
                className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))
    }

    return (
        <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                        <span className="block">Professor</span>
                        <span className="block text-gradient">Testimonials</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        What my professors and mentors have to say about my academic performance, skills, and potential.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {professors.map((professor) => (
                        <div key={professor.id} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
                            {/* Professor Info */}
                            <div className="flex items-start space-x-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                                    {professor.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{professor.name}</h3>
                                    <p className="text-gray-600 text-sm mb-1">{professor.position}</p>
                                    <p className="text-gray-500 text-sm">{professor.department}</p>
                                    <p className="text-blue-600 text-sm font-medium">{professor.institution}</p>
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center space-x-1 mb-4">
                                {renderStars(professor.rating)}
                                <span className="ml-2 text-sm text-gray-600">({professor.rating}/5)</span>
                            </div>

                            {/* Remark */}
                            <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                                "{professor.remark}"
                            </blockquote>

                            {/* Strengths */}
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-3">Key Strengths:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {professor.strengths.map((strength, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200"
                                        >
                                            {strength}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary Stats */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-200/50">
                        <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                        <div className="text-gray-600">Professors</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-200/50">
                        <div className="text-3xl font-bold text-green-600 mb-2">5.0</div>
                        <div className="text-gray-600">Average Rating</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-200/50">
                        <div className="text-3xl font-bold text-purple-600 mb-2">16</div>
                        <div className="text-gray-600">Strengths Identified</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-200/50">
                        <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                        <div className="text-gray-600">Positive Feedback</div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <p className="text-lg text-gray-600 mb-6">
                        These testimonials reflect my commitment to academic excellence and continuous learning.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                        Let's Discuss Opportunities
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
} 