
import {Link} from 'react-scroll'


import { BsList } from "react-icons/bs";

import { useState } from "react";

const Header = () => {
	const [navbar,setnavbar]=useState(false)
	return (
		<header className="w-full bg-[white] z-10 fixed h-[70px] sm:h-[auto] p-4 sm:p-2 px-[5%] sm:px-[3%] flex sm:flex-col items-center justify-center ">
			<nav className="flex items-center justify-center sm:w-[100%]   space-x-[200px] lg:space-x-[100px] md:space-x-[50px] sm:space-x-3 sm:justify-between">
				
				<Link to='/'><div className="flex items-center space-x-2 sm:space-x-1">
				<h1 className="font-poppins text-[#292F36] text-[40px] lg:text-[30px] md:text-[25px] sm:text-[14px] font-bold">Portfolyo</h1>
				
				</div></Link>
				
					


				<div className="flex cursor-pointer items-center gap-6 lg:gap-5 md:gap-4 text-[20px] lg:text-[17px] md:text-[14px] sm:hidden text-[#292F36] font-semibold font-Jost">
				<Link  activeClass='active' to='About' spy={true} smooth={true}><h3>About</h3></Link>
					<Link activeClass='active' to='Services' spy={true} smooth={true}><h3>Services</h3></Link>
					<Link  activeClass='active' to='Skills' spy={true} smooth={true}><h3>Skills</h3></Link>
					<Link  activeClass='active' to='Projects' spy={true} smooth={true}><h3>Projects</h3></Link>
					<Link  activeClass='active' to='Timeline' spy={true} smooth={true}><h3>Timeline</h3></Link>
					<Link  activeClass='active' to='Testimonial' spy={true} smooth={true}><h3>Testimonial</h3></Link>
					<Link  activeClass='active' to='GetInTouch' spy={true} smooth={true}><h3>Contact</h3></Link>
					</div>
				<div className="flex space-x-4">
			<BsList  onClick={()=>setnavbar(!navbar)} className="sm:flex hidden"/>
					</div></nav>
			{navbar&&<div className="sm:flex cursor-pointer items-center justify-center sm:gap-3 sm:text-[8px] bg-gray-100 p-2 w-[100%]   hidden text-[#292F36] font-Jost mt-0">
			<Link  activeClass='active' to='About' spy={true} smooth={true}><h3>About</h3></Link>
					<Link activeClass='active' to='Services' spy={true} smooth={true}><h3>Services</h3></Link>
					<Link  activeClass='active' to='Skills' spy={true} smooth={true}><h3>Skills</h3></Link>
					<Link  activeClass='active' to='Projects' spy={true} smooth={true}><h3>Projects</h3></Link>
					<Link  activeClass='active' to='Timeline' spy={true} smooth={true}><h3>Timeline</h3></Link>
					<Link  activeClass='active' to='Testimonial' spy={true} smooth={true}><h3>Testimonial</h3></Link>
					<Link  activeClass='active' to='GetInTouch' spy={true} smooth={true}><h3>Contact</h3></Link>
					
			
				</div>}
		</header>
	);
};

export default Header;
