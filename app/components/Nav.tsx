"use client"
import { motion } from "framer-motion"
import Link from "next/link"
export default function Nav(){
    return(
        <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .25 }}
      >
     <nav className="flex justify-between flex-row p-7 gap-2 font-extralight w-full">

    <div>
    <Link target="_blank" rel="noopener noreferrer" href="/"><h1>Bhargav</h1></Link>
    </div>

    <div className="flex justify-between flex-row gap-1 px-2 ">
    <a  href="/"><button className="  px-4 rounded-full duration-200 ease-in hover:text-black hover:bg-slate-300 border-white border">Home</button></a>
    <a  href="/pro"><button className=" px-4 rounded-full duration-200 ease-in hover:text-black hover:bg-slate-300 border-white border">Projects</button></a>
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/bhargavasai227"><button className=" px-4 rounded-full duration-200 ease-in hover:text-black hover:bg-slate-300 border-white border">Github</button></a>
    </div>
    </nav>
    </motion.div>
    )
}