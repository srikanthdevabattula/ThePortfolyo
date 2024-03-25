import React from 'react';

const Services = ({ data }) => {
 
  const enabledServices = data.services.filter(service => service.enabled);

  return (
    <div className='p-[30px] sm:p-[20px]' id='Services'>
      <h1 className='text-[40px] lg:text-[35px] md:text-[30px] sm:text-[20px] font-bold text-center font-poppins mb-4'>Services</h1>
      <div className='flex  flex-wrap gap-[30px] sm:gap-[15px] justify-center font-poppins'>
      {enabledServices.map((service, index) => (
    <div id='333' key={index} className={`relative  w-[550px] lg:w-[330px] md:w-[280px] sm:w-[175px] h-[400px] lg:h-[360px] md:h-[300px] sm:h-[220px] flex flex-col gap-2 items-center border-[1px] shadow-lg rounded-[14px]`} >
      <div className='h-[100%] w-[100%] flex flex-col items-center justify-center hover:bg-[#ffffff]'>
        <img src={service.image.url} alt="" className='h-[100%] w-[100%] rounded-[14px]'/>
    </div>
    
      <div className='absolute top-0 left-0 w-full h-full rounded-[14px] bg-[#ffffffe9] bg-opacity-100 flex flex-col items-center space-y-3 justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
        <h1 className='text-[#80581c] text-center text-[20px] md:text-[16px] sm:text-[12px] font-bold'>{service.name}</h1>
        <h1 className='text-[black] text-center text-[15px] md:text-[12px] sm:text-[10px] font-medium'>{service.desc}</h1>
        <h4 className='font-bold text-[23px] text-[#842a92]'>{service.charge}</h4>
 </div>
    </div>
  ))}
      </div>
    </div>
  );
}

export default Services;
