'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building, GraduationCap } from 'lucide-react'

const education = [
  {
    degree: 'Bachelor of Technology',
    specialization: 'Electronics and Communication Engineering',
    institution: 'Vellore Institute of Technology, Vellore',
    period: '2022 - 2026',
    gpa: '8.88/10',
    description: `I’m Himanshu Raj, a B.Tech student in Electronics and Communication Engineering at VIT Vellore, with a strong interest in Data Science, Machine Learning, and AI applications. I enjoy solving real-world problems through data-driven approaches and building end-to-end systems—from data preprocessing and model training to deployment and visualization. Through hands-on projects across domains like predictive modeling, NLP, and real-time monitoring, I’m constantly honing my technical skills and exploring new technologies to grow as a future-ready engineer.`,
    achievements: [
      'Maintaining strong academic performance with 8.88 GPA',
      'Actively participating in data science and ML projects',
      'Learning programming languages and statistical analysis',
      'Engaging in relevant coursework and certifications'
    ],
    relevantCourses: ['Python Programming', 'Probability and Statistics', 'Machine Learning', 'Predictive Analytics', 'AWS Cloud Computing', 'Data Structures']
  }
]

export default function Education() {
  return (
    <motion.section
      id="education"
      className="section-padding relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Visible Grid Pattern Background */}
      <div className="absolute inset-0 pointer-events-none opacity-60 z-0"
        style={{
          backgroundImage: "url('data:image/svg+xml;utf8,<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"60\" height=\"60\" fill=\"none\"/><path d=\"M0 0H60V60H0V0ZM30 0V60M0 30H60\" stroke=\"%230ea5e9\" stroke-opacity=\"0.28\" stroke-width=\"1\"/></svg>')",
          backgroundRepeat: 'repeat'
        }}
      />
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <GraduationCap className="w-7 h-7 text-primary-600" aria-label="Education Icon" />
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Academic background and relevant coursework in data science and engineering
          </p>
        </motion.div>

        <div className="space-y-8">
          <div className="relative pl-8 before:content-[''] before:absolute before:top-0 before:left-4 before:w-1 before:h-full before:bg-gradient-to-b before:from-primary-400 before:to-blue-400 before:rounded-full">
            {education.map((edu, index) => (
              <motion.div
                key={`${edu.institution}-${edu.degree}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative mb-12"
              >
                {/* Timeline Dot */}
                <span className="absolute -left-1 top-2 w-6 h-6 rounded-full bg-white border-4 border-primary-400 flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-4 h-4 text-primary-600" />
                </span>
                <div className="bg-white p-8 rounded-lg shadow-md card-hover ml-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-primary-600 mb-2">{edu.specialization}</p>
                      <div className="flex flex-wrap items-center gap-4 text-gray-600">
                        <div className="flex items-center gap-2">
                          <Building size={16} />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-primary-600">GPA: {edu.gpa}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {edu.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: (index * 0.1) + (achievementIndex * 0.05) }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2 text-gray-600"
                        >
                          <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevantCourses.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://drive.google.com/file/d/1zyr4l83Kki7c9NFVCCxb11c9zt23uIgj/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-200"
          >
            Download Full Resume
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
} 