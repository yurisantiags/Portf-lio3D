'use client'; 

import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

function Imagem(props) {
  const isDesktop = useMediaQuery({ minWidth: 769 }); 
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setShowImage(isDesktop);
  }, [isDesktop]);

  if (!showImage) {
    return null; 
  }

  const imagePath = '/img/perf-2.png'; 

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
