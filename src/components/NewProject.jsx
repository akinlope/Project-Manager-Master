import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export const NewProject = ({ onAdd, onCancle }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const dialog = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // validate
    if(enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredDueDate.trim() === "") return dialog.current.open()
    

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    })
  };
  return (
    <>
    <Modal ref={dialog} buttonCaption={"Close"}/>
    <div className=" w-[35rem] mt-16">
      <menu className=" flex justify-end gap-4 items-center">
        <li className=" text-stone-900 hover:text-stone-950">
          <button onClick={onCancle}>Cancle</button>
        </li>
        <li className=" px-6 py-2 rounded-md text-stone-50 bg-stone-800 hover:bg-stone-950 hover:text-stone-100">
          <button onClick={handleSave}>Save</button>
        </li>
      </menu>
      <div>
        <Input type="Text" label={"Title"} ref={title} />
        <Input label={"Description"} ref={description} textarea />
        <Input type="Date" label={"Due Date"} ref={dueDate} />
      </div>
    </div>
    </>
  );
};
