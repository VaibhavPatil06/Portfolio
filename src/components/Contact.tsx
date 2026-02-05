import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Github, 
  MessageCircle,
  Globe,
  Calendar,
  Clock,
  CheckCircle,
  Sparkles,
  User,
  Briefcase,
  Award,
  ExternalLink
} from 'lucide-react';
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: ''
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      project_type: formData.projectType,
      to_email: 'vaibhavvpatill@gmail.com',
      timestamp: new Date().toISOString()
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("🎉 Message sent successfully! I'll get back to you within 24 hours.", {
            position: "top-right",
            autoClose: 4000,
            pauseOnHover: true,
            theme: "dark",
          });
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
            projectType: ""
          });
          setIsSending(false);
        },
        (error) => {
          toast.error("⚠️ Something went wrong. Please try again or email me directly.", {
            position: "top-right",
            autoClose: 4000,
            pauseOnHover: true,
            theme: "dark",
          });
          setIsSending(false);
        }
      );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'vaibhavvpatill@gmail.com',
      href: 'mailto:vaibhavvpatill@gmail.com',
      color: 'from-red-500 via-pink-500 to-rose-500',
      description: 'Fastest response time'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone/WhatsApp',
      value: '+91 73043 91269',
      href: 'https://wa.me/917304391269',
      color: 'from-green-500 via-emerald-500 to-teal-500',
      description: 'Available for calls'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Mumbai, India',
      href: '#',
      color: 'from-blue-500 via-cyan-500 to-sky-500',
      description: 'Open to remote & onsite'
    },
    {
      icon: <Clock size={24} />,
      label: 'Response Time',
      value: '< 24 Hours',
      href: '#',
      color: 'from-purple-500 via-violet-500 to-indigo-500',
      description: 'Guaranteed response'
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vaibhav-patil-08368b256/",
      color: "hover:bg-blue-600/20 hover:border-blue-500/50 hover:text-blue-400",
      stats: "500+ Connections"
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      href: "https://github.com/VaibhavPatil06",
      color: "hover:bg-gray-800/20 hover:border-gray-700/50 hover:text-gray-300",
      stats: "40+ Repositories"
    },
    {
      icon: <Globe size={24} />,
      label: "GitLab",
      href: "https://gitlab.com/VaibhavPatil06",
      color: "hover:bg-orange-600/20 hover:border-orange-500/50 hover:text-orange-400",
      stats: "Private Projects"
    }
  ];

  const projectTypes = [
    "Web3/Blockchain Development",
    "MERN Stack Application",
    "Mobile App (React Native)",
    "Backend Architecture",
    "Smart Contract Development",
    "API Integration",
    "Full Stack Development",
    "Other"
  ];

  const expertiseHighlights = [
    { icon: <Briefcase />, text: "3+ Years Production Experience" },
    { icon: <Award />, text: "10+ Live Projects Deployed" },
    { icon: <User />, text: "100K+ Users Scale Experience" },
    { icon: <CheckCircle />, text: "End-to-End Development" }
  ];

  return (
    <>
      <section
        id="contact"
        className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23636cff' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 200 + 100}px`,
                height: `${Math.random() * 200 + 100}px`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mb-4">
              <Sparkles className="text-cyan-300" size={16} />
              <span className="text-sm font-semibold text-cyan-300">LET'S CONNECT</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's discuss how I can help bring your vision to life with scalable, production-ready solutions
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column - Contact Info & Stats */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${info.color} text-white group-hover:scale-110 transition-transform`}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-400 font-medium">{info.label}</p>
                        <p className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {info.value}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{info.description}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Expertise Highlights */}
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Award className="text-yellow-400" size={20} />
                  Why Work With Me?
                </h4>
                <div className="space-y-3">
                  {expertiseHighlights.map((highlight, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-3 p-3 bg-white/5 rounded-lg"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400">
                        {highlight.icon}
                      </div>
                      <span className="text-gray-300 text-sm">{highlight.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links with Stats */}
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h4 className="text-lg font-bold text-white mb-4">Connect With Me</h4>
                <div className="grid grid-cols-3 gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative overflow-hidden bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 ${social.color} transition-all duration-300 flex flex-col items-center gap-2`}
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {social.icon}
                      <span className="text-xs text-gray-400 mt-1">{social.label}</span>
                      <span className="text-xs text-gray-500">{social.stats}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <motion.div
                className="p-5 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="text-green-400" size={20} />
                  <h5 className="font-bold text-white">Current Availability</h5>
                </div>
                <p className="text-sm text-gray-300 mb-2">
                  <span className="text-green-400 font-semibold">✔ Available</span> for new projects
                </p>
                <div className="text-xs text-gray-400 flex items-center gap-1">
                  <Clock size={12} />
                  Response time: 2-4 hours during business days
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              className="relative w-full"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <MessageCircle className="text-cyan-400" size={28} />
                  <h3 className="text-2xl font-bold text-white">Send me a message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 pl-11 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-200"
                          placeholder="John Doe"
                          required
                        />
                        <User className="absolute left-3 top-3.5 text-gray-400" size={18} />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 pl-11 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-200"
                          placeholder="john@example.com"
                          required
                        />
                        <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Project Type
                    </label>
                    <div className="relative">
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white appearance-none cursor-pointer"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type, idx) => (
                          <option key={idx} value={type} className="bg-gray-900 text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                      <Briefcase className="absolute right-3 top-3.5 text-gray-400" size={18} />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-200"
                      placeholder="Project inquiry or collaboration"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-200 resize-none"
                      placeholder="Tell me about your project, timeline, and requirements..."
                      required
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSending}
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed group"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {isSending ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                        Send Message
                        <ExternalLink size={16} className="opacity-70" />
                      </>
                    )}
                  </motion.button>

                  <p className="text-xs text-gray-400 text-center mt-4">
                    By submitting, you agree to receive a response within 24 hours
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <ToastContainer 
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default Contact;