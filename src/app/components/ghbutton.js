export default function GhButton() {
    const openGitHub = () => {
      window.open('https://github.com/YuriSantiag', '_blank');
    };
  
    return (
      <button className="bg-white  w-32 h-12 bg-opacity-20 rounded-lg hover:scale-110 duration-500 shadow-lg" onClick={openGitHub}>
        GitHub
      </button>
    );
  }
  