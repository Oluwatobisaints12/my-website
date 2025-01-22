import React from 'react'
import "./CurvedCard.css"
import Image from 'next/image';
import ArrowOutwardSVG from '@/app/assests/images/arrow_outward.svg'
import GroupInfoSVG from '@/app/assests/images/group-1.svg'
import GroupInfo from '@/app/assests/images/group-2.svg'
import GroupSVG from '@/app/assests/images/group-3.svg'
import GreatIMG from '@/app/assests/images/contact-us-img.jpg'
import GreatWhiteIMG from '@/app/assests/images/contact-us-white-img.jpg'
import { helvetica, helveticaBold } from '@/app/font';
import { useTheme } from '../theme-provider';
import GreatTestimonial from '@/app/assests/images/testimonial-image.png'

const CurvedCard = () => {
  const { theme } = useTheme();

    return (
 <div className='flex flex-col  mt-[20px] md:flex md:flex-row md:items-center md:justify-between lg:flex lg:flex-row lg:items-center lg:justify-between'>
  <div className='order-1 md:order-2 lg:order-2 flex flex-col gap-[12px] lg:max-w-[616px]  lg:w-full lg:gap-[20px] lg:flex lg:flex-col'>
       <div className={` ${theme === 'light' ? 'light-theme' : 'dark-theme'} card w-[398px] px-[0.9375rem] py-[0.59375rem]  lg:w-full lg:py-[1rem] lg:px-[24px]`}>
    <div className="card-content">
      <p className={`text-clamp-curvecard-text ${helvetica.className}`}>"Working with Great was an absolute game-changer for our team. His strategic insights and hands-on approach made complex projects feel achievable. Great doesn't just execute tasks; he aligns every step with the bigger picture, ensuring long-term value."</p>
      <div className='flex items-center mt-[4px] gap-[15px] lg:mt-[8px]'>
       
        <div className='w-[32px] lg:w-[40px]'>
        <GroupInfoSVG />
        </div>

     <div className='flex flex-col'>
      <h1 className={`${helveticaBold.className} text-[0.75rem]`} >Funmi O</h1>
      <p className={`${helvetica.className} text-[10px]` }>Business Development Manager</p>
     </div>
      </div>
      <div  className={`circle ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}
      >
<ArrowOutwardSVG />
     </div>
    </div>
  </div>

  <div className={`${theme === 'light' ? 'light-theme' : 'dark-theme'} card w-[398px] px-[0.9375rem] py-[0.59375rem]  lg:w-full lg:py-[1rem] lg:px-[24px]`}>
    <div className="card-content">
      <p className={`text-clamp-curvecard-text ${helvetica.className}`}>"Great has a unique ability to turn vision into actionable results. His attention to detail, combined with his understanding of consumer behavior, helped us craft campaigns that truly resonated with our audience. He balances creativity with data-driven strategies seamlessly."</p>
      <div className='flex items-center mt-[4px] gap-[15px]  lg:mt-[8px]'>
      <div className='w-[32px] lg:w-[40px]'>
        <GroupInfo />
        </div>
   
     <div className='flex flex-col'>
      <h1 className={`${helveticaBold.className} text-[0.75rem]`} >Ibrahim A</h1>
      <p className={`${helvetica.className} text-[10px]` }>Brand Manager</p>
     </div>
      </div>
     <div  className={`circle ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
  <ArrowOutwardSVG />
     </div>
    </div>
  </div>

  <div className={`card ${theme === 'light' ? 'light-theme' : 'dark-theme'} w-[398px] px-[0.9375rem] py-[0.59375rem] lg:w-full lg:py-[1rem] lg:px-[24px] shadow-lg hover:shadow-none transition-shadow duration-300 `}>
  <div className="card-content">
    <p className={`text-clamp-curvecard-text ${helvetica.className}`}>
      “When I think of Great, three words come to mind: strategic, reliable, and innovative. From day one, he brought clarity to our project goals and ensured every decision was backed by research and intent. His leadership style encourages collaboration.”
    </p>
    <div className="flex items-center mt-[4px] gap-[20px] lg:mt-[8px]">
    <div className='w-[32px] lg:w-[40px]'>
        <GroupSVG />
        </div>

      <div className="flex flex-col">
        <h1 className={`${helveticaBold.className} text-[0.75rem]`}>Ifedolapo P</h1>
        <p className={`${helvetica.className} text-[10px]`}>Brand Manager</p>
      </div>
    </div>
    <div  className={`circle  ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
  <ArrowOutwardSVG className="w-6 h-6 text-black"/>
    </div>
  </div>
</div>

</div>
<div className='mt-[2.5rem] md:mt-0  order-2 md:order-1 lg:order-1 w-[398px] lg:mt-[20px] lg:w-[616px] lg:h-[667px]'>
<Image 
src={GreatTestimonial}
alt='testimonial image'

/>
  </div>

  </div>
    );
  };
  

export default CurvedCard
