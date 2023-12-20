import React from 'react'

const Button = ({name}) => {
  return (
    <>
      <button className={`px-5 py-2 m-2 rounded-lg hover:bg-gray-400 font-bold ${name=="All"?"bg-gray-400":"bg-gray-200"}`}>{name}</button>
    </>
  )
}

export default Button
