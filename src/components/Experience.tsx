import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronRight, TrendingUp, Users, Code, Rocket, Award, Zap, Target } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Biz Technologies Ltd.',
      role: 'Senior MERN Stack & Web3 Developer',
      period: 'April 2025 – Present',
      duration: '1 Year',
      location: 'Powai, Mumbai',
      level: 'Senior',
      techStack: ['Blockchain', 'Web3.js', 'Smart Contracts', 'Node.js', 'React'],
      achievements: 8,
      highlights: [
        'Architected and deployed 8+ blockchain-integrated platforms across BNB Chain & Polygon networks',
        'Built production Web3 backends with smart contract validation, secure wallet systems, and tokenomics logic',
        'Designed Decentrawood (10-level referral system) & game token distribution for 90%+ burn rates',
        'Developed NexDefi trading bot with real-time market analysis across DEX protocols',
        'Migrated legacy JavaScript to modern ES6+ with 40% performance improvement',
        'Implemented CI/CD pipelines using Docker & Jenkins for automated deployments',
        'Led technical architecture decisions for Web3 applications',
        'Mentored 6 junior developers on blockchain integration'
      ],
      impact: [
        { metric: 'Transaction Volume', value: '1000+ daily', icon: <TrendingUp size={14} /> },
        { metric: 'Performance Gain', value: '40% faster', icon: <Zap size={14} /> },
        { metric: 'Team Size', value: 'Lead 10 devs', icon: <Users size={14} /> }
      ]
    },
    {
      company: 'CHANGE Networks',
      role: 'Junior MERN Stack Developer',
      period: 'May 2024 – March 2025',
      duration: '11 Months',
      location: 'Ghansoli, Mumbai',
      level: 'Mid-Level',
      techStack: ['MERN Stack', 'Redis', 'Docker', 'CI/CD', 'APIs'],
      achievements: 6,
      highlights: [
        'Led migration of monolithic PHP backend to Node.js + MongoDB for a networking platform',
        'Designed 100+ REST APIs with optimized query execution (50% faster response times)',
        'Built responsive React UIs with Tailwind CSS & Material UI for 100K+ users',
        'Implemented Redis caching reducing database load by 60%',
        'Integrated Jenkins CI/CD pipelines with Docker containerization & Nginx reverse proxies',
        'Mentored 3 junior developers on MERN best practices & production deployments'
      ],
      impact: [
        { metric: 'User Base', value: '100K+ users', icon: <Users size={14} /> },
        { metric: 'Performance', value: '50% faster', icon: <Zap size={14} /> },
        { metric: 'Load Reduction', value: '60% less', icon: <Target size={14} /> }
      ]
    },
    {
      company: 'Ganishka Enterprises',
      role: 'MERN Stack Trainer & Developer',
      period: 'Jan 2024 – Jun 2024',
      duration: '6 Months',
      location: 'Panvel, Mumbai',
      level: 'Training Lead',
      techStack: ['Training', 'MERN', 'Docker', 'CI/CD', 'Mentoring'],
      achievements: 5,
      highlights: [
        'Conducted hands-on MERN training for 20+ students from basic to production-ready projects',
        'Developed full-stack applications with authentication, real-time features, and cloud deployment',
        'Taught system design principles for scalable backends',
        'Integrated Docker containerization & CI/CD pipelines in training modules',
        'Improved student project success rate to 95% through mentoring & code reviews'
      ],
      impact: [
        { metric: 'Trained', value: '20+ students', icon: <Users size={14} /> },
        { metric: 'Success Rate', value: '95%', icon: <Award size={14} /> },
        // { metric: 'Projects', value: '15+', icon: <Code size={14} /> }
      ]
    }
  ];

  const stats = [
    { label: 'Total Experience', value: '3+ Years', icon: <Calendar size={20} />, color: 'from-blue-500 to-cyan-500' },
    { label: 'Projects Delivered', value: '10+', icon: <Code size={20} />, color: 'from-green-500 to-emerald-500' },
    { label: 'Team Members Led', value: '8', icon: <Users size={20} />, color: 'from-purple-500 to-pink-500' },
    { label: 'Performance Gains', value: '90% Avg.', icon: <TrendingUp size={20} />, color: 'from-orange-500 to-red-500' }
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-blue-300 dark:border-blue-700 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full mb-4">
            <Rocket className="text-blue-500" size={16} />
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">PROFESSIONAL JOURNEY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Building scalable solutions and leading digital transformation across innovative companies
          </p>
        </motion.div>

        {/* Experience Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-200 dark:border-slate-700 shadow-lg"
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-800 dark:text-white">
                  {stat.value}
                </div>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block" />
          
          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-8 top-8 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/30 z-20 hidden md:block" />
                
                <motion.div
                  className="ml-0 md:ml-16 relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Experience Card */}
                  <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-200/50 dark:border-slate-700/50 hover:border-blue-300/50 dark:hover:border-blue-500/30 transition-all duration-300">
                    {/* Card Header */}
                    <div className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 border-b border-gray-200/50 dark:border-slate-700/50">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                              exp.level === 'Senior' 
                                ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                                : exp.level === 'Mid-Level'
                                ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                                : 'bg-gradient-to-r from-green-500 to-emerald-500'
                            }`}>
                              {exp.level}
                            </span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-full">
                              {exp.duration}
                            </span>
                          </div>
                          
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                            {exp.role}
                          </h3>
                          <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            {exp.company}
                          </h4>
                        </div>
                        
                        <div className="flex flex-col items-end">
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.techStack.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white/80 dark:bg-slate-700/80 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full border border-gray-200 dark:border-slate-600">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Card Body */}
                    <div className="p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                        {exp.highlights.slice(0, 3).map((highlight, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-slate-700/50 rounded-xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <ChevronRight size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 text-sm">{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Impact Metrics */}
                      <div className="mb-6">
                        <h5 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Target size={16} />
                          Key Impact Metrics
                        </h5>
                        <div className="flex flex-wrap gap-3">
                          {exp.impact.map((metric, idx) => (
                            <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 rounded-lg">
                              <div className="text-blue-500">{metric.icon}</div>
                              <div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">{metric.metric}</div>
                                <div className="font-bold text-gray-800 dark:text-white">{metric.value}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Achievements Badge */}
                      {/* <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl">
                        <div className="flex items-center gap-3">
                          <Award className="text-yellow-500" size={20} />
                          <span className="font-semibold text-gray-800 dark:text-white">
                            {exp.achievements} Major Achievements
                          </span>
                        </div>
                        <button className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                          View Details →
                        </button>
                      </div> */}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Career Progression Bar */}
        {/* <motion.div
          className="mt-20 bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
            Career Progression
          </h3>
          <div className="relative h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: true }}
            />
            <div className="absolute inset-0 flex justify-between items-center px-4">
              {['Trainer', 'Junior Dev', 'Mid-Level', 'Senior'].map((level, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full ${
                    idx === 0 ? 'bg-green-500' :
                    idx === 1 ? 'bg-blue-500' :
                    idx === 2 ? 'bg-purple-500' :
                    'bg-pink-500'
                  }`} />
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-400 mt-2">
                    {level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Experience;