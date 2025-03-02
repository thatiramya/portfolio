import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  useEffect(() => {
    if (heroRef.current && textRef.current) {
      const heroElement = heroRef.current;
      const textElement = textRef.current;

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        setMousePosition({ x: clientX, y: clientY });
        
        const x = (clientX / window.innerWidth - 0.5) * 20;
        const y = (clientY / window.innerHeight - 0.5) * 20;

        gsap.to(textElement, {
          duration: 0.8,
          x: x,
          y: y,
          ease: 'power2.out',
        });
      };

      heroElement.addEventListener('mousemove', handleMouseMove);

      return () => {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  // Calculate normalized mouse position for glow effect
  const normalizedX = mousePosition.x / (typeof window !== 'undefined' ? window.innerWidth : 1);
  const normalizedY = mousePosition.y / (typeof window !== 'undefined' ? window.innerHeight : 1);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      ref={heroRef}
    >
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark to-secondary opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,69,0,0.05)_0,rgba(10,10,10,0)_70%)]"></div>
        
        {/* Dynamic glow based on mouse position */}
        <div 
          className="absolute w-[40vw] h-[40vw] rounded-full blur-[100px] opacity-10 transition-all duration-1000 ease-out pointer-events-none"
          style={{ 
            background: `radial-gradient(circle, rgba(255,69,0,0.4) 0%, rgba(255,215,0,0.2) 50%, rgba(10,10,10,0) 80%)`,
            left: `${normalizedX * 100}%`,
            top: `${normalizedY * 100}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 150 + 50,
              height: Math.random() * 150 + 50,
              background: `rgba(255, ${Math.floor(Math.random() * 100)}, 0, 0.02)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 80 - 40],
              y: [0, Math.random() * 80 - 40],
              opacity: [0.01, 0.03, 0.01],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <motion.div 
        className="container mx-auto px-4 z-10"
        style={{ opacity, y }}
      >
        <div className="flex flex-col items-center text-center" ref={textRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-primary font-mono text-lg relative inline-block">
              Hello, I'm
              <span className="absolute -inset-1 bg-primary/10 blur-md rounded-lg -z-10"></span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 relative"
          >
            <span className="gradient-text">Thati Ramya</span>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl rounded-full -z-10 opacity-50"></div>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
          >
            A passionate computer science student with expertise in AI, machine learning, and full-stack development.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a 
              href="#contact" 
              className="btn-primary group relative overflow-hidden"
            >
              <span className="relative z-10">Get in Touch</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient-x -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </a>
            <a 
              href="#projects" 
              className="border border-primary text-primary hover:text-white transition-all duration-300 px-6 py-3 rounded-lg font-semibold relative overflow-hidden group"
            >
              <span className="relative z-10">View Projects</span>
              <span className="absolute inset-0 bg-primary scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center space-x-6 mt-12"
          >
            {[
              { icon: <Github className="w-6 h-6" />, href: "https://github.com/thatiramya", label: "GitHub" },
              { icon: <Linkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/thati-ramya-ba0247259", label: "LinkedIn" },
              { icon: <Mail className="w-6 h-6" />, href: "mailto:ramyathati1102@gmail.com", label: "Email" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors duration-300 relative group"
                aria-label={item.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
                <span className="absolute -inset-3 bg-primary/10 scale-0 rounded-full transition-transform duration-300 group-hover:scale-100 -z-10"></span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 1.2,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 0.5
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-primary animate-pulse" />
      </motion.div>
    </section>
  );
};

export default Hero;