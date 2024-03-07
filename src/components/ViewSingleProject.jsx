import React from "react";
import { Task } from "./tasks/Task";

export const ViewSingleProject = ({tasks, onAddTask, singleProject, onDeleteProject, onDeleteTask}) => {
//  console.log(tasks)
const projectTask = tasks.filter((task)=> task.projectId === singleProject.id)
// console.log(projectTask)
    const formattedDate = new Date(singleProject.date).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    })
  return (
    <div className=" ml-5 mt-20">
      <div className=" flex justify-between w-[35rem] items-center">
        <span className="  text-3xl uppercase text-sky-500  font-bold ">
          {singleProject.title}
        </span>
        <span onClick={()=> {onDeleteProject(singleProject.id)}} className=" text-stone-500 hover:text-red-500 font-semibold cursor-pointer">Delete</span>
      </div>
      <div className=" text-stone-500 my-5 font-medium">{formattedDate}</div>
      <div className=" text-sky-950 font-medium whitespace-pre-wrap">{singleProject.description}</div>
      <div className=" border-b-2 border-sky-800 mt-5 mb-10"></div>
      <h1 className=" font-bold text-stone-500">ADD TASK</h1>
      <Task tasks={projectTask} onAddTask={onAddTask} onDeleteTask={onDeleteTask} />
    </div>
  );
};
