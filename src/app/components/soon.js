'use client';
import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Soon() {
  AOS.init(); // Inicializa o AOS

  const projects = [
    { title: "Projects", description: "" },
    // Adicione mais projetos conforme necessário
  ];

  return (
    <div className="flex flex-wrap justify-center items-center h-screen">
      {projects.map((project, index) => (
        <div
          key={index}
          className="w-96 p-4" // Tamanho e espaçamento dos quadrados de projeto
          data-aos="fade-up"
          data-aos-delay={(index + 1) * 100} // Atraso de animação para cada projeto
        >
          <div className="bg-gray-500 opacity-45 border rounded-md p-4 transition duration-300 ease-in-out transform ">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-sm text-gray-700">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
