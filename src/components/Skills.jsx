// src/components/Skills.jsx
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Skills Section with Floating Icons
const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }, // Adjusted stagger/delay slightly
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 }, // Slightly increased y for more noticeable effect
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }, // Simplified transition, parent stagger handles delay
    },
  };
  // Skills data - you can replace the placeholder images with actual tech icons
  const skillsData = [
    // AI/ML Skills
    { id: 1, name: "Python", level: 95, color: "#3776AB" },
    { id: 2, name: "PyTorch", level: 90, color: "#EE4C2C" },
    { id: 3, name: "TensorFlow", level: 80, color: "#FF6F00" },
    { id: 4, name: "Hugging Face", level: 80, color: "#FFD21F" },
    { id: 5, name: "Scikit-learn", level: 85, color: "#F7931E" },
    { id: 6, name: "OpenCV", level: 90, color: "#5C3EE8" },
    { id: 7, name: "NumPy", level: 85, color: "#013243" },
    { id: 8, name: "Pandas", level: 80, color: "#150458" },
    { id: 9, name: "TFLite", level: 75, color: "#FFCD00" },
    { id: 10, name: "LLMs & VLMs", level: 70, color: "#000000" },
  
    // Programming
    { id: 13, name: "C++", level: 85, color: "#00599C" },
    { id: 14, name: "Java", level: 75, color: "#007396" },
    { id: 15, name: "C", level: 80, color: "#A8B9CC" },
    { id: 16, name: "OOP", level: 85, color: "#6A1B9A" },
    {id: 24, name: "R", level: 80, color: "#EE4C2C"},
    {id: 25, name: "Julia", level: 70, color: "#F7931E"},
  
    // Database
    { id: 17, name: "SQL", level: 85, color: "#003B57" },
    { id: 18, name: "MySQL", level: 80, color: "#4479A1" },
    { id: 19, name: "PostgreSQL", level: 75, color: "#EE4C2C" },
    { id: 26, name: "MongoDB", level: 70, color: "#FFCD00" },
  
    // Dev Tools
    { id: 20, name: "VS Code", level: 90, color: "#007ACC" },
    { id: 21, name: "Google Colab", level: 85, color: "#F9AB00" },
    { id: 22, name: "AWS", level: 70, color: "#FF9900" },
    { id: 23, name: "Eclipse", level: 65, color: "#2C2255" },

    // Web Dev Tools
    { id: 27, name: "JavaScript", level: 80, color: "#F7DF1E" },
    { id: 28, name: "React", level: 85, color: "#61DAFB" },
    { id: 29, name: "HTML5", level: 90, color: "#E34F26" },
    { id: 30, name: "CSS3", level: 85, color: "#1572B6" },
    { id: 31, name: "Tailwind CSS", level: 80, color: "#06B6D4" },
    { id: 32, name: "Docker", level: 75, color: "#2496ED" },
    { id: 33, name: "Git", level: 85, color: "#F05032" }
  ];

  const categories = [
    { name: "AI/ML & Deep Learning", skills: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
    { name: "Programming Languages", skills: [1, 13, 14, 15, 16, 24, 25] },
    { name: "Database Technologies", skills: [17, 18, 19, 26] },
    { name: "Development Tools", skills: [20, 21, 22, 23]},
    { name: "Web Development", skills: [27, 28, 29, 30, 31, 32, 33]}
  ];  

  // Generate random positions for the floating icons
  const generateRandomPosition = () => {
    return {
      x: Math.random() * 100 - 50, // for animation x-axis drift
      y: Math.random() * 100 - 50, // for animation y-axis drift
      scale: Math.random() * 0.3 + 0.8,
      top: Math.random() * 90,     // top in percentage
      left: Math.random() * 90     // left in percentage
    };
  };

  const floatingSkills = skillsData.map(skill => ({
    ...skill,
    ...generateRandomPosition(),
  }));

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-6"
          >
            My <span className="text-indigo-600">Skills</span>
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-indigo-600 mx-auto mb-16"
          ></motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-gray-600 text-center max-w-3xl mx-auto mb-16"
          >
            I've worked with a variety of technologies to deliver exceptional digital solutions.
            My expertise spans frontend, backend, database technologies, and more.
          </motion.p>

          {/* Floating Icons */}
          <div className="relative h-96 mb-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/5 to-indigo-900/20 rounded-2xl"></div>
            
            {floatingSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                className="absolute cursor-pointer"
                style={{ left: `${10 + index * 5}%`, top: `${10 + (index % 5) * 10}%` }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  x: [skill.x, -skill.x, skill.x * 0.8, -skill.x * 1.2, skill.x],
                  y: [skill.y, -skill.y * 1.1, skill.y * 1.2, -skill.y * 0.9, skill.y],
                  scale: skill.scale,
                  opacity: 1,
                }}
                transition={{
                  duration: 10 + index%5 * 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
                // whileHover={{ scale: skill.scale * 1.5, zIndex: 50 }}
              >
                <div 
                  className="flex flex-col items-center justify-center p-4 bg-white rounded-full shadow-xl"
                  style={{ width: '80px', height: '80px' }}
                >
                  <div 
                    className="w-12 h-12 flex items-center justify-center rounded-full"
                    style={{ backgroundColor: `${skill.color}20` }}
                  >
                    {/* Replace with your actual icon */}
                    <div 
                      className="w-6 h-6 rounded-full"
                      style={{ backgroundColor: skill.color }}
                    ></div>
                  </div>
                  <span className="mt-2 text-xs font-medium text-gray-800">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill Categories */}
          <motion.div 
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-12 mt-16"
          >
            {categories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-6">{category.name}</h3>
                <div className="space-y-6">
                  {category.skills.map((skillId) => {
                    const skill = skillsData.find(s => s.id === skillId);
                    return skill ? (
                      <div key={skill.id} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-800">{skill.name}</span>
                          <span className="text-sm text-gray-600">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full rounded-full"
                            style={{ backgroundColor: skill.color }}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                          />
                        </div>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;