import { useContext, useEffect } from 'react';
import './TodoCounter.css';
import { TodoContex } from '../TodoContext';

function TodoCounter(){  
  const { 
    completedTodos,
    totalTodos,
   } = useContext(TodoContex)

  useEffect(() => {   
  }, []);  
    return(
      <h1 className={`TodoCounter ${completedTodos === totalTodos && 'bold-text'}`}>
        {completedTodos === totalTodos ? (
            "Haz completado todas tus tareas"
        ) : (
        <>
          Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
        </>
      )}
      </h1>
    )
}

export default TodoCounter