'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Soon(){
  useEffect(() => {
    AOS.init();
  }, [])
    return(
        <div data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="justify-center items-center  flex w-96 h-96 md:mt-20 rounded-lg ">
        <div className="text-center transition-opacity duration-200 absolute inset-0 mx-10 md:mx-0 justify-center rounded-lg  items-center flex h-80 bg-black opacity-20  ">
        <a
        href=""
        className="pointer-events-none"
        target="_blank"
        rel="noopener noreferrer"
      >
      <h2 className={`rounded-md text-2xl text-white font-semibold`}>
          Soon{' '}
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm  text-white`}>
        This field is intended for future projects
        </p>
      </a>
        </div>
     
    </div>
    )
}