import React from 'react';
import { motion } from 'framer-motion';

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
          className="h-[300px] lg:h-[250px] md:h-[200px] w-[250px] lg:w-[200px] md:w-[170px] rounded-[200px] drop-shadow-lg"
        />
      </motion.div>
      <motion.h1
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-[white] text-[80px] py-1 lg:text-[60px] md:text-[45px] sm:text-[25px] font-bold drop-shadow-lg"
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
    </div>
  );
};

export default Hero;
