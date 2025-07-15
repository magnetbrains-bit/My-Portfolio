'use client'

import { motion } from 'framer-motion'
import { BarChart3, Database, Brain, TrendingUp, User } from 'lucide-react'
import { useState, useEffect } from 'react'
import { FaGraduationCap, FaProjectDiagram, FaCertificate, FaCode, FaCoffee } from 'react-icons/fa'

const expertise = [
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Advanced statistical analysis and business intelligence solutions'
  },
  {
    icon: Database,
    title: 'Agentic AI',
    description: 'Exploring agentic AI and intelligent systems that adapt and respond dynamically to tasks'
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Developing predictive models and AI solutions'
  },
  {
    icon: TrendingUp,
    title: 'Business Intelligence',
    description: 'Creating actionable insights from complex datasets'
  }
]

export default function About() {
  // Greeting logic
  const [greeting, setGreeting] = useState('')
  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) setGreeting('Good morning')
    else if (hour < 18) setGreeting('Good afternoon')
    else setGreeting('Good evening')
  }, [])
  return (
    <motion.section
      id="about"
      className="section-padding bg-gray-50 relative overflow-hidden"
      style={{ scrollMarginTop: '80px' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Subtle Dots Pattern Background */}
      <div className="absolute inset-0 pointer-events-none opacity-70 z-0"
        style={{
          backgroundImage: "url('data:image/svg+xml;utf8,<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"30\" cy=\"30\" r=\"3\" fill=\"%230ea5e9\" fill-opacity=\"0.32\"/></svg>')",
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
            <User className="w-7 h-7 text-primary-600" aria-label="About Icon" />
            <span className="gradient-text">About</span> <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Passionate student with strong foundation in data science and machine learning concepts
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">Academic Background</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                I am a dedicated student passionate about data science and machine learning. Currently pursuing 
                my Bachelor's in Technology (Electronics and Communication Engineering) at Vellore Institute of Technology, 
                Vellore, where I'm building a strong foundation in statistical analysis, programming, and data manipulation techniques.
              </p>
              <p>
                Through coursework and personal projects, I've developed expertise in Python programming, 
                statistical analysis, and machine learning algorithms. I'm actively working on projects that 
                demonstrate my ability to extract meaningful insights from data and build predictive models.
              </p>
              <p>
                I believe in continuous learning and staying updated with the latest technologies in the 
                rapidly evolving data science landscape. My goal is to apply my analytical skills to solve 
                real-world problems and contribute to data-driven decision making.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md card-hover"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 gradient-text">Key Metrics and Highlights</h3>
          <div className="grid md:grid-cols-6 gap-8">
            <AnimatedStat icon={<FaGraduationCap className="text-primary-600 w-7 h-7" />} label="Current GPA" value={8.88} decimals={2} />
            <AnimatedStat icon={<FaProjectDiagram className="text-primary-600 w-7 h-7" />} label="Projects Completed" value={5} suffix="+" />
            <AnimatedStat icon={<FaCertificate className="text-primary-600 w-7 h-7" />} label="Certifications and Badges" value={10} suffix="+" />
            <AnimatedStat icon={<FaCode className="text-primary-600 w-7 h-7" />} label="Lines of Code" value={100000} />
            <AnimatedStat icon={<FaCoffee className="text-primary-600 w-7 h-7" />} label="Cups of Coffee" value={365} />
            <AnimatedStat icon={<Database className="text-primary-600 w-7 h-7" />} label="Datasets Analyzed" value={50} suffix="+" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
} 

function AnimatedStat({ icon, label, value, suffix = '', decimals = 0 }: { icon: React.ReactNode; label: string; value: number; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let start = 0
    const end = value
    if (start === end) return
    let incrementTime = 2000 / end
    let timer = setInterval(() => {
      start += Math.ceil(end / 100)
      if (start >= end) {
        start = end
        clearInterval(timer)
      }
      setCount(start)
    }, incrementTime)
    return () => clearInterval(timer)
  }, [value])
  return (
    <div className="flex flex-col items-center">
      <div className="gradient-text">{icon}</div>
      <div className="text-3xl font-bold gradient-text">
        {decimals ? count.toFixed(decimals) : count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-600 text-sm font-medium mt-1">{label}</div>
    </div>
  )
} 