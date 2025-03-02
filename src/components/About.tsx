import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Code, Lightbulb, Rocket } from 'lucide-react';

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

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

  const qualities = [
    {
      icon: <Brain className="w-6 h-6 text-primary" />,
      title: "Technical Expertise",
      description: "Proficient in various programming languages and technologies with a strong foundation in computer science principles."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-primary" />,
      title: "Creativity",
      description: "Bringing innovative solutions and fresh perspectives to technical challenges and project development."
    },
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "Continuous Learning",
      description: "Always exploring new technologies, programming languages, research papers, and methodologies."
    },
    {
      icon: <Rocket className="w-6 h-6 text-primary" />,
      title: "Passion for Excellence",
      description: "Committed to continuous improvement and embracing feedback to refine abilities and achieve excellence."
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,69,0,0.08)_0,rgba(10,10,10,0)_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="md:w-2/5 lg:w-1/4"
            ref={ref}
          >
            <div className="relative group max-w-xs mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent opacity-30 blur-sm rounded-lg group-hover:opacity-50 transition duration-700"></div>
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="https://media-hosting.imagekit.io//78305d96611144cf/R_pic.jpg?Expires=1835467666&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=L10ziJezsPFKETT9Zd4oj6w~ByIm8NWndXjcsqM5QCowVvc8TUK58Hrls3923kwn~4LAMZEqhhri~iP4loiRD0rvF1wIIu79~C4xuuug3kjCXhCjmvZ1CEaqUI1SAv1oMb65bjLEztTS-n6aqQ~zzRZ~Api8JH-jzYEty7CPqaNnojtgAJ43cKOz-DmoHx5wxoiFWSDXI3xq7e41D3rilbKX7zvLdZHpQAMXuKtDMjxTHW8lvW9s2h1pEzx4unfJGX5idHDV0Ixd1tM9Y2IHiJW10mDf-HoLoVMqBR5ukOaY1T-F-k4JkRklN3hF3OTu8smEEep~oOyrf151QdH4Kw__" 
                  alt="Professional portrait" 
                  className="w-full h-auto object-cover rounded-lg transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="md:w-3/5 lg:w-3/4"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-bold text-primary"
              >
                Passionate Computer Science Student
              </motion.h3>
              
              <motion.p 
                variants={itemVariants}
                className="text-gray-300 leading-relaxed"
              >
                As a passionate computer science student, I bring a blend of technical expertise, creativity, and a hunger for knowledge to the table. I am always eager to explore new technologies, programming languages, research papers and methodologies, ensuring that I stay ahead of the curve.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-gray-300 leading-relaxed"
              >
                I am committed to continuous improvement and embrace feedback as a means to refine my abilities and achieve excellence. My focus areas include Artificial Intelligence, Machine Learning, and Full-Stack Development.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6"
              >
                {qualities.map((quality, index) => (
                  <div 
                    key={index} 
                    className="glass p-4 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        {quality.icon}
                      </div>
                      <h4 className="font-semibold">{quality.title}</h4>
                    </div>
                    <p className="text-sm text-gray-400">{quality.description}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;