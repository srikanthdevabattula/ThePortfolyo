import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = ({ data }) => {
  const enabledServices = data.services.filter(service => service.enabled);

  
  const [isVisible, setIsVisible] = React.useState(false);

  
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger every time component comes into view
    threshold: 0.5, // Trigger when 50% of element is in view
    onChange: (inView) => {
      setIsVisible(inView);
    },
  });

  return (
    <div className='p-[30px] sm:p-[20px]' id='Services'>
      <h1 className='text-[40px] lg:text-[35px] md:text-[30px] sm:text-[20px] font-bold text-center font-poppins text-[#656565] mb-4'>Services</h1>
      <div className='flex flex-wrap gap-[30px] sm:gap-[15px] justify-center font-poppins' ref={ref}>
        {enabledServices.map((service, index) => (
          <motion.div
            key={index}
            className={`relative w-[450px] lg:w-[330px] md:w-[280px] sm:w-[165px] h-[300px] lg:h-[280px] md:h-[250px] sm:h-[170px] flex flex-col gap-2 items-center border-[1px] shadow-lg rounded-[14px]`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className='h-[100%] w-[100%] flex flex-col items-center justify-center hover:bg-[#ffffff]'>
              <img src={service.image.url} alt="" className='h-[100%] w-[100%] rounded-[14px]' />
            </div>
            <div className='absolute top-0 left-0 px-[30px] w-full h-full rounded-[14px] bg-[#ffffffe9] bg-opacity-100 flex flex-col items-center space-y-5 justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
              <h1 className='text-[#db4d4d] text-center text-[25px] md:text-[20px] sm:text-[14px] font-bold'>{service.name}</h1>
              <h1 className='text-[black] font-poppins text-center text-[15px] md:text-[12px] sm:text-[10px] font-medium'>{service.desc}</h1>
              <h4 className='font-bold text-[23px] font-Roboto text-[white] w-[100px] rounded-[20px] bg-[#2e1e70] text-center'>{service.charge}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;
