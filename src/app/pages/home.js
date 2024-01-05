'use client';
import React, { useRef } from 'react';
import Navbar from '../components/navbar'
import Soon from '../components/soon'
import Login from '../components/login'
import Survey from '../components/survey'
import Text from '../components/text'
import Projects from '../components/projects';
import ProjectsText from '../components/projectsText';

export default function Home() {
  const projectsSectionRef = useRef(null);
  return (
<div>
    <div className='h-full w-full'>
      <Navbar/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Text/>
        <Projects projectsSectionRef={projectsSectionRef}/>
      </main>
    </div>
  <section className='flex min-h-screen items-center justify-center p-24' ref={projectsSectionRef}>
    <div className='h-full w-full'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        <Survey/>
        <Login/>  
        <Soon/>
        <Soon/>  
      </div>
        <ProjectsText/> 
      <div className='grid grid-cols-1  pt-22 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        <Soon/>
        <Soon/>   
        <Soon/>
        <Soon/>    
      </div>
    </div>
  </section>
</div>
  )
}
