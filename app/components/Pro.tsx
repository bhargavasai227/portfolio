"use client"
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
    <div className="flex flex-col  items-center gap-6 m-2">
      <h1 className="px-7 text-2xl font-san shadow-lg bg-slate-100 bg-opacity-20 backdrop-blur-lg font-semibold ">Projects</h1>
      <div className="flex justify-evenly items-center p-3 flex-col md:flex-row ">
        {projects.map((project, index) => (
          <Card key={index} project={project} />
        ))}

      </div>
      <Link href="/pro"> <u className="px-7 text-2xl font-thin text-center ">More</u></Link>
    </div>
  );
}

export default Pro;
