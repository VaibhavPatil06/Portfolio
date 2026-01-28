import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, Star, Trophy, TrendingUp, BookOpen, Users } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "M.Sc. in Information Technology",
      institution: "Mumbai University",
      status: "Currently Pursuing",
      icon: <GraduationCap size={24} />,
      color: "from-blue-500 to-purple-500",
      highlights: ["Advanced Algorithms", "Machine Learning", "Cloud Computing"],
      gpa: "Expected: 9.0+ CGPA"
    },
    {
      degree: "B.Sc. in Information Technology",
      institution: "Mumbai University",
      grade: "9.17 CGPA (Top 5%)",
      year: "2024",
      icon: <GraduationCap size={24} />,
      color: "from-green-500 to-emerald-500",
      // highlights: ["Distinction Holder", "Dean's List", "Major in Software Engineering"],
      projects: "15+ Academic Projects"
    },
    {
      degree: "HSC (Higher Secondary Certificate)",
      institution: "Karmaveer Bhaurao Patil College, Vashi",
      grade: "80% (Science Stream)",
      year: "2021",
      icon: <BookOpen size={24} />,
      color: "from-purple-500 to-pink-500",
      achievements: ["Mathematics Topper", "Computer Science Excellence"]
    },
    {
      degree: "SSC (Secondary School Certificate)",
      institution: "Shri Hashu Advani Memorial School",
      grade: "71.40%",
      year: "2019",
      icon: <Award size={24} />,
      color: "from-orange-500 to-amber-500",
      activities: ["School Tech Club President", "Science Fair Winner"]
    },
  ];

  const achievements = [
    {
      title: 'Best NSS Volunteer Award',
      description: 'Recognized for outstanding community service and leadership in social welfare initiatives impacting 500+ lives',
      icon: <Trophy size={20} />,
      year: '2023',
      impact: 'Led 50+ community programs'
    },
    {
      title: 'NSS Camp Leadership Excellence',
      description: 'Successfully organized and led a 7-day residential camp managing 100+ volunteers with 95% satisfaction rate',
      icon: <Users size={20} />,
      year: '2022',
      // impact: '500+ community members benefited'
    },
    {
      title: 'College Fest Director',
      description: 'Directed a 2-day tech-cultural fest with 2000+ attendees, secured 50+ sponsorships generating ₹2L+ revenue',
      icon: <Star size={20} />,
      year: '2023',
      // impact: '30+ technical workshops conducted'
    },
    // {
    //   title: 'Tech Innovation Award',
    //   description: 'Awarded for developing innovative software solutions during academic projects and hackathons',
    //   icon: <TrendingUp size={20} />,
    //   year: '2024',
    //   impact: '3 Patent-pending projects'
    // }
  ];

  const certifications = [
    { name: "MERN Stack Certification", status: "Completed", color: "from-blue-500 to-cyan-500" },
    { name: "JAVA Development", status: "Completed", color: "from-purple-500 to-pink-500" },
    { name: "DevOps Engineering", status: "Completed", color: "from-green-500 to-emerald-500" },
    // { name: "AWS Certified Developer", status: "In Progress", color: "from-orange-500 to-yellow-500" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="education" className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-purple-900/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
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
            <Star className="text-yellow-500" size={16} />
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">ACADEMIC EXCELLENCE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Education & Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Academic foundation and recognitions that fuel my passion for innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-slate-700/50">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  Academic Journey
                </h3>
                {/* <div className="text-sm font-semibold px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600 dark:text-blue-400 rounded-full">
                  4 Degrees • 8+ Years
                </div> */}
              </div>
              
              <div className="space-y-6">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group"
                  >
                    <motion.div
                      className="relative bg-gradient-to-br from-white/50 to-white/30 dark:from-slate-900/50 dark:to-slate-800/30 rounded-2xl p-6 border border-gray-200/50 dark:border-slate-700/30 hover:border-blue-300/50 dark:hover:border-blue-500/30 transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      {/* Floating badge */}
                      {index === 1 && (
                        <div className="absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-xs font-bold rounded-full shadow-lg">
                          TOP 5%
                        </div>
                      )}
                      
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className={`p-4 rounded-xl bg-gradient-to-r ${edu.color} text-white flex-shrink-0 shadow-lg`}
                          whileHover={{ rotate: 5, scale: 1.1 }}
                        >
                          {edu.icon}
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                            <h4 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {edu.degree}
                            </h4>
                            <div className="flex items-center gap-2 text-sm">
                              {edu.grade && (
                                <span className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-700 dark:text-green-300 rounded-full font-bold">
                                  {edu.grade}
                                </span>
                              )}
                            </div>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 font-medium mb-3">
                            {edu.institution}
                          </p>
                          
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            {edu.year && (
                              <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                <Calendar size={14} />
                                <span>{edu.year}</span>
                              </div>
                            )}
                            {edu.status && (
                              <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">
                                {edu.status}
                              </span>
                            )}
                          </div>
                          
                          {/* Highlights */}
                          {edu.highlights && (
                            <div className="mt-3">
                              <div className="flex flex-wrap gap-2">
                                {edu.highlights.map((highlight, idx) => (
                                  <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-slate-700/50 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                                    {highlight}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievements & Certifications Section */}
          <div className="space-y-8">
            {/* Achievements */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-slate-700/50">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-yellow-500 to-amber-500">
                      <Trophy className="text-white" size={24} />
                    </div>
                    Awards & Recognitions
                  </h3>
                  <div className="text-sm font-semibold px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-600 dark:text-yellow-400 rounded-full">
                    4 Major Awards
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="group"
                    >
                      <motion.div
                        className="bg-gradient-to-br from-white/60 to-white/40 dark:from-slate-900/60 dark:to-slate-800/40 rounded-2xl p-4 border border-gray-200/50 dark:border-slate-700/30 hover:border-yellow-300/50 dark:hover:border-yellow-500/30 transition-all duration-300 h-full"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-gradient-to-r from-yellow-400/20 to-amber-500/20">
                            {achievement.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="text-sm font-bold text-gray-800 dark:text-white">
                                {achievement.title}
                              </h4>
                              <span className="text-xs font-semibold px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 rounded">
                                {achievement.year}
                              </span>
                            </div>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                              {achievement.description}
                            </p>
                            <div className="text-xs font-medium text-blue-600 dark:text-blue-400">
                              {achievement.impact}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-blue-200/30 dark:border-blue-700/30">
                <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
                    <BookOpen className="text-white" size={20} />
                  </div>
                  Professional Certifications
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/80 dark:bg-slate-800/80 rounded-xl p-3 border border-gray-200/50 dark:border-slate-700/30"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className={`h-1 w-full rounded-full bg-gradient-to-r ${cert.color} mb-2`}></div>
                      <p className="text-sm font-semibold text-gray-800 dark:text-white mb-1">
                        {cert.name}
                      </p>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        cert.status === 'Completed' 
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                          : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                      }`}>
                        {cert.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              className="p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-center text-white">
                <motion.div
                  className="text-3xl font-bold mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🚀 Continuous Growth
                </motion.div>
                <p className="text-blue-100 mb-4">
                  Committed to lifelong learning and professional development
                </p>
                <div className="grid grid-cols-1 gap-4"> 
                  <div>
                    <div className="text-2xl font-bold">25+</div>
                    <div className="text-sm text-blue-200">Tech Skills</div>
                  </div>
                  {/* <div>
                    <div className="text-2xl font-bold">8+</div>
                    <div className="text-sm text-blue-200">Years Learning</div>
                  </div> */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;