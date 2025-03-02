import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  period: string;
  details: string[];
  score: string;
}

const Education: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const educationHistory: EducationItem[] = [
    {
      institution: "B VRaju Institute of Technology",
      degree: "Bachelor of Technology - Computer Science",
      location: "Narsapur, India",
      period: "2022 - present",
      details: [
        "Database Management Systems",
        "Operating Systems",
        "Object-Oriented Programming",
        "Computer Networks"
      ],
      score: "CGPA: 9.3/10"
    },
    {
      institution: "Narayana Junior College",
      degree: "Intermediate MPC",
      location: "Mallampet",
      period: "2020 - 2022",
      details: [],
      score: "Percentage: 98.7%"
    },
    {
      institution: "GDR High School",
      degree: "State Board",
      location: "Gajwel, India",
      period: "2019 - 2020",
      details: [],
      score: "GPA: 10/10"
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
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,69,0,0.1)_0,rgba(10,10,10,0)_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My academic journey and educational background.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          {educationHistory.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-12 last:mb-0"
            >
              <div className="glass p-6 rounded-lg relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent"></div>
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-700"></div>
                
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{item.institution}</h3>
                    <p className="text-primary">{item.degree}</p>
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
                  
                  <div className="font-semibold text-accent">{item.score}</div>
                  
                  {item.details.length > 0 && (
                    <div>
                      <p className="text-sm text-gray-400 mb-2">Key Courses:</p>
                      <div className="flex flex-wrap gap-2">
                        {item.details.map((detail, detailIndex) => (
                          <span 
                            key={detailIndex}
                            className="px-3 py-1 bg-dark border border-primary/20 rounded-full text-xs"
                          >
                            {detail}
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

export default Education;