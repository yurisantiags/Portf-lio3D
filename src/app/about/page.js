import Imagem from '../components/aboutImage';
import AboutTxt from '../components/aboutTxt';
import Building from '../components/building';
import Footer from '../components/footer';
import Navbar from '../components/navbar'
import ScrollTextComponent from '../components/skills';

export default function About() {
  return (
    <main>
      <Navbar />
      <div className="flex justify-center">
        {/* <div className="flex md:pl-24 md:pb-14">
          <Imagem src="" alt="me"/>
          <AboutTxt/>
        </div>
        <ScrollTextComponent/> */}
        {/* <Tagreel/> */}
        <Building/>
      </div>
      {/* <Footer/> */}
    </main>
  );
}

// justcenter por flex-col
