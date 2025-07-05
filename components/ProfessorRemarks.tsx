export default function ProfessorRemarks() {
  const remarks = [
    {
      id: 1,
      name: "Prof. Shridevi Jeevan Kamble",
      role: "Head of Department",
      department: "Electronics & Computer Engineering",
      university: "REVA University",
      quote:
        "Samarth shows exceptional dedication to learning and demonstrates strong analytical thinking. His projects in embedded systems showcase both technical skills and innovative problem-solving approach.",
    },
    {
      id: 2,
      name: "Dr. Nayana DK",
      role: "AI/ML Course Coordinator",
      department: "Computer Science",
      university: "REVA University",
      quote:
        "In my AI/ML classes, Samarth consistently demonstrates curiosity and eagerness to understand complex concepts. His machine learning project showed good understanding of fundamental principles.",
    },
    {
      id: 3,
      name: "Prof. Dilip Chandra",
      role: "Embedded Systems Professor",
      department: "Electronics Engineering",
      university: "REVA University",
      quote:
        "Samarth&apos;s work ethic and attention to detail in embedded systems projects is commendable. He shows promise in hardware-software integration and system design.",
    },
    {
      id: 4,
      name: "Prof. Tauseef",
      role: "Programming Fundamentals",
      department: "Computer Science",
      university: "REVA University",
      quote:
        "Samarth has shown consistent improvement in programming skills and demonstrates good problem-solving abilities. His approach to coding challenges reflects strong logical thinking.",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professor Remarks</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Feedback from my professors at REVA University about my academic performance and projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {remarks.map((remark, index) => (
            <div
              key={remark.id}
              className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl border border-white/20 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-2xl shadow-lg hover:scale-110 transition-transform duration-300">
                    {remark.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900 text-lg">{remark.name}</div>
                    <div className="text-sm text-blue-600 font-medium">{remark.role}</div>
                  </div>
                </div>

                <blockquote className="text-gray-700 mb-6 leading-relaxed italic text-lg">&ldquo;{remark.quote}&rdquo;</blockquote>

                <div className="border-t border-gray-200 pt-4">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">{remark.department}</span>
                  </div>
                  <div className="text-sm text-blue-600 font-medium">
                    {remark.university}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-500 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 shadow-lg">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">Academic Excellence & Dedication</span>
          </div>
        </div>
      </div>
    </section>
  )
} 