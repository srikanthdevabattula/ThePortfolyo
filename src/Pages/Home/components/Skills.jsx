import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = ({ data }) => {
  const sortedSkills = data.skills
    .filter(skill => skill.enabled)
    .sort((a, b) => a.sequence - b.sequence);

  // State to track if skills are in view
  const [isVisible, setIsVisible] = useState(false);

  // Callback for when skills are in view
  const handleSkillsInView = (inView) => {
    setIsVisible(inView);
  };

 
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger every time component comes into view
    threshold: 0.5, // Trigger when 50% of element is in view
    onChange: handleSkillsInView,
  });

  return (
    <div id='Skills' className='px-[100px] bg-[#ffffff18] lg:px-[80px] md:px-[60px] sm:px-[40px] py-[50px] lg:py-[40px] md:py-[30px] sm:py-[20px] space-y-[30px] '>
      <div className='flex flex-col items-center font-poppins'>
        <h1 className='text-[40px] lg:text-[35px] md:text-[30px] sm:text-[20px] font-bold'>Skills</h1>
        <p className='text-gray-200 text-[15px] lg:text-[13px] md:text-[11px] sm:text-[9px]'>The skills, tools and technologies I am really good at:</p>
      </div>
      <div
        className='flex flex-wrap items-center justify-center gap-[60px] md:gap-[40px] sm:gap-[25px]'
        ref={ref} // Reference for in-view detection
      >
        {sortedSkills.map((skill, index) => (
          <motion.div
            key={index}
            className={`order-${skill.sequence} flex flex-col items-center space-y-1`}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={skill.image.url}
              alt={skill.name}
              className="w-[100px] lg:w-[90px] md:w-[65px] sm:w-[35px] h-[100px] lg:h-[90px] md:h-[65px] sm:h-[35px]"
            />
            <h3 className="text-[20px] lg:text-[18px] md:text-[15px] sm:text-[10px] font-semibold text-[white]">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
