import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (offset >= sectionTop && offset < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { 
      icon: <Github className="w-5 h-5" />, 
      href: 'https://github.com/thatiramya',
      label: 'GitHub'
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      href: 'https://www.linkedin.com/in/thati-ramya-ba0247259',
      label: 'LinkedIn'
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      href: 'mailto:ramyathati1102@gmail.com',
      label: 'Email'
    },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'glass-dark py-2 shadow-lg' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <motion.a 
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold relative group"
          >
            <span className="gradient-text">Portfolio</span>
            <span className="absolute -inset-2 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="relative"
                  >
                    <a 
                      href={link.href} 
                      className={`text-white hover:text-primary transition-colors duration-300 text-sm font-medium ${
                        isActive ? 'text-primary' : ''
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <motion.span 
                          layoutId="activeIndicator"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </a>
                  </motion.li>
                );
              })}
            </ul>

            <div className="flex items-center space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  className="text-white hover:text-primary transition-colors duration-300 relative group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                  <span className="absolute -inset-2 bg-primary/10 scale-0 rounded-full transition-transform duration-300 group-hover:scale-100 -z-10"></span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none relative"
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
              <span className="absolute -inset-2 bg-primary/10 scale-0 rounded-full hover:scale-100 transition-transform duration-300 -z-10"></span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-dark border-t border-primary/10"
          >
            <div className="container mx-auto px-4 py-4">
              <ul className="space-y-4">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="relative"
                    >
                      <a 
                        href={link.href} 
                        className={`block text-white hover:text-primary transition-colors duration-300 ${
                          isActive ? 'text-primary' : ''
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                        {isActive && (
                          <motion.span 
                            layoutId="mobileActiveIndicator"
                            className="absolute -left-2 top-0 bottom-0 w-0.5 bg-primary"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
              
              <div className="flex items-center space-x-4 mt-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className="text-white hover:text-primary transition-colors duration-300 relative group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.icon}
                    <span className="absolute -inset-2 bg-primary/10 scale-0 rounded-full transition-transform duration-300 group-hover:scale-100 -z-10"></span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;