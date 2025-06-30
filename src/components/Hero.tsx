import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowDown, Code, Terminal, Zap } from 'lucide-react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingTexts = [
    'MERN Developer',
    'Blockchain Integrator', 
    'CI/CD & Docker Expert',
    'Modern JS Refactorer',
    'Web3 Enthusiast'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = typingTexts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % typingTexts.length);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, typingTexts]);

  const scrollToNextSection = () => {
    const element = document.querySelector('#experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const codeSnippets = [
    "const developer = 'Vaibhav';",
    "function buildAmazingApps() {",
    "  return 'MERN + Blockchain';",
    "}",
    "// Ready to code the future"
  ];

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-black dark:via-purple-950 dark:to-black"
    >
      {/* Matrix-like background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-400 font-mono text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              {Math.random() > 0.5 ? "1" : "0"}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating code elements */}
      <div className="absolute inset-0 overflow-hidden">
        {codeSnippets.map((snippet, index) => (
          <motion.div
            key={index}
            className="absolute text-cyan-400 dark:text-cyan-300 font-mono text-sm opacity-30"
            style={{
              left: `${10 + index * 20}%`,
              top: `${20 + index * 15}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              delay: index * 0.5,
            }}
          >
            {snippet}
          </motion.div>
        ))}
      </div>

      {/* Geometric shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border-2 border-cyan-400 dark:border-cyan-300 opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 border-2 border-purple-400 dark:border-purple-300 opacity-20"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 opacity-20 rounded-full"
          animate={{ scale: [1, 1.2, 1], y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Terminal-like header */}
            <motion.div
              className="mb-8 p-4 bg-black/40 dark:bg-black/60 backdrop-blur-md rounded-lg border border-cyan-400/30 max-w-xl mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-left font-mono text-sm">
                <span className="text-green-400">$</span>
                <span className="text-white ml-2">~/vaibhav</span>
                <br />
                <span className="text-cyan-400">
                  Full Stack Developer | Docker & Jenkins | CI/CD Pipelines |
                  AWS EC2{" "}
                </span>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Vaibhav Vasant Patil
            </motion.h1>

            <motion.div
              className="text-2xl md:text-3xl font-semibold text-white mb-4 h-12 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* <Terminal className="mr-3 text-green-400" size={32} /> */}
              <span className="font-mono">
                <span className="text-green-400">&gt;</span>
                <span className="text-cyan-400 ml-2">
                  {currentText}
                  <span className="animate-pulse text-white">|</span>
                </span>
              </span>
            </motion.div>

            <motion.p
              className="text-xl text-gray-300 flex dark:text-gray-400 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Code className="inline mr-2  text-purple-400" size={20} />
              Crafting high-performance full-stack applications with modern
              tech.
              <Zap className="inline ml-2 mt-1 text-yellow-400" size={20} />
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 border border-cyan-400/30"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const link = document.createElement("a");
                  link.href = "/Vaibhav_Resume.pdf"; 
                  link.download = "Vaibhav_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                toast.success("Resume download started!", {
                  position: "top-right",
                  autoClose: 2000,
                  pauseOnHover: false,
                  theme: "colored",
                });
              }}
            >
              <Download size={20} />
              View Resume
            </motion.button>

            <motion.button
              className="px-8 py-4 bg-transparent text-cyan-400 border-2 border-cyan-400 rounded-full font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center gap-2"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <Mail size={20} />
              Hire Me
            </motion.button>
          </motion.div>

          {/* Coding stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              { label: "Projects", value: "15+", color: "text-cyan-400" },
              { label: "Technologies", value: "20+", color: "text-purple-400" },
              {
                label: "Experience",
                value: "2+ Years",
                color: "text-green-400",
              },
              {
                label: "Freelancing projects",
                value: "3+",
                color: "text-yellow-400",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 bg-black/20 dark:bg-black/40 backdrop-blur-md rounded-lg border border-gray-700/30"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`text-2xl font-bold ${stat.color} font-mono`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            onClick={scrollToNextSection}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 hover:text-cyan-300 transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.1 }}
          >
            <ArrowDown size={24} />
          </motion.button>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Hero;
