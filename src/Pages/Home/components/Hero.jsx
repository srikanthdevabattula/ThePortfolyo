import React from 'react';
import { motion } from 'framer-motion';
import exp from '../../../assets/pngwing.com (17).png'
const Hero = ({ data }) => {
  return (
    <div className='flex flex-col items-center '>
      <motion.div
        initial={{ y: 10 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="w-[100%] sm:hidden flex items-center justify-center"
      >
        <img
          src={data.about.avatar.url}
          alt="profile"
          className="h-[300px] lg:h-[250px] md:h-[200px] w-[250px] lg:w-[200px] md:w-[170px] rounded-[100%] drop-shadow-lg shadow-lg shadow-[white]"
        />
      </motion.div>
      <motion.h1
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-[white] text-[80px] py-1 pt-4 lg:text-[60px] md:text-[45px] sm:text-[25px] font-bold drop-shadow-lg"
      >
        Hi, I'm {data.about.name}<motion.span
          animate={{ rotate: [0, -10, 0, 10, 0], transition: { duration: 1, repeat: Infinity } }}
          style={{ display: 'inline-block' }}
          role="img"
          aria-label="wave"
        >
          👋
        </motion.span>
      </motion.h1>
      <motion.h3
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="text-[30px] lg:text-[25px] md:text-[20px] sm:text-[16px] font-bold drop-shadow-lg text-[#3ae8e2] pb-3"
      >
        {data.about.title}
      </motion.h3>


      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="text-[30px] w-[500px] lg:w-[400px] sm:w-[250px] h-[600px] lg:h-[500px] sm:h-[300px] mt-4 flex flex-col items-center lg:text-[25px] md:text-[20px] sm:text-[16px] font-bold drop-shadow-lg text-[#e5ad68] pb-3"
      >
        <motion.img
          src={exp}
          alt=""
          className=''
          animate={{ rotate: [0, 360], transition: { duration: 2, repeat: Infinity, ease: "linear" } }}
        />
        <div className='relative top-[-440px] lg:top-[-370px] sm:top-[-230px] text-center'>
       <h1 className='text-[70px] lg:text-[60px] sm:text-[40px]'>{data.about.exp_year}</h1> 
       <h3 className='text-[white]'>Years of Experience</h3>
       </div>
       <div className='relative top-[-450px] lg:top-[-370px] sm:top-[-230px] text-center'>
       <h1 className='text-[70px] lg:text-[60px] sm:text-[40px]'>{data.about.some_total}</h1> 
       <h3 className='text-[white]'>Projects</h3>
       </div>
      </motion.div>


    </div>
  );
};

export default Hero;
