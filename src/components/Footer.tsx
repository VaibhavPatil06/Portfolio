import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin, ChevronUp, Code, Sparkles, Coffee, Rocket } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  const techStacks = [
    'MERN Stack',
    'Web3.js',
    'React Native',
    'Blockchain',
    'TypeScript',
    'Docker',
    'AWS',
    'Solidity'
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-black pt-12 pb-6 border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23636cff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-cyan-500/5 to-blue-500/5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Vaibhav Patil
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Senior Full Stack & Web3 Developer specializing in building scalable, 
              production-grade applications with blockchain integration and modern tech stacks.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Coffee size={14} />
              <span>Crafting digital solutions since 2023</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <Sparkles size={18} className="text-cyan-400" />
              Navigation
            </h4>
            <nav className="space-y-2">
              {quickLinks.map((item, index) => (
                <motion.button
                  key={item.href}
                  onClick={() => {
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block w-full text-left text-gray-400 hover:text-cyan-300 transition-colors duration-200 py-1 group"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <span className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {item.label}
                  </span>
                </motion.button>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-3">
              <motion.a
                href="mailto:vaibhavvpatill@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-300 transition-colors duration-200 group"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="p-2 rounded-lg bg-gradient-to-r from-red-500/20 to-pink-500/20 group-hover:scale-110 transition-transform">
                  <Mail size={16} className="text-red-400" />
                </div>
                <span className="text-sm">vaibhavvpatill@gmail.com</span>
              </motion.a>
              
              <motion.a
                href="https://wa.me/917304391269"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-300 transition-colors duration-200 group"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-2 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 group-hover:scale-110 transition-transform">
                  <Phone size={16} className="text-green-400" />
                </div>
                <span className="text-sm">+91 73043 91269</span>
              </motion.a>
              
              <motion.div
                className="flex items-center gap-3 text-gray-400 group"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 group-hover:scale-110 transition-transform">
                  <MapPin size={16} className="text-blue-400" />
                </div>
                <span className="text-sm">Mumbai, India • Open to Remote</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white">Tech Expertise</h4>
            <div className="flex flex-wrap gap-2">
              {techStacks.map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-full border border-white/10 hover:border-cyan-500/50 hover:text-cyan-300 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 text-sm flex items-center gap-2 justify-center md:justify-start">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart size={14} className="text-red-400" />
              </motion.span>
              © {currentYear} Vaibhav Patil. All rights reserved.
              <span className="hidden md:inline"> • Crafted with passion</span>
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Senior MERN Stack & Web3 Developer
            </p>
          </motion.div>
          
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-sm text-gray-400 flex items-center gap-2">
              <Rocket size={14} className="text-cyan-400" />
              <span>Building the future, one line at a time</span>
            </div>
            
            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 hover:border-cyan-500/50 transition-all group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronUp size={18} className="text-cyan-400 group-hover:text-cyan-300 transition-colors" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;