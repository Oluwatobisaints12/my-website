import React, { useRef, useState } from 'react'
import Image from 'next/image'
import ProjectHighImg from '@/app/assests/images/project-highlight.png'
import BrandImg from '@/app/assests/images/brandcomaward.jpg'
import { generalSemiBold, helvetica, helveticaBold } from '../font'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import  PlayIcon  from '@/app/assests/images/play_circle_filled.svg'

import './ProjectHighlight.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import dynamic from 'next/dynamic'
import { useTheme } from './theme-provider'
const ProjectHighlight = () => {
  const { theme } = useTheme();
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [iconVisible, setIconVisible] = useState(true);

  // Refs for videos
  const billboardRef = useRef<HTMLVideoElement | null>(null);
  const megaGrowthRef = useRef<HTMLVideoElement | null>(null);
  const darlingRef = useRef<HTMLVideoElement | null>(null);

  // Centralized video refs for easier management
  const videoRefs = {
    'billboard': billboardRef,
    'mega-growth': megaGrowthRef,
    'darling': darlingRef
  };

  // Optimized video click handler
  const handleVideoClick = (videoKey: string) => {
    const currentVideoRef = videoRefs[videoKey as keyof typeof videoRefs];
    
    if (!currentVideoRef?.current) return;

    // Pause all videos first
    Object.values(videoRefs).forEach(ref => {
      if (ref.current && ref.current !== currentVideoRef.current) {
        ref.current.pause();
      }
    });

    // Toggle current video
    if (playingVideo === videoKey) {
      currentVideoRef.current.pause();
      setIconVisible(true);
      setPlayingVideo(null);
    } else {
      currentVideoRef.current.play();
      setIconVisible(false);
      setPlayingVideo(videoKey);
    }
  };

  // Video configuration array for dynamic rendering
  const videoConfigs = [
    {
      key: 'billboard',
      src: '/Billboard.mp4',
      ref: billboardRef
    },
    {
      key: 'mega-growth',
      src: '/mega_growth.MP4',
      ref: megaGrowthRef
    },
    {
      key: 'darling',
      src: '/Darling.MP4',
      ref: darlingRef
    }
  ];

  return (
    <div className="w-full mt-5">
      <h1 className={`text-clamp-projecthighlight-text pl-[8px] md:text-center lg:text-center ${generalSemiBold.className}`}  >
        Project Highlight
      </h1>
      
      <div className="w-full mt-5 text-center relative" >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{
            clickable: true,
            el: '.swiper-custom-pagination',
          }}
          loop={true}
          className="inline-block"
          // preloadImages={false}
          // lazy={true}
        >
          {videoConfigs.map(({ key, src, ref }) => (
            <SwiperSlide key={key}>
              <div className="relative inline-block">
                <video
                  ref={ref}
                  onClick={() => handleVideoClick(key)}
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-[398px] h-[266px] md:w-[400px] lg:w-[700px] lg:h-[468px] object-cover cursor-pointer"
                >
                  <source src={src} type="video/mp4" />
                </video>
                
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
                  onClick={() => handleVideoClick(key)}
                >
                  {iconVisible && (
                    <div className="absolute cursor-pointer">
                      <PlayIcon />
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="swiper-custom-pagination flex justify-center gap-2 mt-[1.25rem] color-white"></div>
    </div>
  );
};

export default ProjectHighlight;

