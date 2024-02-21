import Soon from '../components/soon'
import Login from '../components/login'
import Survey from '../components/survey'
// import Text from '../components/text'
// import Projects from '../components/projects';
// import ProjectsText from '../components/projectsText';

export default function ProjectsPage(){
return(
    <section id='projects-section' className='flex min-h-screen items-center justify-center p-24' >
    <div className='min-h-screen'>
    <div className='mt-10'>
      <h3 data-aos="fade-up" className='text-gray-300 text-sm font-semibold text-transform: uppercase;'>
      Developed Projects
      </h3>
      <h2 data-aos="fade-up" className='text-gray-500 pt-5 text-2xl max-w-xl font-bold text-transform: uppercase;'>
      Here you can find some of my projects and solutions developed
      </h2>
    </div>
      <div className=' mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
        <Survey/>
        {/* <Login/>  
        <Soon/>
        <Soon/>   */}
      </div>
      <div className='mt-44 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        <Soon/>
        <Soon/>   
        <Soon/>
        <Soon/>    
      </div>
      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        <Soon/>
        <Soon/>   
        <Soon/>
        <Soon/>    
      </div>
    </div>
  </section>
)

}
