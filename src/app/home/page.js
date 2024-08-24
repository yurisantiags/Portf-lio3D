'use client';
import { useRef } from 'react';
import About from '../about/page';
import LinkedinButton from '../components/LinkedinButton';
import BackToTopButton from '../components/backButton';
import Navbar from '../components/navbar';
import Projects from '../components/projectButton';
import Text from '../components/text';
import Contacts from '../contacts/page';
import ProjectsPage from '../projects/page';

export default function Home() {
  const projectsSectionRef = useRef(null);

  return (
    <main>
      <div id='pageHome' className={`h-full w-full `}>
        <Navbar />
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
          <Text />
          <Projects projectsSectionRef={projectsSectionRef} />
        </div>
      </div>
      <ProjectsPage />
      <About/>
      <Contacts/>
      <LinkedinButton/>
      <BackToTopButton />
      
    </main>
    
  )
}



