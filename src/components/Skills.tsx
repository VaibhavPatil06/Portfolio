import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Globe, 
  Cpu, 
  Palette, 
  Shield,
  Server,
  Wrench
} from 'lucide-react';



const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code2 size={24} />,
      skills: [
        { name: 'React.js', proficiency: 'Expert' },
        { name: 'Next.js', proficiency: 'Advanced' },
        { name: 'TypeScript', proficiency: 'Advanced' },
        { name: 'Tailwind CSS', proficiency: 'Expert' },
        { name: 'Redux/TanStack Query', proficiency: 'Advanced' }
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend',
      icon: <Server size={24} />,
      skills: [
        { name: 'Node.js', proficiency: 'Expert' },
        { name: 'Express.js', proficiency: 'Expert' },
        { name: 'REST APIs', proficiency: 'Expert' },
        { name: 'Bull MQ', proficiency: 'Advanced' },
        { name: 'MongoDB Design', proficiency: 'Expert' }
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Blockchain/Web3',
      icon: <Shield size={24} />,
      skills: [
        { name: 'Web3.js', proficiency: 'Advanced' },
        { name: 'Ethers.js', proficiency: 'Advanced' },
        { name: 'Smart Contracts', proficiency: 'Intermediate' },
        { name: 'Tokenomics', proficiency: 'Advanced' },
        { name: 'BNB Chain & Polygon', proficiency: 'Advanced' }
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Databases',
      icon: <Database size={24} />,
      skills: [
        { name: 'MongoDB', proficiency: 'Expert' },
        { name: 'MySQL', proficiency: 'Advanced' },
        { name: 'Redis', proficiency: 'Advanced' },
        { name: 'Data Modeling', proficiency: 'Expert' }
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'DevOps & Deployment',
      icon: <Cpu size={24} />,
      skills: [
        { name: 'Docker', proficiency: 'Advanced' },
        { name: 'CI/CD Pipelines', proficiency: 'Advanced' },
        { name: 'Jenkins', proficiency: 'Advanced' },
        { name: 'AWS EC2', proficiency: 'Intermediate' },
        { name: 'Nginx/Apache', proficiency: 'Advanced' }
      ],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'UI/UX Libraries',
      icon: <Palette size={24} />,
      skills: [
        { name: 'Material UI', proficiency: 'Advanced' },
        { name: 'Bootstrap', proficiency: 'Advanced' },
        { name: 'Ant Design', proficiency: 'Intermediate' },
        { name: 'Framer Motion', proficiency: 'Advanced' },
        { name: 'React Hook Form', proficiency: 'Advanced' }
      ],
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Languages',
      icon: <Globe size={24} />,
      skills: [
        { name: 'JavaScript', proficiency: 'Expert' },
        { name: 'TypeScript', proficiency: 'Advanced' },
        { name: 'Solidity', proficiency: 'Intermediate' },
        { name: 'Python', proficiency: 'Intermediate' },
        { name: 'Java', proficiency: 'Intermediate' }
      ],
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench size={24} />,
      skills: [
        { name: 'Git & GitHub', proficiency: 'Expert' },
        { name: 'Postman', proficiency: 'Advanced' },
        { name: 'Vercel/Netlify', proficiency: 'Advanced' },
        { name: 'Linux', proficiency: 'Advanced' },
        { name: 'Jira', proficiency: 'Intermediate' }
      ],
      color: 'from-yellow-500 to-orange-500'
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
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-gradient-to-br from-black/5 via-transparent to-black/5 dark:from-black/80 dark:to-black/90 border-t border-gray-200 dark:border-gray-800">
      <div className="pointer-events-none absolute -right-40 -top-28 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-400/8 to-purple-500/8 blur-3xl opacity-30" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>

       
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80 border border-gray-200 dark:border-gray-700"
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white mr-3`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600 transition-all"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                        {skill.name}
                      </span>
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                        skill.proficiency === 'Expert' 
                          ? 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300'
                          : skill.proficiency === 'Advanced'
                          ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                          : 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300'
                      }`}>
                        {skill.proficiency}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floating background element */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;