import React, { useState } from 'react'
import { IoMail } from "react-icons/io5";
import { MdOutlineCall } from "react-icons/md";
import { Link } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
const GetInTouch = ({data}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
      console.log(formData);
       
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      };
  return (
    <div className=' py-4 px-[40px] bg-[#ffffff18]' id='GetInTouch'>
       <h1 className='text-[40px] lg:text-[35px] md:text-[30px] sm:text-[20px]  font-bold text-center'>Get in touch</h1>
       <div className='flex sm:flex-col space-x-[30px] sm:space-x-0'>
       <form onSubmit={handleSubmit} className="  pt-6 pb-8 mb-4 w-[50%] sm:w-[100%]">
        <div className="mb-4">
          <label className="block text-[#438fa8] text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="border-b-[2px] border-[#da8ce6] bg-inherit w-full py-2 px-3 text-[white]  focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#438fa8]  text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border-b-[2px] bg-inherit border-[#da8ce6] w-full py-2 px-3 text-[white]  focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-[#438fa8] text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="border-b-[2px] bg-inherit border-[#da8ce6] w-full py-2 px-3 text-[white]  focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-[#4eb7f5] hover:bg-[#620e9a] shadow-md hover:shadow-[#ffffff5c] text-[20px] rounded-[20px] w-[200px] md:w-[150px] text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
      
      <div className='w-[50%] sm:w-[100%] flex flex-col font-poppins font-bold  items-center justify-center space-y-3'>
      <div className="space-y-2 font-medium text-[17px] lg:text-[15px] md:text-[12px] sm:text-[10px]">
            <div className="flex items-center text-[#7d8b9a] space-x-1">
              <CiLocationOn />
              <h4>{data.about.address}</h4>
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
       <h1 className='text-[25px] md:text-[20px] text-[#ffffff] flex items-center'><IoMail className='mr-2'/> {data.email}</h1>
            <h1 className='text-[25px] md:text-[20px] text-[#ccedff] flex items-center'><MdOutlineCall className='mr-2'/> {data.about.phoneNumber}</h1>

      </div>
      </div>
    </div>
  )
}

export default GetInTouch