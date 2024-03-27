'use client';
import React, { useEffect, useRef, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Soon() {
  useEffect(() => {
    AOS.init();
  }, []);

  const projects = [
    { title: "Project 1", description: "Description of Project 1" },
    { title: "Project 2", description: "Description of Project 2" },
    // Adicione mais projetos conforme necessário
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3000); // Altera o slide a cada 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, [projects.length]); // Dispara o efeito sempre que o número de projetos mudar

  return (
    <div className="relative h-screen text-center w-screen bg-white bg-opacity-5 flex justify-center items-center overflow-hidden">
      <div className="absolute top-1/2 text-center left-1/2 transform -translate-x-1/2 -translate-y-1/2"> {/* Centraliza o carousel */}
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group w-3/4 h-3/4 pointer-events-none cursor-default rounded-lg border border-transparent transition-all hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex justify-center items-center absolute top-0 left-0`}
            style={{
              transform: `rotateX(${currentIndex === index ? 0 : 90}deg) translateY(${currentIndex === index ? 0 : index > currentIndex ? "100%" : "-100%"})`,
              opacity: index === currentIndex ? 1 : 0,
              zIndex: index === currentIndex ? 1 : 0,
              transition: "opacity 0.5s, transform 0.5s",
            }}
          >
            <div style={{ transform: `rotateX(${currentIndex === index ? 0 : -90}deg)` }}>
              <h2 className={`text-3xl opacity-40 font-semibold text-gray-400`}>
                {project.title}
              </h2>
              <p className={`text-sm opacity-40 text-gray-400 mt-2`}>
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


