import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/navbar';
import Soon from '../components/soon';
import Footer from '../components/footer';

export default function ProjectsPage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id='projects-section' className='h-screen flex flex-col justify-center items-center'>
      <Navbar />
      <div className='flex justify-center items-center flex-col'>
        <div className=' mt-16 text-center'>
          <h3 data-aos="fade-up" className='text-gray-300 text-sm font-semibold text-uppercase'>
            Developed Projects
          </h3>
          <h2 data-aos="fade-up" className='text-gray-500 pt-5 text-sm md:text-2xl max-w-xl font-bold text-uppercase'>
            Here you can find some of my projects and solutions developed
          </h2>
        </div>
        <div className='relative grid md:grid-cols-3  md:gap-4'>
          <Soon />
          <Soon />
          <Soon />
        </div>
      </div>
      {/* <Footer /> */}
    </section>
  );
}
