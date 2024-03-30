import React, { useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Timeline = ({ data }) => {
  const educationEntries = data.timeline.filter(entry => entry.enabled && entry.forEducation);
  const experienceEntries = data.timeline.filter(entry => entry.enabled && !entry.forEducation);

  // State to track if timeline entries are in view
  const [experienceVisible, setExperienceVisible] = useState(false);
  const [educationVisible, setEducationVisible] = useState(false);

  // Hook to detect when experience entries are in view
  const { ref: experienceRef, inView: experienceInView } = useInView({
    triggerOnce: false, // Trigger every time component comes into view
    threshold: 0.3, // Trigger when 50% of element is in view
    onChange: (inView) => {
      setExperienceVisible(inView);
    },
  });

  // Hook to detect when education entries are in view
  const { ref: educationRef, inView: educationInView } = useInView({
    triggerOnce: false, // Trigger every time component comes into view
    threshold: 0.3, // Trigger when 50% of element is in view
    onChange: (inView) => {
      setEducationVisible(inView);
    },
  });

  return (
    <div id='Timeline' className='font-poppins bg-[#ffffff18] p-[40px] sm:p-[10px] '>
      <h1 className='text-center text-[40px] lg:text-[35px] md:text-[30px] sm:text-[20px] font-bold'>Timeline</h1>

      <div className='px-[200px] lg:px-[150px] md:px-[50px] sm:px-[0px]'>
        <h1 className='py-4 text-[20px] md:text-[17px] font-bold text-gray-200'>Experience:</h1>
        <div className='space-y-3' ref={experienceRef}>
          {experienceEntries.map((entry, index) => (
            <motion.div
              key={index}
              className='border-[1px] rounded-[20px] p-4 space-y-4 bg-[#ffffff49]'
              initial={{ opacity: 0, y: 20 }}
              animate={experienceVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className='flex justify-between items-center '>
                <h1 className='font-DMSerif font-semibold text-[22px] lg:text-[20px] text-[#53eca7]'>{entry.company_name}</h1>
                <p className='text-[15px] lg:text-[14px] sm:text-[11px] font-Jost text-[#85e2ee]'>{entry.startDate.slice(0, 10)} To {entry.endDate.slice(0, 10)}</p>
              </div>
              <h4 className='text-[20px] lg:text-[18px] sm:text-[14px] font-semibold text-[#4d2195]'>{entry.jobTitle}</h4>
              <p className='font-medium text-[15px] lg:text-[13px] sm:text-[10px]'>{entry.summary}</p>
              <div>
                {entry.bulletPoints.map((point, index) => (
                  <li key={index} className='ml-4 sm:ml-2  text-[13px] lg:text-[12px] sm:text-[10px] text-[white]'>{point}</li>
                ))}
              </div>
              <div className='flex items-center space-x-2'><IoLocationOutline />
                <p className='text-[14px] lg:text-[12px] md:text-[10px] font-semibold'>{entry.jobLocation}</p></div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className='px-[200px] lg:px-[150px] md:px-[50px] sm:px-[0px] mt-4'>
        <h1 className='py-4 text-[20px] md:text-[17px] font-bold text-gray-200'>Education:</h1>
        <div className='space-y-3' ref={educationRef}>
          {educationEntries.map((entry, index) => (
            <motion.div
              key={index}
              className='border-[1px] rounded-[20px] p-4 space-y-4 bg-[#ffffff49]'
              initial={{ opacity: 0, y: 20 }}
              animate={educationVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className='flex justify-between items-center '>
                <h1 className='font-DMSerif font-semibold text-[22px] lg:text-[20px] text-[#53eca7]'>{entry.company_name}</h1>
                <p className='text-[15px] lg:text-[14px] sm:text-[11px] font-Jost text-[#85e2ee]'>{entry.startDate.slice(0, 10)} To {entry.endDate.slice(0, 10)}</p>
              </div>
              <h4 className='text-[20px] lg:text-[18px] sm:text-[14px] font-semibold text-[#4d2195]'>{entry.jobTitle}</h4>
              <p className='font-medium text-[15px] lg:text-[13px] sm:text-[10px]'>{entry.summary}</p>
              <div>
                {entry.bulletPoints.map((point, index) => (
                  <li key={index} className='ml-4 sm:ml-2  text-[13px] lg:text-[12px] sm:text-[10px] text-[white]'>{point}</li>
                ))}
              </div>
              <div className='flex items-center space-x-2'><IoLocationOutline />
                <p className='text-[14px] lg:text-[12px] md:text-[10px] font-semibold'>{entry.jobLocation}</p></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
