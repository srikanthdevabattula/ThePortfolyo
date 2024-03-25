import React from 'react';

const Services = ({ data }) => {
 
  const enabledServices = data.services.filter(service => service.enabled);

  return (
    <div className='p-[30px] sm:p-[20px]' id='Services'>
      <h1 className='text-[40px] lg:text-[35px] md:text-[30px] sm:text-[20px] font-bold text-center font-poppins mb-4'>Services</h1>
      <div className='flex flex-wrap gap-[30px] sm:gap-[15px] justify-center font-poppins'>
        {enabledServices.map((service, index) => (
          <div key={index} className='w-[350px] lg:w-[330px] md:w-[280px] sm:w-[175px] h-[500px] lg:h-[460px] md:h-[400px] sm:h-[280px] flex flex-col gap-2 items-center p-2 border-[1px] shadow-xl rounded-[14px]'>
            <img src={service.image.url} alt="" className='w-[300px] h-[300px] lg:h-[260px] lg:w-[260px] md:h-[210px] md:w-[220px] sm:h-[130px] sm:w-[150px]' />
            <h1 className='text-[20px] md:text-[16px] sm:text-[12px] font-bold'>{service.name}</h1>
            <p className='text-[15px] md:text-[12px] sm:text-[9px] text-gray-500 h-[70px] sm:h-[50px] text-center'>{service.desc}</p>
            <button className='w-[150px] sm:w-[100px] text-[16px] md:text-[14px] sm:text-[12px] p-2 md:p-1 text-white font-semibold bg-[#29b6f6] rounded-[20px] shadow-md hover:shadow-2xl'>{service.charge}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
