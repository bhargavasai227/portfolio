import data from "../../public/data";
import Card from "../components/Card";

interface Project {
  name: string;
  link: string;
  git_link: string;
  description: string;
  img: string;
}
export default function Home(){
    const projects: Project[] = data;
    return(
        <div className="flex gap-4 justify-evenly items-center p-3 m-4">
        {projects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
        <a href="https://github.com/bhargavasai227?tab=repositories" className="inline-block">gitHub</a>
      </div>
    )
}