import React from 'react';
import Navbar from '../components/navbar';
import Imagem from '../components/aboutImage';
import AboutTxt from '../components/aboutTxt';

export default function About() {
  return (
    <main id='about' className="h-screen flex flex-col justify-center items-center">
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center md:pl-24 md:pb-14">
          <Imagem src="" alt="me"/>
          <AboutTxt/>
        </div>
      </div>
    </main>
  );
}
