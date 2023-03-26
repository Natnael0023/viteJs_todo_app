import React from 'react'
import TaskItem from './TaskItem'
import {MdDelete} from 'react-icons/md'

const TaskList = ({tasks, handleEdit, handleDone, handleClear}) => {
   return (
    <div className='max-h-full ml-10 p-10 rounded flex-grow bg-red-400 bg-gradient-to-b  '>
      <span className=" text-3xl">tasks</span>
     <ul className=' mt-4 flex flex-col'>
        {tasks.map((item)=>{
          return  <TaskItem key={tasks.id} item={item} handleEdit={handleEdit} handleDone={handleDone}/>
        })}
        {tasks.length? <button className=' text-xl hover:bg-red-500 mt-5 p-4 rounded-xl flex items-center justify-center bg-orange-300' onClick={handleClear}>Clear <MdDelete/></button>:
        <p>Currently, you've no tasks chill! 😊</p>}
     </ul>
     </div>
   )
 }

 export default TaskList