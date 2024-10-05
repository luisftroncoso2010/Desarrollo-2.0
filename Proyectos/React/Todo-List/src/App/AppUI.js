import { useContext } from 'react'
import TodoCounter  from '../TodoCounter'
import TodoItem  from '../TodoItem'
import TodoSearch  from '../TodoSearch'
import CreateTodoButton from '../CreateTodoButton'
import TodoList  from '../TodoList'
import TodosLoading from '../TodosLoading'
import TodosError from '../TodosError'
import Modal from '../Modal'
import EmptyTodos from '../EmptyTodos'
import TodoForm from '../TodoForm'
import { TodoContex } from '../TodoContext'

function AppUI(){    
  const { 
    loading,
    error,              
    searctedTodos,
    completeTodo,
    deleteTodo,
    openModal,   
   } = useContext(TodoContex);
    return (
        <>
          <TodoCounter />      
          <TodoSearch />           
            <TodoList >
              {loading && 
                <>
                  <TodosLoading />               
                  <TodosLoading />
                  <TodosLoading />  
                </> 
              }
              { error && <TodosError /> }
              {(!loading && searctedTodos.length === 0) 
                && <EmptyTodos />}                         
              {searctedTodos.map(todo => (
                <TodoItem  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete ={ () => completeTodo(todo.text)}
                  onDelete ={ () => deleteTodo(todo.text)               
              }
                />
              ))}
              </TodoList>               
        <CreateTodoButton />

        { openModal &&
         <Modal>
            <TodoForm/>
         </Modal>
        }
        </>
      );
}

export default AppUI
