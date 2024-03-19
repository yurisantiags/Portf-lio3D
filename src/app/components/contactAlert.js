'use client';
import React, { useState, useEffect } from 'react';

const AlertMessage = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [alertPositionClass, setAlertPositionClass] = useState('');

  useEffect(() => {
    const handleWindowResize = () => {
      const positionClass = window.innerWidth < 640 ? 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' : 'fixed bottom-10 right-10';
      setAlertPositionClass(positionClass);
    };

    handleWindowResize(); // Call it once to set the initial position

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const showAlertClass = showAlert ? 'block' : 'hidden';

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
      <p className='text-center'>Interact with the page (mailbox).</p>
    </div>
  );
};

export default AlertMessage;