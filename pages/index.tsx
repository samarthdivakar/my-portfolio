import Head from 'next/head'
import { useState } from 'react'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import ContactForm from '../components/ContactForm'
import ProfessorRemarks from '../components/ProfessorRemarks'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function Home() {
  const [activeTab, setActiveTab] = useState('all')

  const completedProjects = [
    { 
      id: 1, 
      title: 'Smart Home Automation System', 
      category: 'iot', 
      description: 'IoT-based home automation using Arduino and Raspberry Pi with mobile app control',
      technologies: ['Arduino', 'Raspberry Pi', 'Python', 'IoT'],
      status: 'completed'
    },
    { 
      id: 2, 
      title: 'Machine Learning Image Classifier', 
      category: 'ml', 
      description: 'CNN-based image classification model for medical imaging analysis',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Deep Learning'],
      status: 'completed'
    },
    { 
      id: 3, 
      title: 'Portfolio Website', 
      category: 'web', 
      description: 'Modern responsive portfolio built with Next.js and TailwindCSS',
      technologies: ['Next.js', 'React', 'TailwindCSS', 'TypeScript'],
      status: 'completed'
    },
    { 
      id: 4, 
      title: 'Embedded System Project', 
      category: 'embedded', 
      description: 'Real-time temperature monitoring system with LCD display',
      technologies: ['C', 'Microcontrollers', 'Sensors', 'LCD'],
      status: 'completed'
    }
  ]

  const plannedProjects = [
    { 
      id: 5, 
      title: 'Data Structures Visualizer', 
      category: 'web', 
      description: 'Interactive web app to visualize various data structures and algorithms',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'DSA'],
      status: 'planned',
      timeline: 'Q2 2024'
    },
    { 
      id: 6, 
      title: 'E-commerce Platform', 
      category: 'web', 
      description: 'Full-stack e-commerce website with payment integration and admin panel',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
      status: 'planned',
      timeline: 'Q3 2024'
    },
    { 
      id: 7, 
      title: 'AI Chatbot Assistant', 
      category: 'ml', 
      description: 'Intelligent chatbot using natural language processing and machine learning',
      technologies: ['Python', 'NLP', 'TensorFlow', 'API Integration'],
      status: 'planned',
      timeline: 'Q4 2024'
    },
    { 
      id: 8, 
      title: 'Mobile App Development', 
      category: 'mobile', 
      description: 'Cross-platform mobile application for task management',
      technologies: ['React Native', 'Firebase', 'Redux', 'Mobile UI/UX'],
      status: 'planned',
      timeline: 'Q1 2025'
    }
  ]

  const allProjects = [...completedProjects, ...plannedProjects]
  const filteredProjects = activeTab === 'all' 
    ? allProjects 
    : activeTab === 'completed'
    ? completedProjects
    : activeTab === 'planned'
    ? plannedProjects
    : allProjects.filter(project => project.category === activeTab)

  return (
    <>
      <Head>
        <title>Samarth Divakar - Portfolio</title>
        <meta name="description" content="Samarth Divakar - Electronics & Computer Engineering Student | AI/ML Enthusiast | Web Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navigation />
      
      <main className="min-h-screen">
        <HeroSection />

        {/* About Section */}
        <section id="about" className="container mx-auto px-4 py-16 animate-scale-in bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center animate-fade-in-up">
              About Me
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Profile Picture */}
              <div className="lg:col-span-1 flex justify-center">
                <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 animate-float-slow">
                  <Image
                    src="/samarth-photo.jpg"
                    alt="Samarth Divakar"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/20"></div>
                </div>
              </div>
              
              {/* Text Content */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover-lift border border-white/20">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Who I Am</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    I am a curious and motivated engineering student specializing in Electronics and Computer 
                    Engineering with a minor in AI/ML. While I am at the beginning of my journey and not yet an 
                    expert, I am deeply interested in exploring real-world software development, machine learning, 
                    and system design.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    My goal is to grow into a skilled and reliable professional under the guidance of mentors. 
                    I bring a growth mindset, adaptability, and the willingness to put in focused effort to learn.
                  </p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover-lift border border-white/20">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-blue-500 pl-4 hover:border-l-8 transition-all duration-300">
                      <h4 className="font-semibold text-gray-900">B.Tech in Electronics and Computer Engineering</h4>
                      <p className="text-gray-600">REVA University, Bangalore</p>
                      <p className="text-sm text-gray-500">Minor: AI/ML • CGPA: 8.21/10 • Expected Graduation: 2026</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4 hover:border-l-8 transition-all duration-300">
                      <h4 className="font-semibold text-gray-900">ISC (12th Grade)</h4>
                      <p className="text-gray-600">St. Vincent Pallotti School, Bangalore</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4 hover:border-l-8 transition-all duration-300">
                      <h4 className="font-semibold text-gray-900">ICSE (10th Grade)</h4>
                      <p className="text-gray-600">St. Vincent Pallotti School, Bangalore</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LeetCode Section */}
        <section id="leetcode" className="container mx-auto px-4 py-16 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-fade-in-up">
              LeetCode Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover-lift border border-white/20 animate-slide-in-left">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">50 Days Badge 2024</h3>
                <p className="text-gray-600 mb-4">Consistent problem-solving streak</p>
                <div className="flex justify-center">
                  <span className="px-4 py-2 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-full text-sm font-medium shadow-lg">
                    ✓ Completed
                  </span>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover-lift border border-white/20 animate-slide-in-right">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">100 Days Badge 2024</h3>
                <p className="text-gray-600 mb-4">Advanced problem-solving mastery</p>
                <div className="flex justify-center">
                  <span className="px-4 py-2 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg">
                    🎯 Active
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 animate-fade-in-up">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Problem Solving Stats</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center group">
                  <div className="text-2xl font-bold text-blue-600 group-hover:scale-110 transition-transform">150+</div>
                  <div className="text-sm text-gray-600">Problems Solved</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl font-bold text-green-600 group-hover:scale-110 transition-transform">85%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl font-bold text-purple-600 group-hover:scale-110 transition-transform">50+</div>
                  <div className="text-sm text-gray-600">Days Streak</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl font-bold text-orange-600 group-hover:scale-110 transition-transform">4.5★</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="text-sm text-gray-500">Username: user9305WA</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container mx-auto px-4 py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center animate-fade-in-up">
            My Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto stagger-animation">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover-lift border border-white/20">
              <h4 className="font-semibold text-gray-900 mb-3">Programming Languages</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'C', 'C++', 'Java', 'SQL', 'Verilog', 'Assembly', 'R'].map((lang) => (
                  <span key={lang} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full text-sm hover:scale-105 transition-transform">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover-lift border border-white/20">
              <h4 className="font-semibold text-gray-900 mb-3">Web Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TailwindCSS'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gradient-to-r from-green-100 to-green-200 text-green-800 rounded-full text-sm hover:scale-105 transition-transform">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover-lift border border-white/20">
              <h4 className="font-semibold text-gray-900 mb-3">Tools & Platforms</h4>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'VS Code', 'Arduino', 'Raspberry Pi', 'Linux'].map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 rounded-full text-sm hover:scale-105 transition-transform">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover-lift border border-white/20">
              <h4 className="font-semibold text-gray-900 mb-3">Concepts</h4>
              <div className="flex flex-wrap gap-2">
                {['DSA', 'Microprocessors', 'OS Basics', 'Embedded Systems', 'DevOps', 'CI/CD'].map((concept) => (
                  <span key={concept} className="px-3 py-1 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 rounded-full text-sm hover:scale-105 transition-transform">
                    {concept}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container mx-auto px-4 py-16 bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center animate-fade-in-up">
            My Projects
          </h2>
          
          {/* Filter Tabs */}
          <div className="flex justify-center mb-8 animate-slide-in-left">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-1 shadow-lg border border-white/20">
              <button 
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                  activeTab === 'all' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:bg-gray-100 hover:scale-105'
                }`}
              >
                All
              </button>
              <button 
                onClick={() => setActiveTab('completed')}
                className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                  activeTab === 'completed' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:bg-gray-100 hover:scale-105'
                }`}
              >
                Completed
              </button>
              <button 
                onClick={() => setActiveTab('planned')}
                className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                  activeTab === 'planned' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:bg-gray-100 hover:scale-105'
                }`}
              >
                Planned
              </button>
              <button 
                onClick={() => setActiveTab('web')}
                className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                  activeTab === 'web' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:bg-gray-100 hover:scale-105'
                }`}
              >
                Web
              </button>
              <button 
                onClick={() => setActiveTab('ml')}
                className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                  activeTab === 'ml' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:bg-gray-100 hover:scale-105'
                }`}
              >
                ML/AI
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto stagger-animation">
            {filteredProjects.map(project => (
              <div key={project.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-white/20 hover-lift group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  {project.status === 'planned' && (
                    <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-xs font-medium shadow-lg">
                      {project.timeline}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-xs hover:scale-105 transition-transform">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                    project.category === 'web' 
                      ? 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800' 
                      : project.category === 'ml'
                      ? 'bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800'
                      : project.category === 'iot'
                      ? 'bg-gradient-to-r from-green-100 to-green-200 text-green-800'
                      : project.category === 'mobile'
                      ? 'bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800'
                      : 'bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800'
                  }`}>
                    {project.category.toUpperCase()}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === 'completed' 
                      ? 'bg-gradient-to-r from-green-400 to-green-500 text-white' 
                      : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
                  }`}>
                    {project.status === 'completed' ? '✓ Completed' : '🔄 Planned'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professor Remarks Section */}
        <ProfessorRemarks />

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4 py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Contact Me
          </h2>
          <ContactForm />
        </section>
      </main>

      <Footer />
    </>
  )
}
