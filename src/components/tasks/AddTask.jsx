import React, { useRef, useState } from "react";
import Modal from "../Modal";

export const AddTask = ({ onAddTask }) => {
  const dialog = useRef();
  const [error, setError] = useState(false);
  const [text, setText] = useState("");

  const handleAddTask = () => {

    if(text.trim() === "") return setError(prevState => !prevState)
    onAddTask(text);
    setText("");
  };
  return (
    <>
    {
      error && <Modal ref={dialog} setError={setError}  />
    }
      <div className=" flex  justify-between">
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
          className=" bg-sky-100 px-2  py-1 w-4/5 rounded-sm border-sky-300 border-b-2 focus:border-sky-500 focus:outline-none"
        />
        <button
          onClick={handleAddTask}
          className=" px-1 bg-sky-500 text-sky-50 hover:bg-sky-700 hover:text-sky-200 rounded-sm"
        >
          Add Task
        </button>
      </div>
    </>
  );
};
