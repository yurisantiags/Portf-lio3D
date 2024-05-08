'use client';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

function Imagem(props) {
  const isDesktop = useMediaQuery({ minWidth: 769 }); // Define a largura mínima para considerar como tela desktop

  if (!isDesktop) {
    return null; // Retorna null se não estiver em uma tela desktop (ou seja, está em uma tela de notebook)
  }

  return (
    <div className=''>
      <img
        data-aos="zoom-in-up"
        className='w-64 h-72 rounded-xl opacity-0 md:opacity-100 border-r-2 border-b-2 border-r-gray-600 border-b-gray-600'
        src={props.src}
        alt={props.alt}
      />
    </div>
  );
}

export default Imagem;
