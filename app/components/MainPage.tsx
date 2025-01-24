import React, { useRef } from 'react'
import Image from "next/image";
import DashboardImage from '@/app/assests/images/dashboard-image.png'
import MobileHorizonLine from '@/app/assests/images/vector-mobile.png'
import DesktopHorizonLine from '@/app/assests/images/horizontal-bg-line.png'
import TypeWriterEffect from 'react-typewriter-effect';
import { generalSemiBold, helvetica } from '../font'
import { useTheme } from './theme-provider';
import InfiniteScrolling from './InfiniteScrolling';


const MainPage = ({handleClick}: any) => {
  const myAppRef = useRef(null);

  const { theme } = useTheme();
  const contactSectionRef = useRef<HTMLDivElement | null>(null);

  const handleButtonClick = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: "smooth" });
    } 
  };
  return (
    <div className=' w-full flex flex-col justify-center  mt-[2.25rem] md:mt-[5rem]   md:flex md:justify-center md:items-center  lg:items-center lg:mt-[3rem] '>
      <div className='flex flex-col md:flex md:flex-row md:justify-between md:items-center md:max-w-[725px] md:w-full lg:flex lg:items-center lg:flex-row  lg:justify-between lg:w-full lg:max-w-[1256px]'>
        <div className=' md:w-full md:max-w-[417px] lg:w-full lg:max-w-[720px]'>
          <h2 className={` mt-[1.25rem] ${theme === "light" ? 'text-custom-dark' : 'text-custom-light'} ${generalSemiBold.className}  leading-[48px] lg:leading-[76px]`}>
            <span className={`text-[#F57F17] text-clamp-md ${generalSemiBold.className}`}>
              <TypeWriterEffect
                textStyle={{
                  fontFamily: generalSemiBold,
                  fontWeight: '600',
                  // Assuming generalSemiBold maps to a font weight
                  color: '#F57F17', // Matches text-white
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)' // Add your specific text-clamp-md-header value here
                }}
                startDelay={2000}
                cursorColor="#F57F17"
                multiText={[
                  "Stop Winging It",
                  "Stop Winging It",

                ]}
                multiTextDelay={1000}
                typeSpeed={100}
                multiTextLoop

              />

            </span>
           
          </h2>
          <span className={`${theme === "light" ? 'text-black' : 'text-white'} leading-[48px] lg:leading-[72px]  text-clamp-md ${generalSemiBold.className}`}>
            Master Marketing with Strategy and Precision.
            </span>

          <p className={` ${helvetica.className}     ${theme === "light" ? 'text-custom-dark' : 'text-custom-light'}
 text-clamp-md-para mt-[8px] lg:mt-[1.25rem]`}>I am Great Chisom Anosike, a results-driven marketing professional and brand strategist with a passion for delivering impactful outcomes for individuals and organizations. With a wealth of experience across industries and proven track record of driving brand growth, executing high-impact campaigns, and fostering meaningful client relationships. </p>
          <button
            onClick={handleClick}
            className="px-6 py-3 bg-[#F57F17] text-white font-bold rounded-md hover:bg-yellow-800 transition-colors mt-[1.25rem] lg: mt-[2.5rem]     hover:opacity-75 transition-colors transition-opacity duration-300 "
          >
            Get in Touch
          </button>
        </div>

        <div className='mt-[1.75rem]'>
          <Image
            src={DashboardImage}
            alt="Description"
            width={1200}
            height={800}
            className="w-[398px] md:w-[400px] lg:w-[510px] " // Mobile: 200px, Tablet: 400px, Desktop: 600px
            priority
          />
        </div>
      </div>
      <section>
   
      </section>

    </div>
  )
}

export default MainPage
