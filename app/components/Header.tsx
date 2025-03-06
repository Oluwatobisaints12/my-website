"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { helvetica, vanillaText } from "@/app/font";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from "./theme-provider";
import './Header.css'
import { Menu, X } from "lucide-react";
import Loading from '@/app/assests/images/loading.gif'



const Header = ({onButtonClick, buttonClick, handleClick, handleButtonClick, handleMentorContact}: any) => {
  const router = useRouter()

  const pathname = usePathname();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
 const searchParams = useSearchParams()


  // Ensure the component is mounted before accessing theme
  useEffect(() => {
    try{
      setMounted(true);
    }catch(error){
      console.log('Error while mounting')
    }
   
  }, []);

  const handleAboutClick = () => {
    if (pathname === "/") {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#about");
    }
  };
  const handleWorkClick = () => {
    if (pathname === "/") {
      document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#work");
    }
  };

  const handleContactClick = () => {
    if (pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#contact");
    }
  };

  const handleTestimonialClick = () => {
    if (pathname === "/") {
      document.getElementById("testimonial")?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#testimonial");
    }
  };
  // Navigation function
  const handleNavigation = (path: string) => {
    router.push(path);
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
  <header className={`fixed  top-0 left-0  w-full z-50 flex justify-center   ${theme === "dark" ? 'bg-black' : 'bg-white'}`}>
 
 <div className="py-[1rem] w-full px-[1rem] flex justify-between items-center md:px-0 lg:px-0 md:w-full md:max-w-[760px] lg:w-full lg:max-w-[1256px]">
  {/* Logo or Brand */}
  <div className="md:mr-0 lg:mr-0">
    <h1 className={`${vanillaText.className} text-[1.5rem] md:text-[1.5rem] lg:text-[2.5rem]`}>Great Anosike</h1>
  </div>

  {/* Spacer to push the toggle to the right */}
  <div className="flex-grow"></div>

  {/* Mode Toggle and Mobile Menu as separate elements */}
  <div className="flex items-center gap-[1rem]">
    <div className="flex">
      <ModeToggle />
    </div>
    <button 
      onClick={toggleMobileMenu} 
      className="focus:outline-none md:hidden lg:hidden"
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
          transform transition-all duration-300 ease-in-out md:translate-x-0 md:relative md:p-0 md:opacity-100 md:shadow-none  md:w-full md:max-w-[404px]  md:pointer-events-auto md:flex md:items-center md:gap-[12px] lg:w-full lg:max-w-[665px] lg:gap-8
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
                  handleAboutClick()
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
                  handleWorkClick();
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
                  handleContactClick();
                  handleMentorContact();
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
                  handleTestimonialClick()
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

};

export default Header;
