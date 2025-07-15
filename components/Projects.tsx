'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Database, BarChart3, Brain, X, Home, Building, Truck, FolderKanban, Star } from 'lucide-react'

const projects = [
  {
    title: 'Dynamic Content Curation & Summary Agent – AI in Healthcare',
    shortDescription: 'Automated system for curating, processing, and summarizing AI in Healthcare research articles using NLP, with an interactive Streamlit dashboard.',
    description: `An end-to-end automated system that tackles information overload in the AI in Healthcare domain. It discovers, processes, and summarizes research articles using NLP, storing results in a database and presenting them via an interactive Streamlit dashboard.\n\nKey Achievements:\n- Automated data pipeline: Retrieval → Cleaning → NLP → Storage → Presentation\n- PubMed API integration for compliant, large-scale data sourcing\n- XML parsing, text cleaning, and robust data processing for 100+ articles\n- NLP-powered keyword extraction and extractive summarization\n- Structured, queryable SQLite database (600+ data points, 6 fields/article)\n- Interactive Streamlit dashboard with real-time search/filter and custom UI\n- Hands-on with API integration, data engineering, NLP, database design, and dashboarding`,
    technologies: ['Python', 'Requests', 'XML.etree.ElementTree', 'Re', 'NLTK', 'Rake-NLTK', 'Sumy', 'SQLite', 'SQLAlchemy', 'Streamlit'],
    github: 'https://github.com/magnetbrains-bit/Dynamic-Content-Curation-Summary-Agent',
    live: 'https://drive.google.com/file/d/1XuOMLRzM6eaU4tP1EcI5iie5saNIZsji/view?usp=sharing',
    screenshots: [
      { src: '/screenshots/Screenshot 2025-07-01 065512.png', caption: 'Dashboard Overview' },
      { src: '/screenshots/Screenshot 2025-07-01 065547.png', caption: 'Search & Results View' },
      { src: '/screenshots/Screenshot 2025-07-01 065613.png', caption: 'Detailed Analysis View' }
    ],
    category: 'NLP & Dashboard',
    icon: Brain
  },
  {
    title: 'Proactive System Health Monitoring with Unsupervised ML',
    shortDescription: 'End-to-end system for real-time anomaly detection and health monitoring of distributed infrastructure using unsupervised machine learning, Docker, Prometheus, and Grafana.',
    description: `A robust monitoring solution for distributed systems leveraging unsupervised ML (Isolation Forest, ExtraTrees) to detect anomalies in real time. Integrates with Prometheus for metrics scraping and Grafana for visualization. Built with Docker for easy deployment and scalability.\n\nKey Achievements:\n- Automated anomaly detection pipeline with periodic retraining\n- Prometheus integration for real-time metrics collection\n- Grafana dashboards for live system health visualization\n- Dockerized microservices for reproducibility and scaling\n- Hands-on with Unsupervised ML, containerization, and observability\n\nDemo: The screenshots show the ML service logs, Docker container orchestration, and Prometheus target health UI.`,
    technologies: ['Python', 'Scikit-learn', 'Flask', 'Docker', 'Prometheus', 'Grafana'],
    github: 'https://github.com/magnetbrains-bit/Proactive-System-Health-Monitoring-using-Unsupervised-Machine-Learning-',
    live: 'https://drive.google.com/file/d/1-A0-UsVsRDYo2ZIHVrHFvaktXU8aMif_/view?usp=sharing',
    screenshots: [
      { src: '/screenshots/ml-monitoring/Screenshot 2025-06-25 032149.png', caption: 'Grafana Dashboard: System Load & Anomalies' },
      { src: '/screenshots/ml-monitoring/Screenshot 2025-06-25 170159.png', caption: 'System Architecture Flowchart' },
      { src: '/screenshots/ml-monitoring/Screenshot 2025-06-25 005023.png', caption: 'Prometheus Target Health Dashboard' },
      { src: '/screenshots/ml-monitoring/Screenshot 2025-06-25 005259.png', caption: 'Docker Compose Build & Container Status' }
    ],
    category: 'Isolation Forest & Monitoring',
    icon: BarChart3
  },
  {
    title: 'End-to-End Deployed ML System – Customer Propensity API',
    shortDescription: 'Production-grade XGBoost model for customer propensity, served via FastAPI and deployed on Render for real-time predictions.',
    description: `This project demonstrates the complete, end-to-end lifecycle of a machine learning product, taking it from raw data to a live, production-ready web service. The focus was on applying modern software engineering and deployment practices to a data science problem.\n\nKey Achievements:\n- Engineered a high-performance XGBoost model (Precision: 59.3%, F1-Score: 0.203, ROC AUC: 0.785)\n- Processed 2.7M+ user events with robust feature engineering\n- Built and deployed a FastAPI REST API for real-time predictions\n- Containerized and deployed with Docker & Render, with CI/CD\n- Solved real-world issues: data quality, model performance, and deployment\n\nTech Stack: Python 3.11, Pandas, NumPy, Scikit-learn, XGBoost, Joblib, FastAPI, Pydantic, Uvicorn, Docker, Render, Git, GitHub`,
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'Joblib', 'FastAPI', 'Pydantic', 'Docker', 'Render','Streamlit'],
    github: 'https://github.com/magnetbrains-bit/end-to-end-ml-pipeline-retail',
    live: 'https://end-to-end-ml-pipeline-retail-dg67ltebgsvzszlngyawmb.streamlit.app/',
    screenshots: [
      { src: '/screenshots/propensity-api/Screenshot 2025-06-14 203259.png', caption: 'Render Deployment Log' },
      { src: '/screenshots/propensity-api/The Minimalist.png', caption: 'The "Minimalist"' },
      { src: '/screenshots/propensity-api/Screenshot 2025-06-14 203712.png', caption: 'The "Lapsed User"' },
      { src: '/screenshots/propensity-api/Screenshot 2025-06-14 203547.png', caption: 'The "Hot Lead"' },
      { src: '/screenshots/propensity-api/Screenshot 2025-06-14 205134.png', caption: 'Swagger UI' },
      { src: '/screenshots/propensity-api/Screenshot 2025-07-14 002121.png', caption: 'Customer Propensity Dashboard – Input Features' },
      { src: '/screenshots/propensity-api/Screenshot 2025-07-14 002222.png', caption: 'Customer Propensity Dashboard – Prediction Result' }
    ],
    category: 'ML Regression & Propensity Modelling',
    icon: Database
  },
  {
    title: 'Real Estate Valuation Engine',
    shortDescription: 'Leveraged a high-performance XGBoost model that was trained on a cleaned dataset of 13,300+ property listings with carefully engineered features.',
    description: `This project is an end-to-end machine learning system for accurate real estate price prediction in Bengaluru. I built the full pipeline: cleaning and engineering a dataset of 13,300+ listings, training a robust regression model, and deploying it as a live Streamlit web app. Users can instantly estimate property values by entering key features.\n\nKey Achievements:\n- Data-Driven Modeling: Trained a high-performance XGBoost model on a dataset of over 13,300 property listings for accurate real estate valuation.\n- Intelligent Feature Engineering: Refined 9 raw data features into the 4 most impactful predictors (Location, Distance to metro (Km), Bedooms, other amenities ) to improve model accuracy.\n- Geospatial Analysis & Feature Engineering: Performed geospatial analysis by one-hot encoding 242+ unique locations, allowing the model to make highly specific, localized price predictions.\n- Efficient Model Persistence: Deployed a lightweight (~6KB) serialized model using pickle, ensuring instant, zero-latency predictions in the live application.\n- Interactive & Deployed Web Application: Built and deployed a live dashboard providing real-time price estimates across 242+ searchable locations.`,
    technologies: ['Python', 'Scikit-learn','GeoSpatial Analysis', 'Pandas', 'NumPy', 'Streamlit'],
    github: 'https://github.com/magnetbrains-bit/Real-Estate-Valuation-Engine',
    live: 'https://real-estate-valuation-engine.streamlit.app/',
    screenshots: [
      { src: '/screenshots/real-estate/Screenshot 2025-06-26 105036.png', caption: 'Streamlit App Interface' }
    ],
    category: 'GeoSpatial Analysis & ML Regression',
    icon: Home
  },
  {
    title: 'LiteDepth – Real-Time 3D Perception for Industrial Safety',
    shortDescription: 'End-to-end edge AI system for real-time object detection and metric distance ranging, built for the Caterpillar Tech Challenge.',
    description: `This project, developed for the Caterpillar Hackathon Finals, is an end-to-end edge AI perception system designed to enhance operator safety and situational awareness on heavy machinery. The "LiteDepth" system fuses data from two neural networks to provide real-time object detection and metric distance ranging, visualized through a dual-interface display (AR overlay + Bird's-Eye View), all running efficiently on a low-power edge device.\n\nKey Achievements:\n- Real-Time Dual-Pipeline AI: >30 FPS on edge hardware\n- State-of-the-Art Models: YOLOv11n (object detection), SCDepthV3 (depth estimation)\n- 100% correlation of high-confidence detections with metric distance\n- Multi-layered visualization: AR overlays, BEV grid, motion trails, blinking alerts\n- Optimized for Raspberry Pi 5 + Hailo-8L AI accelerator\n\nMy Role: AI Model Engineer\n- Fine-tuned YOLOv11n for industrial detection\n- Benchmarked and calibrated SCDepthV3 for metric accuracy\n- Converted/quantized models for edge deployment (ONNX, INT8)\n- Integrated model outputs for real-time fusion and visualization\n\nTech Stack: Python, PyTorch, Ultralytics, OpenCV, NumPy, Raspberry Pi 5, Hailo-8L\n\nThis project was a Top 10 Finalist (out of 4000+ teams) in the Caterpillar Tech Challenge 2025.`,
    technologies: ['Python', 'PyTorch', 'Ultralytics', 'OpenCV', 'NumPy', 'Raspberry Pi 5', 'Hailo-8L'],
    github: 'https://github.com/magnetbrains-bit/Caterpillar-Tech-Challenge-2025',
    live: 'https://drive.google.com/file/d/1qV9GB5wcjaRl20qXQ0ne8f-7BqMdpODZ/view?usp=sharing',
    videos: [
      { url: 'https://drive.google.com/file/d/1VeQ2eegpc1QHnXRumaZqYk4eTZPvydJY/preview', caption: 'Input Video' },
      { url: 'https://drive.google.com/file/d/1qV9GB5wcjaRl20qXQ0ne8f-7BqMdpODZ/preview', caption: 'Output Video' },
      { url: 'https://drive.google.com/file/d/1WztFMir9MClajiv6faCk2htWQ4IG6_w9/preview', caption: 'Proposed Video' }
    ],
    screenshots: [
      { src: '/screenshots/litedepth/ar-bev-combined.png', caption: 'Live System Interface: AR + BEV' },
      { src: '/screenshots/litedepth/ar-closeup.png', caption: 'AR View in Action' },
      { src: '/screenshots/litedepth/bev-advanced.png', caption: 'Advanced BEV Display' },
      { src: '/screenshots/litedepth/critical-alert.gif', caption: 'Critical Alert Example' }
    ],
    category: 'Edge AI & Perception',
    icon: Truck,
    challenge: 'Caterpillar Tech Challenge 2025'
  }
]

