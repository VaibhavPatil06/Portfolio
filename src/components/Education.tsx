import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "MSc in IT",
      institution: "Mumbai University",
      status: "Pursuing",
      icon: <GraduationCap size={24} />,
      color: "from-blue-500 to-purple-500",
    },
    {
      degree: "BSc IT",
      institution: "Mumbai University",
      grade: "9.17 CGPA",
      year: "2024",
      icon: <GraduationCap size={24} />,
      color: "from-green-500 to-blue-500",
    },
    {
      degree: "HSC",
      institution: "Karmaveer Bhaurao Patil College, Vashi",
      grade: "80%",
      year: "2021",
      icon: <Award size={24} />,
      color: "from-purple-500 to-pink-500",
    },
    {
      degree: "SSC",
      institution: "Shri Hashu Advani Memorial School",
      grade: "71.40%",
      year : "2019",
      icon: <Award size={24} />,
      color: "from-orange-500 to-red-500",
    },
  ];

  const achievements = [
    {
      title: 'Best NSS Volunteer',
      description: 'Awarded for outstanding community service and leadership',
      icon: <Award size={20} />
    },
    {
      title: 'Best Camp Leader',
      description: 'Led a successful 7-day residential NSS camp',
      icon: <Award size={20} />
    },
    {
      title: 'College Fest Organizer',
      description: 'Successfully organized and led a 2-day college fest',
      icon: <Award size={20} />
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
    <section id="education" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education & Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Academic journey and recognitions that shaped my professional growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-blue-500" />
              Education
            </h3>
            
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <motion.div
                    className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${edu.color} text-white flex-shrink-0`}>
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                          {edu.degree}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">
                          {edu.institution}
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                          {edu.grade && (
                            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full font-semibold">
                              {edu.grade}
                            </span>
                          )}
                          {edu.status && (
                            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-semibold">
                              {edu.status}
                            </span>
                          )}
                          {edu.year && (
                            <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                              <Calendar size={14} />
                              <span>{edu.year}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3">
              <Award className="text-yellow-500" />
              Achievements
            </h3>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <motion.div
                    className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white flex-shrink-0">
                        {achievement.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                          {achievement.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Element */}
            <motion.div
              className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200 dark:border-blue-800"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <motion.div
                  className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Continuous Learning
                </motion.div>
                <p className="text-gray-600 dark:text-gray-400">
                  Always eager to learn new technologies and contribute to meaningful projects
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;