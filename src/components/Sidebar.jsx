import React from 'react'
import { useSelector } from 'react-redux'
import store from '../store/store';

const Sidebar = () => {

    const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);

    if(isMenuOpen===false)return null;

  return (
    <>
      <div className='w-48 mr-2 shadow-lg h-[87.5vh]'>
        <ul className='p-3'>
            <li className='mx-1 my-2 px-3 py-1 font-bold bg-gray-400 rounded-md cursor-pointer'>Home</li>
            <li className='mx-1 my-2 px-3 py-1 rounded-md font-bold cursor-pointer hover:bg-gray-400'>Shorts</li>
            <li className='mx-1 my-2 px-3 py-1 rounded-md font-bold cursor-pointer hover:bg-gray-400'>Subscription</li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
