'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, Star, BadgeCheck } from 'lucide-react'

const certifications = [
  {
    title: 'Caterpillar Tech Challenge 2025 – Finalist (Top 10 out of 4000+ teams)',
    issuer: 'Caterpillar',
    year: '2025',
    image: '/certificates/Caterpillar.jpg',
  },
  {
    title: 'The Complete Python Bootcamp From Zero to Hero in Python',
    issuer: 'Udemy',
    year: '2025',
    image: '/certificates/Udemy python.jpg',
  },
  {
    title: 'Introduction to Data Science',
    issuer: 'Cisco Networking Academy',
    year: '2025',
    image: '/certificates/Cisco Intro to data science certificate-1.png',
  },
  {
    title: 'Introduction to Data Science Job Simulation',
    issuer: 'Commonwealth Bank (Forage)',
    year: '2024',
    image: '/certificates/Commonwealth Bank_completion_certificate-1.png',
  },
]

export default function Certifications() {
  const [lightbox, setLightbox] = useState<string | null>(null)
  return (
    <motion.section
      id="certifications"
      className="section-padding bg-white relative overflow-hidden"
      style={{ scrollMarginTop: '80px' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Visible Dots Pattern Background */}
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
            <BadgeCheck className="w-7 h-7 text-primary-600" aria-label="Certifications Icon" />
            <span className="gradient-text">Certifications</span> <span className="gradient-text">&amp; Badges</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of certifications and badges earned through continuous learning and professional development
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center gap-4 border border-transparent hover:border-primary-600 hover:border-2 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary-500 focus:outline-none hover:shadow-2xl transition-shadow"
              title={cert.title}
            >
              <div className="w-full flex justify-center mb-2">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-32 w-auto rounded shadow cursor-pointer object-contain border border-gray-200"
                  onClick={() => setLightbox(cert.image)}
                />
              </div>
              <div className="text-center">
                <div className="font-semibold text-lg text-gray-800">{cert.title}</div>
                <div className="text-gray-600 text-sm">{cert.issuer} &bull; {cert.year}</div>
              </div>
            </motion.div>
          ))}
          {/* More coming soon card as 5th item */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center gap-4 animate-pulse">
            <div className="w-full flex justify-center mb-2">
              <div className="h-32 w-48 rounded shadow bg-gray-200 flex items-center justify-center">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary-600"></div>
              </div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-lg text-gray-800">More coming soon...</div>
              <div className="text-gray-600 text-sm">Stay tuned for new certifications!</div>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {lightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
              onClick={() => setLightbox(null)}
            >
              <motion.img
                src={lightbox}
                alt="Certificate preview"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="max-h-[90vh] max-w-full rounded-lg shadow-2xl border-4 border-white"
                onClick={e => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  )
}

// SVG Wave and Grid Divider to be placed after Certifications and before Experience
export const CertificationsDivider = () => (
  <div className="-mt-2">
    <svg viewBox="0 0 1920 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24">
      <defs>
        <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22cafe" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <path d="M0 60 Q480 120 960 60 T1920 60 V120 H0 V60 Z" fill="url(#waveGradient)" />
    </svg>
    <svg viewBox="0 0 1920 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-10 -mt-2">
      <g stroke="#38bdf8" strokeWidth="0.5" opacity="0.18">
        {Array.from({length: 32}).map((_,i) => (
          <line key={i} x1={i*60} y1="0" x2={i*60} y2="60" />
        ))}
        {Array.from({length: 6}).map((_,i) => (
          <line key={i+100} x1="0" y1={i*12} x2="1920" y2={i*12} />
        ))}
      </g>
    </svg>
  </div>
) 