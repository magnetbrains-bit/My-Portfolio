import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences: Array<{
  role: string;
  company: string;
  period: string;
  description: string;
  location?: string;
}> = [
  {
    role: 'VLSI Chip Design Engineer',
    company: 'L&T',
    period: '22 May 2025 – 07 July 2025',
    description: 'Designed and simulated a Common Gate Amplifier using Electric EDA Tool. Worked on schematic creation, layout design, and simulation analysis. Built a basic 3D model and evaluated circuit performance. Gained practical exposure to the complete VLSI design flow.',
    location: 'Virtual',
  },
  {
    role: 'Eagerly Seeking Opportunities',
    company: 'Open to Data Roles',
    period: '',
    description: 'I am actively looking to apply my skills and passion as a data professional. Ready to contribute, learn, and grow in a dynamic data-driven environment.',
    location: '',
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="section-padding bg-white relative overflow-hidden"
      style={{ scrollMarginTop: '80px' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <Briefcase className="w-7 h-7 text-primary-600" aria-label="Experience Icon" />
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional and leadership experiences that shaped my journey in data science and technology
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={
                exp.role === 'Eagerly Seeking Opportunities'
                  ? 'bg-blue-50 border-2 border-dashed border-primary-400 rounded-lg p-8 flex flex-col items-center justify-center text-center shadow-none'
                  : 'bg-white rounded-lg shadow-md p-8 border border-transparent hover:border-primary-600 hover:border-2 hover:shadow-2xl transition-all duration-300 card-hover'
              }
            >
              {exp.role === 'Eagerly Seeking Opportunities' ? (
                <>
                  <div className="flex flex-col items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-primary-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                    </svg>
                    <div className="font-semibold text-xl text-primary-700">Open to Data Roles</div>
                  </div>
                  <div className="text-gray-700 text-base mb-2">I am actively looking to apply my skills and passion as a data professional.</div>
                  <div className="text-primary-600 font-medium mb-4">Ready to contribute, learn, and grow!</div>
                  <div className="flex flex-col items-center gap-2 mt-2">
                    <span className="text-gray-600 text-sm flex items-center justify-center">Interested in collaborating or hiring? Let’s connect!
                      <a href="#contact" className="ml-2 inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary-100 hover:bg-primary-200 transition-colors" title="Contact Me">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25V19a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 19V8.25m18 0V5.25A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25v3m18 0l-9 6.75L3 8.25" />
                        </svg>
                      </a>
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-4 mb-2">
                    <Briefcase className="w-6 h-6 text-primary-600" />
                    <div className="font-semibold text-lg text-gray-800">{exp.role}</div>
                  </div>
                  <div className="text-primary-600 font-medium mb-1">{exp.company}</div>
                  <div className="text-gray-500 text-sm mb-3">{exp.period}</div>
                  <div className="text-gray-600 text-sm">{exp.description}</div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 