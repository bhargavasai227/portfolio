import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { MdFileDownload } from "react-icons/md";
import Link from "next/link";
function Contact() {
  return (
    <div className="flex justify-evenly mx-10 p-5 gap-3 items-center">
        <div className="flex gap-1 font-thin items-center"><FaLinkedin/><Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/bhargavasaidasari/">Linkedin</Link></div>
        <div className="flex gap-1 font-thin items-center"><FaGithub/>  <Link target="_blank" rel="noopener noreferrer" href="https://github.com/bhargavasai227/">GitHub</Link></div>
        <div className="flex gap-1 font-thin items-center"><BiLogoGmail/>  <a target="_blank" rel="noopener noreferrer" href="mailto:bhargavdasari227@gmail.com">Gmail</a></div>
        <div className="flex gap-1 font-thin items-center"><MdFileDownload/><Link href="https://www.dropbox.com/scl/fi/mb9uakdba7otu0ya6eaho/BhargavDasariResume.pdf?rlkey=hdzo19lvlnx1uuxuoc4b0t10d&dl=1">Resume</Link></div>
    </div>
  )
}

export default Contact
