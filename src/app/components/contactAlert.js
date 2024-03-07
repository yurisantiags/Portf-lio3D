'use client';
import React, { useState, useEffect } from 'react';

const AlertMessage = () => {
    const [showAlert, setShowAlert] = useState(true);
  
    useEffect(() => {
      // Verificar se é um dispositivo móvel
      const isMobile = window.innerWidth <= 768;
  
      // Verificar se a mensagem já foi mostrada
      const hasShownMessage = localStorage.getItem('hasShownMessage');
  
      if (isMobile && hasShownMessage) {
        setShowAlert(false);
      } else {
        setShowAlert(true);
        // Marcar que a mensagem já foi mostrada
        localStorage.setItem('hasShownMessage', 'true');
      }
    }, []);
  
    const handleCloseAlert = () => {
      setShowAlert(false);
    };
  
    return (
      showAlert && (
        <div className="fixed bottom-10 right-10 bg-white bg-opacity-20 border border-white text-white opacity-75 px-4 py-3 rounded-md shadow-md">
          <button onClick={handleCloseAlert} className="float-right focus:outline-none">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M2.646 2.646a.5.5 0 01.708 0L10 9.293l6.646-6.647a.5.5 0 01.708.708L10.707 10l6.647 6.646a.5.5 0 01-.708.708L10 10.707l-6.646 6.647a.5.5 0 01-.708-.708L9.293 10 2.646 3.354a.5.5 0 010-.708z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <p className='text-center'>Interact with the page (envelope).</p>
        </div>
      )
    );
  };
  
  export default AlertMessage;
