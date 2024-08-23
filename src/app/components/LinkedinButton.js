'use client'
import { useEffect, useState } from 'react';
import { FiLinkedin } from 'react-icons/fi';

export default function LinkedinButton() {
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

  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/seu-linkedin", "_blank");
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={openLinkedin}
          className="fixed bottom-5 left-5 bg-black bg-opacity-5 text-black hover:bg-gray-300 font-medium p-2 rounded-full transition duration-300"
          title="Linkedin"
        >
          <FiLinkedin className="h-5 w-5" />
        </button>
      )}
    </>
  );
}
