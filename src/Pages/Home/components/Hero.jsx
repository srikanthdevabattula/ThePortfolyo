import React from 'react'

const Hero = ({ data }) => {
  return (
    <div className='flex flex-col items-center'> 
       <div className="w-[100%] sm:hidden flex items-center justify-center">
					<img src={data.about.avatar.url} alt="profile" className="h-[300px] lg:h-[250px] md:h-[200px] w-[250px] lg:w-[200px] md:w-[170px]  rounded-[200px] drop-shadow-lg"/>
			  </div>
       <h1 className=" text-center text-[80px] py-1 lg:text-[60px] md:text-[45px] sm:text-[25px] font-bold drop-shadow-lg">Hi,I'm {data.about.name}👋</h1> 
       <h3 className="text-[30px] lg:text-[25px] md:text-[20px] sm:text-[16px] font-bold drop-shadow-lg text-[#6a6aab] pb-3">{data.about.title}</h3>
					</div>
  )
}

export default Hero