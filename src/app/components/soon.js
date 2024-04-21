'use client';
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Soon(){
  useEffect(() => {
    AOS.init();
  }, [])
    return(
        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="justify-center items-center flex w-auto h-64 rounded-lg bg-white opacity-30">
        <ing></ing>
        <h1>oi</h1>
        <div className="text-center transition-opacity opacity-0 hover:opacity-100 duration-200 absolute inset-0 justify-center rounded-lg  items-center flex h-64 bg-black">
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