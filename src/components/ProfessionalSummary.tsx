import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { Briefcase, Target, Zap } from 'lucide-react';

const Mini3D: React.FC<{ className?: string, color1?: number, color2?: number }> = ({ className = '', color1 = 0x00ffff, color2 = 0x8b5cf6 }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const speedRef = useRef<number>(0.6);


  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const scene = new THREE.Scene();

    const width = Math.max(container.clientWidth, 200);
    const height = Math.max(container.clientHeight, 120);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Decorative object - TorusKnot for visual complexity
    const geo = new THREE.TorusKnotGeometry(0.8, 0.22, 128, 32);
    const mat = new THREE.MeshPhysicalMaterial({
      color: 0x8b5cf6,
      emissive: 0x4b2fb6,
      metalness: 0.7,
      roughness: 0.18,
      clearcoat: 1,
      clearcoatRoughness: 0.15,
      reflectivity: 0.5
    });

    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    // Lighting
    const key = new THREE.DirectionalLight(0xffffff, 0.6);
    key.position.set(5, 5, 5);
    scene.add(key);

    const fill = new THREE.AmbientLight(0xffffff, 0.18);
    scene.add(fill);

    // Add a pulsing point light to create a soft glow
    const pulseLight = new THREE.PointLight(0x00ffff, 0.6, 6, 2);
    pulseLight.position.set(1.5, 1.0, 2);
    scene.add(pulseLight);

    // animate material color by blending between the provided colors
    const colorA = new THREE.Color(color1);
    const colorB = new THREE.Color(color2);
    const baseColor = new THREE.Color().copy(colorA);


    // Interaction
    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      // gentle orient to cursor
      mesh.rotation.x = THREE.MathUtils.lerp(mesh.rotation.x, -y * 0.8, 0.08);
      mesh.rotation.y = THREE.MathUtils.lerp(mesh.rotation.y, x * 0.8, 0.08);
    };

    const onEnter = () => { speedRef.current = 1.6; };
    const onLeave = () => { speedRef.current = 0.6; };

    container.addEventListener('pointermove', onPointerMove);
    container.addEventListener('pointerenter', onEnter);
    container.addEventListener('pointerleave', onLeave);

    const handleResize = () => {
      const w = Math.max(container.clientWidth, 200);
      const h = Math.max(container.clientHeight, 120);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    let raf = 0;
    let last = performance.now();
    const animate = () => {
      const now = performance.now();
      const dt = (now - last) / 1000;
      last = now;
      mesh.rotation.x += dt * 0.5 * speedRef.current;
      mesh.rotation.y += dt * 1.0 * speedRef.current;

      // color blend animation
      const t = (Math.sin(now * 0.001) + 1) * 0.5;
      baseColor.lerpColors(colorA, colorB, t);
      (mesh.material as THREE.MeshPhysicalMaterial).color.copy(baseColor);

      // pulse light intensity
      pulseLight.intensity = 0.5 + Math.sin(now * 0.002) * 0.2;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      container.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerenter', onEnter);
      container.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(raf);
      if (renderer.domElement && container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
      geo.dispose();
      mat.dispose();
      renderer.dispose();
    };
  }, [color1, color2]);

  return <div ref={mountRef} className={className} />;
};

const ProfessionalSummary: React.FC = () => {
  const summaryPoints = [
    {
      icon: <Briefcase size={28} />,
      title: "Full Stack MERN Architect",
      description: "3+ years designing and building scalable production systems from database schema to responsive frontends"
    },
    {
      icon: <Zap size={28} />,
      title: "Web3 & Blockchain Expert",
      description: "Integrated smart contracts, tokenomics, wallet systems, and blockchain validation across BNB Chain & Polygon"
    },
    {
      icon: <Target size={28} />,
      title: "Production-Focused Engineer",
      description: "Expertise in CI/CD pipelines, Docker containerization, and deploying systems serving 100K+ users"
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
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-black/5 via-transparent to-black/5 dark:from-black/80 dark:to-black/90 border-t border-gray-200 dark:border-gray-800">
      {/* Decorative overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent dark:via-black/60 mix-blend-screen" />
      <div className="pointer-events-none absolute -right-40 -top-20 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-400/10 to-purple-500/8 blur-3xl opacity-40" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Profile Highlights
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Backend-first thinking with hands-on expertise across modern tech stacks and emerging blockchain technologies
          </p>

          {/* Neon badge */}


          {/* Mini 3D decorative scene */}
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute right-6 top-0 w-64 h-40 hidden lg:block"
          >
            <Mini3D className="w-full h-full" />
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {summaryPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="rounded-2xl p-8 h-full border border-cyan-500/10 bg-gradient-to-br from-black/5 to-transparent backdrop-blur-md hover:shadow-[0_30px_80px_rgba(59,130,246,0.12)] transition-all duration-300"
                whileHover={{ 
                  y: -10,
                  scale: 1.02
                }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 10 }}
                >
                  {point.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {point.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {point.description}
                </p>

                {/* Tech chips */}
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-mono">MongoDB</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-mono">Express</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 text-white font-mono">React</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-400 text-white font-mono">Node</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
       <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Years Experience", value: "3+" },
            { label: "Projects Delivered", value: "10+" },
            { label: "Tech Stack Mastered", value: "25+" },
            { label: "Web3 Integrations", value: "8+" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-200/50 dark:border-blue-700/30 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.03 }}
            className="relative inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full font-bold shadow-2xl shadow-cyan-500/20"
            onClick={() => { const el = document.getElementById('projects'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
          >
            <span className="text-sm font-mono">Explore Projects</span>
            <span className="text-xs ml-2 bg-white/10 px-2 py-1 rounded-full">MERN · Full Stack</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
