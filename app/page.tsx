"use client"
import { motion } from "framer-motion"
import Image from 'next/image'
import profile from "../public/profile.jpg"
import Pro from './components/Pro'
import About from "./components/About"
import Contact from "./components/Contact"
import Skill from "./components/Skills"
import Edu from "./components/Edu"
export default function Home() {
  return (
  <div>
    
    <main className="flex min-h-[70vh] items-center justify-center ">
      <div className='px-24'>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }}
      >
    <p className=' inline px-1 text-4xl'>Hi there, my name is <u>Bhargav</u>. </p>

    <Image priority src={profile} className=' inline rounded-full sm:w-[10%] hover:w-[20%] w-[40vw] p-2 duration-500 ease-in-out ' alt="profile pic"/>
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
    whileInView={{y:[-15,0],opacity:[0,1]}}
    transition={{duration:2}}
    ><About/></motion.div>
    <motion.div
      whileInView={{y:[-19,0],opacity:[0,1]}}
      transition={{duration:2}}
  ><Skill/></motion.div>
      <motion.div
      whileInView={{y:[-19,0],opacity:[0,1]}}
      transition={{duration:2}}
  ><Pro/></motion.div>
  <motion.div
      whileInView={{y:[-10,0],opacity:[0,1]}}
      transition={{duration:2}}
  ><Edu/></motion.div>
  
  <motion.div
      whileInView={{y:[19,0],opacity:[0,1]}}
      transition={{duration:3.5}}
  ><Contact/></motion.div>

    
    </div>
  )
}
