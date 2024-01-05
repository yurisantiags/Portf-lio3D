'use client';
export default function GhButton() {
    const openLinkedin = () => {
      window.open('https://www.linkedin.com/in/yuri-santiago/', '_blank');
    };
  
    return (
      <button className="bg-white rounded-xl px-14 hover:scale-105 duration-500 opacity-75" onClick={openLinkedin}>
        Linkedin
      </button>
    );
  }
  