import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { AddTask } from "./AddTask";

export const Task = ({ tasks, onAddTask, onDeleteTask }) => {
  const [completedTasks, setCompletedTasks] = useState({});

  const handleCompletedTask = (id) => {
    const updatedCompletedTasks = { ...completedTasks };
    updatedCompletedTasks[id] = !updatedCompletedTasks[id];
    setCompletedTasks(updatedCompletedTasks);
  };

  return (
    <div>
      <AddTask onAddTask={onAddTask} />
      {tasks.map((item) => (
        <ul
          className="my-4 text-stone-900 font-semibold flex justify-between mx-10 bg-sky-100 p-2 rounded"
          key={item.id}
        >
          <span className={`${completedTasks[item.id] ? " line-through text-gray-300" : ""}`}>
            {item.text}
          </span>
          <div className="">
            <button
              onClick={() => { handleCompletedTask(item.id) }}
              className={`mr-2 hover:text-green-500 ${completedTasks[item.id] ? " text-green-500" : ""} `}
            >
              <IoMdCheckmarkCircle />
            </button>
            <button
              onClick={() => { onDeleteTask(item.id) }}
              className="hover:text-red-500 ml-2"
            >
              <FaRegTrashAlt />
            </button>
          </div>
        </ul>
      ))}
    </div>
  );
};


