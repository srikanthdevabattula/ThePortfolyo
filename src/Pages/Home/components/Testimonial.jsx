import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Testimonial = ({data}) => {
  const enabledTestimonials = data.testimonials.filter(testimonial => testimonial.enabled);

  return (
    <div id='Testimonial' className='py-4'>
            <h1 className='text-[#656565] text-[40px] lg:text-[35px] md:text-[30px] sm:text-[20px]  font-bold text-center font-poppins mb-4'>Testimonials</h1>
    
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {enabledTestimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className='py-[40px] px-[300px] lg:px-[250px] md:px-[160px] sm:px-[40px]'>
              <div className='flex flex-col items-center space-y-2'>
                <img src={testimonial.image.url} alt="" className='w-[100px] lg:w-[90px] md:w-[75px] rounded-[100%]' />
                <h2 className='text-[16px] lg:text-[15px] md:text-[14px] font-poppins font-semibold text-[#d55c5c] sm:text-center'>
                  {testimonial.name} <span className='text-[#e0e0e0] sm:hidden'>-</span> <br className='sm:flex hidden' /> <span className='text-[#52baea]'>{testimonial.position}</span>
                </h2>
                <p className='font-Jost text-[#e3f1ac] text-[15px] lg:text-[14px] md:text-[13px] sm:text-[11px] '>{testimonial.review}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonial;