import './CreateTodoButton.css'
import { TodoContex } from '../TodoContext'
import {  useContext } from 'react'


function CreateTodoButton(){
  const { openModal, setOpenModal } = useContext(TodoContex); 
  return (
    <button className='CreateTodoButton'
    onClick={
      (event) => {             
        //console.log(event.target)
        setOpenModal(!openModal); 
      }
    }
    >
     + 
    </button>
  )
}

export default CreateTodoButton
