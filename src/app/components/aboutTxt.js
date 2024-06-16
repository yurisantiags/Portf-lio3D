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
        <h2 className="font-semibold text-white text-2xl mb-4 animated-heading">About Me</h2>
        <h6 className="font-normal text-sm md:text-base text-white">
          <ul>
            <li> Professional Experience:</li>
            <li className='pt-1 pl-2'>• I have worked on Front-end projects including institutional, corporate and commercial websites.</li>
            <li className=' pt-1 pl-2 '>• A brief experience in cybersecurity (I am part of the IDCIBER.ORG public committee).</li>
            <li className='pb-2 pl-2'>• Design and 3D modeling.</li>
          </ul>
          <ul>
            <li> Additional Skills:</li>
            <li className='pt-1 pl-2'>• Studying Cloud Solutions in AWS</li>
            <li className='pt-1 pl-2'>• For design and 3D modeling I use tools like Blender, Threejs, Photoshop and Figma.</li>
          </ul>
        </h6>
      </div>
    </div>
  );
}
