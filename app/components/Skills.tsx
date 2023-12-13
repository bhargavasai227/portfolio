import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { MdOutlineHtml } from "react-icons/md";
import { MdCss } from "react-icons/md";
export default function Skill(){

    return(
        <div className="flex flex-col  items-center gap-6 p-4 m-4">
        <h1 className="px-7 w-fit text-2xl font-san shadow-lg bg-slate-100 bg-opacity-20 backdrop-blur-lg font-semibold text-center">Skills</h1>
       
        <div className="flex md:flex-row flex-col justify-evenly mx-4 w-full items-center gap-4 p-7">
        <IoLogoJavascript size="3em" color="yellow" />
        <SiTailwindcss size="3em" color="skyblue"/>
        <FaReact size="3.5em" color="lightblue"/>
        <MdCss size="3em" color="purple" />
        <MdOutlineHtml size="3em" color="orange"/>
        </div>
        <p>More:MongoDB Express JS Python Java C++</p>
        </div>
    )
}