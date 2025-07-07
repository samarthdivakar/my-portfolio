export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                        <span className="block">About</span>
                        <span className="block text-gradient">Me</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Get to know me better - my journey, passion for technology, and what drives me to create innovative solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* About Content */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Hello! I'm Samarth Divakar, a curious and motivated engineering student specializing in Electronics and Computer Engineering with a minor in AI/ML. While I am at the beginning of my journey and not yet an expert, I am deeply interested in exploring real-world software development, machine learning, and system design.
                            </p>
                            
                            <p className="text-lg text-gray-700 leading-relaxed">
                                My goal is to grow into a skilled and reliable professional under the guidance of mentors. I have explored embedded systems, machine learning projects, web development, and basic DevOps tools. I may not be highly experienced yet, but I bring a growth mindset, adaptability, and the willingness to put in focused effort to learn.
                            </p>
                            
                            <p className="text-lg text-gray-700 leading-relaxed">
                                I'm seeking an opportunity to gain exposure, contribute wherever I can, and grow into a valuable member of a forward-thinking tech team. When I'm not coding or studying, you can find me solving algorithmic challenges on LeetCode, exploring new technologies, or collaborating with fellow developers on exciting projects.
                            </p>
                        </div>

                        {/* Key Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">Problem Solver</h3>
                                </div>
                                <p className="text-gray-600">Passionate about solving complex problems with innovative technical solutions.</p>
                            </div>

                            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">Continuous Learner</h3>
                                </div>
                                <p className="text-gray-600">Always eager to learn new technologies and stay updated with industry trends.</p>
                            </div>

                            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">Team Player</h3>
                                </div>
                                <p className="text-gray-600">Enjoy collaborating with others and contributing to team success.</p>
                            </div>

                            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">Fast Learner</h3>
                                </div>
                                <p className="text-gray-600">Quick to adapt to new technologies and frameworks.</p>
                            </div>
                        </div>
                    </div>

                    {/* Profile Image/Stats */}
                    <div className="space-y-8">
                        {/* Profile Card */}
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-200/50">
                            <div className="text-center mb-6">
                                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                                    <img 
                                        src="/profile-photo.jpg" 
                                        alt="Samarth Divakar" 
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            const fallback = target.nextElementSibling as HTMLElement;
                                            if (fallback) fallback.style.display = 'flex';
                                        }}
                                    />
                                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold" style={{display: 'none'}}>
                                        SD
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Samarth Divakar</h3>
                                <p className="text-gray-600">Electronics & Computer Engineering Student</p>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-4 bg-white/50 rounded-xl">
                                    <div className="text-2xl font-bold text-blue-600">4+</div>
                                    <div className="text-sm text-gray-600">Projects</div>
                                </div>
                                <div className="text-center p-4 bg-white/50 rounded-xl">
                                    <div className="text-2xl font-bold text-green-600">150+</div>
                                    <div className="text-sm text-gray-600">LeetCode Problems</div>
                                </div>
                                <div className="text-center p-4 bg-white/50 rounded-xl">
                                    <div className="text-2xl font-bold text-purple-600">2+</div>
                                    <div className="text-sm text-gray-600">Years Experience</div>
                                </div>
                                <div className="text-center p-4 bg-white/50 rounded-xl">
                                    <div className="text-2xl font-bold text-orange-600">8+</div>
                                    <div className="text-sm text-gray-600">Technologies</div>
                                </div>
                            </div>
                        </div>

                        {/* Current Focus */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/50">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Currently Focused On</h4>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                    <span className="text-gray-700">Full-Stack Web Development</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span className="text-gray-700">Machine Learning & AI</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                    <span className="text-gray-700">Algorithmic Problem Solving</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                                    <span className="text-gray-700">Database Design & Optimization</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 