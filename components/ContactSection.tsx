import { motion } from 'framer-motion'

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-white">
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
                        Get In Touch
                    </motion.h2>
                    <motion.p 
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div 
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <motion.h3 
                            className="text-2xl font-semibold text-gray-900 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            Let's Connect
                        </motion.h3>
                        
                        <motion.div 
                            className="space-y-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <motion.div 
                                className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300 cursor-pointer group"
                                whileHover={{ scale: 1.02, x: 5 }}
                            >
                                <motion.div 
                                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white group-hover:bg-blue-700 transition-colors duration-300"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </motion.div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Email</h4>
                                    <p className="text-gray-600">samarthdivakar@gmail.com</p>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300 cursor-pointer group"
                                whileHover={{ scale: 1.02, x: 5 }}
                            >
                                <motion.div 
                                    className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white group-hover:bg-green-700 transition-colors duration-300"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </motion.div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">Phone</h4>
                                    <p className="text-gray-600">+91 86601 19367</p>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300 cursor-pointer group"
                                whileHover={{ scale: 1.02, x: 5 }}
                            >
                                <motion.div 
                                    className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white group-hover:bg-purple-700 transition-colors duration-300"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </motion.div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">Location</h4>
                                    <p className="text-gray-600">Bangalore, India</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div 
                            className="pt-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
                            <div className="flex space-x-4">
                                <motion.a 
                                    href="https://github.com/samarthdivakar" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors duration-300"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </motion.a>
                                <motion.a 
                                    href="https://linkedin.com/in/samarthdivakar" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-300"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </motion.a>
                                <motion.a 
                                    href="https://leetcode.com/samarthdivakar" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors duration-300"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a1.653 1.653 0 0 0 0 2.227 1.653 1.653 0 0 0 2.227 0l3.854-4.126 5.406 5.788a1.653 1.653 0 0 0 2.227 0 1.653 1.653 0 0 0 0-2.227L9.736 6.226l5.406-5.788a1.374 1.374 0 0 0 0-1.938 1.374 1.374 0 0 0-1.659 0z"/>
                                    </svg>
                                </motion.a>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div 
                        className="bg-gray-50 rounded-2xl p-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <motion.h3 
                            className="text-2xl font-semibold text-gray-900 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Send a Message
                        </motion.h3>
                        
                        <motion.form 
                            className="space-y-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <motion.div 
                                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1 }}
                                viewport={{ once: true }}
                            >
                                <motion.div 
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                    <input 
                                        type="text" 
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                        placeholder="Your first name"
                                    />
                                </motion.div>
                                <motion.div 
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                    <input 
                                        type="text" 
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                        placeholder="Your last name"
                                    />
                                </motion.div>
                            </motion.div>

                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input 
                                    type="email" 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                    placeholder="your.email@example.com"
                                />
                            </motion.div>

                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <input 
                                    type="text" 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                    placeholder="What's this about?"
                                />
                            </motion.div>

                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea 
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                                    placeholder="Tell me about your project or just say hello!"
                                ></textarea>
                            </motion.div>

                            <motion.button 
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="flex items-center justify-center">
                                    <motion.svg 
                                        className="mr-2 h-5 w-5" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </motion.svg>
                                    Send Message
                                </span>
                            </motion.button>
                        </motion.form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
} 