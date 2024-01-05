'use client';
export default function GhButton() {
    const openLinkedin = () => {
      window.open('https://www.linkedin.com/in/yuri-santiago/', '_blank');
    };
  
    return (
      <button className="bg-white rounded-lg px-14 hover:scale-105 duration-500" onClick={openLinkedin}>
        Linkedin
      </button>
    );
  }
  