// Pro.tsx
import Link from "next/link";
import React from 'react';
import data from "../../public/data";
import Card from "./Card";

interface Project {
  name: string;
  link: string;
  git_link: string;
  description: string;
  img: string;
}

function Pro() {
  const projects: Project[] = data;

  return (
    <div className="flex flex-col  items-center gap-6">
      <h1 className="px-7 text-2xl font-san shadow-lg bg-slate-100 bg-opacity-20 backdrop-blur-lg font-semibold ">Projects</h1>
      <div className="flex gap-4 justify-evenly items-center p-3">
        {projects.map((project, index) => (
          <Card key={index} project={project} />
        ))}

      </div>
      <Link href="/pro"> <u className="px-7 text-2xl font-thin text-center ">More</u></Link>
    </div>
  );
}

export default Pro;
