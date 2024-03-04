import React, { useRef, useState } from "react";
import Modal from "../Modal";

export const NewTask = ({ addTasks }) => {
    const dialog = useRef();
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if (taskText.trim() === "") return dialog.current.open();

    addTasks(taskText);
    setTaskText("");
  };
  return (
    <>
    <Modal ref={dialog} buttonCaption={"Close"}/>
      <div className=" flex items-center gap-4">
        <input
          value={taskText}
          onChange={(e) => {
            setTaskText(e.target.value);
          }}
          type="text"
          className=" w-64 p-1 rounded-sm bg-stone-300"
        />
        <button
          onClick={handleAddTask}
          className=" px-2 py-1 text-stone-700 font-semibold hover:text-stone-950"
        >
          Add Task
        </button>
      </div>
    </>
  );
};
