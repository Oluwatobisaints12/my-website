"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import './Slider.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { generalSanBold, helvetica, helveticaBold } from '@/app/font';
import { useTheme } from '../theme-provider';

import Image from 'next/image'
import GreatAnosike from '@/app/assests/images/great_pic.jpg'

const Slider = () => {
    const { theme } = useTheme()
    return (
     <div className='w-full lg:flex lg:justify-center lg:items-center'>
   <div className="relative flex flex-col mt-[2.5rem] lg:items-center w-full lg:justify-between lg:flex lg:flex-row lg:max-w-[1262px]">
            <div className="relative  group  justify-center flex  ">
                <Image
                    src={GreatAnosike}
                    alt="mentorship dashboard image"
                    className=" object-cover transition-transform duration-500 group-hover:scale-105 rounded-[1.25rem]  "
                />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col">

            
           <div className=''>
           <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}

                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-custom-pagination'
                }}
                loop={true}
                className="w-full mt-[1.25rem] "
            >
                <SwiperSlide>
                    <div className="flex ">
                        <h1 className={`text-clamp-slider-text ${helveticaBold.className} ${theme === "light" ? 'text-black' : 'text-white'}`}>Tailored Guidance:  <span className={`${theme === "light" ? 'text-custom-dark' : 'text-custom-light'} ${helvetica.className}`}>Receive personalized advice and strategies to navigate your unique challenges and career goals.</span></h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col">
                        <h1 className={`text-clamp-slider-text ${helveticaBold.className} ${theme === "light" ? 'text-black' : 'text-white'}`}>Industry Insights: <span className={`${theme === "light" ? 'text-custom-dark' : 'text-custom-light'} ${helvetica.className}`}>Gain insider knowledge on client relationship management, brand building, and market penetration strategies</span> </h1>          </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col">
                        <h1 className={`text-clamp-slider-text ${helveticaBold.className} ${theme === "light" ? 'text-black' : 'text-white'}`}>Practical Skills Development: <span className={`${theme === "light" ? 'text-custom-dark' : 'text-custom-light'} ${helvetica.className}`}>Enhance your abilities in campaign planning, project management, digital marketing, and more.</span>  </h1>
                    </div>
                </SwiperSlide>

            </Swiper>
           </div>
            {/* Custom pagination container */}
            <div className="swiper-custom-pagination flex justify-center gap-2 mt-[1.25rem] color-white"></div>
        </div>
        </div>
     </div>
    );
};

export default Slider;