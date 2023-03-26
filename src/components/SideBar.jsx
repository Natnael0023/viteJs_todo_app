import React from 'react'

const SideBar = () => {
  return (
    <div className=' w-96 h-5/6 p-10 rounded fixed bg-gray-300'>
        <div className=" text-3xl">
          tasker
        </div>
        <div className=" mt-14">
          <div>
            <span className=' font-bold'>Lists</span>
          </div>
          <ul className=' mt-3'>
            <li className=' ml-5 flex items-center'>
              <div className=' w-3 h-3 rounded bg-green-600'></div>
              <span className=' ml-2'>Work</span>
            </li>
            <li className=' mt-2 ml-5 flex items-center'>
              <div className=' w-3 h-3 rounded bg-red-400'></div>
              <span className=' ml-2'>Class</span>
            </li>
            <li className=' mt-2 ml-5 flex items-center'>
              <div className=' w-3 h-3 rounded bg-amber-200'></div>
              <span className=' ml-2'>Personal</span>
            </li>
          </ul>
        </div>
        <div className="">
          signout
        </div>
    </div>
  )
}

export default SideBar