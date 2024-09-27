import React from 'react'

const ActionButton = ({children, onclick}) => {
  return (
    <button 
    onClick={onclick}
    className="block bg-primary hover:bg-orange-600 hover:opacity-85 text-white group-hover:text-white  text-sm font-semibold px-4 py-3 rounded-lg duration-100 transition-all text-center">
      {children}
    </button>
  )
}

export default ActionButton