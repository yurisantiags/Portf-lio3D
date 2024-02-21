'use client';
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Survey(){
  useEffect(() => {
    AOS.init();
  }, [])
    return(
        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <a
              href="https://github.com/YuriSantiag"
              target="_blank"
              rel="noopener noreferrer"
            >
            <img src="/img/projectsmockup.png" className="w-96" />
            </a>
          </div>
    )
}