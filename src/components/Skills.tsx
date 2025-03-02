import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SkillCategory {
  name: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "HTML/CSS", "SQL"]
    },
    {
      name: "Frameworks & Libraries",
      skills: ["React.js", "Node.js", "Express", "Next.js", "MongoDB", "RESTful API"]
    },
    {
      name: "Technical Skills",
      skills: ["Artificial Intelligence", "Machine Learning", "Data Structures", "Algorithms", "Git/GitHub", "UI/UX"]
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
    <section id="skills" className="py-20 relative overflow-hidden bg-secondary">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,69,0,0.08)_0,rgba(10,10,10,0)_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiencies across various domains.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="glass p-6 rounded-lg relative overflow-hidden group"
            >
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-700"></div>
              
              <h3 className="text-xl font-semibold mb-6 text-primary">{category.name}</h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 0.2 + skillIndex * 0.05 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 rounded-full blur-sm group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="px-4 py-2 bg-dark border border-primary/20 rounded-full text-sm font-medium relative z-10 group-hover:border-primary/40 transition-all duration-300">
                      {skill}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;