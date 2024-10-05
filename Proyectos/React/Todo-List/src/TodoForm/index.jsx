import React, {useContext, useState} from 'react'
import { TodoContex } from '../TodoContext'
import './TodoForm.css'

const TodoForm = () => {

  const { 
      addTodo,
      setOpenModal,
    } = useContext(TodoContex)

    const [newTodoValue, setNewTodoValue] = useState();

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel = () => {        
        setOpenModal(false)
    }
    
    /* Captamos el valor del evento */
    const onChange = (event) => {        
       setNewTodoValue(event.target.value)
    }

  return (
    <form onSubmit={onSubmit}>
        <label>Agrega un nuevo TODO</label>

        <textarea placeholder='Escribre tu nueva tarea'
          value={newTodoValue}
          onChange={onChange}
        > 
        </textarea>

        <div className='TodoForm-buttonContainer'>
            <button type='button'
              className='TodoForm-button TodoForm-button--cancel'
              onClick={onCancel}
            >
                Cancelar
            </button>
            <button type='button'
              className='TodoForm-button TodoForm-button--add'
              onClick={onSubmit}  
            >
                Añadir
            </button>
        </div>
      
    </form>
  )
}

export default TodoForm
