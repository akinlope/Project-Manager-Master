import React, { useState } from "react";
import { NewTask } from "./NewTask";

export const Task = ({ addTasks, tasks, onDeleteTask }) => {
//  console.log("tasks in Task.jsx component",tasks)

  return (
    <section>
      <h1 className=" text-2xl font-bold text-stone-700 mb-4">TASK</h1>
      <NewTask addTasks={addTasks} />
      {tasks.length === 0 ? (
        <p className=" font-bold text-stone-600 my-4">
          No tasks has been added to this project.
        </p>
      ) : (
        <ul className=" p-4 mt-8 rounded-md">
          {tasks.map((task) => (
            <li key={task.id} className=" flex justify-between bg-stone-200 my-2 p-2 rounded-md"> {task.id} {" "}{task.projectId}
              <span>{task.text}</span>
              <button onClick={()=> {onDeleteTask(task.id)}} className=" text-stone-700 hover:text-red-500 hover:font-semibold">
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
