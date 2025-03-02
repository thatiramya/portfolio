import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, ChevronRight, ChevronLeft } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  type: 'project' | 'publication';
  highlights?: string[];
}

const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const projects: Project[] = [
    {
      title: "Full-Stack Food Delivery Platform",
      description: "Developed a responsive food delivery website using the MERN stack with real-time order tracking, dynamic menus, secure payments, and optimized backend operations, reducing server response time by over 40% and enhancing user engagement.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Socket.io", "Redux", "RESTful API"],
      github: "https://github.com/thatiramya",
      type: "project",
      highlights: [
        "Real-time order tracking system",
        "Dynamic menu management",
        "Secure payment integration",
        "40% reduction in server response time"
      ]
    },
    {
      title: "AI-Driven Adaptation and Mitigation Strategies for Climate Change",
      description: "Designed an advanced AI-driven framework for climate change adaptation and mitigation, resulting in a 70% increase in the accuracy of climate impact forecasts. Published research in the ICCPCT conference (IEEE), highlighting the critical role of collaboration and innovation in tackling climate change challenges.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["AI", "Machine Learning", "Climate Modeling", "Data Analysis", "Python"],
      link: "https://ieeexplore.ieee.org/",
      type: "publication",
      highlights: [
        "70% increase in climate impact forecast accuracy",
        "Published in IEEE ICCPCT conference",
        "Innovative AI framework for climate solutions",
        "Cross-disciplinary research approach"
      ]
    },
    {
      title: "Improved Brain Tumor Detection using GAN-based Medical Imaging Analysis",
      description: "Received special recognition as the best project of 2024 in the 'Prelims of IEEE YESIST12.' Leveraged GANs and VGG19 to enhance brain tumor detection, aiming for improved diagnostic accuracy and potentially reducing diagnosis time by 80%. TensorFlow and Keras were implemented to train and deploy deep learning models, resulting in a reduction of 25% false negative detections. The research paper has been accepted for publication in the Scopus-indexed IJECE journal.",
      image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["GANs", "VGG19", "TensorFlow", "Keras", "Medical Imaging", "Deep Learning"],
      github: "https://github.com/thatiramya",
      type: "project",
      highlights: [
        "Best project of 2024 in IEEE YESIST12",
        "80% potential reduction in diagnosis time",
        "25% reduction in false negative detections",
        "Accepted for publication in Scopus-indexed IJECE journal"
      ]
    }
  ];

  const nextProject = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

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
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,69,0,0.08)_0,rgba(10,10,10,0)_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            <span className="gradient-text">Projects & Publications</span>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 blur-xl rounded-full -z-10 opacity-50"></div>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Showcasing my research work and technical projects.
          </p>
        </motion.div>

        <div className="relative" ref={ref}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <motion.div 
                variants={itemVariants}
                className="lg:w-1/2 relative group w-full card-3d"
              >
                <div className="relative overflow-hidden rounded-lg shadow-xl aspect-[4/3] w-full futuristic-border">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent opacity-30 blur-sm rounded-lg group-hover:opacity-50 transition duration-700"></div>
                  <div className="w-full h-full">
                    <img 
                      src={projects[activeIndex].image} 
                      alt={projects[activeIndex].title}
                      className="w-full h-full object-cover rounded-lg transition-transform duration-700 group-hover:scale-105"
                      style={{ aspectRatio: "4/3", objectPosition: "center" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent/20"></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-dark to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 bg-dark/80 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/30 neon-glow">
                    {projects[activeIndex].type === 'publication' ? 'PUBLICATION' : 'PROJECT'}
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="lg:w-1/2 space-y-6"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-glow">{projects[activeIndex].title}</h3>
                  <p className="text-gray-300">{projects[activeIndex].description}</p>
                </div>
                
                {projects[activeIndex].highlights && (
                  <div className="glass p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-primary mb-3">Key Highlights</h4>
                    <ul className="space-y-2">
                      {projects[activeIndex].highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeIndex].technologies.map((tech, index) => (
                      <motion.span 
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1  * index * 0.05 }}
                        className="px-3 py-1 bg-dark border border-primary/20 rounded-full text-xs hover:border-primary/50 transition-colors duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {projects[activeIndex].link && (
                    <motion.a 
                      href={projects[activeIndex].link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white bg-primary px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-300 neon-glow"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Publication</span>
                    </motion.a>
                  )}
                  
                  {projects[activeIndex].github && (
                    <motion.a 
                      href={projects[activeIndex].github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white border border-primary px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </div>
            
            <div className="flex justify-center mt-12 gap-4">
              <motion.button 
                onClick={prevProject}
                className="w-10 h-10 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                aria-label="Previous project"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              
              <div className="flex gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? 'bg-primary w-6 neon-glow' 
                        : 'bg-gray-600 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
              
              <motion.button 
                onClick={nextProject}
                className="w-10 h-10 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                aria-label="Next project"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;