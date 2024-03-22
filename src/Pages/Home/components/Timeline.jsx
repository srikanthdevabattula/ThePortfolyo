import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
const Timeline = ({data}) => {
  return (
    <div className='font-poppins p-[40px] sm:p-[10px] bg-gray-50'>
         <h1 className='text-center text-[40px] lg:text-[35px] md:text-[30px] sm:text-[20px]  font-bold'>Timeline</h1>

         <div className='px-[200px] lg:px-[150px] md:px-[50px] sm:px-[0px]'>
            <h1 className='py-4 text-[20px] md:text-[17px] font-bold text-gray-700'>Experience:</h1>
            <div className='space-y-3'>
            {data.timeline.map((data,index)=>(
                data.forEducation?(
                <div key={index} className='border-[1px] rounded-[20px] p-4 space-y-4'>
                    <div className='flex justify-between items-center '>
                        <h1 className='font-DMSerif font-semibold text-[22px] lg:text-[20px] text-[#14a800]'>{data.company_name}</h1>
                        <p className='text-[15px] lg:text-[14px] sm:text-[11px] font-Jost text-gray-600'>{data.startDate.slice(0,10)} To {data.endDate.slice(0,10)}</p>
                    </div>
                    <h4 className='text-[20px] lg:text-[18px] sm:text-[14px] font-semibold text-[#5798e3]'>{data.jobTitle}</h4>
                    <p className='font-medium text-[15px] lg:text-[13px] sm:text-[10px]'>{data.summary}</p>
                    <div>
                  {data.bulletPoints.map((point, index) => (
                    <li key={index} className='ml-4 sm:ml-2  text-[13px] lg:text-[12px] sm:text-[10px] text-gray-500'>{point}</li>
                  ))}
                </div>
                <div className='flex items-center space-x-2'><IoLocationOutline />
                <p className='text-[14px] lg:text-[12px] md:text-[10px] font-semibold'>{data.jobLocation}</p></div>
                </div>):null

            )

            )}
            </div>

         
         </div>
         <div className='px-[200px] lg:px-[150px] md:px-[50px] sm:px-[0px] mt-4'>
            <h1 className='py-4 text-[20px] md:text-[17px] font-bold text-gray-700'>Education:</h1>
            <div className='space-y-3'>
            {data.timeline.map((data,index)=>(
                data.forEducation===false?(
                <div key={index} className='border-[1px] rounded-[20px] p-4 space-y-4'>
                    <div className='flex justify-between items-center '>
                        <h1 className='font-DMSerif font-semibold text-[22px] lg:text-[20px] text-[#14a800]'>{data.company_name}</h1>
                        <p className='text-[15px] lg:text-[14px] sm:text-[11px] font-Jost text-gray-600'>{data.startDate.slice(0,10)} To {data.endDate.slice(0,10)}</p>
                    </div>
                    <h4 className='text-[20px] lg:text-[18px] sm:text-[14px] font-semibold text-[#5798e3]'>{data.jobTitle}</h4>
                    <p className='font-medium text-[15px] lg:text-[13px] sm:text-[10px]'>{data.summary}</p>
                    <div>
                  {data.bulletPoints.map((point, index) => (
                    <li key={index} className='ml-4 sm:ml-2  text-[13px] lg:text-[12px] sm:text-[10px] text-gray-500'>{point}</li>
                  ))}
                </div>
                <div className='flex items-center space-x-2'><IoLocationOutline />
                <p className='text-[14px] lg:text-[12px] md:text-[10px] font-semibold'>{data.jobLocation}</p></div>
                </div>):null

            )

            )}
            </div>
         </div>
        </div>
  )
}

export default Timeline