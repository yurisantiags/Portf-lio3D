// Importações...
import { FaChevronDown } from 'react-icons/fa';

export default function Projects({ projectsSectionRef }) {
  const scrollToProjects = () => {
    if (projectsSectionRef.current) {
      projectsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      className="text-white animate-bounce flex items-center rounded-lg px-14 hover:scale-105 duration-500 opacity-75"
      onClick={scrollToProjects}
    >
      Projetos <FaChevronDown className="ml-2" />
    </button>
  );
}
