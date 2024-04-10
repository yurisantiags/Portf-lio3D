import { FiLinkedin } from 'react-icons/fi';
import { useState, useEffect } from 'react';

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
          className="fixed bottom-5 right-5 bg-white bg-opacity-5 hover:bg-gray-400 text-white font-medium p-2 rounded-full transition duration-300"
          title="Linkedin"
        >
          <FiLinkedin className="h-5 w-5" />
        </button>
      )}
    </>
  );
}
