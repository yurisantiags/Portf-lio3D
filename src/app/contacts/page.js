'use client';
import GhButton from "../components/ghbutton";
import Navbar from "../components/navbar";
import ModelViewer from "../components/scene";
import EmailBox from "../components/email";
import LkButton from "../components/LkButton";
import Footer from "../components/footer";
import AlertMessage from "../components/contactAlert";
import Building from "../components/building";
import ContactTitle from "../components/contactsTitle";
import ContactText from "../components/contactText";
import ContactButton from "../components/contactButton";
import ContactForm from "../components/contactForm";
import LinkedinButton from "../components/LinkedinButton";

export default function Contacts() {
  return (
    <main>
    <div className='h-full w-full'>
      <Navbar/>
      <div className="flex min-h-screen items-center justify-center">
        <ContactForm/>
      </div>
      <ContactButton/>
      <LinkedinButton/>
    </div>
    <Footer/>
</main>
   
  );
}



