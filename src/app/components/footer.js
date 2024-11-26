import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import EmailForm from './emailForm';
export default function Footer(){

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); 

    }
  };
    return(
        <footer className=" bg-gray-600 bg-opacity-5 pb-5 pt-10 text-gray-300 opacity-80 ">
        <div className='md:justify-center md:items-center pb-5 md:pb-0 md:flex '>
        <div className='grid grid-cols-2 gap-4 md:gap-x-16 md:pr-44'>
        <Link href="/home" className="text-black hover:underline md:text-sm text-xs text-center opacity-75 transition-all">HOME</Link>
        <Link href="https://github.com/YuriSantiag" target='_blank' className="text-black text-center opacity-75 md:text-sm text-xs hover:underline transition-all">GITHUB</Link>
        <button className="text-black opacity-75 md:text-sm text-xs hover:underline text-center transition-all" onClick={() => scrollToSection('about')}>
            ABOUT
          </button>
          <button className="text-black opacity-75 md:text-sm text-xs hover:underline text-center transition-all" onClick={() => scrollToSection('contacts')}>
            CONTACTS
          </button>
        </div>
        <div className=' hidden md:pl-96 md:block pr-8 md:pr-0 mt-4'>
        <EmailForm/>
        </div>
        </div>
        <hr className='opacity-15'></hr>
        <div className="md:justify-start md:flex gap-2">
        <div className=' text-xs text-gray-500 md:text-sm md:pl-48 mt-3 justify-center flex '>
        &copy; 2023 Developed by{'   '}
        <a
          href="https://github.com/YuriSantiag" className='text-gray-700' 
          style={{ textDecoration: '', color: '' }}
          target="_blan"
          rel="noopener noreferrer"
        >
          @yurisantiag
        </a>
        </div>
        <div className='justify-center md:ml-64 flex items-center gap-4'>
        <a href="https://www.linkedin.com/in/yuri-santiago/" target="_blank" className="bg-black bg-opacity-5 md:ml-96 mt-2 hover:bg-gray-400 hover:text-white text-gray-900 p-2 rounded-full transition duration-300">
        <FaLinkedin className="h-4 w-4" />
        </a>
        <a href="https://www.instagram.com/yurisantiag/" target="_blank" className="bg-black bg-opacity-5 mt-2  hover:bg-gray-400 hover:text-white text-gray-900  p-2 rounded-full transition duration-300">
        <FaInstagram className="h-4 w-4" />
        </a>
        <a href="https://github.com/YuriSantiag" target="_blank" className="bg-black bg-opacity-5 mt-2 hover:bg-gray-400 hover:text-white text-gray-900  p-2 rounded-full transition duration-300">
        <FaGithub className="h-4 w-4" />
        </a>
        </div>
        </div>
        
      </footer>
    );
}