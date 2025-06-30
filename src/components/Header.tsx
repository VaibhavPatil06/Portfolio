import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X, Code } from 'lucide-react';
// import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  // const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 theme-transition ${
        isScrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex items-center gap-2 text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <Code className="text-cyan-500" size={28} />
            <span className="bg-gradient-to-r from-cyan-500 cursor-pointer to-purple-500 bg-clip-text text-transparent font-mono">
              VP.dev
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`${
                  isScrolled ? "text-gray-700" : "text-gray-200"
                } dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors font-medium`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* <motion.button
              onClick={toggleTheme}
              className={`p-3 rounded-full transition-all duration-300 ${
                isDark 
                  ? 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30' 
                  : 'bg-slate-800/20 text-slate-700 hover:bg-slate-800/30'
              }`}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button> */}

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-gray-200/50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 backdrop-blur-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            className="md:hidden py-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 border border-gray-200/20 dark:border-gray-700/20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;