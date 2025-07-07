export default function LeetCodeSection() {
    const stats = {
        totalSolved: 150,
        easy: 80,
        medium: 60,
        hard: 10,
        acceptanceRate: 78,
        ranking: "Top 25%",
        streak: 50,
        rating: 1200
    }

    const badges = [
        {
            name: "Problem Solver",
            description: "Solved 150+ problems",
            icon: "🎯",
            color: "from-blue-500 to-cyan-500"
        },
        {
            name: "Consistent Coder",
            description: "50 day streak",
            icon: "🔥",
            color: "from-orange-500 to-red-500"
        },
        {
            name: "Algorithm Learner",
            description: "Top 25% ranking",
            icon: "🏆",
            color: "from-yellow-500 to-orange-500"
        },
        {
            name: "Data Structures Expert",
            description: "Advanced concepts",
            icon: "📊",
            color: "from-green-500 to-blue-500"
        },
        {
            name: "Dynamic Programming",
            description: "DP problems solved",
            icon: "⚡",
            color: "from-purple-500 to-pink-500"
        },
        {
            name: "Graph Theory",
            description: "Graph algorithms",
            icon: "🕸️",
            color: "from-indigo-500 to-purple-500"
        }
    ]

    const recentProblems = [
        {
            id: 1,
            title: "Binary Tree Maximum Path Sum",
            difficulty: "Hard",
            status: "Solved",
            date: "2024-01-15",
            category: "Tree, DFS"
        },
        {
            id: 2,
            title: "Longest Palindromic Substring",
            difficulty: "Medium",
            status: "Solved",
            date: "2024-01-14",
            category: "String, DP"
        },
        {
            id: 3,
            title: "Merge k Sorted Lists",
            difficulty: "Hard",
            status: "Solved",
            date: "2024-01-13",
            category: "Linked List, Heap"
        },
        {
            id: 4,
            title: "Valid Parentheses",
            difficulty: "Easy",
            status: "Solved",
            date: "2024-01-12",
            category: "Stack"
        },
        {
            id: 5,
            title: "Two Sum",
            difficulty: "Easy",
            status: "Solved",
            date: "2024-01-11",
            category: "Array, Hash Table"
        }
    ]

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty.toLowerCase()) {
            case 'easy': return 'text-green-600 bg-green-100'
            case 'medium': return 'text-yellow-600 bg-yellow-100'
            case 'hard': return 'text-red-600 bg-red-100'
            default: return 'text-gray-600 bg-gray-100'
        }
    }

    return (
        <section id="leetcode" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                        <span className="block">LeetCode</span>
                        <span className="block text-gradient">Profile</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        My journey in algorithmic problem solving and competitive programming on LeetCode.
                    </p>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-16">
                                            <div className="col-span-2 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl p-6 text-center">
                            <div className="text-3xl font-bold mb-2">{stats.totalSolved}</div>
                            <div className="text-sm opacity-90">Total Solved</div>
                            <div className="text-xs opacity-75 mt-1">Following NeetCode Roadmap</div>
                        </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-2xl p-4 text-center">
                        <div className="text-2xl font-bold text-green-600 mb-1">{stats.easy}</div>
                        <div className="text-xs text-green-700">Easy</div>
                    </div>
                    
                    <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 text-center">
                        <div className="text-2xl font-bold text-yellow-600 mb-1">{stats.medium}</div>
                        <div className="text-xs text-yellow-700">Medium</div>
                    </div>
                    
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-center">
                        <div className="text-2xl font-bold text-red-600 mb-1">{stats.hard}</div>
                        <div className="text-xs text-red-700">Hard</div>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">{stats.acceptanceRate}%</div>
                        <div className="text-xs text-blue-700">Acceptance</div>
                    </div>
                    
                    <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 text-center">
                        <div className="text-2xl font-bold text-purple-600 mb-1">{stats.rating}</div>
                        <div className="text-xs text-purple-700">Rating</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Badges */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Achievements & Badges</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {badges.map((badge, index) => (
                                <div key={index} className="group bg-white rounded-xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
                                    <div className="flex items-center space-x-4">
                                        <div className={`w-12 h-12 bg-gradient-to-r ${badge.color} rounded-lg flex items-center justify-center text-white text-xl`}>
                                            {badge.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                                {badge.name}
                                            </h4>
                                            <p className="text-sm text-gray-600">{badge.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Problems */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Recent Problems Solved</h3>
                        <div className="space-y-4">
                            {recentProblems.map((problem) => (
                                <div key={problem.id} className="bg-white rounded-xl p-4 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                                            {problem.title}
                                        </h4>
                                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(problem.difficulty)}`}>
                                            {problem.difficulty}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm text-gray-600">
                                        <span>{problem.category}</span>
                                        <span>{problem.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* View Profile Button */}
                        <div className="mt-8 text-center">
                            <a
                                href="https://leetcode.com/samarthdivakar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a1.653 1.653 0 0 0 0 2.227 1.653 1.653 0 0 0 2.227 0l3.854-4.126 5.406 5.788a1.653 1.653 0 0 0 2.227 0 1.653 1.653 0 0 0 0-2.227L9.736 6.226l5.406-5.788a1.374 1.374 0 0 0 0-1.938 1.374 1.374 0 0 0-1.659 0z"/>
                                </svg>
                                View Full Profile
                            </a>
                        </div>
                    </div>
                </div>

                {/* Skills Progress */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Problem-Solving Skills</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200/50">
                            <h4 className="font-semibold text-gray-900 mb-4">Data Structures</h4>
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span>Arrays & Strings</span>
                                    <span className="text-green-600 font-medium">95%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full" style={{width: '95%'}}></div>
                                </div>
                                
                                <div className="flex justify-between text-sm">
                                    <span>Linked Lists</span>
                                    <span className="text-blue-600 font-medium">90%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '90%'}}></div>
                                </div>
                                
                                <div className="flex justify-between text-sm">
                                    <span>Trees & Graphs</span>
                                    <span className="text-purple-600 font-medium">85%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '85%'}}></div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200/50">
                            <h4 className="font-semibold text-gray-900 mb-4">Algorithms</h4>
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span>Sorting & Searching</span>
                                    <span className="text-green-600 font-medium">92%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full" style={{width: '92%'}}></div>
                                </div>
                                
                                <div className="flex justify-between text-sm">
                                    <span>Dynamic Programming</span>
                                    <span className="text-orange-600 font-medium">80%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-orange-500 h-2 rounded-full" style={{width: '80%'}}></div>
                                </div>
                                
                                <div className="flex justify-between text-sm">
                                    <span>Greedy Algorithms</span>
                                    <span className="text-red-600 font-medium">75%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-red-500 h-2 rounded-full" style={{width: '75%'}}></div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200/50">
                            <h4 className="font-semibold text-gray-900 mb-4">Problem Types</h4>
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span>Array Problems</span>
                                    <span className="text-green-600 font-medium">98%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full" style={{width: '98%'}}></div>
                                </div>
                                
                                <div className="flex justify-between text-sm">
                                    <span>String Problems</span>
                                    <span className="text-blue-600 font-medium">88%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '88%'}}></div>
                                </div>
                                
                                <div className="flex justify-between text-sm">
                                    <span>Tree Problems</span>
                                    <span className="text-purple-600 font-medium">82%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '82%'}}></div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200/50">
                            <h4 className="font-semibold text-gray-900 mb-4">Performance</h4>
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span>Runtime Efficiency</span>
                                    <span className="text-green-600 font-medium">90%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full" style={{width: '90%'}}></div>
                                </div>
                                
                                <div className="flex justify-between text-sm">
                                    <span>Memory Usage</span>
                                    <span className="text-blue-600 font-medium">85%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                                </div>
                                
                                <div className="flex justify-between text-sm">
                                    <span>Code Quality</span>
                                    <span className="text-purple-600 font-medium">88%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '88%'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 