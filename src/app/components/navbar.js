'use client';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options = { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit', second: '2-digit' };
      setTime(new Intl.DateTimeFormat('pt-BR', options).format(now));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (mobileMenuOpen) toggleMobileMenu();
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      if (mobileMenuOpen) toggleMobileMenu();
    }
  };

  return (
    <nav className="bg-gray-50 bg-opacity-10 fixed w-full top-0 z-10">
      <div className="container mx-auto flex items-center justify-between py-8 px-4">
        <span className="text-black text-md font-mono md:text-left text-center w-full md:w-auto">{time}</span>

        <div className="hidden md:flex space-x-4">
          <button className="text-black opacity-75 text-md hover:underline transition-all" onClick={scrollToTop}>
            Home
          </button>
          <button className="text-black opacity-75 text-md hover:underline transition-all" onClick={() => scrollToSection('about')}>
            About
          </button>
          <button className="text-black opacity-75 text-md hover:underline transition-all" onClick={() => scrollToSection('contacts')}>
            Contacts
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-gray-300">
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={`md:hidden fixed inset-0 bg-white transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="container mx-auto flex flex-col items-center justify-center h-screen">
          <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-gray-400 absolute top-4 right-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button className="text-black text-lg hover:underline transition-all block mb-2 text-center" onClick={scrollToTop}>
            Home
          </button>
          <button className="text-black text-lg hover:underline transition-all block mb-2 text-center" onClick={() => scrollToSection('about')}>
            About
          </button>
          <button className="text-black text-lg hover:underline transition-all block mb-2 text-center" onClick={() => scrollToSection('contacts')}>
            Contacts
          </button>
        </div>
      </div>
    </nav>
  );
}
