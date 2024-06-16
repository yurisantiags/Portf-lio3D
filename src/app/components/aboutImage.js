'use client'; // Certifique-se de usar 'use client' aqui

import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

function Imagem(props) {
  const isDesktop = useMediaQuery({ minWidth: 769 }); // Define a largura mínima para considerar como tela desktop
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setShowImage(isDesktop);
  }, [isDesktop]);

  if (!showImage) {
    return null; // Retorna null se não estiver em uma tela desktop
  }

  const imagePath = '/img/perf-2.png'; // Substitua 'sua-imagem.jpg' pelo nome da sua imagem

  return (
    <div className=''>
      <img
        data-aos="zoom-in-up"
        className='w-64 h-72 rounded-xl opacity-0 md:opacity-100 border-r-2 border-b-2 border-r-gray-600 border-b-gray-600'
        src={imagePath}
        alt={props.alt}
      />
    </div>
  );
}

export default Imagem;
