'use client';
import LinkedinButton from "../components/LinkedinButton";
import Footer from "../components/footer";
import ModelViewer from "../components/scene";

export default function Contacts() {
  return (
    <main id="contacts">
    <div className='h-full w-full'>
      {/* <Navbar/> */}
      <div className="flex min-h-screen items-center justify-center">
        {/* <ContactFormWithModel/> */}
        <ModelViewer/>
      </div>
      {/* <ContactButton/> */}
      <LinkedinButton/>
    </div>
    <Footer/>
</main>

   
  );
}



