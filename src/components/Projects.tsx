import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, Github, Calendar, Users, Zap, Target, Award, 
  TrendingUp, Globe, Cpu, Smartphone, Bot, Brain, Database, 
  FileText, X, Code2, Briefcase, Rocket, ChevronRight, MapPin,
  Music, Heart, DollarSign, Image, Palette, Lock, UserPlus,
  Sparkles, Crown, Trophy, Star, Wallet, Coins
} from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');

  const projects = [
    // Existing Projects
    {
      id: 1,
      title: "Decentrawood - Web3 Community Platform",
      shortDescription: "Full-stack Web3 platform with referral system & smart contracts",
      description: "Full-stack Web3 platform with 10-level referral system, token validation, and decentralized governance. Integrated smart contracts across BNB Chain & Polygon with secure backend validation and database architecture.",
      technologies: [
        "React.js",
        "Web3.js",
        "Ethers.js",
        "Node.js",
        "MongoDB",
        "Solidity",
        "Docker",
        "Jenkins",
      ],
      category: "Blockchain",
      company: "Biz Technologies",
      features: [
        "10-Level Referral System",
        "Smart Contract Integration",
        "Token Holding Validation",
        "Decentralized Governance",
      ],
      impact: "Production system managing token-based community rewards",
      duration: "6 Months",
      teamSize: "4 Developers",
      status: "Live",
      metrics: [
        { label: "Daily Users", value: "500+" },
        { label: "Transactions", value: "1K+" },
        { label: "Uptime", value: "99.9%" }
      ],
      sourceCode: false,
      liveDemo: true,
      liveLink: "https://www.decentrawood.com/",
      sourceLink: "",
      location: "Remote",
      role: "Lead Backend Developer"
    },
    {
      id: 2,
      title: "Token-Based Game Wallet System",
      shortDescription: "Blockchain gaming with login rewards & automated fee distribution",
      description: "Blockchain gaming wallet system with daily login rewards, betting logic, and automated fee distribution with burns. Built on Polygon network with smart contract integration for secure token management and player rewards.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Solidity",
        "Web3.js",
        "Polygon",
        "Redis",
        "Docker",
      ],
      category: "Blockchain",
      company: "Biz Technologies",
      features: [
        "Daily Login Rewards System",
        "Automated Fee Distribution",
        "Betting & Gaming Logic",
        "Secure Wallet Management",
      ],
      impact: "Manages real-world token economics and player engagement",
      duration: "4 Months",
      teamSize: "3 Developers",
      status: "Production",
      metrics: [
        { label: "Active Wallets", value: "2K+" },
        { label: "Daily Rewards", value: "200K" },
        { label: "Burn Rate", value: "90%" }
      ],
      sourceCode: false,
      liveDemo: false,
      liveLink: "",
      sourceLink: "",
      location: "Remote",
      role: "Blockchain Developer"
    },
    {
      id: 3,
      title: "ChainMind AI – Blockchain × AI Platform",
      shortDescription: "Tokenized AI usage with custom ERC-20 smart contracts",
      description: "Full-stack platform integrating Blockchain and Generative AI as core primitives. Features tokenized AI usage model with custom ERC-20 smart contracts (SmartAIToken) and production-ready AI services working together seamlessly.",
      technologies: [
        "React.js",
        "Node.js",
        "Solidity",
        "OpenAI API",
        "Web3.js",
        "MongoDB",
        "ERC-20",
        "Smart Contracts",
      ],
      category: "Blockchain AI",
      company: "Personal Project",
      features: [
        "Tokenized AI Usage (ERC-20)",
        "AI Smart Contract Generation",
        "AI Security Auditing",
        "Blockchain AI Assistant",
        "On-chain AI Usage Tracking",
      ],
      impact: "Integrated blockchain and AI platform with real utility",
      duration: "4 Months",
      teamSize: "Solo",
      status: "Live",
      metrics: [
        { label: "AI Services", value: "4" },
        { label: "Smart Contracts", value: "8 Types" },
        { label: "Token Features", value: "6+" }
      ],
      sourceCode: true,
      liveDemo: true,
      liveLink: "https://www.linkedin.com/posts/vaibhav-patil-08368b256_blockchain-web3-generativeai-ugcPost-7417155649945423872-L2V6",
      sourceLink: "https://github.com/VaibhavPatil06/ChainMind-AI",
      contractAddress: "0x0d2c5d48638dcd76d1041eb441f2ac0be1c15725",
      location: "Personal Project",
      role: "Full Stack Developer"
    },
    {
      id: 4,
      title: "DexBot – Automated DeFi Trading System",
      shortDescription: "Automated trading bot for DEX with ParaSwap integration",
      description: "Full-stack automated trading bot for decentralized exchanges on Binance Smart Chain. Executes buy/sell strategies on PancakeSwap using ParaSwap for optimal routing with real-time monitoring and secure execution.",
      technologies: [
        "React.js",
        "TypeScript",
        "Node.js",
        "Ethers.js",
        "MongoDB",
        "PancakeSwap SDK",
        "ParaSwap API",
        "Socket.io",
      ],
      category: "Blockchain",
      company: "Personal Project",
      features: [
        "Automated Buy/Sell Execution",
        "Optimal Route Finding",
        "Real-time Dashboard",
        "Transaction Analytics",
        "Non-custodial Wallet",
      ],
      impact: "Secure automated trading with real-time monitoring",
      duration: "3 Months",
      teamSize: "Solo",
      status: "Completed",
      metrics: [
        { label: "Transactions", value: "500+" },
        { label: "Success Rate", value: "95%" },
        { label: "Response Time", value: "<1s" }
      ],
      sourceCode: true,
      liveDemo: true,
      liveLink: "https://www.linkedin.com/posts/vaibhav-patil-08368b256_blockchain-defi-web3-ugcPost-7418273175391752192-yqZW",
      sourceLink: "https://github.com/VaibhavPatil06",
      location: "Personal Project",
      role: "Full Stack Developer"
    },
    {
      id: 5,
      title: "Food Delivery App (MERN + React Native)",
      shortDescription: "Multi-role food delivery platform with real-time tracking",
      description: "Complete food delivery platform with React Native mobile apps and MERN stack backend. Supports three user types: Customer, Restaurant Owner, and Delivery Partner with real-time order tracking and management.",
      technologies: [
        "React Native",
        "Expo",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Redux Toolkit",
        "Socket.io",
      ],
      category: "Mobile",
      company: "Personal Project",
      features: [
        "Multi-role Authentication",
        "Real-time Order Tracking",
        "Restaurant Dashboard",
        "Delivery Partner App",
        "Payment Integration",
      ],
      impact: "Full-featured delivery platform with end-to-end workflows",
      duration: "3 Months",
      teamSize: "Solo",
      status: "Completed",
      metrics: [
        { label: "User Types", value: "3" },
        { label: "Screens", value: "25+" },
        { label: "API Endpoints", value: "30+" }
      ],
      sourceCode: true,
      liveDemo: false,
      liveLink: "",
      sourceLink: "https://github.com/VaibhavPatil06/react-native-food-delivery-app",
      location: "Personal Project",
      role: "Mobile & Backend Developer"
    },
    {
      id: 6,
      title: "Student Marksheet Generator",
      shortDescription: "Excel to PDF batch processing system",
      description: "Full-stack file processing system that parses student Excel files, validates data, stores in MongoDB, and generates batch PDF marksheets. Implemented batch processing with error handling and report generation.",
      technologies: [
        "Node.js",
        "React.js",
        "MongoDB",
        "PDF Generation",
        "Excel Parser",
        "Docker",
      ],
      category: "Full Stack",
      company: "Personal Project",
      features: [
        "Excel File Processing",
        "Data Validation & Cleaning",
        "Batch PDF Generation",
        "Error Handling",
        "Automated Updates",
      ],
      impact: "Automated marksheet generation saving 95% manual work",
      duration: "2 Months",
      teamSize: "Solo",
      status: "Completed",
      metrics: [
        { label: "Students", value: "500+" },
        { label: "Processing Time", value: "<30s" },
        { label: "Accuracy", value: "100%" }
      ],
      sourceCode: true,
      liveDemo: false,
      liveLink: "",
      sourceLink: "https://github.com/VaibhavPatil06",
      location: "Personal Project",
      role: "Full Stack Developer"
    },
    {
      id: 7,
      title: "Instagram Business Lead Automation Bot",
      shortDescription: "Automated lead generation with business detection",
      description: "Automated business lead generation system for Instagram with business detection, industry filtering, and location targeting. Scrapes and analyzes profiles to identify potential business leads automatically.",
      technologies: [
        "Python",
        "Selenium",
        "BeautifulSoup",
        "MongoDB",
        "Express.js",
        "React.js",
        "Automation Tools",
      ],
      category: "Automation",
      company: "Freelance Project",
      features: [
        "Business Profile Detection",
        "Industry Filtering",
        "Location Targeting",
        "Lead Data Extraction",
        "CSV/Excel Export",
      ],
      impact: "Saves 20+ hours weekly for sales teams",
      duration: "1.5 Months",
      teamSize: "Solo",
      status: "Completed",
      metrics: [
        { label: "Profiles", value: "10K+" },
        { label: "Accuracy", value: "85%" },
        { label: "Time Saved", value: "20h/week" }
      ],
      sourceCode: false,
      liveDemo: false,
      liveLink: "",
      sourceLink: "",
      location: "Freelance",
      role: "Automation Developer"
    },
    {
      id: 8,
      title: "PHP to MERN Migration Project",
      shortDescription: "Legacy system modernization with 50% performance gain",
      description: "Led complete migration of legacy PHP application to modern MERN stack for networking platform. Redesigned database schema (MySQL → MongoDB), built 20+ REST APIs with optimized queries, and implemented CI/CD with Docker & Jenkins.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Docker",
        "Jenkins",
        "Nginx",
        "Redis",
      ],
      category: "Full Stack",
      company: "CHANGE Networks",
      features: [
        "Backend Rewrite",
        "Database Migration",
        "UI Redesign",
        "CI/CD Pipeline",
        "Performance Optimization",
      ],
      impact: "50% performance improvement, 100K+ active users",
      duration: "8 Months",
      teamSize: "6 Developers",
      status: "Production",
      metrics: [
        { label: "Performance Gain", value: "50%" },
        { label: "Active Users", value: "100K+" },
        { label: "Response Time", value: "<200ms" }
      ],
      sourceCode: false,
      liveDemo: false,
      liveLink: "",
      sourceLink: "",
      location: "Ghansoli, Mumbai",
      role: "MERN Stack Developer"
    },
    // New Projects
    {
      id: 9,
      title: "DeFi Dating App - LoveStake",
      shortDescription: "Decentralized dating platform with token-based matching",
      description: "A revolutionary dating application built on blockchain where users need to spend tokens to unlock profiles and form meaningful connections. The platform combines Tinder-like swiping mechanics with DeFi principles, requiring users to stake tokens for relationship formation and compete on leaderboards.",
      technologies: [
        "React Native",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Web3.js",
        "Solidity",
        "Polygon",
        "Socket.io",
        "Redis",
        "JWT",
      ],
      category: "Blockchain",
      company: "Personal Project",
      features: [
        "Token-Based Profile Unlocking (spend tokens to view profiles)",
        "Staking for Relationship Formation",
        "Global Leaderboard with Rewards",
        "Story Strike Feature (limited time stories)",
        "In-App Token Economy",
        "Secure Profile Verification",
        "Real-time Chat with End-to-End Encryption",
        "Smart Contract-based Matching",
      ],
      impact: "Introduces economic incentives to dating while ensuring genuine connections",
      duration: "5 Months",
      teamSize: "Solo",
      status: "In Development",
      metrics: [
        { label: "Token Features", value: "8+" },
        { label: "Smart Contracts", value: "5" },
        { label: "Matching Algorithms", value: "3" }
      ],
      sourceCode: true,
      liveDemo: false,
      liveLink: "",
      sourceLink: "https://github.com/VaibhavPatil06",
      location: "Personal Project",
      role: "Full Stack Blockchain Developer"
    },
    {
      id: 10,
      title: "Personal Finance Management System",
      shortDescription: "Income/expense tracking with financial insights",
      description: "A comprehensive personal finance management system that helps users track income, expenses, savings, and financial goals. Features categorized transactions, interactive dashboards, and secure authentication with real-time financial insights.",
      technologies: [
        "React.js",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Axios",
        "Chart.js",
        "JWT",
        "bcrypt",
      ],
      category: "Full Stack",
      company: "Personal Project",
      features: [
        "Income & Expense Tracking with Categories",
        "Financial Dashboard with Visual Analytics",
        "Budget Planning & Goal Setting",
        "Secure User Authentication",
        "Transaction History & Reports",
        "Multi-currency Support",
        "Recurring Transactions",
        "Export to CSV/Excel",
      ],
      impact: "Helps users save 15-20% more through better financial visibility",
      duration: "3 Months",
      teamSize: "Solo",
      status: "Completed",
      metrics: [
        { label: "Users", value: "Demo Ready" },
        { label: "Categories", value: "20+" },
        { label: "Reports", value: "5 Types" }
      ],
      sourceCode: true,
      liveDemo: false,
      liveLink: "",
      sourceLink: "https://github.com/VaibhavPatil06/personal-finance-frontend-DL",
      location: "Personal Project",
      role: "Full Stack Developer"
    },
    {
      id: 11,
      title: "Music Decentrawood - Web3 Music Platform",
      shortDescription: "Decentralized music streaming with creator rewards",
      description: "A decentralized music platform within the Decentrawood ecosystem that enables artists and listeners to interact directly using blockchain-powered ownership and reward mechanisms. Features fair reward distribution, token-based engagement, and transparent transactions.",
      technologies: [
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "Material UI",
        "Node.js",
        "Express.js",
        "Web3.js",
        "Ethers.js",
        "MongoDB",
        "Smart Contracts",
        "Docker",
        "AWS EC2",
      ],
      category: "Blockchain",
      company: "Biz Technologies",
      features: [
        "Music Upload & Streaming with Metadata",
        "Web3 Wallet Integration (MetaMask)",
        "Token-Based Reward Distribution",
        "Creator Dashboard with Analytics",
        "Secure Authentication & Authorization",
        "Playlist Management",
        "Royalty Distribution via Smart Contracts",
        "Community Features",
      ],
      impact: "Provides artists 85% revenue share vs 30% on traditional platforms",
      duration: "6 Months",
      teamSize: "4 Developers",
      status: "Live",
      metrics: [
        { label: "Artists", value: "50+" },
        { label: "Tracks", value: "200+" },
        { label: "Revenue Share", value: "85%" }
      ],
      sourceCode: false,
      liveDemo: true,
      liveLink: "https://music.decentrawood.com",
      sourceLink: "",
      location: "Remote",
      role: "Senior MERN Stack & Web3 Developer"
    },
    {
      id: 12,
      title: "Event Management System",
      shortDescription: "Complete event planning platform with booking",
      description: "Full-stack event management system enabling users to create, manage, and participate in events. Features secure authentication with encryption, event booking, image uploads, search filtering, and real-time notifications.",
      technologies: [
        "React.js",
        "TypeScript",
        "Vite.js",
        "Tailwind CSS",
        "Redux Toolkit",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "bcrypt",
        "Multer",
        "Socket.io",
      ],
      category: "Full Stack",
      company: "Personal Project",
      features: [
        "Event CRUD Operations (Create, Read, Update, Delete)",
        "Secure Authentication with Password Hashing",
        "Image Upload & Storage",
        "Advanced Search & Filtering",
        "Event Bookmarking & Favorites",
        "Real-time Notifications",
        "Admin & User Management",
        "Responsive Mobile-First Design",
      ],
      impact: "Streamlines event management process by 60%",
      duration: "2.5 Months",
      teamSize: "Solo",
      status: "Completed",
      metrics: [
        { label: "API Endpoints", value: "15+" },
        { label: "Security Layers", value: "3" },
        { label: "UI Components", value: "20+" }
      ],
      sourceCode: true,
      liveDemo: false,
      liveLink: "",
      sourceLink: "https://github.com/VaibhavPatil06/Event-Management",
      location: "Personal Project",
      role: "Full Stack Developer"
    },
    {
      id: 13,
      title: "AI Image Generation Platform",
      shortDescription: "DALL·E powered image generation with sharing",
      description: "AI-powered image generation web application that integrates with OpenAI's DALL·E API to create images from text prompts. Users can generate, share, and save AI-generated images with a community-focused platform.",
      technologies: [
        "React.js",
        "Vite.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "OpenAI API",
        "Cloudinary",
        "Axios",
        "JWT",
      ],
      category: "AI",
      company: "Personal Project",
      features: [
        "AI Image Generation with DALL·E",
        "Image Sharing & Community Feed",
        "Secure Image Storage (Cloudinary)",
        "Prompt Suggestions & History",
        "User Profile & Collections",
        "Real-time Image Generation",
        "Download & Share Options",
        "Responsive Gallery View",
      ],
      impact: "Generated 1000+ AI images within first week of deployment",
      duration: "2 Months",
      teamSize: "Solo",
      status: "Completed",
      metrics: [
        { label: "AI Models", value: "DALL·E 3" },
        { label: "Generated Images", value: "1K+" },
        { label: "Community Users", value: "Demo" }
      ],
      sourceCode: true,
      liveDemo: false,
      liveLink: "",
      sourceLink: "https://github.com/VaibhavPatil06/project_ai_mern_image_generation",
      location: "Personal Project",
      role: "Full Stack & AI Developer"
    },
    {
      id: 14,
      title: "Subscription System (BSC Testnet)",
      shortDescription: "Blockchain-verified subscription tiers",
      description: "A blockchain-based subscription platform on BSC Testnet with tiered access levels and backend transaction validation. Smart contracts enforce subscription rules while backend validates on-chain transactions for secure access management.",
      technologies: [
        "React.js",
        "Node.js",
        "Web3.js",
        "Solidity",
        "BSC Testnet",
        "MongoDB",
        "Express.js",
        "JWT",
      ],
      category: "Blockchain",
      company: "Personal Project",
      features: [
        "Blockchain-Verified Subscription Tiers",
        "Real-time Transaction Validation",
        "Automated Access Management",
        "Smart Contract Enforcement",
        "Multi-tier Payment System",
        "Subscription Analytics",
        "Renewal Notifications",
        "Cancel/Upgrade Options",
      ],
      impact: "Secure subscription management with on-chain verification",
      duration: "2 Months",
      teamSize: "Solo",
      status: "Completed",
      metrics: [
        { label: "Test Transactions", value: "500+" },
        { label: "Success Rate", value: "99%" },
        { label: "Response Time", value: "<2s" }
      ],
      sourceCode: true,
      liveDemo: false,
      liveLink: "",
      sourceLink: "https://github.com/VaibhavPatil06",
      location: "Personal Project",
      role: "Blockchain Developer"
    }
  ];

  const filters = ['All', 'Blockchain', 'Full Stack', 'Mobile', 'Automation', 'Blockchain AI', 'AI'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const getCompanyColor = (company: string) => {
    switch(company) {
      case 'Biz Technologies': return 'from-purple-500 to-pink-500';
      case 'CHANGE Networks': return 'from-blue-500 to-cyan-500';
      case 'Freelance Project': return 'from-orange-500 to-amber-500';
      default: return 'from-green-500 to-emerald-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Live': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Production': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Completed': return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      case 'In Development': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'Blockchain': return <Zap size={16} className="text-purple-400" />;
      case 'Blockchain AI': return <Brain size={16} className="text-pink-400" />;
      case 'Mobile': return <Smartphone size={16} className="text-blue-400" />;
      case 'Automation': return <Bot size={16} className="text-orange-400" />;
      case 'Full Stack': return <Database size={16} className="text-green-400" />;
      case 'AI': return <Sparkles size={16} className="text-cyan-400" />;
      default: return <FileText size={16} className="text-gray-400" />;
    }
  };

  const projectStats = [
    { label: "Total Projects", value: projects.length, icon: <Target size={20} />, color: "from-blue-500 to-cyan-500" },
    { label: "Blockchain Projects", value: projects.filter(p => p.category.includes("Blockchain")).length, icon: <Zap size={20} />, color: "from-purple-500 to-pink-500" },
    { label: "Live/Production", value: projects.filter(p => p.status === "Production" || p.status === "Live").length, icon: <Award size={20} />, color: "from-green-500 to-emerald-500" },
    { label: "Team Projects", value: projects.filter(p => p.teamSize !== "Solo").length, icon: <Users size={20} />, color: "from-orange-500 to-red-500" },
  ];

  const selectedProjectData = selectedProject !== null ? projects.find(p => p.id === selectedProject) : null;

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            <Rocket className="text-cyan-400" size={16} />
            <span className="text-sm font-semibold text-cyan-400">PROJECT PORTFOLIO • {projects.length} PROJECTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building scalable solutions across Blockchain, AI, Mobile, and Full-Stack development
          </p>
        </motion.div>

        {/* Project Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {projectStats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
              </div>
              <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filterItem) => (
            <motion.button
              key={filterItem}
              onClick={() => setFilter(filterItem)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                filter === filterItem
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filterItem !== 'All' && getCategoryIcon(filterItem)}
              {filterItem}
              {filterItem !== 'All' && (
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                  {projects.filter(p => p.category === filterItem).length}
                </span>
              )}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(project.category)}
                    <span className="text-sm font-semibold text-gray-300">{project.category}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Title & Company */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase size={14} className="text-gray-400" />
                  <span className="text-sm text-gray-400">{project.company}</span>
                </div>

                {/* Short Description */}
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Tech Stack Preview */}
                <div className="mb-4">
                  <div className="text-xs text-gray-400 mb-2">Technologies</div>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded-md border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-md">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      <span>{project.teamSize}</span>
                    </div>
                  </div>
                  <div className="text-cyan-400 text-sm font-medium flex items-center gap-1">
                    View Details
                    <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-gray-400 mb-4">No projects found in this category</div>
            <button
              onClick={() => setFilter('All')}
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-lg transition-all"
            >
              View All Projects
            </button>
          </motion.div>
        )}

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProjectData && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
              />
              
              {/* Modal */}
              <motion.div
                className="fixed inset-4 md:inset-12 lg:inset-20 z-50 overflow-y-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="min-h-full flex items-center justify-center p-4">
                  <div className="bg-gradient-to-br from-gray-900 to-slate-800 rounded-3xl shadow-2xl border border-white/10 w-full max-w-4xl overflow-hidden">
                    {/* Modal Header */}
                    <div className="p-6 border-b border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
                          {getCategoryIcon(selectedProjectData.category)}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{selectedProjectData.title}</h3>
                          <div className="flex items-center gap-3 text-sm text-gray-400">
                            <span className="flex items-center gap-1">
                              <Briefcase size={14} />
                              {selectedProjectData.company}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin size={14} />
                              {selectedProjectData.location}
                            </span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                      >
                        <X size={24} className="text-gray-400" />
                      </button>
                    </div>

                    {/* Modal Body */}
                    <div className="p-6">
                      {/* Special Feature Icons for Dating App */}
                      {selectedProjectData.id === 9 && (
                        <div className="mb-6 p-4 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl border border-pink-500/20">
                          <div className="flex items-center gap-3 mb-3">
                            <Heart className="text-pink-400" size={24} />
                            <h4 className="text-lg font-bold text-white">Web3 Dating Platform Features</h4>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            <div className="flex items-center gap-2 p-2 bg-white/5 rounded-lg">
                              <Wallet size={16} className="text-green-400" />
                              <span className="text-sm text-gray-300">Token Swipes</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-white/5 rounded-lg">
                              <Coins size={16} className="text-yellow-400" />
                              <span className="text-sm text-gray-300">Stake to Match</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-white/5 rounded-lg">
                              <Trophy size={16} className="text-blue-400" />
                              <span className="text-sm text-gray-300">Leaderboard</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-white/5 rounded-lg">
                              <Sparkles size={16} className="text-purple-400" />
                              <span className="text-sm text-gray-300">Story Strike</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Special Feature Icons for Music Platform */}
                      {selectedProjectData.id === 11 && (
                        <div className="mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
                          <div className="flex items-center gap-3 mb-3">
                            <Music className="text-purple-400" size={24} />
                            <h4 className="text-lg font-bold text-white">Web3 Music Platform Features</h4>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            <div className="flex items-center gap-2 p-2 bg-white/5 rounded-lg">
                              <DollarSign size={16} className="text-green-400" />
                              <span className="text-sm text-gray-300">85% Royalty</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-white/5 rounded-lg">
                              <Wallet size={16} className="text-blue-400" />
                              <span className="text-sm text-gray-300">Web3 Wallets</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-white/5 rounded-lg">
                              <Sparkles size={16} className="text-yellow-400" />
                              <span className="text-sm text-gray-300">Token Rewards</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-white/5 rounded-lg">
                              <UserPlus size={16} className="text-cyan-400" />
                              <span className="text-sm text-gray-300">Direct Artist-Fan</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Special Feature Icons for AI Platform */}
                      {selectedProjectData.id === 13 && (
                        <div className="mb-6 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
                          <div className="flex items-center gap-3 mb-3">
                            <Image className="text-cyan-400" size={24} />
                            <h4 className="text-lg font-bold text-white">AI Image Generation Features</h4>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            <div className="flex items-center gap-2 p-2 bg-white/5 rounded-lg">
                              <Sparkles size={16} className="text-purple-400" />
                              <span className="text-sm text-gray-300">DALL·E 3</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-white/5 rounded-lg">
                              <Palette size={16} className="text-pink-400" />
                              <span className="text-sm text-gray-300">Image Sharing</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-white/5 rounded-lg">
                              <Lock size={16} className="text-green-400" />
                              <span className="text-sm text-gray-300">Cloud Storage</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-white/5 rounded-lg">
                              <Star size={16} className="text-yellow-400" />
                              <span className="text-sm text-gray-300">Community Feed</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Project Info */}
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                        <div className="space-y-4">
                          <div className="bg-white/5 rounded-xl p-4">
                            <div className="text-sm text-gray-400 mb-1">Duration</div>
                            <div className="flex items-center gap-2 text-white">
                              <Calendar size={16} />
                              <span className="font-semibold">{selectedProjectData.duration}</span>
                            </div>
                          </div>
                          <div className="bg-white/5 rounded-xl p-4">
                            <div className="text-sm text-gray-400 mb-1">Team Size</div>
                            <div className="flex items-center gap-2 text-white">
                              <Users size={16} />
                              <span className="font-semibold">{selectedProjectData.teamSize}</span>
                            </div>
                          </div>
                          <div className="bg-white/5 rounded-xl p-4">
                            <div className="text-sm text-gray-400 mb-1">My Role</div>
                            <div className="text-white font-semibold">{selectedProjectData.role}</div>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="lg:col-span-2">
                          <h4 className="text-lg font-semibold text-white mb-3">Project Overview</h4>
                          <p className="text-gray-300 leading-relaxed mb-6">
                            {selectedProjectData.description}
                          </p>
                          
                          {/* Contract Address */}
                          {selectedProjectData.contractAddress && (
                            <div className="mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
                              <div className="text-sm text-gray-300 mb-1">Smart Contract Address</div>
                              <code className="text-cyan-300 font-mono text-sm bg-black/30 px-3 py-2 rounded-lg break-all">
                                {selectedProjectData.contractAddress}
                              </code>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Impact & Metrics */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-white mb-4">Impact & Metrics</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {selectedProjectData.metrics.map((metric, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-white/5 to-white/0 rounded-xl p-4 border border-white/10">
                              <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                              <div className="text-sm text-gray-400">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <Zap size={20} />
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {selectedProjectData.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                              <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProjectData.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-2 bg-white/5 text-gray-300 rounded-lg text-sm font-medium border border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-4">
                        {selectedProjectData.liveDemo && (
                          <motion.a
                            href={selectedProjectData.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink size={18} />
                            Live Demo
                          </motion.a>
                        )}
                        
                        {selectedProjectData.sourceCode && (
                          <motion.a
                            href={selectedProjectData.sourceLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github size={18} />
                            Source Code
                          </motion.a>
                        )}

                        {!selectedProjectData.liveDemo && !selectedProjectData.sourceCode && (
                          <div className="px-6 py-3 bg-white/5 text-gray-400 rounded-xl font-medium">
                            Contact for project details
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Project Categories Summary */}
        <motion.div
          className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Expertise Across {new Set(projects.map(p => p.category)).size} Domains
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { category: 'Blockchain', count: projects.filter(p => p.category === 'Blockchain').length, color: 'from-purple-500 to-pink-500', icon: <Zap size={24} /> },
              { category: 'Full Stack', count: projects.filter(p => p.category === 'Full Stack').length, color: 'from-green-500 to-emerald-500', icon: <Database size={24} /> },
              { category: 'Mobile', count: projects.filter(p => p.category === 'Mobile').length, color: 'from-blue-500 to-cyan-500', icon: <Smartphone size={24} /> },
              { category: 'AI/Blockchain AI', count: projects.filter(p => p.category === 'AI' || p.category === 'Blockchain AI').length, color: 'from-cyan-500 to-blue-500', icon: <Brain size={24} /> },
            ].map((cat, index) => (
              <motion.div 
                key={index} 
                className="text-center p-4 bg-white/5 rounded-xl border border-white/10"
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center mb-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${cat.color}`}>
                    {cat.icon}
                  </div>
                </div>
                <div className={`text-3xl font-bold bg-gradient-to-r ${cat.color} bg-clip-text text-transparent mb-2`}>
                  {cat.count}
                </div>
                <div className="text-gray-400 text-sm">{cat.category}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;