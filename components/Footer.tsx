'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { X as XIcon } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">Himanshu Raj</h3>
            <p className="text-gray-400 max-w-md">
              Data professional passionate about transforming raw data into actionable insights 
              that drive business growth and innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#experience" className="text-gray-400 hover:text-white transition-colors">
                Experience
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex justify-center space-x-4">
              <motion.a whileHover={{ rotate: [0, -15, 15, 0] }} transition={{ duration: 0.4 }} href="https://github.com/magnetbrains-bit" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-6 h-6 text-primary-600" />
              </motion.a>
              <motion.a whileHover={{ rotate: [0, -15, 15, 0] }} transition={{ duration: 0.4 }} href="https://www.linkedin.com/in/himanshu-raj-63a519287" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6 text-primary-600" />
              </motion.a>
              <motion.a whileHover={{ rotate: [0, -15, 15, 0] }} transition={{ duration: 0.4 }} href="https://x.com/himanshu2_raj?t=pV4LKOQlUlJM_-ZeJtzTCQ&s=09" target="_blank" rel="noopener noreferrer" aria-label="X">
                <XIcon className="w-6 h-6 text-primary-600" />
              </motion.a>
              <motion.a whileHover={{ rotate: [0, -15, 15, 0] }} transition={{ duration: 0.4 }} href="https://mail.google.com/mail/?view=cm&fs=1&to=raj.himanshu8765@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                <Mail className="w-6 h-6 text-primary-600" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-8 text-primary-400 text-base font-medium animate-fade-in">
          Thank you for visiting! Let’s connect!
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400">
            © {currentYear} Himanshu Raj. All rights reserved. | Built with Next.js & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
} 