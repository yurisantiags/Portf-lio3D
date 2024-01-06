import LkButton from "../components/lkbutton";
import GhButton from "../components/ghbutton";
import Navbar from "../components/navbar";
import Card from "../components/card";
import ContactsText from "../components/contactsText";

export default function Contacts(){
    return(
      <section>
        <Navbar/>
        <main className="flex min-h-screen items-center justify-center ">
          <div className="card perspective-1000 transform-style-preserve-3d transition-transform">
            <Card/>
          <div className='grid mt-8 grid-cols md:grid-cols-2 lg:grid-cols-2 gap-2'>
            <GhButton/>
            <LkButton/>
          </div>
            <ContactsText/>
          </div>
        </main>
      </section>
      
    )
}