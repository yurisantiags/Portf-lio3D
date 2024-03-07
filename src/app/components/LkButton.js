'use client';
export default function LkButton() {
    const openLinkedin = () => {
      window.open('https://www.linkedin.com/in/yuri-santiago/', '_blank');
    };
  
    return (
      <button className="bg-white  w-32 h-12 bg-opacity-20 rounded-lg hover:scale-110 duration-500 shadow-lg" onClick={openLinkedin}>
    Linkedin
      </button>
    );
  }
  