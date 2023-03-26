import React from 'react'
import {MdDone, MdEdit} from 'react-icons/md'

const TaskItem = ({item, handleEdit, handleDone}) => {
    const {id,title,desc, dDate, dTime} = item
    const {ddy, dm, dyr} = dDate
    const {dhr, dmin} = dTime
  return (
        <li className=' p-3 my-1 flex bg-slate-200  rounded hover:bg-green-400 duration-100'>
            <div className=' flex flex-col flex-1 '>
                <div className="">
                <span className='  border-gray-500 bg-green-400 rounded-full p-1 px-3  font-bold'>{title}</span>
                </div>
                <div className="mt-3 max-h-24 overflow-y-scroll ">
                <span className=' overflow-hidden'>{desc}</span>
                </div>
            </div>
            <div className=' flex items-center flex-col'>
            <div className=''>
                {ddy && <span className=' text-xs'>{ddy}/</span> }
                {dm && <span className=' ml-1 text-xs'>{dm}/</span>}
                {dyr && <span className=' ml-1 text-xs'>{dyr}/</span>}
                {dhr && <span className=' ml-2 text-xs'>{dhr}:</span>}
                {dmin && <span className='text-xs'>{dmin}</span>}
            </div>
                <div className=' ml-7 flex'>
                <button className=' p-1 text-xl rounded-3xl bg-green-400 flex items-center' onClick={()=>handleDone(id)}><MdDone/></button>
                <button className=' p-1 text-xl rounded-3xl bg-red-300 flex items-center ml-1' onClick={()=>handleEdit(id)}><MdEdit/></button>
                </div>
            </div>
        </li>
  )
}

export default TaskItem