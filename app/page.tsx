"use client"
import { motion } from "framer-motion"
import Image from 'next/image'
import profile from "../public/profile.jpg"
import Pro from './components/Pro'
export default function Home() {
  return (
  <div>
    
    <main className="flex min-h-[70vh] items-center justify-center ">
      <div className='px-24'>
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }}
      >
    <p className=' inline px-1 text-4xl'>Hi there, my name is <u>Bhargav</u>. </p>

    <Image priority src={profile} className=' inline rounded-full w-[10%] hover:w-[20%] duration-500 ease-in-out ' alt="profile pic"/>
   </motion.div>
    <br/>
    <motion.div
        transition={{ type: "spring", stiffness: 50 ,duration: .5}}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}>
     <p className=' inline p-1'>I&#39;m a  <u><i>Web development</i></u> based in India. </p>  
     <Image src={profile} className=" inline rounded-full w-[6%] hover:w-[20%] duration-500 ease-in-out" alt="profile pic"/>
     </motion.div>
     </div>

    </main>
    <motion.div
     whileInView={{ opacity: 1,x:0 }}
    initial={{ opacity: 0, y: -20,  scale:0.9}}
    animate={{ opacity: 1, y: 0, scale:1 }}
    transition={{ duration: .5 }}
  ><Pro/></motion.div>
    
    </div>
  )
}
