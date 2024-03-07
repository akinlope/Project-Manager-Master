import React from 'react'

export const Button = ({onClick, children, prop}) => {
  return (
    <button onClick={onClick} className=' text-xl font-semibold rounded-md px-4 py-2 bg-sky-600 text-sky-200 hover:bg-sky-400 hover:text-sky-50' {...prop}>
        {children}
    </button>
  )
}
