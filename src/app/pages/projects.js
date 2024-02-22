import Soon from '../components/soon'
import Login from '../components/login'
import Footer from '../components/footer';

export default function ProjectsPage(){
return(
  
    <section id='projects-section'  >
    <div className='flex min-h-screen items-center justify-center p-24' >
    <div className='min-h-screen flex items-center flex-col'>
    <div className='mt-10 text-center'>
      <h3 data-aos="fade-up" className='text-gray-300 text-sm font-semibold text-transform: uppercase;'>
      Developed Projects
      </h3>
      <h2 data-aos="fade-up" className='text-gray-500 pt-5 text-2xl max-w-xl font-bold text-transform: uppercase;'>
      Here you can find some of my projects and solutions developed
      </h2>
    </div>
      <div className=' mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 '>
          <Soon/> 
          <Soon/>
          <Soon/> 
      </div>
    </div>
    </div>
  <Footer/>
  </section>
  
  
)

}
