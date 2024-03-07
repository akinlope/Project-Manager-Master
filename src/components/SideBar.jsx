import React from "react";
import { Button } from "./Button";

export const SideBar = ({openToAddProject, projects, singleProject}) => {

  
  return (
    <div className=" w-1/5 mt-20 bg-sky-800 rounded-tr-xl text-center">
      <h1 className=" mt-10 font-bold text-white text-3xl mb-10">
        Your Projects
      </h1>
      <Button onClick={openToAddProject}>+ Add Project</Button>
      {
        projects.length > 0 && (
          <ul className=" mt-10" >
            {projects.map(item => (
              <li onClick={()=> {singleProject(item.id)}} className=" my-3 p-1 bg-sky-500 rounded mx-4 text-sky-100 font-base text-start hover:bg-sky-600 hover:text-sky-200 cursor-pointer" key={item.id}>
                <span className=" pl-4 uppercase">{item.title}</span>
              </li>
            ))}
          </ul>
        )
      }
    </div>
  );
};
