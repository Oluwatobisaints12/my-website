"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { helvetica, vanillaText } from "@/app/font";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from "./theme-provider";
import './Header.css'
import { Menu, X } from "lucide-react";
import Loading from '@/app/assests/images/loading.gif'



const Header = ({onButtonClick, buttonClick, handleClick, handleButtonClick}: any) => {
  const router = useRouter()

  const pathname = usePathname();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);



  // Ensure the component is mounted before accessing theme
  useEffect(() => {
    setMounted(true);
  }, []);
  
const handleNavigation = async (path: string) => {
try {
  setIsLoading(true);
  router.push(path);
   setIsLoading(false);
} catch(error){
  console.log('Error while navigating ')
}
};
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "" },
    { name: "Work", path: "/work" },
    { name: "Testimonial", path: "/testimonial" },
    { name: "Gallery", path: "/gallery" },
    { name: "Mentorship", path: "/mentorship" },
    { name: "Contact", path: "/contact" },
  ];

  if (!mounted) {
    // Placeholder to prevent mismatched styles during SSR
    return null;
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle('menu-open');
  };

 const handleNavItemClick = (path: string) => {
  if (path) {
    router.push(path);
    setIsMobileMenuOpen(false);
  }
};

return (
  <header className={`fixed  top-[-1px] left-0  w-full z-50 flex justify-center   ${theme === "dark" ? 'bg-black' : 'bg-white'}`}>
 
    <div className=" py-[1rem] w-full px-[1rem]  flex justify-between items-center md:px-0 lg:px-0 md:w-full md:max-w-[760px] lg:w-full lg:max-w-[1256px]">
      {/* Logo or Brand */}
      <div className="mr-auto md:mr-0  lg:mr-0">
   <h1 className={`${vanillaText.className} text-[1.5rem] md:text-[1.5rem] lg:text-[2.5rem]`}>Great Anosike</h1>

      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex flex-row items-center  gap-[1rem] md:hidden lg:hidden ">
      <div className="flex  ">
 <ModeToggle />
 </div>
        <button 
          onClick={toggleMobileMenu} 
          className="focus:outline-none"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
 
      </div>
   

      {/* Desktop Navigation */}
      <nav className="relative flex">
      {/* Mobile Menu Overlay - only visible on small screens */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 md:hidden
        ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={toggleMobileMenu}
      />

      {/* Navigation List */}
      <ul
        className={`fixed  right-0  h-full w-[250px] p-6 shadow-md 
          transform transition-all duration-300 ease-in-out md:translate-x-0 md:relative md:p-0 md:opacity-100 md:shadow-none  md:w-full md:max-w-[404px]  md:pointer-events-auto md:flex md:items-center md:gap-[12px] lg:gap-8
          ${isMobileMenuOpen ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none"}
          ${theme === 'light' ? 'bg-white' : 'bg-black'}
          md:bg-transparent
        `}
      >
        {navItems.map((item) => (
          <li key={item.name} className=" py-2 md:flex md:text-[10px] lg:text-[1rem]">
            {item.name === "About" ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onButtonClick();
                  toggleMobileMenu();
                }}
                className="cursor-pointer bg-transparent border-none"
              >
                <span
                  className={`text-[1rem] no-underline transition-colors duration-200 md:text-[10px] lg:text-[1rem] ${helvetica.className} ${
                    pathname === item.path
                      ? "text-[#F57F17]"
                      : theme === "dark"
                      ? "text-white hover:text-[#F57F17]"
                      : "text-[#1C1B1B] hover:text-[#F57F17]"
                  }`}
                >
                  {item.name}
                </span>
              </button>
            ) : item.name === "Work" ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  buttonClick();
                  toggleMobileMenu();
                }}
                className="cursor-pointer bg-transparent border-none"
              >
                <span
                  className={`text-[1rem] no-underline transition-colors duration-200 md:text-[10px] lg:text-[1rem] ${helvetica.className} ${
                    pathname === item.path
                      ? "text-[#F57F17]"
                      : theme === "dark"
                      ? "text-white hover:text-[#F57F17]"
                      : "text-[#1C1B1B] hover:text-[#F57F17]"
                  }`}
                >
                  {item.name}
                </span>
              </button>
            ) : item.name === 'Contact' ? (
              <button 
                onClick={(e)=> {
                  e.preventDefault();
                  handleClick();
                  toggleMobileMenu();
                }}
                className="cursor-pointer bg-transparent border-none"
              >
                <span
                  className={`text-[1rem] no-underline transition-colors duration-200 md:text-[10px] lg:text-[1rem] ${helvetica.className} ${
                    pathname === item.path
                      ? "text-[#F57F17]"
                      : theme === "dark"
                      ? "text-white hover:text-[#F57F17]"
                      : "text-[#1C1B1B] hover:text-[#F57F17]"
                  }`}
                >
                  {item.name}
                </span>
              </button>
            ) : item.name === 'Testimonial' ? (
              <button 
                onClick={(e)=> {
                  e.preventDefault();
                  handleButtonClick();
                  toggleMobileMenu();
                }}
                className="cursor-pointer bg-transparent border-none"
              >
                <span
                  className={`text-[1rem] no-underline transition-colors duration-200 md:text-[10px] lg:text-[1rem] ${helvetica.className} ${
                    pathname === item.path
                      ? "text-[#F57F17]"
                      : theme === "dark"
                      ? "text-white hover:text-[#F57F17]"
                      : "text-[#1C1B1B] hover:text-[#F57F17]"
                  }`}
                >
                  {item.name}
                </span>
              </button>
            ) : (
              <Link href={item.path}>
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.path);
                  }}
                  className={`text-[1rem] no-underline transition-colors duration-200 md:text-[10px] lg:text-[1rem] ${helvetica.className} ${
                    pathname === item.path
                      ? "text-[#F57F17]"
                      : theme === "dark"
                      ? "text-white hover:text-[#F57F17]"
                      : "text-[#1C1B1B] hover:text-[#F57F17]"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
    
      <div className="hidden md:flex lg:flex  ">
 <ModeToggle />
 </div>
 

      {/* Mobile Menu Slide-in */}
 
    </div>
   
  </header>
);
//     // Add a new wrapper div to handle the overall layout
// <div className="relative w-full flex justify-center md:justify-center lg:justify-center pt-[2rem]">
//   <div className="flex justify-between w-[398px] items-center md:justify-normal md:w-full md:max-w-[760px] lg:w-full lg:max-w-[1256px] relative z-10">
//     <section className="flex items-center md:w-[30%]">
//       <h1 className={`${vanillaText.className} text-clamp-header-name`}>Great Anosike</h1>
//     </section>
// <div className="flex items-center md:w-full md:justify-between">
// <div className="flex mr-[1rem] md:hidden lg:hidden">
// <ModeToggle />
// </div>

//     {/* Navigation Section */}
 
 

  

//     <div className="hidden md:flex md:items-center lg:flex lg:ml-[2rem]">
//     <ModeToggle  />
//     </div>
//     {/* Mobile Menu Toggle Button */}
//     <div className="md:hidden lg:hidden">
//       <button onClick={toggleMobileMenu} aria-label="Toggle menu" className="relative w-[18px] h-[12px] focus:outline-none">
//         <div
//           className={`
//             absolute top-1/2 left-0 w-full h-[2px] 
//             before:content-[''] before:absolute before:left-0 before:w-full before:h-[2px]
//             after:content-[''] after:absolute after:left-0 after:w-full after:h-[2px]
//             before:transition-all before:duration-300 after:transition-all after:duration-300
//             ${theme === "dark" ? "bg-white before:bg-white after:bg-white" : "bg-[#1C1B1B] before:bg-[#1C1B1B] after:bg-[#1C1B1B]"}
//             ${isMobileMenuOpen ? "bg-transparent before:top-0 before:rotate-45 after:top-0 after:-rotate-45" : "before:-top-2 after:top-2"}
//           `}
//         />
//       </button>
//     </div>
// </div>
//   </div>
// </div>

//   );
};

export default Header;
