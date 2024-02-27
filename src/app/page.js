// import Contacts from "./pages/contacts";
import Contacts from "./contacts";
import Home from "./home";
import ProjectsPage from "./pages/projects";


export default function Header() {
  return (
    
    <div className='min-h-screen'>
      <Home/>
      {/* <About/> */}
      <ProjectsPage/>
      {/* <Contacts/> */}
    </div>

  )
}
