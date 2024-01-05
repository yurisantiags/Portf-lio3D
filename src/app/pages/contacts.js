import LkButton from "../components/lkbutton";
import GhButton from "../components/ghbutton";
import Navbar from "../components/navbar";

export default function Contacts(){
    return(
        <div>
  <Navbar/>
      <main className="flex min-h-screen items-start p-24">
      <div className="card perspective-1000 transform-style-preserve-3d transition-transform">
      <h1 className=" text-white"> Currículo</h1>
        <div className="w-64 rounded-lg shadow-md shiny-card">
          <a href="https://www.linkedin.com/in/yuri-santiago/" target="_blank">
            <img src="img/jpg.png" alt="Logo" className="h-auto w-auto ml-4" />
          </a>
        </div>
        <GhButton/>
        <LkButton/>
      </div>
     
    </main>
        </div>
      
    )
}