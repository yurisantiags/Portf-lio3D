'use client';
import React, { useEffect, useRef, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Soon() {
  useEffect(() => {
    AOS.init();
  }, []);

  const squareRef = useRef(null);

  return (
    <div
      ref={squareRef}
      className="mb-2 md:mb-32 flex  rounded-lg lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left bg-white bg-opacity-5 justify-center items-center"
    >
      <a
        href=""
        className="group text-center md:w-[580px] md:h-[280px] lg:w-[580px] lg:h-[280px] lg:h-280 pointer-events-none cursor-default rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex justify-center items-center"
        target="_blank"
        rel="noopener noreferrer"
         // Manter o tamanho apenas em telas grandes
      >
        <div>
          <h2 className={`text-3xl opacity-40 font-semibold text-gray-400`}>
            Soon
          </h2>
          <p className={`text-sm opacity-40 text-gray-400 mt-2`}>
            This field is intended for future projects
          </p>
        </div>
      </a>
    </div>
  );
}