'use client';
import React, { useState, useEffect } from 'react';

export default function AlertMessage(){
    const [showAlert, setShowAlert] = useState(true);
  
    const handleCloseAlert = () => {
      setShowAlert(false);
    };
  
    useEffect(() => {
      // Verifica se a mensagem já foi fechada antes
      const isAlertClosed = localStorage.getItem('isAlertClosed');
      if (isAlertClosed) {
        setShowAlert(false);
      }
    }, []);
  
    const showAlertClass = showAlert ? 'block' : 'hidden';
    const alertPositionClass = window.innerWidth < 640 ? 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' : 'fixed bottom-10 right-10';
  
    return (
      <div className={`${showAlertClass} ${alertPositionClass} bg-white bg-opacity-20 border border-white text-white opacity-75 px-4 py-3 rounded-md shadow-md`}>
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
    );
  };
  
