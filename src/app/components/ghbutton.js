'use client';
export default function GhButton() {
    const openGitHubLink = () => {
      window.open('https://github.com/YuriSantiag', '_blank');
    };
  
    return (
      <button className="bg-white rounded-lg px-14 hover:scale-105 duration-500 opacity-75" onClick={openGitHubLink}>
        GitHub
      </button>
    );
  }
  