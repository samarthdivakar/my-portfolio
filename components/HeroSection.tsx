import { useRef, useEffect, useState } from 'react'

export default function HeroSection() {
    const [isClient, setIsClient] = useState(false)
    
    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #007AFF 0%, transparent 50%), radial-gradient(circle at 75% 75%, #34C759 0%, transparent 50%), radial-gradient(circle at 50% 50%, #FF6B6B 0%, transparent 50%)`,
          }}></div>
        </div>

        {/* Animated Floating Elements with Enhanced Physics */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-pink-400/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '0.5s'}}></div>

        {/* Magnetic Background Particles */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-yellow-400/30 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-green-400/30 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>

        {/* Content with Enhanced Animations */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Text Reveal Animation */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="block">Samarth</span>
            <span className="block text-gradient">Divakar</span>
          </h1>

          {/* Typewriter Effect for Description */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Electronics & Computer Engineering Student | AI/ML Enthusiast | Web Developer
          </p>

          {/* Enhanced Button Animations with Magnetic Effect */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl group rounded-2xl shadow-lg relative overflow-hidden">
              <span className="flex items-center relative z-10">
                View My Work
                <svg className="ml-2 h-5 w-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>

            <button className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg relative overflow-hidden">
              <span className="flex items-center relative z-10">
                <svg className="mr-2 h-5 w-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </span>
            </button>
          </div>

          {/* Enhanced Contact Info with Magnetic Hover */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-500">
            <div className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-300 hover:scale-105 cursor-pointer group">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white group-hover:bg-blue-700 transition-colors duration-300">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span>Bangalore, India</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-300 hover:scale-105 cursor-pointer group">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white group-hover:bg-green-700 transition-colors duration-300">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span>+91 86601 19367</span>
            </div>
          </div>


        </div>
      </section>
    )
  }