import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  position: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills?: string[];
}

const Experience: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const experiences: ExperienceItem[] = [
    {
      position: "Geospatial AI Intern",
      company: "Indian Institute of Science Campus - National Institute of Advanced Studies",
      location: "Remote",
      period: "Aug 2024 - Sep 2024",
      description: [
        "Performed analysis of remote sensing data and satellite imagery to detect rubber plantations, including estimating their age across various regions.",
        "Collaborated with a multidisciplinary team to integrate environmental data with machine learning models."
      ],
      skills: ["Remote Sensing", "Satellite Imagery Analysis", "Machine Learning", "Geospatial AI"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-secondary">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,69,0,0.15)_0,rgba(10,10,10,0)_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My professional journey and work experience.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto timeline-container"
        >
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="timeline-item"
            >
              <div className="glass p-6 rounded-lg relative overflow-hidden group">
                <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-700"></div>
                
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{item.position}</h3>
                    <p className="text-primary">{item.company}</p>
                  </div>
                </div>
                
                <div className="ml-0 md:ml-16 space-y-4">
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 text-gray-300">
                    {item.description.map((desc, descIndex) => (
                      <li key={descIndex} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {item.skills && (
                    <div>
                      <p className="text-sm text-gray-400 mb-2">Skills Applied:</p>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 bg-dark border border-primary/20 rounded-full text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;