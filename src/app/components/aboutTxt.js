'use client';
import { useEffect } from 'react';

export default function AboutTxt() {
  useEffect(() => {
    const heading = document.querySelector('.animated-heading');
    const letters = heading.textContent.split('');
    heading.textContent = '';
    
    letters.forEach(letter => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.className = 'animated-letter';
      heading.appendChild(span);
    });

    heading.addEventListener('mouseover', () => { 
      const animatedLetters = document.querySelectorAll('.animated-letter');
      animatedLetters.forEach((letter, index) => {
        setTimeout(() => {
          letter.style.transform = 'translateX(' + (index % 2 === 0 ? '-5px' : '5px') + ')';
        }, index * 50);
      });
    });

    heading.addEventListener('mouseout', () => {
      const animatedLetters = document.querySelectorAll('.animated-letter');
      animatedLetters.forEach(letter => {
        letter.style.transform = 'translateX(0)';
      });
    });
  }, []);

  return (
    <div className="flex justify-center items-center md:justify-start">
      <div data-aos="fade-up" className="md:pl-20 text-center md:text-left">
        <h2 className="font-semibold text-black text-2xl mb-4 animated-heading">About Me</h2>
        <div className="mt-4">
          <h4 className="font-semibold text-lg mt-4">Expertise/Skills:</h4>
          <ul className="list-disc pl-5">
            <li>Front-end: Proficient in Bootstrap, Tailwind, HTML, CSS, SASS, JavaScript, PHP, Next.js, and React.</li>
            <li>Design: Comprehensive experience in designing and implementing complete websites, including 3D modeling and animations (Three.js).</li>
            <li>Design Tools: Figma, Photoshop, Canva, and Blender.</li>
            <li>Back-end Integration: Experience with MySQL, Java, and API development.</li>
            <li>Cyber Security: Knowledge in vulnerability analysis and data protection using Python.</li>
          </ul>
          <h4 className="font-semibold text-lg mt-4">Experience:</h4>
          <ul className="list-disc pl-5">
            <li>Development and maintenance of corporate websites.</li>
            <li>Design and development of front-end interfaces.</li>
            <li>Creation of 3D models and advanced visual elements.</li>
            <li >Version control using Git and Git Flow.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
