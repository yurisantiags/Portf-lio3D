import Imagem from '../components/aboutImage';
import AboutTxt from '../components/aboutTxt';
import Building from '../components/building';
import Footer from '../components/footer';
import Navbar from '../components/navbar'

export default function About() {
  return (
<main>
    <div className='h-full w-full'>
      <Navbar/>
      <div className="flex min-h-screen justify-center p-24">
      {/* <Imagem src="img/IMG_0797.HEIC" alt="me"/>
        <AboutTxt/> */}
        <Building/>
      </div>
    </div>
    {/* <Footer/> */}
</main>

  )
}
