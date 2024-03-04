import React from "react";

export const Button = ({ children, ...props }) => {
  return (
    <button className=" px-4 py-2 text-xs md:text-base bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 rounded-md" {...props}>
      {children}
    </button>
  );
};
