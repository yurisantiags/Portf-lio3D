import { FiPhone } from 'react-icons/fi'
import { useState, useEffect } from 'react';


export default function ContactButton() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      setIsVisible(false);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsVisible(true), 1000);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openEmail = () => {
    window.location.href = "mailto:yurisantiagx2@gmail.com";
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={openEmail}
          className="fixed bottom-5 left-5 bg-white bg-opacity-5 hover:bg-gray-400 text-white font-medium p-2 rounded-full transition duration-300"
          title="Contact Me"
        >
          <FiPhone className="h-5 w-5" />
        </button>
      )}
    </>
  );
}
  
