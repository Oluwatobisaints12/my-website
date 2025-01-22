import React, { ForwardedRef, forwardRef } from 'react'
import Image from 'next/image'
import NestlePurelifeSVG from '@/app/assests/images/nestle-pure-png.png'
import Nivea from '@/app/assests/images/nivea-png.png'
import NestleMilo from '@/app/assests/images/milo-png.png'
import MeggaGrowth from '@/app/assests/images/megga-png.png'
import NestlePro from '@/app/assests/images/nestle-pro-png.png'
import Chivitar from '@/app/assests/images/chivita-png.png'
import GoodNight from '@/app/assests/images/goodnight-png.png'
import { useEffect } from 'react';
 import  './InfiniteScrolling.css'
import { addAnimation } from "./Infinite";
import { generalSemiBold } from '../font'

const InfiniteScrolling = forwardRef<HTMLDivElement, {}>((props, ref: ForwardedRef<HTMLDivElement>) => {
    useEffect(() => {
      addAnimation(); // Call the animation setup when the component mounts
    }, []);
  
    return (
      <div ref={ref} className=" mt-[2.5rem] lg:mt-[8rem]">
        <h1 className={`text-clamp-brand-text text-center mb-8 ${generalSemiBold.className}`}>Working With Renowned Brands</h1>
        <div className="w-[400px] md:w-[768px] lg:w-[1256px] border border-white scroller" data-speed="fast">
          <div className="tag-list scroller__inner py-4 flex flex-wrap items-center gap-[2.5rem]  lg:gap-[4rem]">
            
          <Image
            className="w-[63px] md:w-[80px] lg:w-[108px]"
            alt="nestle-purelife"
            src={NestlePurelifeSVG}
          
          />
          <Image
            className="w-[63px] md:w-[80px] lg:w-[108px]"
            alt="nivea"
            src={Nivea}
          />
          <Image
            className="w-[63px] md:w-[80px] lg:w-[108px]"
            alt="nestle-milo"
            src={NestleMilo}
          />
          <Image
            className="w-[63px] md:w-[80px] lg:w-[108px]"
            alt="goodnight"
            src={GoodNight}
          />
          <Image
            className="w-[63px] md:w-[80px] lg:w-[108px]"
            alt="megga-growth"
            src={MeggaGrowth}
          />
          <Image
            className="w-[63px] md:w-[80px] lg:w-[108px]"
            alt="nestle-pro"
            src={NestlePro}
          />
          <Image
            className="w-[63px] md:w-[80px] lg:w-[108px]"
            alt="chivitar"
            src={Chivitar}
          />
          </div>
        </div>

      </div>
    );
  });
  
  export default InfiniteScrolling;
