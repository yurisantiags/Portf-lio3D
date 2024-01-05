'use client';
import React, { useRef } from 'react';
import Navbar from './components/navbar'
import Soon from './components/soon'
import Login from './components/login'
import Survey from './components/survey'
import LkButton from './components/lkbutton'
import GhButton from './components/ghbutton'
import Text from './components/text'
import Projects from './components/projects';

export default function App() {
  const projectsSectionRef = useRef(null);
  return (
    <div>
  <div className='h-full w-full'>
<Navbar/>
<main className="flex min-h-screen flex-col items-center justify-between p-24">
<Text/>

    <div className='grid lg:grid-cols-2 gap-3'>
    
    {/* <LkButton/>
    <GhButton/> */}
    </div>
    <Projects projectsSectionRef={projectsSectionRef}/>
</main>
</div>
<section className='flex min-h-screen flex-col items-center justify-center p-24' ref={projectsSectionRef}>
  <div className='h-full w-full text-center'>
    <h1 className='text-white font-semibold ml-2'>Projetos</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
      <Survey/>
      <Login/>
      <Soon />
      <Soon/>    
    </div>
  </div>
</section>
    </div>
  

 
    
  )
}
