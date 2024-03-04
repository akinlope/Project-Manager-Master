import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { Button } from "./Button";

const Modal = forwardRef(function Modal({buttonCaption}, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className=" backdrop:bg-stone-900/90 p-5 rounded-md">
      <h1 className=" text-2xl font-bold text-stone-700 my-4">Oops!, An error occured</h1>
      <p className=" text-stone-600 mb-4">Make sure all fields are filled</p>
      <form method="dialog" className=" mt-4 text-right">
        {/* <button className=" font-semibold text-sm text-stone-50 bg-stone-600 px-4 py-1 rounded hover:text-stone-100 hover:bg-stone-800">{buttonCaption}</button> */}
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
