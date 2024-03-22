import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

import { Link } from "react-router-dom";
const About = ({ data }) => {
	
    return (
        <div className="bg-gray-50" id='About'>
			  <h1 className='text-[40px] lg:text-[35px] md:text-[30px] sm:text-[20px]  font-bold text-center font-poppins pt-[40px]'>About</h1>
        
            <div className="flex sm:flex-col h-[500px] lg:h-[450px] md:h-[370px] sm:h-[auto] px-[100px] lg:px-[80px] md:px-[60px] sm:px-[40px] py-[50px] lg:py-[40px] md:py-[30px] sm:py-[20px]  font-poppins">
                <div className="w-[70%] sm:w-[100%] sm:order-2 px-[40px] lg:px-[30px] md:px-[20px] sm:px-[0px] space-y-[50px] lg:space-y-[40px] md:space-y-[30px] sm:space-y-[20px] sm:my-[20px]">
					<div className="space-y-1">
                 <h3 className="text-[20px] lg:text-[16px] md:text-[14px] sm:text-[12px] font-bold  text-[#d3a14b]">{data.about.subTitle}</h3>
					
					<p className="text-[15px] lg:text-[13px] md:text-[11px] sm:text-[9px] text-gray-600">{data.about.description}</p>
					</div>

					<div className="space-y-2 font-medium text-[17px] lg:text-[15px] md:text-[12px] sm:text-[10px]">
						<div className="flex items-center space-x-1">
							<CiLocationOn />
							<h4>{data.about.address}</h4>
						</div>
						<div className="flex items-center space-x-1">
							<IoCallOutline />
							<h4>{data.about.phoneNumber}</h4>
						</div>
					</div>

					<div className="flex space-x-3 ">
					
					{data.social_handles.map((data,index)=>(
						<div key={index}>
							<Link to={data}>
							<img src={data.image.url} alt="" className="w-[25px] lg:w-[23px] md:w-[20px]"/>
							</Link></div>
					))}
					</div>
					
					 </div>
                <div className="w-[30%] sm:w-[100%] sm:order-1 flex items-center justify-center">
					<img src={data.about.avatar.url} alt="profile" className="h-[100%] sm:h-[200px] drop-shadow-lg"/>
			  </div>
            </div>
        </div>
    );
};

export default About;

