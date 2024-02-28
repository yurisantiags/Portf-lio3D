'use client';
import React, { useRef } from 'react';
import Navbar from '../components/navbar'
import Text from '../components/text'
import ProjectsPage from '../projects/projects';
import Projects from '../components/projectButton';

export default function Home() {
  const projectsSectionRef = useRef(null);
  return (
<main>
    <div className='h-full w-full'>
      <Navbar/>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <Text/>
        <Projects projectsSectionRef={projectsSectionRef}/>
      </div>
    </div>
    <ProjectsPage/>
</main>

  )
}
