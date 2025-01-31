import React, {useEffect} from 'react'
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
import GreatTestimonial from '@/app/assests/images/mask_group.png'
import Aos from 'aos';
import 'aos/dist/aos.css'

const CurvedCard = () => {
  const { theme } = useTheme();
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in ms
      once: true, // Ensures animation happens only once
    });
  }, []);

    return (
 <div className='flex flex-col  mt-[20px]  md:flex md:flex-row md:items-center md:justify-between lg:flex  lg:flex-row lg:items-center lg:justify-between'>
  <div className='order-1 flex flex-col gap-[12px] w-[398px] md:w-full md:max-w-[356px]  md:order-2 md:gap-0  lg:order-2  lg:max-w-[616px]  lg:w-full  lg:flex lg:flex-col' data-aos="fade-down" >
       <div className={` ${theme === 'light' ? 'light-theme' : 'dark-theme'} card rounded-[1.25rem] px-[14px] py-[9px]   md:px-[13px] md:py-[7px]  lg:w-full lg:py-[1rem] lg:px-[24px]`}>
    <div className="card-content">
      <p className={` text-[12px]  md:text-[10px] lg:text-[1.125rem]  ${helvetica.className}`}>"Working with Great was an absolute game-changer for our team. His strategic insights and hands-on approach made complex projects feel achievable. Great doesn't just execute tasks; he aligns every step with the bigger picture, ensuring long-term value."</p>
      <div className='flex items-center mt-[4px] gap-[15px] md:mt-[2px] lg:mt-[8px]'>
       
        <div className='w-[32px] md:w-[23px] lg:w-[40px]'>
        <GroupInfoSVG />
        </div>

     <div className='flex flex-col'>
      <h1 className={`${helveticaBold.className} text-[11px] lg:text-[1.125rem]`} >Funmi O</h1>
      <p className={`${helvetica.className} text-[10px] md:text-[9px] lg:text-[1rem]` }>Business Development Manager</p>
     </div>
      </div>
      <div  className={`circle ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}
      >
<ArrowOutwardSVG />
     </div>
    </div>
  </div>

  <div className={`${theme === 'light' ? 'light-theme' : 'dark-theme'} card  rounded-[1.25rem]   px-[14px] py-[9px]  md:px-[13px] md:py-[7px]   lg:w-full lg:py-[1rem] lg:px-[24px]`}>
    <div className="card-content">
      <p className={`text-[12px]  md:text-[10px] lg:text-[1.125rem]  ${helvetica.className}`}>"Great has a unique ability to turn vision into actionable results. His attention to detail, combined with his understanding of consumer behavior, helped us craft campaigns that truly resonated with our audience. He balances creativity with data-driven strategies seamlessly."</p>
      <div className='flex items-center mt-[4px] gap-[15px] md:mt-[2px]  lg:mt-[8px]'>
      <div className='w-[32px] md:w-[23px]  lg:w-[40px]'>
        <GroupInfo />
        </div>
   
     <div className='flex flex-col'>
      <h1 className={`${helveticaBold.className} text-[11px] lg:text-[1.125rem]`} >Ibrahim A</h1>
      <p className={`${helvetica.className} text-[10px] md:text-[9px] lg:text-[1rem]` }>Brand Manager</p>
     </div>
      </div>
     <div  className={`circle ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
  <ArrowOutwardSVG />
     </div>
    </div>
  </div>

  <div className={` card ${theme === 'light' ? 'light-theme' : 'dark-theme'}   px-[14px] py-[9px] rounded-[1.25rem] md:px-[13px] md:py-[7px]  lg:w-full lg:py-[1rem] lg:px-[24px]  `}>
  <div className="card-content">
    <p className={`text-[12px]  md:text-[10px] lg:text-[1.125rem]  ${helvetica.className}`}>
      “When I think of Great, three words come to mind: strategic, reliable, and innovative. From day one, he brought clarity to our project goals and ensured every decision was backed by research and intent. His leadership style encourages collaboration.”
    </p>
    <div className="flex items-center mt-[4px] gap-[20px] md:mt-[2px] lg:mt-[8px]">
    <div className='w-[32px] md:w-[23px]  lg:w-[40px]'>
        <GroupSVG />
        </div>

      <div className="flex flex-col">
        <h1 className={`${helveticaBold.className} text-[11px] lg:text-[1.125rem]`}>Ifedolapo P</h1>
        <p className={`${helvetica.className} text-[9px] md:text-[10px] lg:text-[1rem]`}>Brand Manager</p>
      </div>
    </div>
    <div  className={`circle  ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
  <ArrowOutwardSVG />
    </div>
  </div>
</div>

</div>
<div className='mt-[2.5rem] w-[398px] md:w-full md:max-w-[356px] lg:w-full lg:max-w-[616px]  order-2  md:mt-0  md:order-1 lg:order-1 flex items-center justify-center lg:w-[616px] lg:h-[667px]' data-aos="fade-up" >
<Image
     src={GreatTestimonial}
    alt='testimonial image'
   
      className=""
      priority={false}
      loading="lazy"
      quality={75}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..." // Add your base64 blur image
    />


  </div>

  </div>
    );
  };
  

export default CurvedCard
