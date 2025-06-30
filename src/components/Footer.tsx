import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Vaibhav Patil
            </h3>
            <p className="text-gray-400 leading-relaxed">
              MERN Stack & Blockchain Developer passionate about creating innovative solutions and contributing to the future of web development.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="space-y-2">
              {['Home', 'Experience', 'Skills', 'Education', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  {item}
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
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-200"
                whileHover={{ x: 5 }}
              >
                <Mail size={16} />
                <span>vaibhavvpatill@gmail.com</span>
              </motion.a>
              <motion.a
                href="tel:+917304391269"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-200"
                whileHover={{ x: 5 }}
              >
                <Phone size={16} />
                <span>+91 7304391269</span>
              </motion.a>
              <motion.div
                className="flex items-center gap-3 text-gray-400"
                whileHover={{ x: 5 }}
              >
                <MapPin size={16} />
                <span>Mumbai, India</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        {/* <motion.div
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm flex items-center gap-2">
            © {currentYear} Vaibhav Patil. Made with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-400" />
            </motion.span>
            and lots of code.
          </p>
          
          <motion.div
            className="text-sm text-gray-400"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
              Building the future, one line at a time
            </span>
          </motion.div>
        </motion.div> */}
      </div>
    </footer>
  );
};

export default Footer;