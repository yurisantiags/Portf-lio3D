'use client';
import React, { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-black bg-opacity-5 py-3 fixed w-full top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <a href='/page.js'>
          <img src="img/Linktree.png" alt="Logo" className="h-12 w-auto ml-4" />
        </a>
        <div className="hidden md:flex space-x-4"> {/* Oculto em dispositivos menores que md (médio) */}
          <a href="/sobre" className="text-white hover:text-gray-300 opacity-75  text-sm">Sobre Mim</a>
          <a href="/contatos" className="text-white hover:text-gray-300 opacity-75 text-sm">Contatos</a>
        </div>
        <div className="md:hidden"> {/* Visível apenas em dispositivos menores que md (médio) */}
          {/* Ícone do menu para dispositivos móveis */}
          <button onClick={toggleMobileMenu} className="text-white hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Menu para dispositivos móveis */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-0">
          <a href="/sobre" className="block text-white py-2 px-4 hover:bg-gray-700 ">Sobre Mim</a>
          <a href="/contatos" className="block text-white py-2 px-4 hover:bg-gray-700">Contatos</a>
        </div>
      )}
    </nav>
  );
}
