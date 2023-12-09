
interface Project {
  name: string;
  link: string;
  git_link: string;
  description: string;
  img: string;
}

interface CardProps {
  project: Project;
}

function Card({ project }: CardProps) {
  return (
    <div className="flex flex-col justify-center items-center rounded-xl hover:scale-110 hover:bg-gray-300 p-3 opacity-95 hover:opacity-100 duration-500 ease-in-out">
      <img className="max-w-[60%]  rounded " src={project.img} alt="img" />
      <span>{project.name}</span>
      <span>{project.description}</span>
      <div className="gap-4 flex px-5 p-2">
      <a className="border border-white hover:bg-black bg-orange-300 rounded-xl min-w-[5vw] text-center" href={project.link}><button>Visit</button></a>
      <a className="bg-blue-600 rounded-xl min-w-[5vw] text-center hover:bg-black  ease-in-out duration-150" href={project.git_link}><button >Git</button></a>
      </div>
    </div>
  );
}

export default Card;