export default function Projects() {
  const [modalProject, setModalProject] = useState<typeof projects[0] | null>(null)
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null)
  return (
    <motion.section
      id="projects"
      className="section-padding bg-gray-50 relative overflow-hidden"
      style={{ scrollMarginTop: '80px' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Subtle Wavy Line Pattern Background */}
      <div className="absolute inset-0 pointer-events-none opacity-55 z-0"
        style={{
          backgroundImage: "url('data:image/svg+xml;utf8,<svg width=\"120\" height=\"40\" viewBox=\"0 0 120 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 20 Q 30 40 60 20 T 120 20\" stroke=\"%230ea5e9\" stroke-width=\"2\" fill=\"none\" stroke-opacity=\"0.25\"/></svg>')",
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'bottom'
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
            <FolderKanban className="w-7 h-7 text-primary-600" aria-label="Projects Icon" />
            <span className="gradient-text">Featured</span> <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of data-driven solutions that demonstrate technical expertise and business impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden card-hover transition-transform duration-200 hover:scale-105 hover:shadow-2xl border border-transparent hover:border-primary-600 hover:border-2 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary-500 focus:outline-none"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-blue-100 flex items-center justify-center cursor-pointer group"
                onClick={() => setModalProject(project)}
              >
                {project.challenge && (
                  <span className="absolute top-4 left-4 px-2 py-1 bg-yellow-200 text-yellow-900 text-xs font-semibold rounded shadow z-10">
                    {project.challenge}
                  </span>
                )}
                <motion.span
                  whileHover={{ rotate: [0, -15, 15, 0] }}
                  transition={{ duration: 0.4 }}
                  className="group-hover:animate-none"
                >
                  <project.icon className="w-16 h-16 text-primary-600" />
                </motion.span>
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded">
                    {project.category}
                  </span>
                </div>
                {/* Overlay for click hint */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-black bg-opacity-40 text-white text-xs rounded transition-opacity opacity-0 group-hover:opacity-100 pointer-events-none select-none">
                  Click to view details
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.shortDescription || project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      title={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/magnetbrains-bit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
          >
            <Github size={20} />
            View More Projects
          </a>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {modalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4"
            onClick={() => setModalProject(null)}
          >
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-lg overflow-y-auto shadow-xl"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setModalProject(null)}
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-colors"
              >
                <X size={20} />
              </button>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <modalProject.icon className="w-10 h-10 text-primary-600" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{modalProject.title}</h3>
                    <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded">{modalProject.category}</span>
                  </div>
                </div>
                <p className="text-gray-700 whitespace-pre-line mb-4">{modalProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {modalProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      title={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mb-6">
                  <a
                    href={modalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  {modalProject.live && (
                    <a
                      href={modalProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
                {modalProject.videos && modalProject.videos.length > 0 ? (
                  <div className="mb-6 grid md:grid-cols-2 gap-4">
                    {modalProject.videos.map((video, idx) => (
                      <div key={idx} className="w-full aspect-video flex flex-col items-center">
                        <iframe
                          src={video.url}
                          width="100%"
                          height="315"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                          className="rounded-lg border shadow-md w-full h-full"
                        ></iframe>
                        <span className="text-xs text-gray-500 mt-2 text-center">{video.caption}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    <h4 className="font-semibold mb-2">Screenshots</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {modalProject.screenshots.map((shot, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <div className="relative w-full group">
                            <img
                              src={shot.src}
                              alt={shot.caption}
                              className="rounded-lg border shadow-md w-full max-h-80 object-contain mb-2 cursor-pointer hover:opacity-80 transition-opacity"
                              onClick={() => setLightbox(shot)}
                            />
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-black bg-opacity-40 text-white text-xs rounded transition-opacity opacity-0 group-hover:opacity-100 pointer-events-none select-none">
                              Click to view
                            </div>
                          </div>
                          <span className="text-xs text-gray-500">{shot.caption}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screenshot Lightbox Modal */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-colors"
              >
                <X size={20} />
              </button>
              <img
                src={lightbox.src}
                alt={lightbox.caption}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <p className="text-center font-medium">{lightbox.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
} 