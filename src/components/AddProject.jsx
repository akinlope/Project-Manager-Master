import React, { useRef, useState } from "react";
import Inputs from "./Inputs";
import Modal from "./Modal";

export const AddProject = ({ addProject, closeAddProject }) => {

  const [error, setError] = useState(false)
  const title = useRef();
  const description = useRef();
  const date = useRef();
  const dialogRef = useRef();

  const handleSaveDetails = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDate.trim() === ""
    ) return dialogRef.current.open()
    // setError(prevState => !prevState)

    const myData = {
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    };

    addProject(myData);
  };
  return (
    <>
    {/* { */}
      {/* error &&  */}
      <Modal setError={setError} ref={dialogRef} buttonText={"Close"} />
    {/* } */}
      <div className=" mt-20 w-[35rem]">
        <div className=" flex justify-end gap-4">
          <button onClick={closeAddProject} className=" hover:text-red-500">
            Cancle
          </button>
          <button
            onClick={handleSaveDetails}
            className=" bg-sky-500 font-semibold text-sky-50 px-4 py-1 rounded-sm hover:bg-sky-700 hover:text-sky-200"
          >
            Save
          </button>
        </div>

        <Inputs ref={title} label={"title"} />
        <Inputs ref={description} label={"description"} textarea />
        <Inputs ref={date} label={"Due Date"} type="DATE" />
      </div>
    </>
  );
};
