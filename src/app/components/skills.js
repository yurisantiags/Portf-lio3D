'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ScrollTextComponent = () => {
  const containerRef = useRef(null);
  const textsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const texts = textsRef.current;
    const screenWidth = window.innerWidth;

    // Obtendo as dimensões do contêiner e do texto
    const containerWidth = container.offsetWidth;
    const totalWidth = texts.reduce((acc, text) => acc + text.offsetWidth, 0);

    // Definindo a distância que o texto deve percorrer
    const distance = containerWidth + totalWidth + screenWidth;

    // Configurando a animação
    const animation = gsap.fromTo(container, {
      x: screenWidth, // Inicia do limite total do lado direito da tela
    }, {
      x: -distance, // Move para o limite total do lado esquerdo da tela
      duration: 150, // Duração da animação
      ease: "linear",
      repeat: -1,
    });

    // Adicione um event listener para controlar a animação com o scroll
    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      if (containerRect.right < 0) {
        animation.restart(); // Reinicia a animação quando o texto sair completamente da tela no lado esquerdo
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remova o event listener quando o componente for desmontado
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <div className="flex mt-5 md:mt-0 items-center h-full w-screen overflow-hidden">
      <div className="flex" ref={containerRef}>
        <div ref={el => textsRef.current[0] = el} className=" text-white cb-tagreel-item scroll-text ">JavaScript</div>
        <div ref={el => textsRef.current[1] = el} className=" text-white cb-tagreel-item -stroke scroll-text ">Java</div>
        <div ref={el => textsRef.current[2] = el} className=" text-white  cb-tagreel-item scroll-text ">Python</div>
        <div ref={el => textsRef.current[3] = el} className=" text-white cb-tagreel-item -stroke scroll-text ">Bootstrap</div>
        <div ref={el => textsRef.current[4] = el} className=" text-white cb-tagreel-item scroll-text ">HTML</div>
        <div ref={el => textsRef.current[5] = el} className=" text-white cb-tagreel-item -stroke scroll-text ">CSS</div>
        <div ref={el => textsRef.current[6] = el} className=" text-white cb-tagreel-item scroll-text ">TailwindCSS</div>
        <div ref={el => textsRef.current[7] = el} className=" text-white cb-tagreel-item -stroke scroll-text ">ReactJs</div>
        <div ref={el => textsRef.current[8] = el} className=" text-white cb-tagreel-item scroll-text ">Next</div>
        <div ref={el => textsRef.current[9] = el} className=" text-white cb-tagreel-item -stroke scroll-text ">MySQL</div>
        <div ref={el => textsRef.current[10] = el} className=" text-white cb-tagreel-item scroll-text ">Git</div>
        <div ref={el => textsRef.current[11] = el} className=" text-white cb-tagreel-item -stroke scroll-text ">Jquery</div>
        <div ref={el => textsRef.current[12] = el} className=" text-white cb-tagreel-item scroll-text ">Three.js</div>
        <div ref={el => textsRef.current[13] = el} className=" text-white cb-tagreel-item scroll-text ">JavaScript</div>
        <div ref={el => textsRef.current[14] = el} className=" text-white cb-tagreel-item -stroke scroll-text ">Java</div>
        <div ref={el => textsRef.current[15] = el} className=" text-white  cb-tagreel-item scroll-text ">Python</div>
        <div ref={el => textsRef.current[16] = el} className=" text-white cb-tagreel-item -stroke scroll-text ">Bootstrap</div>
        <div ref={el => textsRef.current[17] = el} className=" text-white cb-tagreel-item scroll-text ">HTML</div>
        <div ref={el => textsRef.current[18] = el} className=" text-white cb-tagreel-item -stroke scroll-text ">CSS</div>
        <div ref={el => textsRef.current[19] = el} className=" text-white cb-tagreel-item scroll-text ">TailwindCSS</div>
        <div ref={el => textsRef.current[20] = el} className=" text-white cb-tagreel-item -stroke scroll-text ">ReactJs</div>
        <div ref={el => textsRef.current[21] = el} className=" text-white cb-tagreel-item scroll-text ">Next</div>
        <div ref={el => textsRef.current[22] = el} className=" text-white cb-tagreel-item -stroke scroll-text ">MySQL</div>
        <div ref={el => textsRef.current[23] = el} className=" text-white cb-tagreel-item scroll-text ">Git</div>
        <div ref={el => textsRef.current[24] = el} className=" text-white cb-tagreel-item -stroke scroll-text ">Jquery</div>
        <div ref={el => textsRef.current[25] = el} className=" text-white cb-tagreel-item scroll-text ">Three.js</div>
        {/* Adicione mais frases conforme necessário */}
      </div>
    </div>
  );
};

export default ScrollTextComponent;
