import Link from "next/link"
export default function Nav(){
    return(
        <nav className="flex justify-between flex-row p-7 text-2xl">
            <div>
<Link href="/"><h1>Bhargav</h1></Link>
            </div>
    <div className="flex justify-between flex-row gap-4  ">
    <a href="/"><button className="px-4 rounded-full duration-200 ease-in hover:text-black hover:bg-slate-300 border-white border">Home</button></a>
    <a href="/#pro"><button className="px-4 rounded-full duration-200 ease-in hover:text-black hover:bg-slate-300 border-white border">Projects</button></a>
    <a href="https://github.com/bhargavasai227"><button className="px-4 rounded-full duration-200 ease-in hover:text-black hover:bg-slate-300 border-white border">Github</button></a>
            </div>
        </nav>
    )
}