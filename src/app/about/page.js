'use client '
import Image from '../components/aboutImage';
import TimeLine from '../components/timeline';

export default function About() {
  return (
    <main id='about' className="h-screen mt-72 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center md:pl-24 md:pb-14">
          <Image src="" alt="me"/>
         <TimeLine/>
        </div>
      </div>
    </main>
  );
}
