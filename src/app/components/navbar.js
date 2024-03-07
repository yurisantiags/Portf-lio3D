'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
  };

  return (
    <nav className="bg-black bg-opacity-0 fixed w-full top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <a href='#' onClick={scrollToTop}>
          <img src="logoNaoAdicionada.png" className="h-12 w-auto ml-4" />
        </a>
        <div className="hidden md:flex space-x-4"> {/* Oculto em dispositivos menores que md (médio) */}
          <Link href="/home" className="text-white opacity-75 text-sm hover:border-b hover:border-gray-300 transition-all">Home</Link>
          <Link href="/about" className="text-white opacity-75 text-sm hover:border-b hover:border-gray-300 transition-all">About</Link>
          <Link href="/contacts" className="text-white opacity-75 text-sm hover:border-b hover:border-gray-300 transition-all">Contacts</Link>
        </div>
        <div className="md:hidden flex items-center"> {/* Visível apenas em dispositivos menores que md (médio) */}
          {/* Ícone do menu para dispositivos móveis */}
          <button onClick={toggleMobileMenu} className="text-white hover:text-gray-300">
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Menu para dispositivos móveis */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-0 flex flex-col items-end mr-4">
            <Link href="/home" className="text-white opacity-75 text-sm hover:border-b hover:border-gray-300 transition-all block mb-2">Home</Link>
            <Link href="/about" className="text-white opacity-75 text-sm hover:border-b hover:border-gray-300 transition-all block mb-2">About</Link>
            <Link href="/contacts" className="text-white opacity-75 text-sm hover:border-b hover:border-gray-300 transition-all block mb-2">Contacts</Link>
        </div>
      )}
    </nav>
  );
}