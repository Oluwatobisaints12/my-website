import React, { useRef, useState } from 'react'
import Image from 'next/image'
import ProjectHighImg from '@/app/assests/images/project-highlight.png'
import BrandImg from '@/app/assests/images/brandcomaward.jpg'
import { generalSemiBold, helvetica, helveticaBold } from '../font'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import  PlayIcon  from '@/app/assests/images/play_circle_filled.svg'

import './ProjectHighlight.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import dynamic from 'next/dynamic'
import { useTheme } from './theme-provider'
const ProjectHighlight = () => {
  const {theme} = useTheme()
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
const [iconVisible, setIconVisible] = useState(true)
const billboardRef = useRef<HTMLVideoElement | null>(null);
const megaGrowthRef = useRef<HTMLVideoElement | null>(null);
const darlingRef = useRef<HTMLVideoElement | null>(null);




  // Function to toggle video play/pause

  const handleVideoClick = (videoKey: string, videoRef: React.RefObject<HTMLVideoElement | null>) => { 
    if (!videoRef.current) return;
  
    if (playingVideo === videoKey) {
      videoRef.current.pause();
      setIconVisible(true);
      setPlayingVideo(null);
    } else {
      [billboardRef, megaGrowthRef, darlingRef].forEach(ref => ref.current?.pause());
      videoRef.current.play();
      setIconVisible(false);
      setPlayingVideo(videoKey);
    }
  };
  


  return (
    <div className="w-full mt-5">
       <h1
          className={`text-clamp-projecthighlight-text text-center ${generalSemiBold.className}`}
        >
          Project Highlight
        </h1>
        <div className="w-full mt-5 text-center relative">
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
    className="inline-block"
  >
    <SwiperSlide key="billboard">
      <div className="relative inline-block">
        <video
          ref={billboardRef}
          onClick={() => handleVideoClick('billboard', billboardRef)}
          loop
          muted
          className="w-[398px] h-[266px] md:w-[400px] lg:w-[700px] lg:h-[468px] object-cover cursor-pointer"
        >
          <source src="/Billboard.mp4" type="video/mp4" />
        </video>
        {/* Play button overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
          onClick={() => handleVideoClick('billboard', billboardRef)}
        >
          {iconVisible && (
    <div 
      className="absolute cursor-pointer"
      onClick={() => handleVideoClick("billboard", billboardRef)}
    >
      <PlayIcon />
    </div>
  )}
        
          {/* <img src="../assests/images/play_circle_filled" alt="Play" className="w-16 h-16 opacity-80" /> */}
        </div>
      </div>
    </SwiperSlide>
    
    <SwiperSlide key="mega-growth">
      <div className="relative inline-block">
        <video
          ref={megaGrowthRef}
          onClick={() => handleVideoClick('mega-growth', megaGrowthRef)}
          loop
          muted
          className="w-[398px] h-[266px] md:w-[400px] lg:w-[700px] lg:h-[468px] object-cover cursor-pointer"
        >
          <source src="/mega_growth.MP4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
          onClick={() => handleVideoClick('mega-growth', megaGrowthRef)}
        >
         {iconVisible && (
    <div 
      className="absolute cursor-pointer"
      onClick={() => handleVideoClick("billboard", billboardRef)}
    >
      <PlayIcon />
    </div>
  )}
          {/* <img src="/play-icon.svg" alt="Play" className="w-16 h-16 opacity-80" /> */}
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide key="darling">
      <div className="relative inline-block">
        <video
          ref={darlingRef}
          onClick={() => handleVideoClick('darling', darlingRef)}
          loop
          muted
          className="w-[398px] h-[266px] md:w-[400px] lg:w-[700px] lg:h-[468px] object-cover cursor-pointer"
        >
          <source src="/Darling.MP4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
          onClick={() => handleVideoClick('darling', darlingRef)}
        >
          {iconVisible && (
    <div 
      className="absolute cursor-pointer"
      onClick={() => handleVideoClick("billboard", billboardRef)}
    >
      <PlayIcon />
    </div>
  )}
          {/* <img src="/play-icon.svg" alt="Play" className="w-16 h-16 opacity-80" /> */}
        </div>
      </div>
    </SwiperSlide>
  </Swiper>

</div>


      <div className="swiper-custom-pagination flex justify-center gap-2 mt-[1.25rem] color-white"></div>
    </div>
  );

}

export default ProjectHighlight
