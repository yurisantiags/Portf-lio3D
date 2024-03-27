'use client';
import GhButton from "../components/ghbutton";
import Navbar from "../components/navbar";
import ModelViewer from "../components/scene";
import EmailBox from "../components/email";
import LkButton from "../components/LkButton";
import Footer from "../components/footer";
import AlertMessage from "../components/contactAlert";
import Building from "../components/building";

export default function Contacts() {
  return (
//   <section >
//     <Navbar/>
//     <div className='flex min-h-screen items-center justify-center ' >
//     <div className='min-h-screen justify-center flex items-center flex-col'>
//       <ModelViewer />
//       <EmailBox/>
//      <div className="flex mt-8 space-x-8">
//         <GhButton/>
//         <LkButton/>
//       </div>
// </div>
// </div>
// <Footer/>
// <AlertMessage/>
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


  )
}



