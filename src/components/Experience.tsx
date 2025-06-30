import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Biz Technologies Ltd.',
      role: 'Sr. MERN Stack Developer',
      period: 'April 1, 2025 – Present',
      location: 'Powai',
      highlights: [
        'Integrated blockchain smart contracts on both frontend and backend',
        'Built Web3 projects: Decentrawood, NexDefi Exchange Bot, NFT Marketplace',
        'Developed Copy Trading Bot using NEFI token with secure distribution',
        'Migrated legacy JavaScript to modern ES6+ and removed deprecated packages',
        'Led smart contract integration on EVM testnets and mainnets',
        'Implemented secure API communication between blockchain logic and UI'
      ]
    },
    {
      company: 'CHANGE Networks',
      role: 'Jr. MERN Stack Developer',
      period: 'May 23, 2024 – March 30, 2025',
      location: 'Ghansoli',
      highlights: [
        'Migrated large-scale PHP application to MERN Stack',
        'Built REST APIs using Express.js with optimized performance',
        'Converted MySQL data to MongoDB maintaining full data integrity',
        'Designed responsive UIs with React.js, Tailwind CSS, and MUI',
        'Integrated CI/CD pipelines using Jenkins, Docker, Nginx, Apache',
        'Enhanced user experience with interactive dashboard components'
      ]
    },
    {
      company: 'Ganishka Enterprises',
      role: 'MERN Stack Trainer & Developer',
      period: 'Internship',
      location: 'Panvel',
      highlights: [
        'Conducted hands-on MERN Stack training sessions',
        'Helped students build full-stack applications',
        'Improved UI/UX using Tailwind CSS and Material UI',
        'Deployed projects with Docker and CI/CD pipelines',
        'Mentored junior interns and resolved technical issues'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My journey through innovative companies, building scalable solutions and leading digital transformation
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-24 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block" />
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-4 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hidden md:block" />
              
              <motion.div
                className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 md:ml-12 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {exp.role}
                    </h3>
                    <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="flex flex-col md:items-end text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <ChevronRight size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                      <span>{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;