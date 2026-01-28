import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Target, Zap } from 'lucide-react';

const ProfessionalSummary: React.FC = () => {
  const summaryPoints = [
    {
      icon: <Briefcase size={28} />,
      title: "Full Stack MERN Architect",
      description: "3+ years designing and building scalable production systems from database schema to responsive frontends"
    },
    {
      icon: <Zap size={28} />,
      title: "Web3 & Blockchain Expert",
      description: "Integrated smart contracts, tokenomics, wallet systems, and blockchain validation across BNB Chain & Polygon"
    },
    {
      icon: <Target size={28} />,
      title: "Production-Focused Engineer",
      description: "Expertise in CI/CD pipelines, Docker containerization, and deploying systems serving 100K+ users"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Profile Highlights
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Backend-first thinking with hands-on expertise across modern tech stacks and emerging blockchain technologies
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {summaryPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 h-full border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300"
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)"
                }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 10 }}
                >
                  {point.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {point.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Years Experience", value: "3+" },
            { label: "Projects Delivered", value: "10+" },
            { label: "Tech Stack Mastered", value: "25+" },
            { label: "Web3 Integrations", value: "8+" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-200/50 dark:border-blue-700/30 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
