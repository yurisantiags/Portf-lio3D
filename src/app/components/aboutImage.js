import React from 'react';

function Imagem(props) {
  return <img className='w-full max-w-64 h-72 rounded-xl opacity-0 md:opacity-100  border-r-2 border-b-2 border-r-gray-600 border-b-gray-600 ' src={props.src} alt={props.alt} />;
}

export default Imagem;
