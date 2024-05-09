'use client';
import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/navbar';
import Text from '../components/text';
import ProjectsPage from '../projects/projects';
import Projects from '../components/projectButton';
import BackToTopButton from '../components/backButton';
import ContactButton from '../components/contactButton';
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import About from '../about/page';
import Contacts from '../contacts/page';

export default function Home() {
  const projectsSectionRef = useRef(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [firstLoad, setFirstLoad] = useState(true);

  // useEffect(() => {
  //   // Verifica se é a primeira carga
  //   if (firstLoad) {
  //     const loadingTimeline = gsap.timeline();

  //     // Define a duração total da animação de carregamento em segundos
  //     const durationInSeconds = 1;
  //     // Define o intervalo de tempo entre cada atualização da barra de carregamento
  //     const updateInterval = durationInSeconds / 100;

  //     // Atualiza a porcentagem na tela a cada intervalo
  //     for (let percent = 1; percent <= 100; percent++) {
  //       loadingTimeline.to(".loading-percentage", { textContent: `${percent}%`, duration: updateInterval }, `+=${updateInterval}`);
  //     }

  //     // Espera 1 segundo antes de esconder a tela de carregamento
  //     loadingTimeline.to(".loading-screen", { opacity: 0, duration: 1, delay: 1 });

  //     // Atualiza o estado isLoading para indicar que o carregamento terminou
  //     loadingTimeline.call(() => setIsLoading(false));

  //     // Remove a tela de carregamento após a animação
  //     loadingTimeline.to(".loading-screen", { display: "none", duration: 0 });

  //     // Executa a animação
  //     loadingTimeline.play();

  //     // Marca que a primeira carga ocorreu
  //     setFirstLoad(false);
  //   }
  // }, [firstLoad]);

  return (
    <main>
      {/* Tela de carregamento */}
      {/* {isLoading && (
        <div className="loading-screen fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center z-50">
          <div className="loading-percentage font-bold text-lg text-white"></div>
        </div> ${isLoading ? 'opacity-0 pointer-events-none' : ''}
      )} */}

      <div id='pageHome' className={`h-full w-full `}>
        <Navbar />
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
          <Text />
          <Projects projectsSectionRef={projectsSectionRef} />
        </div>
      </div>
      <ProjectsPage />
      <About/>
      <Contacts/>
      
      <BackToTopButton />
      
    </main>
    
  )
}



