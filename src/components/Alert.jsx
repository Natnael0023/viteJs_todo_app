import React from 'react'

const Alert = ({type,text}) => {
  return (
    <div className=' flex justify-center relative z-50'>
      {type=='good'? <p className=' fixed opacity-90 p-4 rounded-full bg-green-500 text-white text-2xl'>{text}</p>:
      <p className=' fixed opacity-95 p-4 rounded-full bg-red-500 text-white text-2xl' >{text}</p>}
    </div>
  )
}

export default Alert