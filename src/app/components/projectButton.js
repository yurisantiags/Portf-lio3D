// Importações...
'use client';
import { FaChevronDown } from 'react-icons/fa';
//import { FaLinkedin } from 'react-icons/fa';

export default function Projects({ projectsSectionRef }) {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      className="text-black animate-bounce flex items-center rounded-lg px-14 hover:scale-105 duration-500 opacity-75"
      onClick={scrollToProjects}
    >
      Projects <FaChevronDown className="ml-2" />
    </button>
  );
}
