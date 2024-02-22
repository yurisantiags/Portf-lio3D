'use client';
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Soon(){
  useEffect(() => {
    AOS.init();
  }, [])
    return(
        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="pt-32 mb-8 md:mb-32 flex rounded-lg  lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
      <a
        href=""
        className="group text-center pointer-events-none cursor-default rounded-lg bg-white bg-opacity-5 border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
      <h2 className={`rounded-md opacity-40 text-2xl text-gray-400 font-semibold`}>
          Soon{' '}
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-40 text-gray-400`}>
        This field is intended for future projects
        </p>
      </a>
    </div>
    )
}


