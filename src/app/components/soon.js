'use client';
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Soon(){
  useEffect(() => {
    AOS.init();
  }, [])
    return(
        <div data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="justify-center items-center flex w-96 h-64 mt-20 rounded-lg ">
        <div className="text-center transition-opacity duration-200 absolute inset-0 justify-center rounded-lg  items-center flex h-64 bg-white bg-opacity-15 ">
        <a
        href=""
        className=""
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
     
    </div>
    )
}