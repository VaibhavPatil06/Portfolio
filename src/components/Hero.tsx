import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowDown, Code, Terminal, Zap, Cpu, Database, Globe, Shield } from 'lucide-react';

// Majestic Infinity Symbol with Perfect Loop
const MajesticInfinitySymbol: React.FC<{ mountRef: React.RefObject<HTMLDivElement>, cursorPower?: number }> = ({ mountRef, cursorPower = 0 }) => {
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const infinityGroupRef = useRef<THREE.Group | null>(null);
  const energyParticlesRef = useRef<THREE.Points | null>(null);
  const glowEffectsRef = useRef<THREE.Group | null>(null);
  const animationFrameId = useRef<number>(0);
  // No mouse-driven parallax; keep static energy flow
  const energyFlowSpeed = useRef(1);
  // track prop without recreating scene on every cursor move
  const cursorPowerRef = useRef<number>(cursorPower);
  useEffect(() => { cursorPowerRef.current = cursorPower; }, [cursorPower]);

  // Perfect infinity curve using Lemniscate of Bernoulli equation
  const createPerfectInfinityCurve = useCallback((segments = 200) => {
    const points: THREE.Vector3[] = [];
    const a = 2; // Size parameter
    
    for (let i = 0; i <= segments; i++) {
      const t = (i / segments) * Math.PI * 2;
      
      // Lemniscate parametric equations for perfect infinity
      const denominator = 1 + Math.sin(t) * Math.sin(t);
      const x = (a * Math.cos(t)) / denominator;
      const z = (a * Math.sin(t) * Math.cos(t)) / denominator;
      
      // Add slight vertical variation for 3D effect
      const y = Math.sin(t * 2) * 0.2;
      
      points.push(new THREE.Vector3(x, y, z));
    }
    
    const curve = new THREE.CatmullRomCurve3(points);
    curve.closed = true;
    return curve;
  }, []);

  // Create dual-tube infinity symbol with perfect join and glossy/fresnel glow
  const createMajesticInfinity = useCallback((curve: THREE.Curve<THREE.Vector3>) => {
    const group = new THREE.Group();
    const materials: THREE.Material[] = [];

    // Primary glossy tube (cyan)
    const tubeGeometry1 = new THREE.TubeGeometry(curve, 400, 0.18, 32, true);
    const neonMaterial1 = new THREE.MeshPhysicalMaterial({
      color: 0x00ffff,
      emissive: 0x00ffff,
      emissiveIntensity: 3,
      metalness: 0.8,
      roughness: 0.12,
      clearcoat: 1,
      clearcoatRoughness: 0.05,
      reflectivity: 0.6,
      transparent: true,
      opacity: 0.95,
      side: THREE.DoubleSide,
    });
    materials.push(neonMaterial1);
    const tube1 = new THREE.Mesh(tubeGeometry1, neonMaterial1);
    group.add(tube1);

    // (Removed inner secondary loop for a cleaner, singular infinity symbol)

    // Rim/fresnel glow mesh
    const rimMaterial = new THREE.ShaderMaterial({
      uniforms: {
        viewDir: { value: new THREE.Vector3() },
        color1: { value: new THREE.Color(0x00ffff) },
        color2: { value: new THREE.Color(0x8b5cf6) },
        power: { value: 2.0 }
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPos;
        void main() {
          vNormal = normalMatrix * normal;
          vPos = (modelViewMatrix * vec4(position,1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        uniform float power;
        varying vec3 vNormal;
        varying vec3 vPos;
        void main() {
          vec3 viewDir = normalize(-vPos);
          float fres = pow(1.0 - dot(normalize(vNormal), viewDir), power);
          vec3 color = mix(color1, color2, fres);
          gl_FragColor = vec4(color, fres*0.6);
        }
      `,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
      side: THREE.DoubleSide
    });
    materials.push(rimMaterial);
    const rimMesh = new THREE.Mesh(tubeGeometry1.clone(), rimMaterial);
    rimMesh.scale.setScalar(1.02);
    group.add(rimMesh);

    // Edge glow with perfect loop
    const edges = new THREE.EdgesGeometry(tubeGeometry1);
    const edgeMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      linewidth: 2,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const edgeLines = new THREE.LineSegments(edges, edgeMaterial);
    materials.push(edgeMaterial);
    group.add(edgeLines);

    // Center node for connection point (bright core)
    const nodeGeometry = new THREE.SphereGeometry(0.18, 32, 32);
    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.95
    });
    materials.push(nodeMaterial);
    const centerNode = new THREE.Mesh(nodeGeometry, nodeMaterial);
    group.add(centerNode);

    // Soft ground reflection disk
    const groundGeo = new THREE.CircleGeometry(4.5, 64);
    const groundMat = new THREE.MeshBasicMaterial({
      color: 0x001219,
      transparent: true,
      opacity: 0.14,
      side: THREE.DoubleSide
    });
    materials.push(groundMat);
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI/2;
    ground.position.y = -0.9;
    group.add(ground);

    return { group, geometries: [tubeGeometry1, edges, nodeGeometry, groundGeo], materials };
  }, []);

  // Create flowing energy particles that follow the curve
  const createEnergyFlow = useCallback((count: number, curve: THREE.Curve<THREE.Vector3>) => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const phases = new Float32Array(count); // Individual particle phases
    const speeds = new Float32Array(count); // Individual speeds
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const phase = Math.random() * Math.PI * 2;
      phases[i] = phase;
      speeds[i] = 0.5 + Math.random() * 1.5;
      
      // Get initial position along curve
      const t = phase / (Math.PI * 2);
      const point = curve.getPoint(t);
      
      positions[i3] = point.x;
      positions[i3 + 1] = point.y;
      positions[i3 + 2] = point.z;
      
      // Color gradient based on position
      const colorPos = t;
      const color = new THREE.Color();
      if (colorPos < 0.5) {
        color.lerpColors(new THREE.Color(0x00ffff), new THREE.Color(0x8b5cf6), colorPos * 2);
      } else {
        color.lerpColors(new THREE.Color(0x8b5cf6), new THREE.Color(0x00ffff), (colorPos - 0.5) * 2);
      }
      
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('phase', new THREE.BufferAttribute(phases, 1));
    geometry.setAttribute('speed', new THREE.BufferAttribute(speeds, 1));
    
    const material = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    
    const particles = new THREE.Points(geometry, material);
    return { particles, geometry, phases, speeds };
  }, []);

  // Update energy flow with perfect continuity
  const updateEnergyFlow = useCallback((particles: THREE.Points, curve: THREE.Curve<THREE.Vector3>, time: number, flowSpeed: number) => {
    const positions = particles.geometry.attributes.position.array as Float32Array;
    const phases = particles.geometry.attributes.phase.array as Float32Array;
    const speeds = particles.geometry.attributes.speed.array as Float32Array;
    
    for (let i = 0; i < positions.length / 3; i++) {
      const i3 = i * 3;
      
      // Calculate position along curve with perfect loop
      const phase = phases[i] + time * 0.001 * speeds[i] * flowSpeed;
      phases[i] = phase;
      
      // Normalize to [0, 2π] for perfect loop
      const normalizedPhase = ((phase % (Math.PI * 2)) + (Math.PI * 2)) % (Math.PI * 2);
      const t = normalizedPhase / (Math.PI * 2);
      
      // Get exact point on curve
      const point = curve.getPoint(t);
      
      // Add slight outward push for volume
      const outward = 0.03;
      const normal = new THREE.Vector3();
      curve.getTangent(t, normal);
      normal.cross(new THREE.Vector3(0, 1, 0)).normalize();
      
      positions[i3] = point.x + normal.x * outward;
      positions[i3 + 1] = point.y + normal.y * outward;
      positions[i3 + 2] = point.z + normal.z * outward;
      
      // Update color based on position (smooth gradient)
      const colors = particles.geometry.attributes.color.array as Float32Array;
      const colorPos = t;
      const color = new THREE.Color();
      
      if (colorPos < 0.25) {
        color.lerpColors(new THREE.Color(0x00ffff), new THREE.Color(0x0088ff), colorPos * 4);
      } else if (colorPos < 0.5) {
        color.lerpColors(new THREE.Color(0x0088ff), new THREE.Color(0x8b5cf6), (colorPos - 0.25) * 4);
      } else if (colorPos < 0.75) {
        color.lerpColors(new THREE.Color(0x8b5cf6), new THREE.Color(0xff00ff), (colorPos - 0.5) * 4);
      } else {
        color.lerpColors(new THREE.Color(0xff00ff), new THREE.Color(0x00ffff), (colorPos - 0.75) * 4);
      }
      
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }
    
    particles.geometry.attributes.position.needsUpdate = true;
    particles.geometry.attributes.color.needsUpdate = true;
    particles.geometry.attributes.phase.needsUpdate = true;
  }, []);

  // Create majestic glow effects
  const createMajesticGlow = useCallback(() => {
    const glowGroup = new THREE.Group();
    
    // Create radial glow
    const glowGeometry = new THREE.SphereGeometry(3, 32, 32);
    const glowMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color(0x00ffff) },
        color2: { value: new THREE.Color(0x8b5cf6) },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        void main() {
          vUv = uv;
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec2 vUv;
        varying vec3 vPosition;
        
        void main() {
          float dist = length(vPosition);
          float pulse = sin(time + dist * 2.0) * 0.5 + 0.5;
          vec3 color = mix(color1, color2, pulse);
          float alpha = (1.0 - smoothstep(0.0, 3.0, dist)) * 0.1;
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
    });
    
    const glowSphere = new THREE.Mesh(glowGeometry, glowMaterial);
    glowGroup.add(glowSphere);
    
    // Create orbiting glow orbs
    for (let i = 0; i < 8; i++) {
      const orbGeometry = new THREE.SphereGeometry(0.15, 16, 16);
      const orbMaterial = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x00ffff : 0x8b5cf6,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      });
      const orb = new THREE.Mesh(orbGeometry, orbMaterial);
      glowGroup.add(orb);
    }
    
    return { group: glowGroup, material: glowMaterial };
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;

    // Initialize Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Atmospheric fog for depth
    scene.fog = new THREE.Fog(0x000000, 5, 20);
    
    // Camera setup for majestic view
    const camera = new THREE.PerspectiveCamera(
      45,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1.2, 6);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;
    
    // High-quality renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    
    container.appendChild(renderer.domElement);
    
    // Advanced Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);
    
    const mainLight = new THREE.DirectionalLight(0x00ffff, 3);
    mainLight.position.set(5, 5, 5);
    mainLight.castShadow = true;
    scene.add(mainLight);
    
    const fillLight = new THREE.DirectionalLight(0x8b5cf6, 2);
    fillLight.position.set(-5, 3, -5);
    scene.add(fillLight);
    
    const rimLight = new THREE.DirectionalLight(0xffffff, 1);
    rimLight.position.set(0, -5, 0);
    scene.add(rimLight);
    
    // Create perfect infinity curve
    const curve = createPerfectInfinityCurve();

    // helper: type guard to find ShaderMaterial in materials list
    const isShaderMaterial = (m: THREE.Material): m is THREE.ShaderMaterial => {
      return ((m as THREE.ShaderMaterial).uniforms !== undefined);
    };
    
    // Create majestic infinity symbol
    const { group: infinityGroup, geometries, materials } = createMajesticInfinity(curve);
    infinityGroupRef.current = infinityGroup;
    // Lay flat and slightly scale for a horizontal, majestic presentation
    infinityGroup.rotation.x = -Math.PI/2;
    infinityGroup.position.y = -0.2;
    infinityGroup.scale.setScalar(1.15);
    scene.add(infinityGroup);
    
    // Create energy flow particles
    const { particles: energyParticles, geometry: particlesGeometry } = createEnergyFlow(400, curve);
    energyParticlesRef.current = energyParticles;
    scene.add(energyParticles);
    
    // Create majestic glow effects
    const { group: glowGroup, material: glowMaterial } = createMajesticGlow();
    glowEffectsRef.current = glowGroup;
    scene.add(glowGroup);
    
    // Create background starfield
    const starfield = createStarfield(800);
    scene.add(starfield);
    
    // No mouse interaction for parallax - energy flow remains static
    // (cursor interactions are handled in the parent `Hero` component visually only)

    
    // Animation loop
    const clock = new THREE.Clock();
    
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      
      // Infinity symbol majestic animation (flat orientation, static — no parallax)
      if (infinityGroupRef.current) {
        // Base horizontal orientation with gentle wobble
        infinityGroupRef.current.rotation.x = -Math.PI/2 + Math.sin(elapsedTime * 0.08) * 0.04;
        infinityGroupRef.current.rotation.y = elapsedTime * 0.12;

        // Gentle floating motion
        infinityGroupRef.current.position.y = -0.2 + Math.sin(elapsedTime * 0.5) * 0.06;

        // Subtle scaling pulse
        const scale = 1.15 + Math.sin(elapsedTime * 0.3) * 0.015;
        infinityGroupRef.current.scale.setScalar(scale);
      }
      
      // Update energy flow
      if (energyParticlesRef.current) {
        updateEnergyFlow(energyParticlesRef.current, curve, elapsedTime * 1000, energyFlowSpeed.current);
      }
      
      // Update glow effects (static behavior — no cursor influence)
      if (glowEffectsRef.current && glowMaterial) {
        glowMaterial.uniforms.time.value = elapsedTime;
        // Keep base colors
        glowMaterial.uniforms.color1.value.set(0x00ffff);
        glowMaterial.uniforms.color2.value.set(0x8b5cf6);

        // Orbit glow orbs
        glowEffectsRef.current.children.slice(1).forEach((child, i) => {
          if (child instanceof THREE.Mesh) {
            const angle = elapsedTime * (0.45 + (i%2)*0.05) + (i * Math.PI / 4);
            const radius = 2 + Math.sin(elapsedTime * 0.45 + i) * 0.25;
            child.position.x = Math.cos(angle) * radius;
            child.position.z = Math.sin(angle) * radius;
            child.position.y = Math.sin(elapsedTime * 0.28 + i) * 0.4;
            child.scale.setScalar(0.9 + Math.sin(elapsedTime * 2 + i) * 0.15);
          }
        });
      }

      if (typeof materials !== 'undefined' && materials.length) {
        const rim = materials.find(isShaderMaterial);
        if (rim && rim.uniforms) {
          rim.uniforms.power.value = 2.0; // fixed intensity
          if (cameraRef.current) rim.uniforms.viewDir.value.copy(cameraRef.current.position);
        }
      }

      if (energyParticlesRef.current) {
        (energyParticlesRef.current.material as THREE.PointsMaterial).size = 0.08; // fixed size
      }
      
      // Camera subtle movement
      if (cameraRef.current) {
        cameraRef.current.position.x = Math.sin(elapsedTime * 0.05) * 0.2;
        cameraRef.current.position.z = 6 + Math.cos(elapsedTime * 0.03) * 0.1;
        cameraRef.current.lookAt(
          Math.sin(elapsedTime * 0.02) * 0.3,
          Math.cos(elapsedTime * 0.01) * 0.2,
          0
        );
      }
      
      // Starfield rotation
      starfield.rotation.y = elapsedTime * 0.01;
      
      renderer.render(scene, camera);
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      if (!mountRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId.current);
      
      if (rendererRef.current && container?.contains(rendererRef.current.domElement)) {
        container.removeChild(rendererRef.current.domElement);
      }
      
      // Dispose all geometries and materials
      const allGeoms = [...geometries, particlesGeometry];
      allGeoms.forEach(geo => geo.dispose());
      if (typeof materials !== 'undefined' && materials.length) {
        materials.forEach(m => { const maybe = m as unknown as { dispose?: () => void }; if (maybe.dispose) maybe.dispose(); });
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [mountRef, createPerfectInfinityCurve, createMajesticInfinity, createEnergyFlow, updateEnergyFlow, createMajesticGlow]);

  // Helper function for starfield
  const createStarfield = (count: number) => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Distribute in spherical volume
      const radius = 10 + Math.random() * 40;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
      
      sizes[i] = Math.random() * 0.03 + 0.01;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    const material = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
    });
    
    return new THREE.Points(geometry, material);
  };

  return null;
};

// Main Hero Component - Refined and Majestic
const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorPower, setCursorPower] = useState(0);
  const mountRef = useRef<HTMLDivElement>(null);

  const typingTexts = useMemo(() => [
    'Senior MERN Stack Developer',
    'Web3 & Blockchain Expert', 
    'Backend Architecture Specialist',
    'Full Stack Engineer',
    'Scalable Systems Builder'
  ], []);

  // Typing effect
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
    }, isDeleting ? 30 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, typingTexts]);

  // Track cursor power
  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let lastTime = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const deltaTime = now - lastTime;
      
      if (deltaTime > 16) {
        const deltaX = e.clientX - lastX;
        const deltaY = e.clientY - lastY;
        const speed = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const power = Math.min(speed / 15, 1);
        
        setCursorPower(power);
        lastX = e.clientX;
        lastY = e.clientY;
        lastTime = now;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const resumeUrl = '/Vaibhav_Patil_Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Vaibhav_Patil_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-950 backdrop-blur-sm">
      {/* Majestic Infinity Symbol Background */}
      <div ref={mountRef} className="absolute inset-0 z-0" />
      <MajesticInfinitySymbol mountRef={mountRef} cursorPower={cursorPower} />
      
      {/* Cosmic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 z-1" />
      
      {/* Energy Power Indicator */}
      {/* <motion.div 
        className="fixed top-6 right-6 z-30 flex items-center gap-3 px-4 py-3 bg-black/50 backdrop-blur-xl rounded-2xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10"
        animate={{ 
          scale: cursorPower > 0.5 ? 1.05 : 1,
          boxShadow: cursorPower > 0 ? `0 0 ${20 + cursorPower * 40}px rgba(0, 255, 255, ${cursorPower * 0.3})` : 'none'
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div 
          className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <div>
          <div className="text-xs text-cyan-300/80 font-mono">MERN FLOW</div>
          <div className="text-lg font-bold text-white font-mono">
            {Math.round(cursorPower * 100)}%
            <span className="text-sm text-cyan-300 ml-2">POWER</span>
          </div>
        </div>
      </motion.div> */}
      
      <div className="relative z-10 container mx-auto min-h-screen flex flex-col justify-center">
        <div className="max-w-7xl mx-auto">
          {/* Majestic Terminal Header */}
          {/* <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-12 inline-block"
          >
            <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-black/60 to-purple-900/20 backdrop-blur-xl rounded-2xl border border-cyan-500/30 shadow-2xl">
              <div className="flex gap-2">
                <motion.div 
                  className="w-3 h-3 rounded-full bg-red-500"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="w-3 h-3 rounded-full bg-yellow-500"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                />
                <motion.div 
                  className="w-3 h-3 rounded-full bg-green-500"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                />
              </div>
              <span className="ml-3 text-sm text-cyan-300 font-mono tracking-wider">
                MAJESTIC_INFINITY — v1.0
              </span>
            </div>
          </motion.div> */}

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {/* Majestic Name */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="mb-10"
              >
                <h1 className="text-6xl mt-20 md:text-8xl font-bold mb-4 leading-tight">
                  <span className="block bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                    VAIBHAV
                  </span>
                  <span className="block bg-gradient-to-r from-purple-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent">
                    Patil
                  </span>
                </h1>
                <div className="h-1 w-48 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
              </motion.div>

              {/* Quantum Typing Animation */}
              <motion.div
                className="mb-10 relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className="w-1 h-12 rounded-full"
                    animate={{
                      background: `linear-gradient(to bottom, 
                        #00ffff ${cursorPower * 50}%, 
                        #8b5cf6 ${50 + cursorPower * 25}%, 
                        #ff00ff ${75 + cursorPower * 25}%)`,
                      boxShadow: cursorPower > 0 ? `0 0 ${10 + cursorPower * 20}px rgba(0, 255, 255, ${cursorPower * 0.5})` : 'none'
                    }}
                  />
                  <div>
                    <div className="text-sm text-cyan-400 font-mono mb-1">ACTIVE MODE</div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-white">
                      <span className="font-mono text-green-400">&gt;</span>
                      <span className="ml-3 text-cyan-200">
                        {currentText}
                        <motion.span 
                          className="text-white"
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          █
                        </motion.span>
                      </span>
                    </h2>
                  </div>
                </div>
                
                <motion.p 
                  className="text-xl text-gray-300 leading-relaxed pl-5 border-l-2 border-cyan-500/30"
                  animate={{
                    textShadow: cursorPower > 0 ? `0 0 ${5 + cursorPower * 10}px rgba(0, 255, 255, ${cursorPower * 0.2})` : 'none'
                  }}
                >
                  <Code className="inline mr-3 text-purple-400" size={24} />
                  <code className="inline text-cyan-300 font-mono">const MERN = ['MongoDB','Express','React','Node.js'];</code>
                  <p>

                  Building scalable, production-ready MERN applications.
                  <Zap className="inline ml-3 text-yellow-400" size={24} />
                  </p>
                </motion.p>
              </motion.div>

              {/* Majestic CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-6 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.button
                  onClick={handleDownloadResume}
                  className="group relative px-10 py-5 bg-gradient-to-r from-cyan-600 via-purple-600 to-cyan-600 rounded-full font-bold text-white overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  animate={{
                    backgroundPosition: cursorPower > 0 ? ['0% 0%', '100% 100%'] : '0% 0%',
                    transition: cursorPower > 0 ? {
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    } : {}
                  }}
                  style={{
                    backgroundSize: '200% 200%'
                  }}
                >
                  <span className="relative z-10 flex items-center gap-3 text-lg">
                    <Download className="group-hover:animate-bounce" size={24} />
                    Download Resume
                  </span>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>

                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="px-10 py-5 border-2 border-cyan-400/40 rounded-full font-bold text-cyan-300 hover:text-white transition-all duration-300 flex items-center gap-3 relative overflow-hidden group"
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: 'rgb(34 211 238)',
                    backgroundColor: 'rgba(34, 211, 238, 0.1)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
                    animate={{
                      x: ['-100%', '100%']
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <Mail size={24} className="relative z-10" />
                  <span className="relative z-10 text-lg">Contact Me</span>
                </motion.button>
              </motion.div>

              {/* Quantum Stats Grid */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 gap-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                {[
                  { icon: Cpu, value: '3+', label: 'Years Experience', color: 'from-cyan-400 to-blue-500', energy: 95 },
                  { icon: Database, value: '25+', label: 'Projects Delivered', color: 'from-purple-400 to-pink-500', energy: 88 },
                  { icon: Globe, value: '10+', label: 'Live Systems', color: 'from-green-400 to-emerald-500', energy: 92 },
                  // { icon: Shield, value: '8+', label: 'Security Audits', color: 'from-yellow-400 to-amber-500', energy: 87 },
                  // { icon: Terminal, value: '∞', label: 'Code Infinity', color: 'from-pink-400 to-rose-500', energy: 100 },
                  // { icon: Zap, value: '⚡', label: 'Cursor Power', color: 'from-blue-400 to-cyan-500', energy: Math.round(cursorPower * 100) },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="p-5 bg-gradient-to-br from-black/40 to-purple-900/10 backdrop-blur-md rounded-xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden group"
                    whileHover={{ y: -8, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Animated energy bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 to-gray-800">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${stat.energy}%` }}
                        transition={{ duration: 1, delay: 1.2 + index * 0.1 }}
                      />
                    </div>
                    
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color} inline-block mb-4 group-hover:scale-110 transition-transform`}>
                      <stat.icon className="text-white" size={24} />
                    </div>
                    <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent font-mono`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                    {/* <div className="text-xs text-cyan-300/80 font-mono mt-2">
                      ENERGY: {stat.energy}%
                    </div> */}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Quantum Code Panel */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="hidden lg:block"
            >
              <div className="bg-gradient-to-br from-black/60 to-purple-900/20 backdrop-blur-xl rounded-3xl border border-cyan-500/30 p-8 relative overflow-hidden shadow-2xl shadow-cyan-500/5">
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    background: 'linear-gradient(45deg, transparent, rgba(0, 255, 255, 0.1), transparent, rgba(139, 92, 246, 0.1), transparent)',
                    backgroundSize: '400% 400%'
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%']
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-500 to-pink-500" />
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
                    <span className="ml-3 text-sm text-cyan-300 font-mono tracking-wider">
                      mern_app.js
                    </span>
                  </div>
                  
                  <pre className="text-sm font-mono overflow-x-auto">
                    <code className="text-gray-300">
                      <span className="text-purple-400">import</span>{' '}
                      <span className="text-cyan-300">express</span>{' '}
                      <span className="text-purple-400">from</span>{' '}
                      <span className="text-green-400">'express'</span>
                      <span className="text-gray-500">;</span>
                      {'\n'}
                      <span className="text-purple-400">import</span>{' '}
                      <span className="text-cyan-300">mongoose</span>{' '}
                      <span className="text-purple-400">from</span>{' '}
                      <span className="text-green-400">'mongoose'</span>
                      <span className="text-gray-500">;</span>
                      {'\n\n'}
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-cyan-300">app</span>{' '}
                      <span className="text-purple-400">=</span>{' '}
                      <span className="text-yellow-400">express</span>
                      <span className="text-gray-500">();</span>
                      {'\n'}
                      <span className="text-cyan-300">mongoose</span>
                      <span className="text-gray-500">.</span>
                      <span className="text-green-400">connect</span>
                      <span className="text-gray-500">(</span>
                      <span className="text-yellow-400">process.env.MONGO_URI</span>
                      <span className="text-gray-500">);</span>
                      {'\n\n'}
                      <span className="text-cyan-300">app</span>
                      <span className="text-gray-500">.</span>
                      <span className="text-green-400">get</span>
                      <span className="text-gray-500">(</span><span className="text-yellow-400">'/'</span>, (req, res) =&gt; res.send(<span className="text-yellow-400">'Hello MERN'</span>)<span className="text-gray-500">);</span>
                      {'\n\n'}
                      <span className="text-purple-400">export</span>{' '}
                      <span className="text-purple-400">default</span>{' '}
                      <span className="text-yellow-400">app</span>
                      <span className="text-gray-500">;</span>
                      <span className="text-gray-500">,</span>
                      {'\n'}
                      {'  '}
                      <span className="text-green-400">cursorControl</span>
                      <span className="text-gray-500">:</span>{' '}
                      <span className="text-yellow-400">true</span>
                      {'\n'}
                      <span className="text-gray-500">{'});'}</span>
                      {'\n\n'}
                      <span className="text-gray-500">// Initialize perfect loop</span>
                      {'\n'}
                      <span className="text-cyan-300">majesticInfinity</span>
                      <span className="text-gray-500">.</span>
                      <span className="text-green-400">init</span>
                      <span className="text-gray-500">();</span>
                      {'\n\n'}
                      <span className="text-gray-500">// Energy flows infinitely</span>
                      {'\n'}
                      <span className="text-cyan-300">majesticInfinity</span>
                      <span className="text-gray-500">.</span>
                      <span className="text-green-400">startFlow</span>
                      <span className="text-gray-500">();</span>
                      {'\n'}
                      <span className="text-purple-400">export</span>{' '}
                      <span className="text-purple-400">default</span>{' '}
                      <span className="text-cyan-300">majesticInfinity</span>
                      <span className="text-gray-500">;</span>
                    </code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Majestic Scroll Indicator */}
          {/* <motion.div
            onClick={() => scrollToSection('projects')}
            className="absolute bottom-16 left-1/2 transform -translate-x-1/2 cursor-pointer z-20 group"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <div className="flex flex-col items-center">
              <motion.span 
                className="text-sm text-cyan-400 mb-4 font-mono tracking-wider"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                EXPLORE INFINITY
              </motion.span>
              <div className="relative">
                <motion.div
                  className="w-px h-20 bg-gradient-to-b from-cyan-400/80 via-purple-400/60 to-transparent"
                  animate={{
                    height: ['20px', '40px', '20px']
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                    scale: { duration: 1.5, repeat: Infinity }
                  }}
                >
                  <ArrowDown className="text-cyan-400 group-hover:text-white transition-colors" size={32} />
                </motion.div>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;