import { useEffect, useState } from 'react'
import Alert from './components/Alert'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import SideBar from './components/SideBar'
import {v4 as uuidv4} from 'uuid'
import { LocalizationProvider, TimeField } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {

  const initialTasks = localStorage.getItem('tasks')?
  JSON.parse(localStorage.getItem('tasks')):[]

  const [tasks,setTasks] = useState(initialTasks)

  const [title, setTitle] = useState('')

  const [desc, setDescription] = useState('')

  const [edit, setEdit] = useState(false)

  const [id, setId] = useState(0)

  const [alert, setAlert] = useState({show:false})

  const [dueDate, setDueDate] = useState([])

  const [dueTime, setDueTime] = useState([])


  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
  })
  
  const handleTitle = (e)=>{
    setTitle(e.target.value)
  }

  const handleDesc = (e)=>{
    setDescription(e.target.value)
  }

  const handleSubmit = (e)=> {
    e.preventDefault()
    if(title){
      if(edit){
        let tempTask = tasks.map((item)=>{
          let dDate = {ddy:dueDate.$D, dm: dueDate.$M+1, dyr: dueDate.$y}
          let dTime = {dhr: dueTime.$H, dmin: dueTime.$m}
          return item.id === id? {...id,title,desc, dDate, dTime}: item
        })
        setTasks(tempTask)
        setEdit(false)
        handleAlert({type:'good',text:'edited successfully'})
      }
      else{
        let dDate = {ddy:dueDate.$D, dm: dueDate.$M+1, dyr: dueDate.$y}
        let dTime = {dhr: dueTime.$H, dmin: dueTime.$m}
        let newTask = {id:uuidv4(),title,desc,
          dDate,dTime}
        setTasks([...tasks,newTask])
        handleAlert({type:'good',text:'task added successfully'})
      }
      setTitle('')
      setDescription('')
      setDueDate([])
      setDueTime([])
    } 
    else{
      handleAlert({type:'bad',text:'title can not be empty'})
    }
  }

  const handleEdit = (id)=> {
    let tempTask = tasks.find(item => item.id == id)
    if(tempTask){
      let {title,desc, dDate, dTime} = tempTask
      setTitle(title)
      setDescription(desc)
      setId(id)
      setDueDate(dDate)
      setDueTime(dTime)
      setEdit(true)
    }
 }

 const handleDone = (id)=> {
  setTasks((current)=>current.filter((item)=>item.id != id))
  handleAlert({type:'good',text:'congra'})
 }

 const handleAlert = ({type,text})=>{
  setAlert({show:true,type,text})
  setTimeout(()=>{
    setAlert({show:false})
  },2000)
 }

 const handleClear = ()=>{
  setTasks([])
 }


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    {alert.show && <Alert type={alert.type} text={alert.text} />}
    <div className=' p-10 flex w-auto'>
      <div className=' flex-1'>
      <SideBar/>
      </div>
      <div className=" flex-1 rounded w-4/12 p-10 drop-shadow-2xl">
      <h1 className=' text-3xl font-bold'>add task</h1>
      <TaskForm title={title} desc={desc} handleTitle={handleTitle} handleDesc={handleDesc} handleSubmit={handleSubmit} edit={edit}  setDueDate={setDueDate} setDueTime={setDueTime}  dueDate={dueDate} dueTime={dueTime}/>
      </div>
      <TaskList  tasks={tasks} handleEdit={handleEdit} handleDone={handleDone} handleClear={handleClear}/>
    </div>
    </LocalizationProvider>
  )
}

export default App