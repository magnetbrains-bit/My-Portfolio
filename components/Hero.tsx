'use client'

import { motion } from 'framer-motion'
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const eventImages = [
  '/events/photo_2025-07-13_22-30-12.jpg',
  '/events/photo_2025-07-13_22-11-48.jpg',
  '/events/photo_2025-07-13_22-10-23.jpg',
  '/events/photo_2025-07-13_22-05-21.jpg',
  '/events/photo_2025-07-13_22-05-19.jpg',
  '/events/photo_2025-07-13_22-05-16.jpg',
  '/events/photo_2025-07-13_22-02-28.jpg',
  '/events/photo_2025-07-13_02-09-33.jpg',
]

interface VerticalAutoScrollGalleryProps {
  images: string[];
  duration?: number;
}

function VerticalAutoScrollGallery({ images, duration = 18 }: VerticalAutoScrollGalleryProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let animationId: number;
    let start: number | null = null;
    const scrollHeight = container.scrollHeight / 2;
    function step(ts: number) {
      if (start === null) start = ts;
      const elapsed = (ts - start) / 1000;
      const scroll = (elapsed * (scrollHeight / duration)) % scrollHeight;
      if (container) {
        container.scrollTop = scroll;
      }
      animationId = requestAnimationFrame(step);
    }
    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [duration]);
  return (
    <div
      ref={containerRef}
      className="h-[420px] w-[80px] md:w-[90px] lg:w-[100px] rounded-xl bg-white/60 backdrop-blur-sm overflow-hidden shadow-md border border-gray-200"
      style={{ minWidth: '4cm', maxWidth: '5cm' }}
    >
      <div className="flex flex-col">
        {[...images, ...images].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt="Event"
            className="w-full h-24 object-cover mb-2 rounded"
            draggable={false}
            style={{ userSelect: 'none' }}
          />
        ))}
      </div>
    </div>
  );
}

// Confetti animation function
function triggerConfetti() {
  import('canvas-confetti').then((confetti) => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }
    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      const particleCount = 50 * (timeLeft / duration);
      confetti.default({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti.default({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  });
}

export default function Hero() {
  // Greeting logic
  const [greeting, setGreeting] = useState('')
  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) setGreeting('Good morning')
    else if (hour < 18) setGreeting('Good afternoon')
    else setGreeting('Good evening')
  }, [])
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-blue-50"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%230ea5e9&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

      <div className="container-custom section-padding relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20">
        {/* Left: Intro Text */}
        <div className="flex-1 w-full max-w-2xl text-left">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
              Aspiring Data Scientist
            </span>
          </div>
          {/* Dynamic Greeting */}
          <div className="mb-2">
            <span className="text-lg md:text-xl font-semibold gradient-text">{greeting}!</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gray-600">Hi, I&apos;m</span>{' '}
            <span className="gradient-text">Himanshu Raj</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
            Passionate about data science and machine learning. Currently pursuing my education 
            while building projects to demonstrate my analytical and technical skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get In Touch
              <motion.span whileHover={{ rotate: [0, -15, 15, 0] }} transition={{ duration: 0.4 }}>
                <ArrowRight size={20} />
              </motion.span>
            </motion.button>
            <a
              href="https://drive.google.com/file/d/1zyr4l83Kki7c9NFVCCxb11c9zt23uIgj/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-200"
            >
              <motion.span whileHover={{ rotate: [0, -15, 15, 0] }} transition={{ duration: 0.4 }}>
                <Download size={20} />
              </motion.span>
              Download Resume
            </a>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/magnetbrains-bit"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-primary-100 transition-colors duration-200"
            >
              <Github size={24} className="text-gray-700" />
            </a>
            <a
              href="https://www.linkedin.com/in/himanshu-raj-63a519287"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-primary-100 transition-colors duration-200"
            >
              <Linkedin size={24} className="text-gray-700" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=raj.himanshu8765@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-primary-100 transition-colors duration-200"
            >
              <Mail size={24} className="text-gray-700" />
            </a>
          </div>
        </div>
        {/* Right: Image Grid */}
        <div className="w-full md:w-auto grid grid-cols-2 gap-4 max-w-xs md:max-w-sm lg:max-w-md self-start mt-12 md:mt-[68px] lg:mt-[84px]">
          {eventImages.map((src, idx) => (
            <motion.img
              key={idx}
              src={src}
              alt={`Event ${idx + 1}`}
              className="w-full h-48 object-contain rounded shadow-md border border-gray-200 bg-white/60 cursor-pointer"
              draggable={false}
              style={{ userSelect: 'none', background: '#f8fafc' }}
              animate={{ y: [0, -12, 0, 12, 0] }}
              transition={{ duration: 3.5 + idx * 0.2, repeat: Infinity, repeatType: 'loop', delay: idx * 0.15 }}
              onClick={triggerConfetti}
            />
          ))}
        </div>
      </div>
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-90 flex items-center justify-center overflow-hidden shadow-lg"
      >
        {/* Empty floating circle, no content inside */}
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-16 h-16 bg-blue-200 rounded-full opacity-20"
      />
    </section>
  )
} 