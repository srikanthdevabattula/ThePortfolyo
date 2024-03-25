import React from 'react';
import { IoLocationOutline } from "react-icons/io5";

const Timeline = ({ data }) => {
 const educationEntries = data.timeline.filter(entry => entry.enabled && entry.forEducation);
  const experienceEntries = data.timeline.filter(entry => entry.enabled && !entry.forEducation);

  return (
    <div id='Timeline' className='font-poppins p-[40px] sm:p-[10px] bg-gray-50'>
      <h1 className='text-center text-[40px] lg:text-[35px] md:text-[30px] sm:text-[20px] font-bold'>Timeline</h1>

      <div className='px-[200px] lg:px-[150px] md:px-[50px] sm:px-[0px]'>
        <h1 className='py-4 text-[20px] md:text-[17px] font-bold text-gray-700'>Experience:</h1>
        <div className='space-y-3'>
          {experienceEntries.map((entry, index) => (
            <div key={index} className='border-[1px] rounded-[20px] p-4 space-y-4'>
              <div className='flex justify-between items-center '>
                <h1 className='font-DMSerif font-semibold text-[22px] lg:text-[20px] text-[#14a800]'>{entry.company_name}</h1>
                <p className='text-[15px] lg:text-[14px] sm:text-[11px] font-Jost text-gray-600'>{entry.startDate.slice(0, 10)} To {entry.endDate.slice(0, 10)}</p>
              </div>
              <h4 className='text-[20px] lg:text-[18px] sm:text-[14px] font-semibold text-[#5798e3]'>{entry.jobTitle}</h4>
              <p className='font-medium text-[15px] lg:text-[13px] sm:text-[10px]'>{entry.summary}</p>
              <div>
                {entry.bulletPoints.map((point, index) => (
                  <li key={index} className='ml-4 sm:ml-2  text-[13px] lg:text-[12px] sm:text-[10px] text-gray-500'>{point}</li>
                ))}
              </div>
              <div className='flex items-center space-x-2'><IoLocationOutline />
                <p className='text-[14px] lg:text-[12px] md:text-[10px] font-semibold'>{entry.jobLocation}</p></div>
            </div>
          ))}
        </div>
      </div>

      <div className='px-[200px] lg:px-[150px] md:px-[50px] sm:px-[0px] mt-4'>
        <h1 className='py-4 text-[20px] md:text-[17px] font-bold text-gray-700'>Education:</h1>
        <div className='space-y-3'>
          {educationEntries.map((entry, index) => (
            <div key={index} className='border-[1px] rounded-[20px] p-4 space-y-4'>
              <div className='flex justify-between items-center '>
                <h1 className='font-DMSerif font-semibold text-[22px] lg:text-[20px] text-[#14a800]'>{entry.company_name}</h1>
                <p className='text-[15px] lg:text-[14px] sm:text-[11px] font-Jost text-gray-600'>{entry.startDate.slice(0, 10)} To {entry.endDate.slice(0, 10)}</p>
              </div>
              <h4 className='text-[20px] lg:text-[18px] sm:text-[14px] font-semibold text-[#5798e3]'>{entry.jobTitle}</h4>
              <p className='font-medium text-[15px] lg:text-[13px] sm:text-[10px]'>{entry.summary}</p>
              <div>
                {entry.bulletPoints.map((point, index) => (
                  <li key={index} className='ml-4 sm:ml-2  text-[13px] lg:text-[12px] sm:text-[10px] text-gray-500'>{point}</li>
                ))}
              </div>
              <div className='flex items-center space-x-2'><IoLocationOutline />
                <p className='text-[14px] lg:text-[12px] md:text-[10px] font-semibold'>{entry.jobLocation}</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
