import React from 'react'
import {MdSend, MdEdit} from 'react-icons/md'
import {DatePicker,TimePicker, LocalizationProvider } from '@mui/x-date-pickers'


const TaskForm = ({title,desc,handleTitle, handleDesc, handleSubmit,edit, handleDatePicker, handleTimePicker, dueDate, dueTime, setDueDate, setDueTime}) => {
  return (
    <div className=' my-10'>
       <div>
        <p className=''>title</p>
       <input className=' w-10/12 p-2  bg-transparent border-b border-red-600 outline-none' onChange={handleTitle} type="text" value={title}/> 
       </div>
       <div>
       <p className=' mt-4'>description</p>
       <input className='  w-10/12 p-2  bg-transparent border-b border-red-600 outline-none' onChange={handleDesc} type="text" value={desc} /> 
       </div>
       <div className=' mt-10'>
       <span>Set Time</span>
        <div className=' mt-2 flex flex-col items-start'>
        <DatePicker value={dueDate} onChange={(newValue) => setDueDate(newValue)}/>
        </div>
        <div className=' mt-5'>
          <TimePicker value={dueTime} onChange={(newValue)=>setDueTime(newValue)} />
        </div>
       </div>
       <div>
        <button className=' hover:bg-cyan-600 my-5 flex items-center bg-cyan-500 p-4 rounded text-white' type='submit' onClick={handleSubmit}>
          {edit?'Edit':'Add'  }  
          {edit?<MdEdit/>: <MdSend/>}
        </button>
       </div>
    </div>
  )
}

export default TaskForm