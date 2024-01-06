'use client';
export default function LkButton() {
    const openLinkedin = () => {
      window.open('https://www.linkedin.com/in/yuri-santiago/', '_blank');
    };
  
    return (
      <button className="bg-white rounded-xl  hover:scale-105 duration-500 opacity-75 shadow-lg" onClick={openLinkedin}>
        Linkedin
      </button>
    );
  }
  