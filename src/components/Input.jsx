import React, { forwardRef, useRef } from "react";

const Input = forwardRef(function Input ({label, textarea, ...prop}, ref) {

    const classes = " w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 focus:outline-none focus:border-stone-600"
  return (
    <p className=" flex flex-col my-4 gap-1">
      <label className=" uppercase text-sm text-stone-500 font-bold">{label}</label>
      {textarea ? (<textarea ref={ref} className={classes} {...prop}/>) : (<input ref={ref} className={classes} {...prop}/>)}
    </p>
  );
});

export default Input;
