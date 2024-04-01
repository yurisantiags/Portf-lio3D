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

export default function Contacts() {
  return (
    // <section className="min-h-screen flex flex-col">
    //   <Navbar />
    //   <div className='relative pl-16 pt-20 flex-1'>
    //     <ModelViewer />
    //     <div className="absolute inset-y-0 left-0 flex items-center pb-52 md:pl-24">
    //       <ContactTitle />
    //     </div>
       
    //   </div>
    //   <div className=" flex items-center justify-center">
    //     <EmailBox />
    //     </div>
    //   <div className="flex mt-5 pb-24 items-center justify-center">
    //     <GhButton />
    //     <LkButton />
    //   </div>
    //   {/* <AlertMessage />    */}
    //   <Footer />
    // </section>
    <main>
<div className='h-full w-full'>
  <Navbar/>
  <div className="flex min-h-screen flex-col items-center justify-between p-24">
    {/* <AboutTxt/> */}
    <Building/>
  </div>
</div>
</main>
  );
}



