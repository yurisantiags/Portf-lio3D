'use client';
import React, { useRef } from 'react';
import Navbar from '../components/navbar'
import Soon from '../components/soon'
import Login from '../components/login'
import Survey from '../components/survey'
import Text from '../components/text'
import Projects from '../components/projects';

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

</main>
  )
}
