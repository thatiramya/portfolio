import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, AlignCenterVertical as Certificate } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  icon: 'award' | 'certificate';
}

const Achievements: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const achievements: Achievement[] = [
    {
      title: "Best Project of the Year",
      description: "Selected as the best project of the year at the Prelims of IEEE YESIST12—'KAUSHALYA' open house project expo 2024 (Youth Endeavors for Social Innovation using Sustainable Technology).",
      icon: 'award'
    },
    {
      title: "First Prize in TECHSURGE-2K24",
      description: "Awarded first prize in the TECHSURGE-2K24 'Prastuthi' Idea Pitching event held at BVRIT, Narsapur.",
      icon: 'award'
    },
    {
      title: "PCAP: Programming Essentials in Python",
      description: "Certification from CISCO Networking Academy for Python programming essentials.",
      icon: 'certificate'
    },
    {
      title: "TechA Git Foundation Certification",
      description: "Certification from Infosys Springboard for Git foundation skills.",
      icon: 'certificate'
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
    <section id="achievements" className="py-20 relative overflow-hidden bg-secondary">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,69,0,0.15)_0,rgba(10,10,10,0)_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Recognition and certifications I've earned throughout my journey.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass p-6 rounded-lg relative overflow-hidden group"
            >
              <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-700"></div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  {item.icon === 'award' ? (
                    <Award className="w-6 h-6 text-primary" />
                  ) : (
                    <Certificate className="w-6 h-6 text-primary" />
                  )}
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
              
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;