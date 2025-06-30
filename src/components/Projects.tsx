import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Calendar, Users, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    // Biz Technologies Projects
    {
      title: "Decentrawood",
      description:
        "Web3-powered decentralized platform with smart contract integration for real estate tokenization and trading",
      image:
        "https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: [
        "React.js",
        "Web3.js",
        "Solidity",
        "Node.js",
        "MongoDB",
        "Next.js",
        "Ether.js",
        "Docker",
        "Jenkins",
        "CI/CD pipeline",
      ],
      category: "Blockchain",
      company: "Biz Technologies",
      features: [
        "Smart Contract Integration",
        "Token Trading",
        "Real Estate NFTs",
        "Decentralized Governance",
      ],
      sourceCode: false,
      liveDemo: true,
      liveLink: "https://www.decentrawood.com/",
      sourceLink: "",
    },
    {
      title: "NexDefi Exchange Bot",
      description:
        "Advanced trading bot for BNB & Polygon networks with automated strategies and real-time market analysis",
      image:
        "https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Node.js", "Web3.js", "Trading APIs", "MongoDB", "Redis"],
      category: "Blockchain",
      company: "Biz Technologies",
      features: [
        "Multi-chain Support",
        "Automated Trading",
        "Risk Management",
        "Real-time Analytics",
      ],
      sourceCode: false,
      liveDemo: true,
      liveLink: "https://bot.nexdefi.ai/",
      sourceLink: "",
    },
    {
      title: "NFT Marketplace",
      description:
        "Full-featured NFT marketplace with minting, trading, auction capabilities, and royalty management",
      image:
        "https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React.js", "Solidity", "IPFS", "Express.js", "Web3.js"],
      category: "Blockchain",
      company: "Biz Technologies",
      features: [
        "NFT Minting",
        "Auction System",
        "Royalty Distribution",
        "IPFS Storage",
      ],
      sourceCode: false,
      liveDemo: true,
      liveLink: "https://www.decentrawood.com/marketdashboard",
      sourceLink: "",
    },
    {
      title: "Copy Trading Bot",
      description:
        "Automated copy trading system using NEFI token with secure distribution and portfolio mirroring",
      image:
        "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Node.js", "WebSocket", "Redis", "Docker", "NEFI Token"],
      category: "Blockchain",
      company: "Biz Technologies",
      features: [
        "Portfolio Mirroring",
        "Risk Controls",
        "Real-time Execution",
        "Token Rewards",
      ],
      sourceCode: false,
      liveDemo: false,
      liveLink: "",
      sourceLink: "",
    },
    {
      title: "Reward Token Game",
      description:
        "Gamified platform with blockchain-based rewards, secure token distribution, and interactive gameplay",
      image:
        "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: [
        "React.js",
        "Game Logic",
        "Smart Contracts",
        "Web3.js",
        "Node.js",
      ],
      category: "Blockchain",
      company: "Biz Technologies",
      features: [
        "Token Rewards",
        "Leaderboards",
        "Achievement System",
        "Secure Distribution",
      ],
      sourceCode: false,
      liveDemo: false,
      liveLink: "",
      sourceLink: "",
    },
    // Personal Projects
    {
      title: "Event Management System",
      description:
        "Full-stack event management platform with user authentication, CRUD operations, and real-time notifications",
      image:
        "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: [
        "React.js",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Redux Toolkit",
      ],

      category: "Full Stack",
      company: "Personal Project",
      features: [
        "Event CRUD",
        "User Authentication",
        "Image Upload",
        "Search & Filter",
        "Bookmarking",
        "Real-time Notifications",
      ],
      sourceCode: true,
      liveDemo: false,
      liveLink: "",
      sourceLink: "https://github.com/VaibhavPatil06/Event-Manaegement",
    },
    {
      title: "Online Quiz Platform",
      description:
        "Interactive quiz application with user authentication, score tracking, leaderboard, and comprehensive analytics",
      image:
        "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "REST APIs",
      ],
      category: "Full Stack",
      company: "Personal Project",
      features: [
        "Quiz Management",
        "Score Tracking",
        "Leaderboard",
        "User Authentication",
        "Analytics Dashboard",
      ],
      sourceCode: true,
      liveDemo: false,
      liveLink: "https://quiz-app-eight-pink.vercel.app/",
      sourceLink: "https://github.com/VaibhavPatil06/Quiz_App",
    },
    {
      title: "AI Image Generator",
      description:
        "MERN stack web app integrating OpenAI DALL·E API for AI-powered image generation with community sharing",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: [
        "React.js",
        "Node.js",
        "OpenAI DALL·E",
        "Cloudinary",
        "MongoDB",
      ],
      category: "AI/ML",
      company: "Personal Project",
      features: [
        "AI Image Generation",
        "Community Gallery",
        "Cloud Storage",
        "Responsive Design",
      ],
      sourceCode: true,
      liveDemo: false,
      liveLink: "",
      sourceLink: "https://github.com/VaibhavPatil06/AI-Image-Generation",
    },
    {
      title: "Food Delivery App",
      description:
        "Complete food ordering platform with Stripe payments, real-time tracking, and comprehensive admin panel",
      image:
        "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React.js", "Node.js", "MongoDB", "Stripe", "JWT"],
      category: "Full Stack",
      company: "Personal Project",
      features: [
        "Order Management",
        "Stripe Payments",
        "Real-time Tracking",
        "Admin Panel",
        "User Authentication",
      ],
      sourceCode: true,
      liveDemo: false,
      liveLink: "",
      sourceLink: "https://github.com/VaibhavPatil06/Food-Delivery-app",
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getCompanyColor = (company: string) => {
    if (company === 'Biz Technologies') return 'from-purple-500 to-pink-500';
    return 'from-blue-500 to-cyan-500';
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-800 dark:to-slate-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Innovative solutions showcasing expertise in blockchain, full-stack
            development, and modern technologies
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Project Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Project Image */}
                  <motion.div
                    className="relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={projects[currentProject].image}
                      alt={projects[currentProject].title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full">
                        {projects[currentProject].category}
                      </span>
                      <span
                        className={`px-3 py-1 bg-gradient-to-r ${getCompanyColor(
                          projects[currentProject].company
                        )} text-white text-sm font-semibold rounded-full`}
                      >
                        {projects[currentProject].company}
                      </span>
                    </div>
                  </motion.div>

                  {/* Project Details */}
                  <div className="p-8">
                    <motion.h3
                      className="text-3xl font-bold mb-4 text-gray-800 dark:text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {projects[currentProject].title}
                    </motion.h3>

                    <motion.p
                      className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {projects[currentProject].description}
                    </motion.p>

                    {/* Key Features */}
                    <motion.div
                      className="mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide flex items-center gap-2">
                        <Zap size={16} />
                        Key Features
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {projects[currentProject].features.map(
                          (feature, index) => (
                            <motion.div
                              key={index}
                              className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: 0.5 + index * 0.1,
                              }}
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                              {feature}
                            </motion.div>
                          )
                        )}
                      </div>
                    </motion.div>

                    {/* Technologies */}
                    <motion.div
                      className="mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {projects[currentProject].technologies.map(
                          (tech, index) => (
                            <motion.span
                              key={index}
                              className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.3,
                                delay: 0.7 + index * 0.1,
                              }}
                              whileHover={{ scale: 1.1 }}
                            >
                              {tech}
                            </motion.span>
                          )
                        )}
                      </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      className="flex gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <motion.a
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 
                             bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 
                             hover:bg-gray-200 dark:hover:bg-gray-600 
                             ${
                               !projects[currentProject].liveDemo
                                 ? "opacity-50 cursor-not-allowed"
                                 : "to-purple-500  from-blue-500 bg-gradient-to-r text-white"
                             }`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href={projects[currentProject].sourceLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </motion.a>
                      <motion.a
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 
                          bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 
                          hover:bg-gray-200 dark:hover:bg-gray-600 
                          ${
                            !projects[currentProject].sourceCode
                              ? "opacity-50 cursor-not-allowed"
                              : "to-purple-500  from-blue-500 bg-gradient-to-r text-white"
                          }`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href={projects[currentProject].sourceLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={18} />
                        Source Code
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <motion.button
              onClick={prevProject}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft
                size={24}
                className="text-gray-600 dark:text-gray-400"
              />
            </motion.button>

            <motion.button
              onClick={nextProject}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight
                size={24}
                className="text-gray-600 dark:text-gray-400"
              />
            </motion.button>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? "bg-gradient-to-r from-blue-500 to-purple-500"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
{/* 
          Project Stats
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              {
                label: "Total Projects",
                value: projects.length,
                icon: <Calendar size={20} />,
              },
              {
                label: "Blockchain Projects",
                value: projects.filter((p) => p.category === "Blockchain")
                  .length,
                icon: <Zap size={20} />,
              },
              {
                label: "Full Stack Apps",
                value: projects.filter((p) => p.category === "Full Stack")
                  .length,
                icon: <Users size={20} />,
              },
              {
                label: "Technologies",
                value: "25+",
                icon: <Github size={20} />,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md rounded-lg border border-gray-200/30 dark:border-gray-700/30"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-center mb-2 text-blue-500">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-800 dark:text-white font-mono">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;