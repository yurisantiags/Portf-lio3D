import { FiPhone } from 'react-icons/fi'
export default function ContactButton() {
    const openEmail = () => {
      window.location.href = "mailto:yurisantiagx2@gmail.com";
    };
  
    return (
      <button
        onClick={openEmail}
        className="fixed bottom-5 left-5 bg-white bg-opacity-5 hover:bg-gray-400 text-white font-medium py-2 px-4 rounded-full transition duration-300"
        title="Contact Me"
      >
      <FiPhone className="h-6 w-6" />
      </button>
    );
  }
  
