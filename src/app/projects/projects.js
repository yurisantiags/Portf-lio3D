import Soon from '../components/soon'
import Login from '../components/login'
import Footer from '../components/footer';
import ModelViewer from '../components/scene';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importe os estilos da AOS
import React, {useEffect} from 'react';

export default function ProjectsPage() {
  useEffect(() => {
    AOS.init(); // Inicialize a biblioteca AOS após a renderização
  }, []); // Certifique-se de usar uma dependência vazia para que seja chamada apenas uma vez

  return (
    <section id='projects-section'>
      <div className='flex min-h-screen items-center justify-center p-24'>
        <div className='min-h-screen flex justify-center items-center flex-col'>
          <div className='mt-10 text-center'>
            <h3 data-aos="fade-up" className='text-gray-300 text-sm font-semibold text-uppercase'>
              Developed Projects
            </h3>
            <h2 data-aos="fade-up" className='text-gray-500 pt-5 text-sm md:text-2xl max-w-xl font-bold text-uppercase'>
              Here you can find some of my projects and solutions developed
            </h2>
          </div>
          <div className='relative'>
          <div className=''>
            <ModelViewer />
          </div>
          <div className='absolute inset-0 justify-center flex items-center '>
            {/* <Soon /> */}
          </div>
        </div> 
        </div>
        
      </div>
      <Footer />
    </section>
  );
}
