import React from 'react'
import Image from 'next/image'
import ProjectHighImg from '@/app/assests/images/project-highlight.png'
import BrandImg from '@/app/assests/images/brandcomaward.jpg'
import { generalSemiBold, helvetica, helveticaBold } from '../font'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import './ProjectHighlight.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import dynamic from 'next/dynamic'
import { useTheme } from './theme-provider'
const ProjectHighlight = () => {
  const {theme} = useTheme()
  return (
    <div
    className="mt-10 w-full px-4 lg:px-0 lg:max-w-[1256px] relative"
    style={{ position: 'relative', height: '100vh' }} // Ensure container has height
  >
    <div
      className="block lg:grid lg:grid-cols-2 lg:gap-8 absolute"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%', // Optional, adjust as per your needs
      }}
    >
      <div className="w-full">
        <h1
          className={`text-clamp-projecthighlight-text ${generalSemiBold.className}`}
        >
          Project Highlight
        </h1>
  
        <div className="w-full mt-5">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.swiper-custom-pagination',
            }}
            loop={true}
            className="w-full"
          >
            <SwiperSlide>
              <video
                autoPlay
                loop
                muted
                className="w-[398px] h-[266px] md:w-[400px] lg:w-[700px] lg:h-[468px] object-cover"
              >
                <source src="/Billboard.mp4" type="video/mp4" />
              </video>
            </SwiperSlide>
            <SwiperSlide>
              <video
                autoPlay
                loop
                muted
                className="w-[398px] h-[266px] md:w-[400px] lg:w-[700px] lg:h-[468px] object-cover"
              >
                <source src="/Mega Growth.mp4" type="video/mp4" />
              </video>
            </SwiperSlide>
            <SwiperSlide>
              <video
                autoPlay
                loop
                muted
                className="w-[398px] h-[266px] md:w-[400px] lg:w-[700px] lg:h-[468px] object-cover"
              >
                <source src="/Darling.mp4" type="video/mp4" />
              </video>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="swiper-custom-pagination flex justify-center gap-2 mt-[1.25rem] color-white"></div>
      </div>
  
      <div className="mt-[35px] lg:mt-0">
        <Image
          src={BrandImg}
          alt="Mobile Horizon Line displaying Great Anosike's branding"
          className="w-[398px] h-[429px] md:w-[400px] lg:w-[532px] lg:h-[578px] rounded-[20px]"
        />
      </div>
    </div>
  </div>
  
  );
}

export default ProjectHighlight
