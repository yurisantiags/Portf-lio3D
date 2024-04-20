import AboutTxt from '../components/aboutTxt';
import Building from '../components/building';
import Navbar from '../components/navbar'

export default function About() {
  return (
<main>
    <div className='h-full w-full'>
      <Navbar/>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <AboutTxt/>
        {/* <Building/> */}
      </div>
    </div>
</main>

  )
}
