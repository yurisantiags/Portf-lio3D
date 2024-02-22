'use client';
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Login(){
  useEffect(() => {
    AOS.init();
  }, [])
    return(
        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className=" mb-8 md:mb-32 flex  rounded-lg text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left h-96 border-white border" style={{
            backgroundImage: 'url("/img/Senha.png")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}>
            <a
              href="https://vistorialoginpage.netlify.app"
              className="group rounded-lg dark:bg-neutral-900/50 border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700  hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`text-white opacity-80 mb-2 md:mb-5 text-xl md:text-2xl font-semibold`}>
                Login{' '}
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-80 text-white`}>
                Este é um projeto utilizando ReactJs e Tailwind
              </p>
            </a>
          </div>
    )
}