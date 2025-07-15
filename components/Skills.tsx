'use client'

import { motion } from 'framer-motion'
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker, FaChartBar, FaPercent, FaSitemap, FaPuzzlePiece, FaRegClock, FaExclamationTriangle, FaCogs, FaTools, FaCubes, FaLightbulb } from 'react-icons/fa'
import { SiMicrosoftsqlserver, SiPandas, SiNumpy, SiScikitlearn, SiFastapi, SiStreamlit, SiMongodb, SiRender, SiPrometheus, SiGrafana } from 'react-icons/si'
import { Settings } from 'lucide-react'

const skillCategories = [
  {
    category: 'Languages',
    skills: [
      'Python',
      'Java',
      'Microsoft SQL',
      'HTML',
      'CSS',
    ]
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'FastAPI',
      'Streamlit',
      'MongoDB',
    ]
  },
  {
    category: 'Tools & Technologies',
    skills: [
      'Git',
      'Docker',
      'Render',
      'Prometheus',
      'Grafana',
    ]
  },
  {
    category: 'Core Concepts',
    skills: [
      'Statistical Analysis',
      'Probability Theory',
      'Data Structures & Algorithms',
      'Unsupervised Learning',
      'Time-Series Analysis',
      'Anomaly Detection',
    ]
  }
]

// Map skill names to their official icons
const skillIcons: Record<string, JSX.Element> = {
  Python: <FaPython className="text-blue-500" />,
  Java: <FaJava className="text-orange-600" />,
  'Microsoft SQL': <SiMicrosoftsqlserver className="text-[#CC2927]" />,
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-400" />,
  Pandas: <SiPandas className="text-[#150458]" />,
  NumPy: <SiNumpy className="text-[#013243]" />,
  'Scikit-learn': <SiScikitlearn className="text-[#F7931E]" />,
  FastAPI: <SiFastapi className="text-[#009688]" />,
  Streamlit: <SiStreamlit className="text-[#FF4B4B]" />,
  MongoDB: <SiMongodb className="text-[#47A248]" />,
  Git: <FaGitAlt className="text-orange-500" />,
  Docker: <FaDocker className="text-blue-500" />,
  Render: <SiRender className="text-[#46E3B7]" />,
  Prometheus: <SiPrometheus className="text-[#E6522C]" />,
  Grafana: <SiGrafana className="text-[#F46800]" />,
  // Core Concepts
  'Statistical Analysis': <FaChartBar className="text-primary-600" />,
  'Probability Theory': <FaPercent className="text-primary-600" />,
  'Data Structures & Algorithms': <FaSitemap className="text-primary-600" />,
  'Unsupervised Learning': <FaPuzzlePiece className="text-primary-600" />,
  'Time-Series Analysis': <FaRegClock className="text-primary-600" />,
  'Anomaly Detection': <FaExclamationTriangle className="text-primary-600" />,
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="section-padding relative overflow-hidden"
      style={{ scrollMarginTop: '80px' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Subtle Grid Pattern Background */}
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
            <Settings className="w-7 h-7 text-primary-600" aria-label="Skills Icon" />
            <span className="gradient-text">Technical</span> <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for data analysis, machine learning, and engineering solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-6 text-primary-600 flex items-center gap-2">
                {category.category === 'Languages' && <FaCogs className="text-primary-400 w-6 h-6" title="Languages" />}
                {category.category === 'Frameworks & Libraries' && <FaCubes className="text-primary-400 w-6 h-6" title="Frameworks & Libraries" />}
                {category.category === 'Tools & Technologies' && <FaTools className="text-primary-400 w-6 h-6" title="Tools & Technologies" />}
                {category.category === 'Core Concepts' && <FaLightbulb className="text-primary-400 w-6 h-6" title="Core Concepts" />}
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge flex items-center gap-2 hover:scale-105 transition-transform"
                    title={skill}
                  >
                    {skillIcons[skill] && <span className="text-lg">{skillIcons[skill]}</span>}
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
} 