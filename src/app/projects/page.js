'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Lead from '../components/lead';
import Soon from '../components/soon';

export default function ProjectsPage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id='projects-section' className='min-h-screen py-20 flex flex-col items-center'>
      <div className='flex justify-center items-center flex-col'>
        <div className='text-center'>
          <h3 data-aos="fade-up" className='text-gray-500 text-sm font-semibold text-uppercase'>
            Developed Projects
          </h3>
          <h2 data-aos="fade-up" className='text-black pt-5 text-sm md:text-2xl px-10 md:px-0 max-w-xl md:mb-0 mb-6 font-bold text-uppercase'>
            Here you can find some of my projects and solutions developed
          </h2>
        </div>
        <div className='flex flex-col md:flex-row gap-6 mt-10'>
          <Soon/>
          <Lead/>
        </div>
      </div>
    </section>
  );
}
