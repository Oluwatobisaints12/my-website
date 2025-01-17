import React, { useRef } from 'react'

import MobileHorizonLine from '@/app/assests/images/vector-mobile.png'
import DesktopHorizonLine from '@/app/assests/images/horizontal-bg-line.png'
import Image from 'next/image'
import TypeWriterEffect from 'react-typewriter-effect'
import { generalSemiBold, helvetica } from '@/app/font'
const CutoutPapper = () => {
    const myAppRef = useRef(null);
  return (
    <div className="positive relative mt-[5rem] w-full max-w-[1383px]">
    {/* Image */}
    <Image
      src={MobileHorizonLine}
      alt="Mobile Horizon Line displaying Great Anosike's branding"
      className=" lg:hidden"
      priority
    />


    <Image
      src={DesktopHorizonLine}
      alt="Mobile Horizon Line displaying Great Anosike's branding"
      className="hidden lg:flex "
      priority
    />

    {/* Overlay Text */}
    <div className="absolute top-0 left-0 flex flex-col items-center justify-center h-full w-full text-center ">
      <div ref={myAppRef} className="absolute top-0 left-0 flex flex-col items-center justify-center h-full w-full text-center ">
        <h1>
          <TypeWriterEffect
            textStyle={{
              fontFamily: generalSemiBold,
              fontWeight: '600',
              textAlign: 'center',
              // Assuming generalSemiBold maps to a font weight
              color: 'white', // Matches text-white
              fontSize: 'clamp(1.6rem, 4vw, 3rem)', // Add your specific text-clamp-md-header value here
            }}
            startDelay={2000}
            cursorColor="white"
            multiText={[
              "WELCOME TO THE OFFICIAL WEBSITE OF GREAT ANOSIKE",
              "WELCOME TO THE OFFICIAL WEBSITE OF GREAT ANOSIKE",

            ]}
            multiTextDelay={1000}
            typeSpeed={100}
            multiTextLoop

          />
        </h1>
        <p className={`text-clamp-md-text text-white  ${helvetica.className} `}>
          Discover Great Anosike's journey, achievements, and standout projects. Stay tuned for the latest updates and insights into his professional milestones and personal growth. Dive in to learn more about Great Anosike and his inspiring path.
        </p>
      </div>

    </div>


  </div>
  )
}

export default CutoutPapper
