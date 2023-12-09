import Image from 'next/image'
import profile from "../public/profile.jpg"
import Nav from './components/Nav'
export default function Home() {
  return (
    <div>
    <Nav/>
    <main className="flex min-h-screen items-center justify-center ">
      <div className='px-24'>
    <p className=' inline px-1 text-4xl'>Hi there, my name is <u>Bhargav</u>. </p>
    <Image priority src={profile} className=' inline rounded-full w-[10%] hover:w-[20%] duration-500 ease-in-out ' alt="profile pic"/>
    <br/>
     <p className=' inline p-1'>I'm a  <u><i>Web development</i></u> based in India. </p>  
     <Image src={profile} className=' inline rounded-full w-[6%] hover:w-[20%] duration-500 ease-in-out' alt="profile pic"/>
     </div>
  
    </main>
    </div>
  )
}
