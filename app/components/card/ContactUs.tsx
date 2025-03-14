"use client"

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css'
import { helveticaBold, poppinsMedium } from '@/app/font';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    user_email: '',
    user_goals: '',
    message: '',
   
  });

  const form = useRef<HTMLFormElement | null>(null);  // Fix the type to allow null initially

  const handleChange = (e:any) => {
    e.preventDefault()
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      console.error("Form reference is null");
      return;  // Prevent submission if ref is not available
    }

    emailjs.sendForm(
      'service_sm5gpbo', 
      'template_41na4tz', 
      form.current, 
      'AhB3sQhj8RyGC5O8-'
    )
    .then((result) => {
      alert('Email sent successfully!');
      setFormData({  // Clear form after successful submission
        name: '',
        user_email: '',
        user_goals: '',
        message: '',
      });
      console.log(result.text);
    })
    .catch((error) => {
      console.error('Email sending failed:', error.text);
    });

    e.currentTarget.reset();  // Use currentTarget to avoid issues
  };

  // const sendEmail = (e:any) => {
  //   e.preventDefault();

  //   if (form.current) {
  //     emailjs
  //       .sendForm(
  //         'service_sm5gpbo',
  //         'template_41na4tz',
  //         form.current,
  //         {
  //           publicKey: 'AhB3sQhj8RyGC5O8-',
  //         }
  //       )
  //       .then(
  //         () => {
  //           alert('Email sent successfully!');
  //           // Clear form after successful submission
  //           setFormData({
  //             name: '',
  //             user_email: '',
  //             user_goals: '',
  //             message: '',
             
  //           });
  //         },
  //         (error) => {
  //           console.log('FAILED...', error.text);
  //         }
  //       );
  //   }
  // };
  // console.log(formData)

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4 md:w-[50%] lg:max-w-[510px] w-full">
      <div className="space-y-[1.25rem] mt-[1.25rem] md:mt-0 w-full">
        <div>
          <label className={`block mb-2 ${poppinsMedium.className} text-[1rem]`}>Full Name</label>
          
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-[6px] bg-white placeholder-gray-500 border "          />
        </div>

        <div>
          <label className={`block mb-2 ${poppinsMedium.className} text-[1rem]`}>Email Address</label>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email address"
            value={formData.user_email}
            onChange={handleChange}
            className="w-full p-4 rounded-[6px] bg-white placeholder-gray-500 border"
          />
        </div>

        <div>
          <label className={`block mb-2 ${poppinsMedium.className} text-[1rem]`}>Career Goals</label>
          <input
            type="text"
            name="user_goals"
            placeholder="Enter your career goals"
            value={formData.user_goals}
            onChange={handleChange}
            className="w-full p-4 rounded-[6px] bg-white placeholder-gray-500 border"
          />
        </div>

        <div>
          <label className={`block mb-2 ${poppinsMedium.className} text-[1rem]`}>Reason for seeking mentorship</label>
          <textarea
            name="message"
            placeholder="Enter your reason"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-[6px] bg-white placeholder-gray-500 border min-h-[100px]"
          />
        </div>

        <button
          type="submit"
          className={`px-[1.25rem] py-[12px] bg-[#F57F17] text-[1rem] text-white font-bold rounded-[6px] hover:bg-yellow-800 transition-colors mt-[1.25rem] lg: mt-[2.5rem]     hover:opacity-75 transition-colors transition-opacity duration-300 ${helveticaBold.className}`}
          >
          Book your session now
        </button>
      </div>
    </form>
  );
};

export default ContactUs;
