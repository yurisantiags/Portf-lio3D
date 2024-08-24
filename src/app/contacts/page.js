'use client '
import LinkedinButton from "../components/LinkedinButton";
import ContactFormWithModel from "../components/contactForm";
import Footer from "../components/footer";

export default function Contacts() {
  return (
    <main id="contacts">
    <div className='h-full w-full'>
      <div className="flex min-h-screen items-center justify-center">
      <ContactFormWithModel/>
      </div>
      <LinkedinButton/>
    </div>
    <Footer/>
</main>

  );
}



