import AboutText from "../components/aboutTxt";

export default function About() {
  return (
    <main id='about' className="relative min-h-screen py-20 flex flex-col justify-center items-center">
      <div className="absolute top-5 transition-transform transform hover:scale-105 right-5 w-64 h-40 md:w-80 md:h-52 bg-gray-800 rounded-3xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src="https://maps.google.com/maps?q=Rio%20de%20Janeiro,Brazil&t=k&z=7&output=embed"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center md:pl-24 md:pb-14">
           <AboutText/>
        </div>
      </div>

     
      <a
        href="https://dribbble.com/yurisantiago" 
        target="_blank"
        rel="noopener noreferrer"
        className="absolute w-64 h-16 md:w-80 md:h-20 bg-white text-gray-900 font-sans font-semibold text-center rounded-3xl border-2 border-gray-300 shadow-md flex items-center justify-center transition-transform 5 hover:shadow-lg opacity-90
          md:bottom-5 md:left-5 bottom-10 left-1/2 md:transform-none -translate-x-1/2"
      >
        Dribbble
      </a>
    </main>
  );
}
