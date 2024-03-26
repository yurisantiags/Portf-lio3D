import { FiPhone } from 'react-icons/fi'
import Link from 'next/link';
export default function Footer(){
    return(
        <footer className=" pb-5 text-gray-300 opacity-80 ">
        <div className='flex justify-center'>
        <div className='grid grid-cols-2 gap-4 gap-x-16'>
        <Link href="/contacts" className="text-white hover:underline text-sm opacity-75 transition-all">HOME</Link>
        <Link href="/contacts" className="text-white opacity-75 text-sm hover:underline transition-all">GITHUB</Link>
        <Link href="/contacts" className="text-white opacity-75 text-sm hover:underline transition-all">ABOUT</Link>
        <Link href="/contacts" className="text-white opacity-75 text-sm hover:underline transition-all">CONTACTS</Link>
        </div>
        </div>
       
        <hr className='opacity-15'></hr>
       
        <div className="md:justify-start md:flex gap-2 md:pr-5">
        <div className=' md:pl-44 mt-3 justify-center flex  md:pr-96'>
        &copy; 2023 Developed by{' '}
         <a
          href="https://github.com/YuriSantiag" className='text-gray-400' 
          style={{ textDecoration: '', color: '' }}
          target="_blank"
          rel="noopener noreferrer"
        >
           @yurisantiag
        </a>
        </div>
        <div className='justify-center flex items-center gap-4'>
        <a href="" className="bg-white bg-opacity-5 md:ml-96 mt-2 hover:bg-gray-400 hover:text-white text-gray-400 p-2 rounded-full transition duration-300">
        <FiPhone className="h-4 w-4" />
        </a>
        <a href="" className="bg-white bg-opacity-5 mt-2  hover:bg-gray-400 hover:text-white text-gray-400  p-2 rounded-full transition duration-300">
        <FiPhone className="h-4 w-4" />
        </a>
        <a href="" className="bg-white bg-opacity-5 mt-2 hover:bg-gray-400 hover:text-white text-gray-400  p-2 rounded-full transition duration-300">
        <FiPhone className="h-4 w-4" />
        </a>
        </div>
        </div>
        
      </footer>
    );
}