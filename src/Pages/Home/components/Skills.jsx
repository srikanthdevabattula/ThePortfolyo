import React from 'react'

const Skills = ({ data }) => {
  return (
    <div className='px-[100px] lg:px-[80px] md:px-[60px] sm:px-[40px] py-[50px] lg:py-[40px] md:py-[30px] sm:py-[20px] space-y-[30px] bg-gray-100'>
        <div className='flex flex-col items-center  font-poppins'>
            <h1 className='text-[40px] lg:text-[35px] md:text-[30px] sm:text-[20px]  font-bold'>Skills</h1>
            <p className='text-gray-600 text-[15px] lg:text-[13px] md:text-[11px] sm:text-[9px]'>The skills, tools and technologies I am really good at:</p>

        </div>
        <div className='flex flex-wrap items-center justify-center gap-[60px] md:gap-[40px] sm:gap-[25px]'>
            {data.skills.map((data,index)=>(
                <div key={index} className='flex flex-col items-center space-y-1 '>
                    <img src={data.image.url} alt={data.name} className='w-[100px] lg:w-[90px] md:w-[65px] sm:w-[35px] h-[100px] lg:h-[90px] md:h-[65px] sm:h-[35px]'/>
                    <h3 className='text-[20px] lg:text-[18px] md:text-[15px] sm:text-[10px] font-semibold text-gray-600'>{data.name}</h3>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills