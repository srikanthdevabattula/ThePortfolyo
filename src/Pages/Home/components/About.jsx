import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer';

const About = ({ data }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animations each time the component comes into view
    threshold: 0.5,
  });



  return (
    <div className="bg-[#ffffff18]" id='About'>
      <h1 className='text-[40px] lg:text-[35px] md:text-[30px] sm:text-[20px] font-bold text-center font-poppins pt-[40px]'>About</h1>
      
      <motion.div
        ref={ref}
        className="flex sm:flex-col h-[500px] lg:h-[450px] md:h-[370px] sm:h-[auto] px-[100px] lg:px-[80px] md:px-[60px] sm:px-[40px] py-[50px] lg:py-[40px] md:py-[30px] sm:py-[20px]  font-poppins"
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="left w-[70%] sm:w-[100%] sm:order-2 px-[40px] lg:px-[30px] md:px-[20px] sm:px-[0px] space-y-[50px] lg:space-y-[40px] md:space-y-[30px] sm:space-y-[20px] sm:my-[20px]">
          <div className="space-y-1">
            <h3 className="text-[20px] lg:text-[16px] md:text-[14px] sm:text-[12px] font-bold  text-[#d3a14b]">{data.about.subTitle}</h3>
            <p className="text-[15px] lg:text-[13px] md:text-[11px] sm:text-[9px] text-[white]">{data.about.description}</p>
          </div>

          <div className="space-y-2 font-medium text-[17px] lg:text-[15px] md:text-[12px] sm:text-[10px]">
            <div className="flex items-center text-[#7d8b9a] space-x-1">
              <CiLocationOn />
              <h4>{data.about.address}</h4>
            </div>
            <div className="flex items-center text-[#7d8b9a] space-x-1">
              <IoCallOutline />
              <h4>{data.about.phoneNumber}</h4>
            </div>
          </div>

          <div className="flex space-x-3 ">
            {data.social_handles.map((data,index)=>(
              <div key={index}>
                <Link to={data}>
                  <img src={data.image.url} alt="" className="w-[25px] lg:w-[23px] md:w-[20px] shadow-xl hover:shadow-[white] rounded-[100%]"/>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          className="right w-[30%] sm:w-[100%] sm:order-1 flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <img src={data.about.avatar.url} alt="profile" className="h-[100%] sm:h-[200px] drop-shadow-lg"/>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
