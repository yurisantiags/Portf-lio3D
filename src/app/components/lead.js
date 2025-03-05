'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Lead() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div 
      data-aos="zoom-in-up" 
      data-aos-easing="ease-out-cubic" 
      data-aos-duration="2000" 
      className="justify-center items-center flex w-80 rounded-lg"
    >
      <div className="relative mt-16 text-center transition-opacity duration-200 mx-10 md:mx-0 justify-center items-center flex h-96 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        
        <div className="absolute top-4 left-4 text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-black opacity-90 font-sans tracking-wide">
            Lead Capture Page
          </h2>
          <p className="text-sm md:text-base text-gray-600 font-light font-sans">
            WordPress & Elementor
          </p>
        </div>

        <a
          href=""
          className="pointer-events-none"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img 
            src="img/notLead.png"
            alt="Lead Capture Page Preview"
            className="h-80 w-full object-cover rounded-xl mt-20"
          />
        </a>
      </div>
    </div>
  )
}
