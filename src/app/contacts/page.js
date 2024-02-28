import GhButton from "../components/ghbutton";
import Navbar from "../components/navbar";
import Building from '../components/building';

export default function Contacts() {
  return (
<main>
    <div className='h-full w-full'>
      <Navbar/>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <Building/>
      </div>
    </div>
</main>

  )
}
